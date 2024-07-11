import React, {useState} from 'react';
import "./App.css";
import {UserContext} from "./utils/useContext.js";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";

const App = () => {
    // const [followers, setFollowers] = useState(100);
    // const [following, setFollowing] = useState(1000);


    return (
        <div className={"app"}>
                <Header/>
                <Content/>
        </div>
    );
};

export default App;