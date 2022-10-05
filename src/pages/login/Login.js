import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

import Styles from "./Login.module.css";


export default function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {login, error, isPending}=useLogin()


   const handleClick=(e)=>{
    e.preventDefault()
      login(email, password)
   }
    return(
        <form className={Styles["login-form"]} onSubmit={handleClick}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input 
                   type="email"
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}

                />
            </label>
            <label>
               <span>password:</span>
               <input
                 type="password"
                 onChange={(e)=> setPassword(e.target.value)}
                 value={password}
               />
            </label>
            {!isPending && <button className="btn">Login</button>}
            {isPending && <button className="btn" diabled>...loading</button>}
            {error && <p>{error}</p>}
        </form>
    )
} 