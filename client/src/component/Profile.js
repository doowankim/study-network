import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Container = styled.div`
  margin: 8px auto;
  max-width: 576px;
  padding: 0;
  border: 0;
`;

const Profiles = styled.div`
  //position: relative;
  padding: 24px 16px 24px 92px;
`;

const Admin = styled.div`
  padding: 16px 0 8px 8px;
  color: #737373;
  font-size: 14px;
  font-weight: bold;
`;

class Profile extends Component {
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
                    <span>이메일</span>
                </Profiles>
                <Admin>
                    <div>스터디플랫폼 계정</div>
                </Admin>
                <div>개인정보 변경</div>
                <div>비밀번호 변경</div>
                <div>회원 탈퇴</div>
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

export default connect(mapStateToProps)(Profile);