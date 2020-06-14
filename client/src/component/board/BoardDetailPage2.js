import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useParams} from 'react-router';

const BoardDetailPage2 = () => {
  const [isComment, setComment] = useState('');
  const [postDetail, setPostDetail] = useState([]);

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment: isComment,
    };
    console.log(newComment);
  };
  const getPostId = this.props.match.params.postId;
  useEffect(() => {
    axios
      .get(`/posts/${getPostId}`)
      .then((res) => setPostDetail(res.data.post))
      .catch((err) => console.log(err));
  }, [getPostId]);
  return (
    <Container>
      <Wrapper>
        <Header>{postDetail.title}</Header>
        <UserInfo>
          <Information>
            <img
              className="rounded-circle"
              src={postDetail.avatar}
              alt={postDetail.name}
              style={{
                width: '25px',
                height: '25px',
                marginRight: '5px',
                marginTop: '5px',
              }}
            />
            <UserName>{postDetail.name}</UserName>
            <Separator>·</Separator>
            <BoardDate>
              {postDetail.date && postDetail.date.substring(0, 10)}
            </BoardDate>
          </Information>
        </UserInfo>
        <TextContainer>
          <TextWrapper>
            <Text>{postDetail.text}</Text>
          </TextWrapper>
        </TextContainer>
        <CommentContainer onSubmit={onSubmit}>
          <CommentWrapper>
            <Comment
              name="comment"
              placeholder="댓글을 작성하세요"
              style={{height: '70px'}}
              onChange={onChangeComment}
            ></Comment>
            <ButtonWrapper>
              <Button type="submit">댓글 작성</Button>
            </ButtonWrapper>
          </CommentWrapper>
        </CommentContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5.5rem;
`;

const Wrapper = styled.div`
  display: block;
`;

const Header = styled.div`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: rgb(52, 58, 64);
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const UserInfo = styled.div`
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  color: rgb(73, 80, 87);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Information = styled.div``;

const UserName = styled.span`
  color: rgb(52, 58, 64);
  font-weight: bold;
`;

const Separator = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const BoardDate = styled.span``;

const TextContainer = styled.div`
  width: 768px;
  margin: 5rem auto 0px;
`;

const TextWrapper = styled.div`
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const Text = styled.div`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const CommentContainer = styled.form`
  margin-top: 2.5rem;
`;

const CommentWrapper = styled.div`
  display: block;
`;

const Comment = styled.textarea`
  resize: none;
  margin-bottom: 1.5rem;
  width: 100%;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(233, 236, 239);
  border-image: initial;
  border-radius: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
  color: white;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 2rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-size: 1rem;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: #5c6bc0;
  border-radius: 4px;
`;

export default BoardDetailPage2;
