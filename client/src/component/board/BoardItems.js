import React, {Component} from 'react';
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
`;

const List = styled.div`
  display: block;
`;

const Item = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #f2f2f2;
  color: inherit;
  text-decoration: none;
  width: 500px;
  margin-left: 320px;
  margin-top: 10px;
`;

const Text = styled.div`
  font-size: 16px;
  cursor: pointer;
`;



class BoardItems extends Component {
    render() {
        return (
            <Container>
                <List>
                    <Item>
                        <Text>영어 스피킹 하실분 구합니다!</Text>{/*여기에는 Title, date가 나타나야 함*/}
                    </Item>
                    <Item>
                        <Text>토익 하실분 구합니다!</Text>
                    </Item>
                    <Item>
                        <Text>(강남) 토익 스터디원 구합니다 :)</Text>
                    </Item>
                </List>
            </Container>
        );
    }
}

export default BoardItems;