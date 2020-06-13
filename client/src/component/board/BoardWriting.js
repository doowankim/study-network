import React, {useState} from 'react';
import {useHistory} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {createPost} from '../../actions/postActions';
import styled from 'styled-components';

const BoardWriting2 = () => {
  const [isTitle, setTitle] = useState('');
  const [isText, setText] = useState('');

  const errors = useSelector((state) => state.errors);

  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title: isTitle,
      text: isText,
    };
    dispatch(createPost(postData, history));
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <InputTitle
          name="title"
          placeholder="제목을 입력하세요"
          onChange={onChangeTitle}
          value={isTitle}
          error={errors.title}
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
        <InputText
          name="text"
          placeholder="자유롭게 작성해보세요"
          onChange={onChangeText}
          value={isText}
          error={errors.text}
        />
        {errors.text && <div className="invalid-feedback">{errors.text}</div>}
        <div>
          <button type="submit" className="btn btn-primary">
            글 등록하기
          </button>
        </div>
      </Form>
    </div>
  );
};

const Form = styled.form`
  /* margin-left: 230px; */
`;

const InputTitle = styled.input`
  display: block;
  font-size: 2rem;
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
  margin-bottom: 20px;
`;

const InputText = styled.input`
  display: flex;
  font-size: 2rem;
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
  margin-bottom: 20px;
`;

export default BoardWriting2;
