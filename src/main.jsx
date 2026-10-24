import React from "react";
import ReactDOM from "react-dom/client"
import { useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Login from "./components/login";
import SignUp from "./components/signup";
import Landing from "./landing";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {

    const [users, setusers] = useState(
        [
            {
                username: "nazeer", password: "123"
            },
            {
                username: "abc", password: "123"
            }
        ]
    )

    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login users={users} setusers={setusers}  />}></Route>
                    <Route path='/signup' element={<SignUp users={users} setusers={setusers} />}></Route>
                    <Route path='/landing' element={<Landing />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

root.render(
    <App />

)
