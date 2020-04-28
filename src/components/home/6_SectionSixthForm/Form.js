import React, {useState} from "react";

async function sendMessage(username, email, message, successCallback, failCallback) {
    try {
        const response = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify({
                name: username,
                email,
                message
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok !== true) {
            throw await response.json();
        }
        const responseJson = await response.json();
        successCallback(responseJson);
    } catch(e) {
        failCallback(e);
    }
}

const Form = () => {
    const initialErrors = {name: "", email: "", message: ""};
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState(initialErrors);
   const [success , setSuccess] = useState("");

   const handleSuccess = contact => {
       console.log(contact);
        if (contact.status === "success") {
            setSuccess("Wiadomość została przesłana",
                 setUsername(""),
                 setEmail(""),
                 setMessage(""));
        } else {
            let errors = "";
            setSuccess("");
            contact.errors.forEach(error => {
                error += `${error.param}`;
            });
            setErrors({...errors,
                email: "",
                message: "",
                name: ""
            })
        }
    };
   const handleFail = error => {
       console.log(error);
   };
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
        } else if (message.length < 120) {
            setErrors({
                ...errors,
                message: "Wiadomość musi zawierać 120 znaków"});
        } else {
             setErrors(initialErrors);
             sendMessage(username, email, message, handleSuccess, handleFail);
         }
    };
    return (

        <form onSubmit={handleSubmit} className="form">
            <div className="form-name-email">
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
            <div className="form-msg-button">
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
                {{success} && <p> {success}</p>}

        <button className="submit-button"> Wyślij </button>
            </div>
        </form>
    )
};
export default Form;
