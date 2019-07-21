import React, {Component} from 'react';
import './App.css';
import OverviewAPIContainer from "./containers/API/OverviewAPIContainer";

class App extends Component {

    render() {
        return (


            <div className="App">
                <div className="dropdown">
                    <button className="dropbtn">Menu</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

                <OverviewAPIContainer/>
            </div>
        );
    }
}

export default App;
