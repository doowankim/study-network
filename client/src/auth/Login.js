import React, {Component} from 'react';
import axios from 'axios';
import classNames from 'classnames';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const loginUser = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(loginUser);

        axios
            .post('users/login', loginUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({errors: err.response.data}))
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-10">로그인</h1>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>이메일 주소</label>
                                    <input
                                        type="email"
                                        className={classNames('form-control', {
                                            'is-invalid': errors.email
                                        })}
                                        placeholder="이메일을 입력해주세요"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
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
                                            'is-invalid': errors.password
                                        })}
                                        placeholder="비밀번호를 입력해주세요"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
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