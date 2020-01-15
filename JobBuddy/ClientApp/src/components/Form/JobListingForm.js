import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { USERS_API_URL } from '../../Constants';

class JobListingForm extends React.Component {
    state = {
        id: 0,
        name: '',
        email: ''
    }
    componentDidMount() {
        if (this.props.user) {
            const { id, name, email } = this.props.user
            this.setState({ id, name, email});
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = e => {
        e.preventDefault();
        fetch(`${USERS_API_URL}`, {
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
        fetch(`${USERS_API_URL}/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
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
                <Label for="name">Name:</Label>
                <Input type="text" name="name" onChange={this.onChange} value={this.state.name === '' ? '' : this.state.name} />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input type="email" name="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
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
            