import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Route, Redirect } from 'react-router';
import {withRouter} from 'react-router';

class GLoginBtn extends Component {

    constructor(props){
        super(props);
        this.state = {
            clientId : '1042050654775-1moave7qaqr8tvtpialrqh7ntgggpd43.apps.googleusercontent.com',
            isLoggedIn : false
        };

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response){
        console.log('before -> '+ response);
        this.props.history.push('/welcome');
        console.log('after -> '+ response);
        this.setState({
            isLoggedIn : true
        });
    }

    render() {

        return (
            <div>
                <GoogleLogin
                    clientId = {this.state.clientId}
                    buttonText="Join in"
                    className='show-modal show-signup-in-modal button btn-blue'
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        )
    }
}

export default withRouter(GLoginBtn);