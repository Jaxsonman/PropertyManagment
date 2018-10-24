import React, { Component } from 'react';
import {connect } from 'react-redux';

import * as actions from '../../actions';

import SigninForm from './signinForm';

class Signin extends Component {

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            this.props.history.push('/dashboards');
        })
    }
    render() {
        return (
            <div className='sign-in'>
                <SigninForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null, actions)(Signin);