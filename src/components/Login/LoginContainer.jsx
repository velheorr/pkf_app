import React from 'react';
import {connect} from "react-redux";
import { Field, reduxForm } from 'redux-form';
import Hooks from "./hooks/Hooks";


const validate = values => {
    const errors = {}
    if (!values.username) {errors.username = 'Required'}
    else if (values.username.length > 15) {errors.username = 'Must be 15 characters or less'}
    if (!values.email) {errors.email = 'Required'} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) )}
        </div>
    </div>
)

const SyncValidationForm = (props) => {
    const { handleSubmit, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username"/>
            <Field name="email" type="email" component={renderField} label="Email"/>
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
            </div>
        </form>
    )
}

const TestReduxForm = reduxForm({
    form: 'syncValidation',  // a unique identifier for this form
    validate                // <--- validation function given to redux-form
})(SyncValidationForm)

const onSubmit = (val)=> {
    console.log(val)
}


const LoginContainer = (props) => {

    return (
        <div>
            <TestReduxForm onSubmit={onSubmit} />
            <Hooks/>
        </div>
    )
}




const mapStateToProps = (state) => ({
    isAuth: state.login.isAuth,
    authedUserId: state.login.authedUserId
})



export default connect(mapStateToProps, {})(LoginContainer);