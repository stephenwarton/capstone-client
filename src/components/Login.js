import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class Login extends Component {
  handleFormSubmit({ email, password }){
    this.props.loginUser({ email, password });
  }

  renderAlert(){
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }


  render() {
    const { handleSubmit, fields: { email, password }} = this.props;


    return (
      <div className="container">
        <div className="row login">
          <div className="col">
          </div>
          <div className="col-6 align-self-center">
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <fieldset className="form-group">
                <input {...email} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email"/>
              </fieldset>
              <fieldset className="form-group">
                <input {...password} type="password" className="form-control" placeholder="Password"/>
              </fieldset>
              {this.renderAlert()}
              <button action="submit" className="btn btn-secondary">Login</button>
            </form>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Login);
