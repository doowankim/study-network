import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import styled from "styled-components";
import "./Card.css";

class BoardList extends Component {
    render() {
        const boardDetail = this.props.posts.map(post => (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body text-dark">
                                <Title className="card-title">{post.title}</Title>
                                <Text className="card-text text-dark">{post.text}</Text>
                                <SubText>
                                    <Moment format="YYYY년 MM월 DD일">
                                        {post.date.substring(0, 10)}
                                    </Moment>
                                </SubText>
                                <SubText>by {post.name}</SubText>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
        return (
            <div>
                {boardDetail}
            </div>
        );
    }
}

const Title = styled.h4`
  cursor: pointer;
`;

const Text = styled.p`
  flex: 1;
  line-height: 1.4;
  cursor: pointer;
`;

const SubText = styled.span`
  display: flex;   
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: .05em;
  margin: 5px 0 0 10px;
`;

export default connect(null)(BoardList);