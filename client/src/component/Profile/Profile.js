import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteAccount } from "../../actions/profileActions";

class Profile extends Component {

    onDeleteClick(e) {
        this.props.deleteAccount();
    }

    render() {
        const { user } = this.props.auth;
        return (
            <Body>
                <Container>
                    {/*<Button>*/}
                    {/*    <button type="button" className="btn btn-primary">나가기</button>*/}
                    {/*</Button>*/}
                    <Profiles>
                        <div>
                            <img
                                className="rounded-circle"
                                src={user.avatar}
                                alt={user.name}
                                style={{ width: '25px', marginRight: '5px' }}
                                title="display an image"
                            />
                            {user.name}
                        </div>
                        <Email>{user.email}</Email>
                    </Profiles>
                        <H2>스터디플랫폼 계정</H2>
                    <Item>
                        <List>
                            <SLink to='/editprofile'>개인정보 변경</SLink>
                        </List>
                        <List>
                            <SLink to='/myboard'>내가 쓴 글</SLink>
                        </List>
                        <button
                            onClick={this.onDeleteClick.bind(this)}
                            className="btn btn-danger"
                        >
                            회원 탈퇴
                        </button>
                    </Item>
                </Container>
            </Body>
        );
    }
}

const Body = styled.div`
  letter-spacing: -0.5px;
  background-color: #f2f2f2;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  margin: 8px auto;
  //max-width: 576px;
  padding: 20px;
  border: 0;
`;

const Profiles = styled.div`
  position: relative;
  //padding: 24px 10px 24px 92px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 10px;
  background-color: #fff;
`;

const H2 = styled.div`
  padding: 16px 0 8px 8px;
  color: #737373;
  font-size: 12px;
  font-weight: bold;
`;

const Item = styled.div`
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const List = styled.div`
  //display: list-item;
  text-align: -webkit-match-parent;
`;

const SLink = styled(Link)`
  display: block;
  padding: 0 16px;
  line-height: 48px;
  border-bottom: 1px solid #f2f2f2;
  color: #292929;
  font-size: 14px;
  background-color: #fff;
`;

const Email = styled.div`
  line-height: 18px;
  color: #a6a6a6;
  font-size: 14px;
  padding-left: 30px;
`;

Profile.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {deleteAccount})(Profile);