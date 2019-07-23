import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    };


    render() {
        return (
            <div>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterOutput value={this.props.ctr}/>

                <hr/>

                <button onClick={this.props.onStoreResult}>Store Result</button>
                {this.props.results}
            </div>


        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        results: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT', payload: 2}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT', payload: 2}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);