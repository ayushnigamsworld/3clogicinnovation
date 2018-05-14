import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Route, Redirect } from 'react-router';
import {withRouter} from 'react-router';
import Cookies from 'universal-cookie';
import userService from '../../../services/userService';
import {NotificationManager} from 'react-notifications';
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

    responseGoogle(response) {

        let currentObj = this;
        userService.saveUser(response, function(data) {

          if(data.status == 403){
            console.log(`Access denied`);
            NotificationManager.error("Oops! Are you not from 3C Logic?", 'Sorry at this point we are only considering 3C Logic employees. Join us now!!!');
            return;
          }

          if(data.status != 200){
            console.log(`Error while logging in Please try again.`);
            NotificationManager.error("Oops! Not able to login", 'Unfortunately, we are not able to login as of now. Please try after some time.');
            return;
          }

          cookies.set('user_id', data.user["userId"]);
          cookies.set('access_token', data.user["authorization"]["accessToken"]);
          NotificationManager.success("Welcome! Join the force", 'Idea > Innovation > Success > Celebration');
          currentObj.props.history.push('/welcome');
        });
    }

    render() {

        return (
            <div>
                <GoogleLogin
                    clientId= {this.state.clientId}
                    buttonText= {this.state.userName}
                    className='fadeInLeft wow btn btn-common btn-lg'
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        )
    }
}

export default withRouter(GLoginBtn);
