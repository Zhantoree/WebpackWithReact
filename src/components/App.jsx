import React from 'react';
import "./App.scss"
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../reducers/reposReducer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main/Main";

const App = () => {
    const dispatch = useDispatch()


    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;