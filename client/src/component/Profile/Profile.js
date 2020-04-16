import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteAccount } from "../../actions/profileActions";

const Container = styled.div`
  margin: 8px auto;
  max-width: 576px;
  padding: 20px;
  border: 0;
`;

const Profiles = styled.div`
  //display: block;
`;

const Admin = styled.div`
  padding: 16px 0 8px 8px;
  color: #737373;
  font-size: 14px;
  font-weight: bold;
`;

const Item = styled.ol`
  display: block;
  margin-block-start: 5px;
  margin-block-end: 5px;
  margin-inline-start: 1px;
  margin-inline-end: 1px;
  padding-inline-start: 40px;
`;

const List = styled.li`
  //display: list-item;
  //text-align: -webkit-match-parent;
  padding-top: 5px;
`;

class Profile extends Component {

    onDeleteClick(e) {
        this.props.deleteAccount();
    }

    render() {
        const { user } = this.props.auth;
        return (
            <Container>
                <Profiles>
                    <div>
                        <img
                            className="rectangular"
                            src={user.avatar}
                            alt={user.name}
                            style={{ width: '25px', marginRight: '5px' }}
                            title="display an image"
                        />
                        {user.name}
                    </div>
                    <span>{user.email}</span>
                </Profiles>
                <Admin>
                    <div>스터디플랫폼 계정</div>
                </Admin>
                <Item>
                    <List>
                        <Link to='/editprofile'>개인정보 변경</Link>
                    </List>
                    <List>
                        <Link to='/editpassword'>비밀번호 변경</Link>
                    </List>
                    <List>
                        <button
                            onClick={this.onDeleteClick.bind(this)}
                            className="btn btn-danger"
                        >
                            회원 탈퇴
                        </button>
                    </List>
                </Item>
            </Container>
        );
    }
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {deleteAccount})(Profile);