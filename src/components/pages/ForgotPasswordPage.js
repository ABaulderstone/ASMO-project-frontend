import React, {Component} from "react"
import ForgotPasswordForm from "./../forms/ForgotPasswordForm"

class ForgotPasswordPage extends Component {
    render() {
        return (
            <>
            <div className="ui container">
                <div className="ui segment">
                    <ForgotPasswordForm />
                </div>
            </div>
            
            </>
        )
    }
}

export default  ForgotPasswordPage;


