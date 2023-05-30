import React, { useState, useEffect } from "react";
import 'tachyons';

import CardList from "../components/CardList";
import SearchComponent from "../components/SearchComponent";
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

export default function HooksApp(){
    const [robot, setRobots] = useState([])
    const [searchBox, setSearchBox] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setRobots(users))
    })

    const onSearching = (event) => {
        setSearchBox(event.target.value)
    }

    const changingTitle = (pageTitle) => {
        document.title = pageTitle
    }
    
    const searchedRobot = robot.filter((robot) => {
        return(robot.name.toLowerCase().includes(searchBox.toLowerCase()))
    })

    return(
        <div className="tc">
            { changingTitle('Robofriends') }
            <div>
                <h1>Robofriends</h1>
            </div>
            <SearchComponent search = {onSearching} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={searchedRobot}/>
                </ErrorBoundary>
                
            </Scroll>
        </div>
    )

}