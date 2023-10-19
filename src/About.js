import { useState } from "react";

export default function About(){
    const [userName,setUserName]= useState("John")
    const [userAge,setUserAge] = useState(24)
    const [userId,setUserId] = useState(105)
    const [ userNumber,setUserNumber] = useState(0)
    // const [userLogin,setUserLogin] = useState(true)
    const changeInc =() =>{
         setUserNumber(userNumber+1)
    }
    
    const changeDec =() =>{
        setUserNumber(userNumber-1)

    }

    let name ="smith"
    const changeName =() =>{
        name ="john smith";
        console.log(name);

        setUserName("hello john smith")
    }


    return(
        <>
            <h1>Hello</h1>
            <h2>{userName}</h2>
            <h2>{userAge}</h2>
            <h2>{userId}</h2>
            {/* <h2>{userLogin?"userLogin":"userLogin"}</h2> */}
            <button onClick={changeName}>Change</button>
        
            <>
                <button onClick={changeInc}>Increment</button>
                <span>{userNumber}</span>
                <button onClick={changeDec}>Decrement</button>
            </>


        </>
    )
}