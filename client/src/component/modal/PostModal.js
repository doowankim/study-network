import React, {Component} from 'react';
import styled from "styled-components";

class PostModal extends Component {

    render() {
        const { isOpen, isClose } = this.props;
        return (
                    isOpen ?
                        <React.Fragment>
                            <Overlay onClick={isClose} />
                            <_Modal>
                                <GrayBlock>
                                    <Title>환영합니다!</Title>
                                </GrayBlock>
                                <WhiteBlock>
                                    <ExitWrapper>
                                        <BlockContent>
                                            <LoginTitle>
                                                로그인
                                            </LoginTitle>
                                            <section>
                                                <H4>이메일로 로그인</H4>
                                            </section>
                                            <ScHtpNat>
                                                <Input
                                                    tabIndex="2"
                                                    placeholder="이메일을 입력하세요."
                                                    name="email"
                                                />
                                                <Button>로그인</Button>
                                            </ScHtpNat>
                                            <H5>소셜 계정으로 로그인</H5>
                                        </BlockContent>
                                    </ExitWrapper>
                                    <Foot>
                                        아직 회원이 아니신가요?
                                        <a>
                                            <FooterRegister>
                                                회원가입
                                            </FooterRegister>
                                        </a>
                                    </Foot>
                                </WhiteBlock>
                            </_Modal>
                        </React.Fragment>
                        :
                        null
        )
    }
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(249, 249, 249, 0.16);
`;

const H4 = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgb(134, 142, 150);  
`;

const H5 = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-top: 25px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: rgb(134, 142, 150);
`;

const Input = styled.input`
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  font-size: 15px;
  flex: 1 1 0%;
  padding: 1rem;
  border-width: 1px 1px 1px;
  border-style: solid none solid solid;
  border-color: rgb(222, 226, 230) rgb(222, 226, 230) rgb(222, 226, 230);
  border-image: initial;
  border-right: none;
`;

const Button = styled.button`
  color: white;
  padding-top: 3px;
  text-align: center;
  font-size: 16px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  width: 100px;
  word-break: keep-all;
  cursor: pointer;
  background: rgb(18, 184, 134);
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

const Foot = styled.div`
  text-align: right;
  padding-top: 120px;
`;

const _Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 606px;
  height: 480px;
  display: flex;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.09) 0 2px 12px 0;
`;
const GrayBlock = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
 -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(241, 243, 245);
  padding: 10px;
`;

const Title = styled.div`
  font-size: 29px;
  margin-top: 20px;
  color: rgb(73, 80, 87);
  text-align: center;
  font-weight: 500;  
`;

const WhiteBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  background: white;
  padding: 20px;
  padding-top: 70px;
`;

const ExitWrapper = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: rgb(134, 142, 150);
  margin-bottom: 2.25rem;
`;

const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const LoginTitle = styled.div`
  font-size: 21px;
  font-weight: bold;
  color: rgb(52, 58, 64);
`;

const ScHtpNat = styled.form`
  width: 100%;
  display: flex;
  height: 3rem;
`;

const FooterRegister = styled.div`
  display: inline-block;
  font-weight: bold;
  color: rgb(18, 184, 134);
  cursor: pointer;
`;
export default PostModal;

