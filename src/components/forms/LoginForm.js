import React, {Component} from "react";
import { loginUser } from "./../../actions";
import LocalAPI from "./../../apis/local";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import "./../../styles/LoginForm.css"


class LoginForm extends Component {
 

    onFormSubmit = async (formValues) => {
        const {email, password} = formValues
        await this.props.loginUser(email, password);
        this.props.reset();
    }

   

    render() {
        const { handleSubmit } = this.props;

        return (
            
            <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
                <div className="field">
                    <label>Email</label>
                    <Field
                        name="email"
                        component={Input}
                        type="text"
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <Field
                        name="password"
                        component={Input}
                        type="password"
                    />
                </div>
                <div className="button-container">
                    <div className="button-wrapper">
                        <input className="ui button button-pos" type="submit" value="Login"/>
                    </div>
                </div>
                <div className="forget-pass-container">
                    <div className="forget-pass-wrapper">
                        <button className="button-style button-effect">Forgot Password?</button>
                    </div>
                </div>
                <div className="add-new-container">
                    <div className="add-new-wrapper">
                        <a><button className="button-style new-account-button button-effect">Create new account</button></a>
                    </div>
                </div>
            </form>
            
        );
    }
}

const WrappedLoginForm = reduxForm({
    form: "register",
    validate: (formValues) => {
        const errors = {};
        if (!formValues.email) {
            errors.email = "Email is required"
        }

        if (!formValues.password) {
            errors.password = "Password is required"
        }

        return errors
    }
})(LoginForm);

export default connect(null, {loginUser })(WrappedLoginForm);