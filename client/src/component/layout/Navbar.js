import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
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
                            <a
                                href="/profile"
                                className="nav-link"
                            >
                            <img
                                    className="rounded-circle"
                                    src={user.avatar}
                                    alt={user.name}
                                    style={{ width: '25px', marginRight: '5px' }}
                                    title="You must have a Gravatar connected to your email to display an image"
                            />{' '}
                                마이페이지
                            </a>
                        <a
                            href=""
                            onClick={this.onLogoutClick.bind(this)}
                            className="nav-link"
                        >
                            로그아웃
                        </a>
                    </Container>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="register">
                        회원가입
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="login">
                        로그인
                    </Link>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="dashboard">
                        Study-Platform
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