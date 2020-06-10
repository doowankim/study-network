import React, {useState} from 'react';
import {useHistory} from 'react-router';
import classNames from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../actions/authActions';

const Login = (props) => {
  const [state, setState] = useState({email: '', password: '', errors: {}});

  const dispatch = useDispatch();

  const history = useHistory();

  const {auth, errors} = useSelector((state) => state.auth);

  const {auth} = props;

  const {errors} = props;

  useEffect(() => {
    if (auth.isAutenticated) {
      history.push('/');
    }
  }, [errors, auth]);

  const onChange = (e) => {
    setState({[e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: state.email,
      password: state.password,
    };
    loginUser(userData);
  };

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
                  value={state.email}
                  onChange={onChange}
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
                  value={state.password}
                  onChange={onChange}
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
