import { useState } from "react";

import Styles from "./Login.module.css";


export default function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


   const handleClick=(e)=>{
    e.preventDefault()
      console.log(email, password)
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
            <button className="btn">Login</button>
        </form>
    )
} 