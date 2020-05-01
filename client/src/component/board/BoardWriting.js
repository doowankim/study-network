import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

import { createPost } from "../../actions/postActions";

class BoardWriting extends Component {
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

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
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
                </Form>
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

BoardWriting.propTypes = {
    posts: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts,
    errors: state.errors
});

export default connect(mapStateToProps, { createPost })(
    withRouter(BoardWriting)
);