import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Form = styled.form`
  //margin-left: 230px;
`;

const Input = styled.input`
  display: block;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  font-weight: bold;
  color: rgb(33, 37, 41);
  padding: 0px;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

const _Input = styled.input`
  
`;

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const postData = {
            title: this.state.title,
            text: this.state.text
        };
        console.log(postData);
    }

    render() {
        return (
            <div>
                <Link to="/dashboard">
                    <button>나가기</button>
                </Link>
                <Form onSubmit={this.onSubmit}>
                    <Input
                        name="title"
                        placeholder="제목을 입력하세요"
                        onChange={this.onChange}
                    />
                    <_Input
                        name="text"
                        placeholder="자유롭게 작성해보세요"
                        onChange={this.onChange}
                    />
                    <div>
                        <button>글 등록하기</button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Write;