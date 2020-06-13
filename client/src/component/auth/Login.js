import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router';
import classNames from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../actions/authActions';

const Login = (props) => {
  const [isEmail, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');

  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.errors);

  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const loginUserData = {
      email: isEmail,
      password: isPassword,
    };
    console.log(loginUserData);
    dispatch(loginUser(loginUserData, history));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/');
    }
  });

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-10">로그인</h1>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <label>이메일 주소</label>
                <input
                  type="email"
                  className={classNames('form-control', {
                    'is-invalid': errors.email,
                  })}
                  placeholder="example@studyplatform.com"
                  name="email"
                  value={isEmail}
                  onChange={onChangeEmail}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label>비밀번호</label>
                <input
                  type="password"
                  className={classNames('form-control', {
                    'is-invalid': errors.password,
                  })}
                  placeholder="비밀번호"
                  name="password"
                  value={isPassword}
                  onChange={onChangePassword}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                확인
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
