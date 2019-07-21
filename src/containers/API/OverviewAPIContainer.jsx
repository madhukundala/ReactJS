import React from 'react';
import {connect} from 'react-redux';
import {OverviewAction} from "../../actions/OveviewAction";

class OverviewAPIContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clientToken: '',
            selectedAccounts: ''
        };

        this.getDetails = this.getDetails.bind(this);
    }

    getDetails(e) {
        console.log("call here the getDetails ", this.state.clientToken);
        e.preventDefault();
        this.props.startOverviewSubmit(this.state.clientToken, this.state.selectedAccounts)
    }

    clientTokenChangedHandler = (event) => {
        this.setState({clientToken: event.target.value});
    };

    selectedAccountChangedHandler = (event) => {
        this.setState({selectedAccounts: event.target.value});
    };

    render() {

        return (
            <div>
                <div>
                    <label>Client Token : </label>
                    <input type="text" value={this.state.clientToken} onChange={this.clientTokenChangedHandler}/>
                </div>
                <div>
                    <label>Selected Accounts : </label>
                    <input type="text" value={this.state.selectedAccounts}
                           onChange={this.selectedAccountChangedHandler}/>
                </div>
                <div>
                    <button onClick={this.getDetails}>Submit</button>
                    <button onClick={this.getDetails}>Clear</button>
                </div>


                {this.props.result ? PrettyPrintJson(this.props) : ''}

            </div>
        );
    }
}


const PrettyPrintJson = (props) => {
    // (destructured) data could be a prop for example
    return (<div>Result of API : <pre>{JSON.stringify(props.result, null, 2)}</pre></div>);
};

const mapStateToProps = state => {
    console.log("mapStateToProps :: ", state.result);
    return {
        result: state.result
    };
};

const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps entering ",);
    return {
        startOverviewSubmit: (clientToken, selectedAcc) => dispatch(OverviewAction.getOverviewDetails(clientToken, selectedAcc)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewAPIContainer);