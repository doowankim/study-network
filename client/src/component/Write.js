import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createPost } from '../actions/postActions'; 

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            text: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e) {
        this.setState({ [ e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const postData = {
            name: this.state.name,
            title: this.state.title,
            text: this.state.text
        };
        this.props.createPost(postData, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input 
                            type="title"
                            className={classNames('form-control', {
                                'is-invalid': errors
                            })}
                            placeholder="제목을 입력하세요"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                        {errors && <div className="invalid-feedback">{errors}</div>}
                    </div>
                    <input 
                        type="submit"
                        value="Submit"
                        className="btn btn-info btn-block mt-4"
                    /> 
                </form>
            </div>
        );
    }
}

Write.propTypes = {
    posts: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

Write.defaultProps = {
    type: 'text'
};

const mapStateToProps = state => ({
    posts: state.posts,
    errors: state.errors
});

export default connect(mapStateToProps, { createPost })(withRouter(Write));