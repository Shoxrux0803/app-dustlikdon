import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/authAction'
import '../components/main.scss'
class Login extends Component {
    render() {
        const login = (event, values) => {
            this.props.loginUser(values)
        };
        return (
            <div>
                <div className="container bgcol">
                    <div className="row vh-100 align-items-center">
                        <div className="col-4 offset-4">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm>
                                        <AvField onValidSubmit={login}
                                            name='phoneNumber'
                                            placeholder='Phone number'
                                            type='text'
                                            required
                                        />
                                        <AvField
                                            name='password'
                                            placeholder='Password'
                                            type='password'
                                            required
                                        />
                                        <button type={'submit'} className={'btn btn-success btn-block'}>Login</button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(null, {loginUser})(Login);