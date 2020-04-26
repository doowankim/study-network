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
  border-bottom: 1px solid #f2f2f2;
`;

const _Input = styled.input`
  display: flex;
  font-size: 2.75rem;
  width: 100%;
  height: 500px;
  resize: none;
  line-height: 1.5;
  font-weight: bold;
  color: rgb(33, 37, 41);
  padding: 0px;
  outline: none;
  border-width: initial;
  border-style: none;
  //border-color: initial;
  //border-image: initial;
`;

class Write extends Component {
    constructor() {
        super();
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
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        지역 선택
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item">서울</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">경기</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">강원</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">충북</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">충남</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">경북</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">경남</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">전북</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">전남</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">제주</a>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <Input
                        name="title"
                        placeholder="제목을 입력하세요"
                        onChange={this.onChange}
                        value={this.state.title}
                    />
                    <_Input
                        name="text"
                        placeholder="자유롭게 작성해보세요"
                        onChange={this.onChange}
                        value={this.state.text}
                    />
                    <div>
                        <button type="submit" className="btn btn-primary">글 등록하기</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Write;