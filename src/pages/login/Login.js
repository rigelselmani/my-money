import Styles from "./Login.module.css";

export default function Login(){
    return(
        <form className={Styles["login-form"]}>
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input 
                   type="email"
                />
            </label>
            <label>
               <span>Password:</span>
               <input
                 type="password"
               />
            </label>
            <button className="btn">Login</button>
        </form>
    )
} 