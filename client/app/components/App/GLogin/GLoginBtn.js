import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Route, Redirect } from 'react-router';
import {withRouter} from 'react-router';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class GLoginBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientId : '1042050654775-1moave7qaqr8tvtpialrqh7ntgggpd43.apps.googleusercontent.com'
        };

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response){
        console.log('Inside google response');
        for(let key in response){
            console.log(key + ' -> '+ response[key]);
        }

        cookies.set('access-token', 'aaxaxmakakkn1212kkn12');
        this.props.history.push('/welcome');
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