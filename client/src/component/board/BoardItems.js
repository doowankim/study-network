import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from "react-moment";
import styled from "styled-components";

const Tr = styled.tr`
  cursor: pointer;
`;

class BoardItems extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
            errors: ''
        };
    }

    componentDidMount() {
        axios
            .get('/posts/total')
            .then(res => this.setState({results: res.data.posts}))
            .catch(err => console.log(err));
    }

    render() {
        const { results } = this.state;

        console.log(results);

        return (
            <div className="board">
                <div className="container">
                    <div className="row">
                        <table className="table table-hover">
                            <tbody>
                            {results.map(result =>
                                <Tr>
                                    <th scope="row">스터디</th>
                                    <td>{result.name}</td>
                                    <td>{result.title}</td>
                                    <td>
                                        <Moment format="YYYY년 MM월 DD일">
                                            {result.date.substring(0, 10)}
                                        </Moment>
                                    </td>
                                </Tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardItems;

// import React, {Component} from 'react';
// import styled from "styled-components";
//
// class BoardItems extends Component {
//     render() {
//         return (
//             <Container>
//                 <List>
//                     <Item>
//                         <Text>영어 스피킹 하실분 구합니다!</Text>{/*여기에는 Title, date가 나타나야 함*/}
//                     </Item>
//                     <Item>
//                         <Text>토익 하실분 구합니다!</Text>
//                     </Item>
//                     <Item>
//                         <Text>(강남) 토익 스터디원 구합니다 :)</Text>
//                     </Item>
//                 </List>
//             </Container>
//         );
//     }
// }
//
// const Container = styled.div`
//   margin-top: 50px;
// `;
//
// const List = styled.div`
//   display: block;
// `;
//
// const Item = styled.div`
//   padding: 12px 16px;
//   border-bottom: 1px solid #f2f2f2;
//   color: inherit;
//   text-decoration: none;
//   width: auto;
//   //margin-left: 320px;
//   margin-top: 10px;
// `;
//
// const Text = styled.div`
//   font-size: 16px;
//   cursor: pointer;
//   text-align: center;
// `;
//
// export default BoardItems;