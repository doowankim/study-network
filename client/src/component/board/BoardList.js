import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import styled from "styled-components";
import BoardModal from "./BoardModal";

class BoardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    onOpenModal = () => {
        this.setState({ isModalOpen: true });
    }

    onCloseModal = () => {
        this.setState({ isModalOpen: false });
    }
    render() {
        const boardDetail = this.props.posts.map(post => (
            <Tr onClick={this.onOpenModal}>
                <td>{post.name}</td>
                <td>{post.title}</td>
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
                        <th>작성 날짜</th>
                    </Tr>
                    {boardDetail}
                    </thead>
                </table>
                <BoardModal isOpen={this.state.isModalOpen} close={this.onCloseModal} />
            </div>
        );
    }
}

const Tr = styled.tr`
  cursor: pointer;
`;

export default connect(null)(BoardList);