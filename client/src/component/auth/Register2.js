import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import {useHistory} from 'react-router-dom';

const Register = () => {
  const [state, setState] = useState ({
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  });

  const auth = useSelector (state => state.auth);
  const errors = useSelector (state => state.errors);

  const history = useHistory ();
  const dispatch = useDispatch ();

  const onChange = e => {
    setState ({[e.target.name]: e.target.value});
  };

  const onSubmit = e => {
    e.preventDefault ();

    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
      password2: state.password2,
    };
    dispatch (registerUser (newUser));
  };

  useEffect (
    () => {
      if (auth.isAuthenticated) {
        history.push ('/dashboard');
      }
    },
    [errors]
  );
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-10">회원가입</h1>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <label>이메일 주소</label>
                <input
                  type="email"
                  className={classNames ('form-control', {
                    'is-invalid': errors.email,
                  })}
                  placeholder="example@studyplatform.com"
                  name="email"
                  value={state.email}
                  onChange={onChange}
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
                  value={state.name}
                  onChange={onChange}
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
                  value={state.password}
                  onChange={onChange}
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
                  value={state.password2}
                  onChange={onChange}
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
};

export default Register;
