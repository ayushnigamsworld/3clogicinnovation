import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Route, Redirect } from 'react-router';
import {withRouter} from 'react-router';
import Cookies from 'universal-cookie';
import UserService from '../../../services/userService';
import { userInfo } from 'os';
const cookies = new Cookies();

class GLoginBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientId : '1042050654775-1moave7qaqr8tvtpialrqh7ntgggpd43.apps.googleusercontent.com',
            userName : 'Join In'
        };

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response){

        let profile = response.getBasicProfile();
        let googleUserId = profile.getId();
        let authToken = response.getAuthResponse().id_token;

        cookies.set('userId', googleUserId);
        cookies.set('access-token', authToken);
        let userService = new UserService();
        userService.saveUser(response, this);
    }

    render() {

        return (
            <div>
                <GoogleLogin
                    clientId= {this.state.clientId}
                    buttonText= {this.state.userName}
                    className='show-modal show-signup-in-modal button btn-blue'
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        )
    }
}

export default withRouter(GLoginBtn);