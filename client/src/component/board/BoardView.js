import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../actions/postActions';
import BoardList from './BoardList';

const BoardView = () => {
  const dispatch = useDispatch();

  const board = useSelector((state) => state.board);
  console.log(board);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  let postContent;
  if (board.posts === null || board.loading) {
    postContent = null;
  } else {
    if (Object.keys(board.posts).length > 0) {
      postContent = (
        <div>
          <BoardList posts={board.posts.posts} />
        </div>
      );
    }
  }
  return <div>{postContent}</div>;
};

export default BoardView;
