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
                <table>
                    <thead>
                        <tr>
                            <li>
                                <Link to='/editprofile'>개인정보 변경</Link>
                            </li>
                        </tr>
                        <tr>
                            <li>
                                <Link to='/editpassword'>비밀번호 변경</Link>
                            </li>
                        </tr>
                    </thead>
                    <li>
                        <button
                            onClick={this.onDeleteClick.bind(this)}
                            className="btn btn-danger"
                        >
                            회원 탈퇴
                        </button>
                    </li>
                </table>
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