import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { LOCALHOST_API_URL } from '../../../Constants';

class JobListingForm extends React.Component {
    state = {
        id: '',
        title: '',
        info: '',
        postDate: '',
        jobCategory: '',
        company: ''
    }
    componentDidMount() {
        if (this.props.getjl) {
            const { id, title, info, jobCategory, company } = this.props.getjl
            this.setState({  id, title, info, jobCategory, company });
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }



  

    submitEdit = e =>{
        e.preventDefault()
        console.log("edit")
        Axios.put(`${LOCALHOST_API_URL}/jobListings/update/${this.state.id}`, this.state)
        .then(res => {
            console.log(res)            
        })
        .then(this.setState({
            id: '',
            title: '',
            info: '',
            jobCategory: '',
            company: ''
        }))
        .then(this.props.getCompanies)
        .catch(error => {
            console.log(error)
        })
    }





    render() {
        return <Form onSubmit={this.submitEdit }>
            <FormGroup>
                <Label for="name">Title:</Label>
                <Input type="text" name="title" onChange={this.onChange} value={this.state.title === '' ? '' : this.state.title} />
            </FormGroup>
            <FormGroup>
                <Label for="info">info:</Label>
                <Input type="text" name="info" onChange={this.onChange} value={this.state.info === null ? '' : this.state.info} />
            </FormGroup>
            <FormGroup>
                <Label for="jobCategory">jobCategory:</Label>
                <Input type="text" name="jobCategory" onChange={this.onChange} value={this.state.jobCategory === null ? '' : this.state.jobCategory} />
            </FormGroup>
            <FormGroup>
                <Label for="company">company:</Label>
                <Input type="text" name="company" onChange={this.onChange} value={this.state.company === null ? '' : this.state.company} />
            </FormGroup>
            <Button type="submit" onClick={this.props.toggle}>Submit</Button>
        </Form>;
    }
}
export default JobListingForm;




// <Card>
//                 <CardHeader>
//                   <CardTitle tag="h4">Stacked Form</CardTitle>
//                 </CardHeader>
//                 <CardBody>
//                   <Form action="#" method="#">
//                     <label>Email address</label>
//                     <FormGroup>
//                       <Input type="email" />
//                     </FormGroup>
//                     <label>Password</label>
//                     <FormGroup>
//                       <Input type="password" />
//                     </FormGroup>
//                     <FormGroup check className="mt-3">
//                       <Label check>
//                         <Input type="checkbox" />
//                         <span className="form-check-sign" />
//                         Subscribe to newsletter
//                       </Label>
//                     </FormGroup>
//                   </Form>
//                 </CardBody>
//                 <CardFooter>
//                   <Button className="btn-fill" color="primary" type="submit">
//                     Submit
//                   </Button>
//                 </CardFooter>
//               </Card>
            