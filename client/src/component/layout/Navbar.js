import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-size: 13px;
  font-weight: 600;
  display: flex;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

class Navbar extends Component {

    onLogoutClick(e) {
        this.props.logoutUser();
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item text-center">
                    <Container>
                            <img
                                    className="rounded-circle"
                                    src={user.avatar}
                                    alt={user.name}
                                    style={{ width: '25px', height: '25px', marginRight: '5px', marginTop: '5px' }}
                                    title="You must have a Gravatar connected to your email to display an image"
                            />{' '}
                            <a
                                href="/profile"
                                className="nav-link"
                            >
                                <Text>마이페이지</Text>
                            </a>
                        <a
                            href="/"
                            onClick={this.onLogoutClick.bind(this)}
                            className="nav-link"
                        >
                            <Text>로그아웃</Text>
                        </a>
                    </Container>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="register">
                        <Text>회원가입</Text>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        <Text>로그인</Text>
                    </Link>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="dashboard">
                        <Title>Study-Platform</Title>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            {isAuthenticated ? authLinks : guestLinks}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);