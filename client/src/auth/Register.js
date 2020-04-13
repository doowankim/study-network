import React, {Component} from 'react';

class Register extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         name: '',
    //         email: '',
    //         password: '',
    //         password2: '',
    //         errors: {}
    //     };
    //     this.onChange = this.onChange.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
    //
    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value });
    // }
    //
    // onSubmit(e) {
    //     e.preventDefault();
    //
    //     const newUser = {
    //         name: this.state.name,
    //         email: this.state.email,
    //         password: this.state.password,
    //         password2: this.state.password2
    //     };
    //     console.log(newUser);
    // }

    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-10 text-center">회원가입</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="InputEmail">이메일 주소</label>
                                    <input type="email" className="form-control" id="InputEmail"
                                           aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputName">이름</label>
                                    <input type="name" className="form-control" id="InputName"
                                           aria-describedby="nameHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputPassword">비밀번호</label>
                                    <input type="password" className="form-control" id="InputPassword"
                                           aria-describedby="passwordHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputConfirmPassword">비밀번호 확인</label>
                                    <input type="password2" className="form-control" id="InputConfirmPassword"
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

export default Register;