import {useAuthContext} from "../../hooks/useAuthContext";

import styles from "./Home.module.css";

//components
import TransactionForm from "./Transaction.Form";

export default function Home (){
    const {user}=useAuthContext()
    return (
        <div className={styles.container}>
           <div className={styles.content}>
            transaction list
           </div>
           <div className={styles.sidebar}>
            <TransactionForm uid={user.uid}/>
           </div>
        </div>
    )
}