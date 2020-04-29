import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from "react-moment";
import styled from "styled-components";
import { getPosts } from "../../actions/postActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BoardItems extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props.post;

        return (
            <div className="board">
                <div className="container">
                    <div className="row">
                        <table className="table table-hover">
                            <tbody>
                                {/*<Tr>*/}
                                {/*    <th scope="row">스터디</th>*/}
                                {/*    <td>{posts.posts.name}</td>*/}
                                {/*    <td>{posts.posts.title}</td>*/}
                                {/*    <td>*/}
                                {/*        <Moment format="YYYY년 MM월 DD일">*/}
                                {/*            {posts.posts.date.substring(0, 10)}*/}
                                {/*        </Moment>*/}
                                {/*    </td>*/}
                                {/*</Tr>*/}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const Tr = styled.tr`
  cursor: pointer;
`;

BoardItems.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(BoardItems)