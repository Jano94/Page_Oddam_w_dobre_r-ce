import React, {useState} from "react";

const Form = () => {
    const initialErrors = {name: "", email: "", message: ""};
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState(initialErrors);
    // const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(initialErrors);
        if (username.length < 3) {
            setErrors({...errors,
                name: "Podane imię jest niepoprawne"});
        }
         else if (email.indexOf("@") === -1 || email.length < 8) {
            setErrors({...errors,
                email: "Podany email jest nieprawidłowy"});
        }
        else if (message.length < 5) {
            setErrors({...errors,
                message: "Wiadomość musi zawierać 120 znaków"});
        }
        // const allErrors = Object.values(errors).reduce((acc, x) => [...acc, x]);
        // console.log(allErrors.length === 0 ? 'Wszystko jest okej' : 'Sa bledy');
    };
    return (

        <form onSubmit={handleSubmit} className="form">
            <div className="name-email">
                <label className="label-text">
                    Wpisz swoje imię
                    <input type="text"
                           name="name"
                           placeholder="Imię"
                           value={username}
                           className="input-text"
                           onChange={e => setUsername(e.target.value)}
                    />
                    {errors.name && <p className="error"> {errors.name}</p>}
                </label>


                <label className="label-text">
                    Wpisz swój email
                    <input type="email"
                           placeholder="Email"
                           value={email}
                           className="input-text"
                           onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </label>
            </div>
            <label className="label-text">
                Wpisz swoją wiadomość
                <textarea name="message"
                          placeholder="Wiadomość"
                          value={message}
                          className="input-text"
                          onChange={e => setMessage(e.target.value)}
                />
            </label>
            {errors.message && <p className="error">{errors.message}</p>}
        <button className="submit-button"> Wyślij </button>
        </form>
    )
};
export default Form;
