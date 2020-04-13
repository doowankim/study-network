import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";

import Landing from "./layout/Landing";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./component/Dashboard";

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
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;