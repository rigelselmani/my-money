import {useState} from "react";

import styles from "./Signup.module.css";

export default function Signup(){

    const [displayName,setDisplayName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(email, password, displayName)
    }
    return (
        <form onSubmit={handleSubmit} className={styles["signup-form"]}>
            <h2>Signup</h2>
            <label>
                <span>name:</span>
                <input 
                    type="name"
                    onChange={(e)=>setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <label>
                <span>email:</span>
                <input 
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button className="btn">Signup</button>
        </form>
    )
}