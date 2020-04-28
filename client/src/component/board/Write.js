import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

import SelectListGroup from "../common/SelectListGroup";

import { createPost } from "../../actions/postActions";

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            errors: {}
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
        this.props.createPost(postData, this.props.history);
        console.log(postData);
    }

    render() {
        const { errors } = this.state;

        // const options = [
        //     { label: '* 스터디를 진행할 지역을 선택하세요', value: 0 },
        //     { label: '서울', value: '서울' },
        //     { label: '경기', value: '경기' },
        //     { label: '강원', value: '강원' },
        //     { label: '충북', value: '충북' },
        //     { label: '충남', value: '충남' },
        //     { label: '경북', value: '경북' },
        //     { label: '경남', value: '경남' },
        //     { label: '전북', value: '전북' },
        //     { label: '전남', value: '전남' },
        //     { label: '제주', value: '제주' },
        // ]
        return (
            <div>
                {/*<div className="dropdown">*/}
                {/*    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"*/}
                {/*            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                {/*        지역 선택*/}
                {/*    </button>*/}
                {/*    <select*/}
                {/*        value={this.state.area}*/}
                {/*        onChange={this.onChange}*/}
                {/*        name="area"*/}
                {/*        options={options.map(_option =>*/}
                {/*            <option key={_option.label} value={_option.value}>*/}
                {/*                {_option.label}*/}
                {/*            </option>*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</div>*/}
                <form onSubmit={this.onSubmit}>
                    <Input
                        name="title"
                        placeholder="제목을 입력하세요"
                        onChange={this.onChange}
                        value={this.state.title}
                        error={errors.title}
                    />
                    {errors.title && (
                        <div className="invalid-feedback">{errors.title}</div>
                    )}
                    <_Input
                        name="text"
                        placeholder="자유롭게 작성해보세요"
                        onChange={this.onChange}
                        value={this.state.text}
                        error={errors.text}
                    />
                    {errors.text && (
                        <div className="invalid-feedback">{errors.text}</div>
                    )}
                    <div>
                        <button type="submit" className="btn btn-primary">글 등록하기</button>
                    </div>
                </form>
            </div>
        );
    }
}

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
`;

Write.propTypes = {
    posts: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts,
    errors: state.errors
});

export default connect(mapStateToProps, { createPost })(
    withRouter(Write)
);