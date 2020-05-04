import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPosts } from "../../actions/postActions";
import BoardList from "./BoardList";

class BoardView extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts, loading } = this.props.board;

        let postContent;

        if (posts === null || loading) {
            postContent = null;
        } else {
            if (Object.keys(posts).length > 0) {
                postContent = (
                    <div>
                        <BoardList posts={posts.posts} />
                    </div>
                )
            }
        }

        return (
            <div className="board">
                <div className="container">
                    <div className="row">
                        <table className="table table-hover">
                            <tbody>
                            {postContent}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

BoardView.propTypes = {
    getPosts: PropTypes.func.isRequired,
    board: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    board: state.board
})

export default connect(mapStateToProps, { getPosts })(BoardView)