import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import styled from "styled-components";
import "./Card.css";

class BoardList extends Component {
    render() {
        const boardDetail = this.props.posts.map(post => (
            <Container>
                <Wrapper>
                    <List>
                        <div className="band">
                            <div className="item-1">
                                <div className="card">
                                    <div className="thumb">
                                        <article>
                                            <h4>{post.title}</h4>
                                            <p>{post.text}</p>
                                            <div>
                                                <Moment format="YYYY년 MM월 DD일">
                                                    {post.date.substring(0, 10)}
                                                </Moment>
                                            </div>
                                            <span>by {post.name}</span>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </List>
                </Wrapper>
            </Container>
            // <Tr>
            //     <td>{post.name}</td>
            //     <td>{post.title}</td>
            //     <td>
            //         <Moment format="YYYY년 MM월 DD일">
            //             {post.date.substring(0, 10)}
            //         </Moment>
            //     </td>
            // </Tr>
        ))
        return (
            <div>
                {/*<table className="table table-hover">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th>작성자</th>*/}
                {/*        <th>글 제목</th>*/}
                {/*        <th>작성 날짜</th>*/}
                {/*    </tr>*/}
                    {boardDetail}
                {/*    </thead>*/}
                {/*</table>*/}
            </div>
        );
    }
}

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  flex: 1 1 0%;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;  
`;

export default connect(null)(BoardList);