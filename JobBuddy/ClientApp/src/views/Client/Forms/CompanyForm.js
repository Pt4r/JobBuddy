import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Axios from 'axios';
import { LOCALHOST_API_URL } from '../../../Constants';
import { isConditionalExpression } from 'typescript';

class CompanyForm extends React.Component {
    constructor(props){
        super(props)   
    this.state = {
        id: '',
        title: '',
        address: '',
        phoneNumber: '',
        email: ''
        }
    }
    componentDidMount() {
        if (this.props.comp) {
            const { id, title, address, phoneNumber, email } = this.props.comp
            this.setState({ id,title, address, phoneNumber, email});
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    submitNew = e => {
        e.preventDefault()
        console.log("new")
        const comp = {
        title: this.state.title,
        address: this.state.address,
        phoneNumber : this.state.phoneNumber,
        email: this.state.email
        }
        console.log(comp)
        require('axios-debug-log')
        console.log(comp)
        Axios.post(`https://localhost:5001/api/company/Create`, comp)
        //.then(this.props.getComp)
        .then(res => {            
        console.log(res)})
        .catch(error => {
            console.log(error)
        })
    }



    submitEdit = e =>{
        e.preventDefault()
        console.log("edit")
        Axios.put(`${LOCALHOST_API_URL}/company/update/${this.state.id}`, this.state)
        .then(res => {
            console.log(res)            
        })
        .then(this.setState({
            id: '',
            title: '',
            address: '',
            phoneNumber: '',
            email: ''
        }))
        //.then(this.props.getComp)
        .catch(error => {
            console.log(error)
        })
    }

    onClick() {
        if(this.state.id.length >3){
            console.log("edit")
            this.submitEdit

        }
        else if(!this.state.id || this.state.id.length <3)
        {
            console.log("new")
            this.submitNew
        }
        else(console.log("error"))
    }


//this.state ? this.submitEdit : this.submitNew                    onClick={this.props.toggle}
    render() {
        const comp = this.props.comp
       //const {id, title, address, phoneNumber,  email} = this.props.company.map
        return <Form onSubmit={this.state ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="title" onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />
            </FormGroup>
            <FormGroup>
                <Label for="address">Address:</Label>
                <Input type="text" name="address" onChange={this.onChange} value={this.state.address === null ? '' : this.state.address} />
            </FormGroup>
            <FormGroup>
                <Label for="phoneNumber">Phone Number:</Label>
                <Input type="number" name="phoneNumber" onChange={this.onChange} value={this.state.phoneNumber === null ? '' : this.state.phoneNumber} />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input type="email" name="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
            </FormGroup>
            <Button type="submit" >Submit</Button>
        </Form>;
    }
}
export default CompanyForm;


    // submitNew(event){ 
    //     event.preventDefault();

    //     fetch(`https://localhost:5001/api/companies/Create`, {
    //      method: 'post',
    //      body: {
    //       "phoneNumber": this.refs.phoneNumber          
    //     }.then(res =>{
    //         console.log(res) 
    //     })         
    //     .catch(error => {
    //         console.log(error)
    //     })
    //     });
    //    };


//{this.state.Title === '' ? '' : this.state.Title}
//{this.state.Title === '' ? '' : this.state.Title}
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
            



    // submitEdit = e => {
    //     e.preventDefault();
    //     const url="localhost:3000/api/companies/update";
    //     fetch(url, {
    //         method: 'put',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             id: this.state.id,
    //             name: this.state.title,
    //             address: this.state.address,
    //             phoneNumber: this.state.phoneNumber,
    //             email: this.state.email
    //         })
    //     })
    //         .then(() => {
                
    //             this.props.updateUserIntoState(this.state.id);
    //         })
    //         .catch(err => console.log(err));
    // }



        // submitNew = e => {
    //     e.preventDefault();
    //     const url = "localhost:3000/api/companies/Create";
    //     fetch(url , {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: this.state.title,
    //             address: this.state.address,
    //             phoneNumber: this.state.phoneNumber,
    //             email: this.state.email
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(company => {
    //             this.setState({company : company})
    //         })
    //         .catch(err => console.log(err));
    // }