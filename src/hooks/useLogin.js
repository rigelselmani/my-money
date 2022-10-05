import {useState, useEffect} from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = (email, password)=>{
    const [isCancelled, setIsCancelled]=useState(false)
    const [error,setError]=useState(null)
    const [isePending,setIsPending]=useState(false)
    const {dispatch} =useAuthContext()

    const login = async()=>{
        setError(null)
        setIsPending(true)
    //login the user
    try {
       const res= await projectAuth.signInWithEmailAndPassword(email, password)

        //dispatch login action
        dispatch({type: "LOGIN", payload: res.user})

        //update state
        if(!isCancelled){
            setError(err.message)
            setIsPending(false)
           }
        }
        catch (err){
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(()=>{
       return ()=>setIsCancelled(true)
    }, [])

    return {login, error, isePending}
}