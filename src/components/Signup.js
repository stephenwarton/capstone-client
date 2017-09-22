import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

import Navbar from './Navbar';

class Signup extends Component {
  handleFormSubmit({ email, password }){
    this.props.signUp({ email, password }, this.props.loginUser, this.props.fetchArticles, this.props.fetchPlaylists);
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
      <div>
        <Navbar />
        <div className="container">
          <div className="row signup">
            <div className="col">
            </div>
            <div className="col-6 align-self-center">
              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                  <input {...email} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email"/>
                </fieldset>
                <fieldset className="form-group">
                  <input {...password} type="password" className="form-control" placeholder="Password"/>
                  <small id="passwordHelp" class="form-text text-muted">Passwords must be at least 6 characters long</small>
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-secondary">Sign Up</button>
              </form>
            </div>
            <div className="col">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
          errorMessage: state.auth.error,
          signup: state.auth.signup
          };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signup);
