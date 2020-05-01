import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import styled from "styled-components";

class BoardList extends Component {
    render() {
        const boardDetail = this.props.posts.map(post => (
            <Tr>
                <td>{post.name}</td>
                <td>{post.title}</td>
                <td>{post.text}</td>
                <td>
                    <Moment format="YYYY년 MM월 DD일">
                        {post.date.substring(0, 10)}
                    </Moment>
                </td>
            </Tr>
        ))
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <Tr>
                        <th>작성자</th>
                        <th>글 제목</th>
                        <th>글 내용</th>
                        <th>작성 날짜</th>
                    </Tr>
                    {boardDetail}
                    </thead>
                </table>
            </div>
        );
    }
}

const Tr = styled.tr`
  cursor: pointer;
`;

export default connect(null)(BoardList);