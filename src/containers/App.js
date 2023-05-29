import React from "react";
import 'tachyons';

import CardList from "../components/CardList";
import SearchComponent from "../components/SearchComponent";
import Scroll from '../components/Scroll.js'
import './App.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            searchBox: '',
            robots: []
        }
    }
    
    onSearching = (event) => {
        this.setState( {searchBox: event.target.value } )
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {this.setState({robots: users})});
    }

    render(){
            const searchedRobot = this.state.robots.filter((robot) => {
            return(robot.name.toLowerCase().includes(this.state.searchBox.toLowerCase()))
        })
        return(
            <div className="tc">
                <div>
                    <h1>Robofriends</h1>
                </div>
                <SearchComponent search = {this.onSearching} />
                <Scroll>
                    <CardList robots={searchedRobot}/>
                </Scroll>
            </div>
        )
    }
}

export default App