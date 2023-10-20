import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


 export default function Home (){
  // const [name,setName] =useState("");
//   // const [email,setEmail] = useState("");
//   // const [contact,setContact] = useState("");
//   // const [password,setPassword] = useState("");


//   const getUserData = () =>{
//     console.log(name,email)
//   }

//   return (
//     <div className="main">
//       <div class="container">
//         <h2>Sign Up</h2>

//         <form class="form-inline" action="/action_page.php">
//           <div class="form-group">
//             <label for="usr">Name:</label>
//             <input
//               type="text"
//               class="form-control"
//               id="usr"
//               placeholder="Enter your name" onChange={(e)=>(e.target.value)}
//             />
//           </div>
//           <div class="form-group">
//             <label class="sr-only" for="email">
//               Email:
//             </label>
//             <input
//               type="email"
//               class="form-control"
//               id="email"
//               placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}
              
//             />
//           </div>
//           <div class="form-group2">
//             <label class="sr-only" for="email">
//               contact
//             </label>
//             <input
//               type="number"
//               class="form-control"
//               id="email"
//               placeholder="Enter your contact "
//               name="contact" onChange={(e)=>setContact(e.target.value)}
//             />
//           </div>
//           <div class="form-group">
//             <label class="sr-only" for="pwd">
//               Password:
//             </label>
//             <input
//               type="password"
//               class="form-control"
//               id="pwd"
//               placeholder="Enter password"
//               name="pwd" onChange={(e)=>setPassword(e.target.value)}
//             />
//           </div>
//           <div class="checkbox">
//             <label>
//               <input type="checkbox" name="remember" /> Remember me
//             </label>
//           </div>
//           <br />
//           <div class="form-group">
//             <label for="sel1">Select your city (select one):</label>
//             <select class="form-control" id="sel1">
//               <option>Delhi </option>
//               <option>Mumbai </option>
//               <option>Punjab</option>
//               <option>Bhopal</option>
//             </select>
//             <br />
//           </div>
          
//         </form>
//       </div>
//        <h1>{name}</h1>
//        <h1>{contact}</h1>
//        <h1>{password}</h1>
//        <h1>{email}</h1>
//        <button type="submit" class="btn btn-default" onClick={getUserData}>
//             Submit
//           </button>
//       {/* <button onClick={getUserData}>Get data</button> */}
//     </div>
    
//   );

const[userData,setUserData] = useState({ 
  userName :"",
  userData :"",
  userPassword:"",
  usercontact:""

})
const getUserData = () =>{
      console.log(userData)
   }
   return(
    <>
      Name: <input type="text" onChange={(e)=>setUserData({...userData,userName:e.target.value})}/>
     Email: <input type="email" onChange={(e)=>setUserData({...userData,userEmail:e.target.value})}
      />
    <h1>{userData.userName}</h1>
    <h1>{userData.userEmail}</h1>
    <button onClick={getUserData}>submit</button>
    </>

   )
  
};
