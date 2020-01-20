import React from 'react'
import { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ApplicationPaths, QueryParameterNames } from './ApiAuthorizationConstants'
import authService from './AuthorizeService'

export default class AuthorizeRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            authenticated: false,
            authorized: true,
            userRoles: []
        };
    }

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.authenticationChanged());
        this.populateAuthenticationState();
        this.getUserRole()
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }

    render() {
        const { ready, authenticated, authorized } = this.state;
        const redirectUrl = `${ApplicationPaths.Login}?${QueryParameterNames.ReturnUrl}=${encodeURI(window.location.href)}`
       

        if (!ready) {
            return <div></div>;
        } else {
            const { render: Render, ...rest } = this.props;
            return <Route {...rest}
                render={(props) => {
                    
                    if (authenticated) {
                        if(authorized){
                            return <Render {...props} />
                        } else {
                            return <Redirect to = "/" />
                        }
                    } else {
                        return <Redirect to={redirectUrl} />
                    }
                }} />
        }
    }

    async getUserRole(){
        try{
            await authService.getUser()
            .then(this.state.userRoles.length = 0)
            .then(user => this.state.userRoles.push(user.role));
        } catch (silentError) {
            // User might not be authenticated, fallback to popup authentication
            console.log("Silent authentication error: ", silentError);
        }       
            
        var result = this.state.userRoles.some((val) => this.props.allowedRoles.indexOf(val) !== -1);

        this.setState({authorized: result});

        return(result)
    }

    async populateAuthenticationState() {
        const authenticated = await authService.isAuthenticated();
        this.setState({ ready: true, authenticated });
    }

    async authenticationChanged() {
        this.setState({ ready: false, authenticated: false });
        await this.populateAuthenticationState();
    }
}
