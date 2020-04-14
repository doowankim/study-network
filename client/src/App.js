import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Landing from "./component/layout/Landing";
import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Dashboard from "./component/Dashboard";
import Profile from "./component/Profile/EditProfile";
import PrivateRoute from "./component/common/PrivateRoute";
import Write from "./component/Write";

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
                        <Route exact path="/landing" component={Landing} />
                        <div className="container">
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/profile"
                                    component={Profile}
                                />
                            </Switch>
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/write"
                                    component={Write}
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