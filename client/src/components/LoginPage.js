import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, Form } from 'react-final-form';
import { login } from '../actions/authActions';

const LoginPage = props => {
  const onSubmit = values => {
    props.login(values);
  };
  if (props.isSignedIn) {
    //checks if the user is authenticated and redirects to home
    return <Redirect to="/" />;
  }
  return (
    <div className="login-page min-vh-100 min-vw-100">
      <div className="user-icon mx-auto">
        <img src={`${process.env.PUBLIC_URL}/hhch-logo.svg`} alt="His House Children's Home Logo" />
      </div>
      <h4>Sign in to PQI Tools</h4>
      <div className="row">
        <div className="card mt-3 mx-auto">
          <div className="card-body w-small">
            <Form
              onSubmit={onSubmit}
              validate={values => {
                const errors = {};
                const requiredFields = ['username', 'password'];
                requiredFields.forEach(field => {
                  if (!values[field]) {
                    errors[field] = 'Required';
                  }
                });
                return errors;
              }}
            >
              {({ handleSubmit, form, pristine, submitting, values }) => (
                <form onSubmit={handleSubmit} className="was-validated">
                  <Field name="username">
                    {({ input, meta }) => (
                      <div className="form-group">
                        <label>Username or email</label>
                        <input
                          {...input}
                          type="text"
                          className={`form-control${
                            meta.error && meta.touched ? ' is-invalid' : ''
                          }`}
                          placeholder="Username or email"
                        />
                        <div className="invalid-feedback">{meta.error}</div>
                      </div>
                    )}
                  </Field>

                  <Field name="password">
                    {({ input, meta }) => (
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          {...input}
                          type="password"
                          className={`form-control${
                            meta.error && meta.touched ? ' is-invalid' : ''
                          }`}
                          placeholder="Password"
                        />
                        <div className="invalid-feedback">{meta.error}.</div>
                      </div>
                    )}
                  </Field>
                  <div className="buttons mt-3 d-flex justify-content-center">
                    <button
                      className="btn btn-primary mx-2"
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Login
                    </button>
                    <button
                      className="btn btn-secondary mx-2"
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </button>
                  </div>
                  {/* <pre>{JSON.stringify(errors, 0, 2)}</pre> */}
                </form>
              )}
            </Form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card mt-3 mx-auto">
          <div className="card-body w-small">
            New here?<Link to="/register"> Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(
  mapStateToProps,
  {
    login
  }
)(LoginPage);
