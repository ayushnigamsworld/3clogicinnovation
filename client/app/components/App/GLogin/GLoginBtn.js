import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

class GLoginBtn extends Component {
    constructor(props){
        super(props);
        this.state = {
            clientId : '1042050654775-1moave7qaqr8tvtpialrqh7ntgggpd43.apps.googleusercontent.com',
            
        }
    }

    responseGoogle(response){

        console.log(response);
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

export default GLoginBtn;