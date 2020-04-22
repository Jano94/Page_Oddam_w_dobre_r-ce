import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    const initialErrors = {email: "", password: ""};
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(initialErrors);
    const handleSubmit = (e) => {
        e.preventDefault();
                if (email.indexOf("@") === -1 || email.length < 4) {
            setError({
                ...error,
                email: "Podany email jest nieprawidłowy"
            });
        }
    };
    return (
        <>
            <article className="row">
                <div className="col-4"> </div>
                <div className="col-4">
                    <form onSubmit={handleSubmit} id="sign-in-form" className="login-register-form">
                    <label className="label-text">
                        Email
                        <input type="email"
                               id="email"
                               name="email"
                               className="login-text"
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <label className="label-text">
                        Hasło
                        <input type="password"
                               id="password"
                               name="password"
                               className="login-text"
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                        <div className="btn-section">
                            <button className="btn btn-set"><NavLink className="link-primary" to="/register">Załóż konto</NavLink></button>
                            <button type="submit" className="btn btn-login">Zaloguj się</button>
                        </div>
                    </form>
                </div>
                <div className="col-4"> </div>

            </article>
            </>
    );
    // async function login() {
    //     try {
    //         await firebase.login(email, password)
    //     } catch (e) {
    //         alert(error.massage)
    // }


};
export default LoginForm;