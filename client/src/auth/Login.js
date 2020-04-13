import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-10 text-center">로그인</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="InputEmail">이메일 주소</label>
                                    <input type="email" className="form-control" id="InputEmail"
                                           aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputPassword">비밀번호</label>
                                    <input type="password" className="form-control" id="InputPassword"
                                           aria-describedby="passwordHelp" />
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

export default Login;