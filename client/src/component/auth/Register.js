import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import {useHistory} from 'react-router-dom';

const Register = (props) => {
  const [isName, setName] = useState('');
  const [isEmail, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isPassword2, setPassword2] = useState('');

  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.errors);

  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: isName,
      email: isEmail,
      password: isPassword,
      password2: isPassword2,
    };
    dispatch(registerUser(newUser, history));
  };
  const {registerData} = props;
  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/');
    }
  }, [registerData, errors]);
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
                <label>이름</label>
                <input
                  type="name"
                  className={classNames('form-control', {
                    'is-invalid': errors.name,
                  })}
                  placeholder="이름"
                  name="name"
                  value={isName}
                  onChange={onChangeName}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
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
              <div className="form-group">
                <label>비밀번호 확인</label>
                <input
                  type="password"
                  className={classNames('form-control', {
                    'is-invalid': errors.password2,
                  })}
                  placeholder="비밀번호 확인"
                  name="password2"
                  value={isPassword2}
                  onChange={onChangePassword2}
                />
                {errors.password2 && (
                  <div className="invalid-feedback">{errors.password2}</div>
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

export default Register;
