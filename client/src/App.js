import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Dashboard from "./component/layout/Dashboard";
import PrivateRoute from "./component/common/PrivateRoute";
import BoardWriting from "./component/board/BoardWriting";
import BoardList from "./component/board/BoardList";
import BoardDetailPage from "./component/board/BoardDetailPage";

import "./App.css";

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decoded = jwt_decode(localStorage.jwtToken);

    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 36000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());

        window.location.href = '/login'
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <div className="container">
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/boardDetailPage/:postId" component={BoardDetailPage} />
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/boardwriting"
                                    component={BoardWriting}
                                />
                            </Switch>
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/boardlist"
                                    component={BoardList}
                                />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;