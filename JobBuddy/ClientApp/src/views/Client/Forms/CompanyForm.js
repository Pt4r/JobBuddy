import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class CompanyForm extends React.Component {
    state = {
        id: 0,
        title: '',
        address: '',
        phoneNumber : '',
        email: ''

    }
    componentDidMount() {
        if (this.props.company) {
            const { id, title, address, phoneNumber, email } = this.props.company
            this.setState({ id,title, address, phoneNumber, email});
        }
    }
    onChange = e => {
        this.setState({ [e.target.title]: e.target.value })
    }
    submitNew = e => {
        e.preventDefault();
        const url = "localhost:3000/api/companies/Create";
        fetch(url , {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.title,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email
            })
        })
            .then(res => res.json())
            .then(company => {
                this.setState({company : company})
            })
            .catch(err => console.log(err));
    }
    submitEdit = e => {
        e.preventDefault();
        const url="localhost:3000/api/companies/update";
        fetch(url, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.title,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email
            })
        })
            .then(() => {
                
                this.props.updateUserIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    }
    render() {
        return <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="name" onChange={this.onChange} value={this.state.name === '' ? '' : this.state.name} />
            </FormGroup>
            <FormGroup>
                <Label for="address">Address:</Label>
                <Input type="text" name="address" onChange={this.onChange} value={this.state.address === null ? '' : this.state.company} />
            </FormGroup>
            <FormGroup>
                <Label for="phoneNumber">Phone Number:</Label>
                <Input type="number" name="phoneNumber" onChange={this.onChange} value={this.state.phoneNumber === null ? '' : this.state.phoneNumber} />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input type="email" name="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
            </FormGroup>
            <Button type="submit">Send</Button>
        </Form>;
    }
}
export default CompanyForm;




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
            