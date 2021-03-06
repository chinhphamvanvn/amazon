import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';

function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo) {
            props.history.push("/");
        }
        return () => {

        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return <div className="form">
        <from onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h3>Signin</h3>
                </li>
                <li>
                    {loading && <div>Loading ...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value) }></input>
                </li>
                <li>
                    <label htmlFor="email">
                        Password
                    </label>
                    <lable for="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></lable>
                </li>
                <li>
                    <button type="submit" className="button primary">Signin</button>
                </li>
                <li>
                    New to amazon?
                </li>
                <li>
                    <Link to="/register" className="button">Create your amazon account</Link>
                </li>
            </ul>
        </from>
    </div>
}

export default SigninScreen;