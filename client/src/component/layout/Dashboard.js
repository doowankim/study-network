import React, {Component} from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import BoardItems from "../board/BoardItems";

class Dashboard extends Component {
    render() {
        return (
            <Container>
            <div className="landing" />
                <section>
                    <Description>
                        온라인/오프라인 어디서든 하고싶은 공부를 사람들과 모여서 즐겁게 하는 방법 <br /> <Strong>스터디플랫폼</Strong>
                    </Description>
                    <SubTitle>
                        스터디를 관리하고 시작하고 싶으신가요?<br />                    
                        어디 지역이든 스터디를 만들고 진행해보세요!
                    </SubTitle>
                </section>
                <section>
                    <SLink to="/board">
                        <Icon className="fas fa-pencil-alt"></Icon>
                        스터디 글쓰기
                    </SLink>
                </section>
                <section>
                    <Title>나에게 맞는 스터디 둘러보기</Title>
                    <BoardItems />
                </section>
            </Container>
        );
    }
}

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 50px;
`;

const Description = styled.span`
  width: 73%;
  font-size: 36px;
  font-weight: 500;
  text-align: left;
  text-shadow: 0 0 5px #fff;
  max-width: 450px;
  margin: 0;
`;

const Strong = styled.strong`
  font-size: 36px;
  color: #455dff;
  line-height: 1;
  font-weight: 700;
`;

const SubTitle = styled.div`
  max-width: 400px;
  color: #777;
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 40px;
`;

const Title = styled.title`
  font-size: 24px;
  font-weight: 300;
  display: block;
  line-height: 1.2;
  text-align: center;
  margin: 0 0 5px;
`;

const SLink = styled(Link)`
  font-size: 16px;
  color: #fff;
  vertical-align: middle;
  line-height: 150%;
  text-align: center;
  padding: 22px 28px;
  margin: auto;
  display: inline-block;
  border-radius: 35px;
  background-color: #455dff;
  font-weight: 600;
  overflow-x: hidden;
  transition: all .25s ease-in-out;
`;

const Icon = styled.i`
  margin-right: 5px;
  margin-top: 3px;
`;

export default Dashboard;