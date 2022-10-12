/*jshint esversion: 6 */
/*jshint esversion: 8 */
import React, { useRef, useState, useEffect } from 'react';

const Form = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <div>
        {success ? (
            <section>
                <h3>You are logged in!</h3>
            </section>
        ):(
        <section>
            <p ref={errRef} className={errMsg? "errMsg": "offscreen"}
             aria-live="assertive">{errMsg}</p>
             <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                /> <br />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
                <br />
                <button>Sign In</button>
            </form>
            <p>
            Need an Account? <a href="#">Sign Up</a>
            </p>
        </section>
        )}
        </div>
    )
}

export default Form
