import React, {Component} from 'react';
import './App.css';
import GroceryContainer from "./containers/API/GroceryContainer";

class App extends Component {

    render() {
        return (

            <div>
                <br/><br/>
                <div>
                    <GroceryContainer/>
                </div>
            </div>
        );
    }
}

export default App;
