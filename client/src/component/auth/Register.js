import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

class Register extends Component {
  constructor () {
    super ();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
    this.onChange = this.onChange.bind (this);
    this.onSubmit = this.onSubmit.bind (this);
  }

  onChange (e) {
    this.setState ({[e.target.name]: e.target.value});
  }

  onSubmit (e) {
    e.preventDefault ();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log (newUser);

    this.props.registerUser (newUser, this.props.history);
  }

  componentDidMount () {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push ('/dashboard');
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.errors) {
      this.setState ({errors: nextProps.errors});
    }
  }

  render () {
    const {errors} = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-10">회원가입</h1>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>이메일 주소</label>
                  <input
                    type="email"
                    className={classNames ('form-control', {
                      'is-invalid': errors.email,
                    })}
                    placeholder="example@studyplatform.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email &&
                    <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label>이름</label>
                  <input
                    type="name"
                    className={classNames ('form-control', {
                      'is-invalid': errors.name,
                    })}
                    placeholder="이름"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name &&
                    <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <label>비밀번호</label>
                  <input
                    type="password"
                    className={classNames ('form-control', {
                      'is-invalid': errors.password,
                    })}
                    placeholder="비밀번호"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password &&
                    <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="form-group">
                  <label>비밀번호 확인</label>
                  <input
                    type="password"
                    className={classNames ('form-control', {
                      'is-invalid': errors.password2,
                    })}
                    placeholder="비밀번호 확인"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 &&
                    <div className="invalid-feedback">{errors.password2}</div>}
                </div>
                <button type="submit" className="btn btn-primary">확인</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect (mapStateToProps, {registerUser}) (
  withRouter (Register)
);
