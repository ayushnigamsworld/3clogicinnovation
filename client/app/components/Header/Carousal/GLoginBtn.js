import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Route, Redirect } from 'react-router';
import { withRouter } from 'react-router';
import Cookies from 'universal-cookie';
import userService from '../../../services/userService';
import { NotificationManager } from 'react-notifications';
import { userInfo } from 'os';
const cookies = new Cookies();

class GLoginBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientId: '1042050654775-1moave7qaqr8tvtpialrqh7ntgggpd43.apps.googleusercontent.com',
            userName: 'Join In'
        };

        this.responseGoogle = this.responseGoogle.bind(this);
        this.checkIf3CLogicUser = this.checkIf3CLogicUser.bind(this);
        this.saveOrLoginUser = this.saveOrLoginUser.bind(this);
    }

    responseGoogle(response) {

        /**
         * Algorithm:-
         * 1.  Check If user is from 3C Logic
         * 2. If not logout user
         * 3. If correct check if user is already created?
         * 4.  If not save the user and login
         * @type {GLoginBtn}
         */
        if(!response.getBasicProfile){
            NotificationManager.error("Please check if cookies are enabled.", "Coudn't let you in.");
            return;
        }

        this.checkIf3CLogicUser(response)
            .then(() => this.saveOrLoginUser(response))
            .catch(err => {
                console.log(`Error occurred`, err);
                NotificationManager.error(err.message, 'Error Occurred');
            })
    }

    checkIf3CLogicUser(response) {
        return new Promise((resolve, reject) => {
            const profile = response.getBasicProfile();
            if (!profile.getEmail().includes('@3clogic.com')) {
                response.disconnect((res) => console.log(`Disconnecting user : ${res}`));
                reject(new Error(`Only 3C Logic Users are allowed for this hackathon`));
            }

            resolve(profile);
        })
    }

    saveOrLoginUser(profile) {
        new Promise((resolve, reject) => {
            console.log(`Profile is : ` + profile);
            let currentObj = this;
            userService.saveUser(profile, function (data) {

                if (data.status != 200) {
                    console.log(`Error while logging in Please try again.`);
                    NotificationManager.error("Unfortunately, we are not able to login as of now. Please try after some time.", "Oops! Not able to login");
                    return;
                }

                cookies.set('user_id', data.user["userId"]);
                // cookies.set('access_token', data.user["authorization"]["accessToken"]);
                NotificationManager.success("Welcome! Join the force", 'Idea > Innovation > Success > Celebration');
                currentObj.props.history.push('/welcome');
            });
        })
    }

    render() {

        return (
            <div hidden={this.props.loggedInUser}>
                <GoogleLogin
                    clientId={this.state.clientId}
                    buttonText={this.state.userName}
                    className='fadeInLeft wow btn btn-common btn-lg'
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        )
    }
}

export default withRouter(GLoginBtn);
