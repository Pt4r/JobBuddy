import React from "react";
import {
  Form,
  /*FormGroup,
  Label,
  Input,
  FormText,*/
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";

import { userService } from "./../../services/index";

import logo from "../../assets/img/logo-1.png";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { FormInputs, Button } from "components";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
firebase.initializeApp({
  apiKey: "AIzaSyACOcRI5ykpuaNHStSAT0f4m8kC2wpSzmA",
  authDomain: "ampf-front.firebaseapp.com"
});

class Login extends React.Component {
  state = {
    isSignedIn: false,
    email: "",
    authentication: {
      user: "",
      token: "",
      loggedIn: false
    },
    general: {
      loading: "",
      error: ""
    }
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
      /*,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID*/
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(
        currentUser,
        credential,
        redirectUrl
      ) {
        const user = currentUser;
        console.log("currentUser: " + user.email + " - " + user.displayName);
        this.setState({ user });
        redirectUrl = `/`;
        return false;
      }
    }
  };

  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user && !!user.email,
        email: user.email ? user.email : ""
      });
    });
  };

  handlerChange = e => {
    let value = e.target.value;
    switch (e.target.name) {
      case "txt_email":
        this.setState({ email: value });
        break;
      case "txt_password":
        this.setState({ password: value });
        break;
      default:
        break;
    }
  };

  handlerSubmit = e => {
    let self = this;
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    //  const { dispatch } = this.props;
    if (email && password) {
      self.props.login(email, password);
    }
  };

  render() {
    const { loggedIn, user, loading, error } = this.props;

    return (
      <div>
        {loggedIn}
        {loading && <div> loading... </div>}
        {error && <div>{error}</div>}
        <br />
        {user ? (
          <Redirect to="/" />
        ) : (
          <div className="content">
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">
                      <img src={logo} alt="AMPF" />
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form method="POST" onSubmit={this.handlerSubmit}>
                      <FormInputs
                        // ncols={["col-12", "col-12", "col-12"]}
                        proprieties={[
                          {
                            label: "Email address",
                            inputProps: {
                              type: "email",
                              name: "txt_email",
                              onChange: this.handlerChange
                            }
                          },
                          {
                            label: "Password",
                            inputProps: {
                              type: "password",
                              name: "txt_password",
                              onChange: this.handlerChange
                            }
                          }
                          /*{
                          label: "Subscribe to newsletter",
                          labelProps: {
                            check: true
                          },
                          inputProps: {
                            type: "checkbox"
                          },
                          formGroupProps: {
                            check: true,
                            className: "mt-3"
                          }
                        }*/
                        ]}
                      />
                      <Button type="submit" color="primary">
                        Submit
                      </Button>
                      <Link to="/remember" className="btn btn-link">
                        Olvide la contraseña
                      </Link>
                      <Link to="/register" className="btn btn-link">
                        Registrar
                      </Link>
                    </Form>

                    <Row>
                      <Col sm="12" md={{ size: 8, offset: 2 }}>
                        {this.state.isSignedIn && this.state.user ? (
                          <div>SignedInd</div>
                        ) : (
                          <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                          />
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md={{ size: 8, offset: 8 }} />
                    </Row>
                  </CardBody>
                  <CardFooter />
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const user = state.authentication.user || state.user;
  const token = state.authentication.token;
  const { loggedIn } = state.authentication || "";
  const { loading, error } = state.general;
  return {
    loggedIn,
    user,
    token,
    loading,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  login(email, password) {
    return dispatch(userService.login(email, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
