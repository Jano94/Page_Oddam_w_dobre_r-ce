import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    const initialErrors = { email: "", password: ""};
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(initialErrors);
    const [setLogin] = useState("");

    const handleLogin = (e)=> {
        e.preventDefault();
        setLogin(email)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(initialErrors);
                if (email.indexOf("@") === -1 || email.length < 4) {
                    setErrors({
                        ...errors,
                        email: "Podany email jest nieprawidłowy"
                    })
                }
                else if (password.length < 6) {
                        setErrors({...errors,
                            password: "Hasło jest za krótkie"});
                }
    };
    return (
        <>
            <article className="row">
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-2 col-1"> </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-10">
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
                        {errors.email && <p className="error"> {errors.email}</p>}
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
                        {errors.password && <p className="error"> {errors.password}</p>}
                        <div className="btn-section">
                            <button className="btn btn-set">
                                <NavLink className="link-primary" to="/register">Załóż konto</NavLink>
                            </button>
                            <button type="submit" className="btn btn-login" onChange={e => setLogin(handleLogin)}>Zaloguj się</button>
                        </div>
                    </form>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-2 col-1"> </div>

            </article>
            </>
    );
};
export default LoginForm;