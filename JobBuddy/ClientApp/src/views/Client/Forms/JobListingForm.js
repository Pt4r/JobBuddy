import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { LOCALHOST_API_URL } from '../../../Constants';

class JobListingForm extends React.Component {
    state = {
        id: 0,
        title: '',
        info: '',
        postDate: '',
        hrUser: '',
        jobCategory: '',
        company: '',
        client: '',
    }
    componentDidMount() {
        if (this.props.user) {
            const { id, title, info, postDate, hrUser, jobCategory, company, client } = this.props.jl
            this.setState({  id, title, info, postDate, hrUser, jobCategory, company, client });
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = e => {
        e.preventDefault();
        fetch(`${LOCALHOST_API_URL}/joblistings/create`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
            })
        })
            .then(res => res.json())
            .then(user => {
                this.props.addUserToState(user);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }
    submitEdit = e => {
        e.preventDefault();
        fetch(`${LOCALHOST_API_URL}/joblistings/update/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.info,
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateUserIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    }
    render() {
        return <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="name">Title:</Label>
                <Input type="text" name="title" onChange={this.onChange} value={this.state.title === '' ? '' : this.state.title} />
            </FormGroup>
            <FormGroup>
                <Label for="info">info:</Label>
                <Input type="text" name="info" onChange={this.onChange} value={this.state.info === null ? '' : this.state.info} />
            </FormGroup>
            <FormGroup>
                <Label for="postDate">postDate:</Label>
                <Input type="text" name="postDate" onChange={this.onChange} value={this.state.postDate === null ? '' : this.state.postDate} />
            </FormGroup>
            <FormGroup>
                <Label for="hrUser">hrUser:</Label>
                <Input type="text" name="hrUser" onChange={this.onChange} value={this.state.hrUser === null ? '' : this.state.hrUser} />
            </FormGroup>
            <FormGroup>
                <Label for="jobCategory">jobCategory:</Label>
                <Input type="text" name="jobCategory" onChange={this.onChange} value={this.state.jobCategory === null ? '' : this.state.jobCategory} />
            </FormGroup>
            <FormGroup>
                <Label for="company">company:</Label>
                <Input type="text" name="company" onChange={this.onChange} value={this.state.company === null ? '' : this.state.company} />
            </FormGroup>
            <FormGroup>
                <Label for="client">client:</Label>
                <Input type="text" name="client" onChange={this.onChange} value={this.state.client === null ? '' : this.state.client} />
            </FormGroup>
            <Button type="submit">Send</Button>
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
            