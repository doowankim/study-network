import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from "react-moment";

class MyWriting extends Component {
    render() {
        const myWrite = this.props.posts.map(post =>
            <tr key={post._id}>
                <td>{post.name}</td>
                <td>{post.title}</td>
                <td>{post.text}</td>
                <td>
                    <Moment format="YYYY년 MM월 YY일">
                        {post.date.substring(0, 10)}
                    </Moment>
                </td>
            </tr>
        )
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>작성자</th>
                        <th>글 제목</th>
                        <th>글 내용</th>
                        <th>작성 날짜</th>
                    </tr>
                    {myWrite}
                    </thead>
                </table>
            </div>
        );
    }
}

export default connect(null)(MyWriting);