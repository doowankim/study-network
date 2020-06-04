// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import {logoutUser} from '../../actions/authActions';
// import {deleteAccount} from '../../actions/profileActions';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// class Navbar extends Component {
//   onLogoutClick(e) {
//     this.props.logoutUser();
//   }

//   onDeleteClick(e) {
//     this.props.deleteAccount();
//   }
//   render() {
//     const {isAuthenticated, user} = this.props.auth;

//     const authLinks = (
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item text-center">
//           <Container>
//             <img
//               className="rounded-circle"
//               src={user.avatar}
//               alt={user.name}
//               style={{
//                 width: '25px',
//                 height: '25px',
//                 marginRight: '5px',
//                 marginTop: '5px',
//               }}
//               title="You must have a Gravatar connected to your email to display an image"
//             />{' '}
//             <li className="nav-item dropdown">
//               <MyPage
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 마이페이지
//               </MyPage>
//               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <DropDown1 className="dropdown-item" href="#">
//                   <div>
//                     <img
//                       className="rounded-circle"
//                       src={user.avatar}
//                       alt={user.name}
//                       style={{width: '25px', marginRight: '5px'}}
//                       title="display an image"
//                     />
//                     {user.name}
//                   </div>
//                   <Email>{user.email}</Email>
//                 </DropDown1>
//                 <div className="dropdown-divider"></div>
//                 <DropDown2
//                   className="dropdown-item"
//                   onClick={this.onDeleteClick.bind(this)}
//                 >
//                   회원 탈퇴
//                 </DropDown2>
//               </div>
//             </li>
//             <a
//               href="/"
//               onClick={this.onLogoutClick.bind(this)}
//               className="nav-link"
//             >
//               <Text>로그아웃</Text>
//             </a>
//           </Container>
//         </li>
//       </ul>
//     );

//     const guestLinks = (
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//           <Link className="nav-link" to="register">
//             <Text>회원가입</Text>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/login">
//             <Text>로그인</Text>
//           </Link>
//         </li>
//       </ul>
//     );
//     return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             <Title>Study-Platform</Title>
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#mobile-nav"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div>
//             <ul className="navbar-nav mr-auto">
//               {isAuthenticated ? authLinks : guestLinks}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// const Container = styled.div`
//   display: flex;
// `;

// const Text = styled.div`
//   font-size: 13px;
//   font-weight: 600;
//   display: flex;
// `;

// const Title = styled.div`
//   font-size: 17px;
//   font-weight: 700;
// `;

// const MyPage = styled.a`
//   font-size: 13px;
//   font-weight: 600;
//   display: flex;
// `;

// const DropDown1 = styled.div`
//   font-size: 13px;
// `;

// const DropDown2 = styled.button`
//   font-size: 13px;
//   color: white;
//   background: rgb(255, 107, 107);
//   border-width: initial;
//   border-style: none;
//   border-color: initial;
//   border-image: initial;
//   border-radius: 4px;
// `;

// const Email = styled.div`
//   line-height: 18px;
//   color: #a6a6a6;
//   font-size: 14px;
//   padding-left: 30px;
// `;

// Navbar.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, {logoutUser, deleteAccount})(Navbar);

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {deleteAccount} from '../../actions/profileActions';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navbar = () => {
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.auth);
  const authDetailData = authStore.user;
  const AuthenticateData = authStore.isAuthenticated;

  const onLogoutClick = (e) => {
    dispatch(logoutUser());
  };

  const onDeleteClick = (e) => {
    dispatch(deleteAccount());
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
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
            {AuthenticateData ? (
              <>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item text-center">
                    <Container>
                      <img
                        className="rounded-circle"
                        src={authDetailData.avatar}
                        alt={authDetailData.name}
                        style={{
                          width: '25px',
                          height: '25px',
                          marginRight: '5px',
                          marginTop: '5px',
                        }}
                        title="You must have a Gravatar connected to your email to display an image"
                      />{' '}
                      <li className="nav-item dropdown">
                        <MyPage
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          마이페이지
                        </MyPage>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <DropDown1 className="dropdown-item" href="#">
                            <div>
                              <img
                                className="rounded-circle"
                                src={authDetailData.avatar}
                                alt={authDetailData.name}
                                style={{width: '25px', marginRight: '5px'}}
                                title="display an image"
                              />
                              {authDetailData.name}
                            </div>
                            <Email>{authDetailData.email}</Email>
                          </DropDown1>
                          <div className="dropdown-divider"></div>
                          <DropDown2
                            className="dropdown-item"
                            onClick={onDeleteClick}
                          >
                            회원 탈퇴
                          </DropDown2>
                        </div>
                      </li>
                      <a href="/" onClick={onLogoutClick} className="nav-link">
                        <Text>로그아웃</Text>
                      </a>
                    </Container>
                  </li>
                </ul>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

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

const MyPage = styled.a`
  font-size: 13px;
  font-weight: 600;
  display: flex;
`;

const DropDown1 = styled.div`
  font-size: 13px;
`;

const DropDown2 = styled.button`
  font-size: 13px;
  color: white;
  background: rgb(255, 107, 107);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 4px;
`;

const Email = styled.div`
  line-height: 18px;
  color: #a6a6a6;
  font-size: 14px;
  padding-left: 30px;
`;

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default Navbar;
