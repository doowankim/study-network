import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import './Card.css';

const BoardList2 = () => {
  const boardDetail = props.posts.map((post) => (
    <div className="col-md-4">
      <a
        href={`/boardDetailPage/${post._id}`}
        className="card text-center"
        style={{textDecoration: 'none'}}
      >
        <div className="card-body text-dark" style={{cursor: 'pointer'}}>
          <Title className="card-title">{post.title}</Title>
          <Text className="card-text text-dark">
            <Transfer>{post.text}</Transfer>
          </Text>
          <SubDate>
            <Moment format="YYYY년 MM월 DD일">
              {post.date.substring(0, 10)}
            </Moment>
          </SubDate>
          <SubText>
            <img
              className="rounded-circle"
              src={post.avatar}
              alt={post.name}
              style={{
                width: '25px',
                height: '25px',
                marginRight: '5px',
                marginTop: '5px',
              }}
            />
            by {post.name}
          </SubText>
        </div>
      </a>
    </div>
  ));
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">{boardDetail}</div>
    </div>
  );
};

const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
`;

const Transfer = styled.div`
  text-shadow: 0 0 24px;
  position: relative;
  color: black;
  :hover {
    text-decoration: none;
  }
`;

const Text = styled.p`
  flex: 1;
  line-height: 1.4;
`;

const SubDate = styled.span`
  display: flex;
  font-size: 12px;
  color: #999;
  letter-spacing: 0.05em;
  margin: 5px 0 0 10px;
  padding-top: 10px;
  align-items: center;
`;

const SubText = styled.span`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  color: #999;
  letter-spacing: 0.05em;
  margin: 5px 0 0 10px;
  padding-top: 10px;
  align-items: center;
  border-top: 1px solid #f7f7f7;
`;

export default BoardList2;
