import { useState } from "react";

const Form = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "", confirmPassword: "" })
    const [error, setError] = useState({ username: false, email: false, password: false, confirmPassword: false })
    const handleSubmit = (e) => {
        e.preventDefault();


        const { username, email, password, confirmPassword } = user;
        const newError = {
            username: username.length < 8,
            email: !email.trim().endsWith("@gmail.com"),
            password: password.length < 8,
            confirmPassword: password !== confirmPassword
        };

        setError(newError);
        const hasError = Object.values(newError).some(value => value === true);
        if (!hasError) alert("Form submitted successfully!");
    }
    const handleInput = (value, prop) => {

        setUser({ ...user, [prop]: value });

    }
    return (
        <div className="container">
            <div><img src="/images/woman.png" alt="" /></div>
            <form onSubmit={handleSubmit} >


                <div>
                    <input type="text" placeholder="Username" value={user.username} onChange={(e) => handleInput(e.target.value, "username")} />
                    {error.username && <p className="error">Username must be 8 characters long</p>}
                </div>

                <div>
                    <input type="text" placeholder="Email" value={user.email} onChange={(e) => handleInput(e.target.value, "email")} />
                    {error.email && <p className="error">Email should have @gmail</p>}
                </div>

                <div>
                    <input type="password" placeholder="Password" value={user.password} onChange={(e) => handleInput(e.target.value, "password")} />
                    {error.password && <p className="error">Password should be 8 letters long</p>}
                </div>

                <div>
                    <input type="password" placeholder="Confirm Password" value={user.confirmPassword} onChange={(e) => handleInput(e.target.value, "confirmPassword")} />
                    {error.confirmPassword && <p className="error">Password didn't match</p>}
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
