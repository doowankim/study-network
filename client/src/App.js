import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./layout/Landing";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Register from "./auth/Register";
import Login from "./auth/Login";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/landing" component={Landing} />
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;