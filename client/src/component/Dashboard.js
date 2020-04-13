import React, {Component} from 'react';
import styled from "styled-components";

const Container = styled.div`
  padding-top: 30px;
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
  margin-top: 13px;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 40px;
  text-align: left;
`;

const Title = styled.title`
  font-size: 24px;
  font-weight: 100;
  display: block;
  line-height: 1.2;
  text-align: center;
  margin: 0 0 5px;
`;

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <section>
                    <Description>
                        온라인/오프라인 어디서든 하고싶은 공부를 사람들과 모여서 즐겁게 하는 방법! <Strong>스터디플랫폼</Strong>
                    </Description>
                    <SubTitle>
                        어디 지역이든 스터디를 만들고 진행해보세요.
                    </SubTitle>
                </section>
                <section>
                    <Title>나에게 맞는 스터디 둘러보기</Title>
                </section>
            </Container>

        );
    }
}

export default Dashboard;