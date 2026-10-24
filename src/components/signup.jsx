import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function SignUp(props) {

    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()

    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()

    function handleUserinput(event){
        setEusername(event.target.value)
    }

    function handlePassinput(event){
        setEpassword(event.target.value)
    }

    const addUser = ()=>{
        setusers(
            [...users,{username:eusername, password:epassword}])
            navigate("/")
    }


    return (
        <div className="bg-black p-10 ">
            <div className="bg-white border rounded-md p-10">
                <h1 className="text-3xl font-medium">Hey hi!</h1>
                <p>Signup here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"  placeholder="username" onChange={handleUserinput} />
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"  placeholder="password" onChange={handlePassinput} />
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"  placeholder="confirm password " />
                    
                    <button className="p-2 bg-[#ddcb0a] w-fit active:bg-indigo-600 cursor-pointer rounded-md " onClick={addUser}>
                        <p>Sign up</p>
                    </button>

                    <p>Already have an account? <Link to={"/"} className='underline text-blue-400 active:text-black' >Login</Link></p>
                </div>
            </div>


        </div>

    )

}

export default SignUp