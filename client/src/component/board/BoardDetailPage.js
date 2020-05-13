import React, {Component} from 'react';
import styled from 'styled-components';

class BoardDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newComment = {
            comment: this.state.comment
        }
        console.log(newComment);
    }
    render() {
        return (
            <Container>
                <Wrapper>
                    <Header>
                        글 제목
                    </Header>
                    <UserInfo>
                        <Information>
                            <UserName>유저 이름</UserName>
                            <Separator>·</Separator>
                            <BoardDate>글 작성 날짜</BoardDate>
                        </Information>
                    </UserInfo>
                    <TextContainer>
                        <TextWrapper>
                            <Text>글 내용</Text>
                        </TextWrapper>
                    </TextContainer>
                    <CommentContainer onSubmit={this.onSubmit}>
                        <CommentWrapper>
                            <Comment
                                name="comment"
                                placeholder="댓글을 작성하세요"
                                style={{height: '70px'}}
                                onChange={this.onChange}
                            >
                            </Comment>
                            <ButtonWrapper>
                                <Button type="submit">
                                    댓글 작성
                                </Button>
                            </ButtonWrapper>
                        </CommentWrapper>
                    </CommentContainer>
                </Wrapper>
            </Container>
        );
    }
}

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

const Information = styled.div`

`;

const UserName = styled.span`
  color: rgb(52, 58, 64);
  font-weight: bold;
`;

const Separator = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const BoardDate = styled.span`

`;

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
  background: #5C6BC0;
  border-radius: 4px;
`;

export default BoardDetailPage;