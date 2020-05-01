import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import styled from "styled-components";

class BoardDetail extends Component {
    render() {
        const boardDetail = this.props.posts.map(po => (
            <Tr>
                <td>{po.name}</td>
                <td>{po.title}</td>
                <td>{po.text}</td>
                <td>
                    <Moment format="YYYY년 MM월 DD일">
                        {po.date.substring(0, 10)}
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

export default connect(null)(BoardDetail);