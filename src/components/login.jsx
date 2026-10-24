import { useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
function Login(props){

    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [regUser, setReguser] = useState(true)
    const navigate = useNavigate()
    const users = props.users

    function handleUserinput(event){
        setEusername(event.target.value)
    }

    function handlePassinput(event){
        setEpassword(event.target.value)
    }
    
    var userNotfound = false

function checkUser(){
    console.log(users)
    users.forEach(function(item){
        if(item.username === eusername && item.password === epassword){
            console.log("Success")
            userNotfound = true
            navigate("/landing", {state:{user:eusername}})
        }

    })

    if(userNotfound === false){
        console.log("login failed") 
        setReguser(false)
    }
}
    
    return (
                <div className="bg-black p-10 ">
            <div className="bg-white border rounded-md p-10">
                <h1 className="text-3xl font-medium">Hey hi!</h1>
                {regUser?<p>I help you manage your activities after you login :)</p> : <p className='text-red-500'>Please Signup before you login</p> }
                

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"  placeholder="username"  onChange={handleUserinput} />
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"  placeholder="password"  onChange={handlePassinput} />
                    
                    <button className="p-2 bg-[#8272DA] w-fit active:bg-indigo-600 cursor-pointer rounded-md " onClick={checkUser}>
                        <p>Login</p>
                    </button>

                    <p>Create a new account <Link to={"/signup"} className='underline text-blue-400 active:text-black' >Sign up</Link></p>
                </div>
            </div>


        </div>
    )
}

export default Login