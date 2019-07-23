import React from 'react';
import {connect} from 'react-redux';
import {OverviewAction} from "../../actions/OveviewAction";
import {createSelector} from 'reselect';
import {OverviewComponent} from "../../components/OverviewComponent/OverviewComponent";


class OverviewAPIContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clientToken: '',
            selectedAccounts: ''
        };

        console.log("constructor");
        this.getDetails = this.getDetails.bind(this);
    }

    getDetails = (e) => {
        console.log("call here the getDetails ", this.state.clientToken);
        e.preventDefault();
        this.props.startOverviewSubmit(this.state.clientToken, this.state.selectedAccounts)
    }


    clearDetails = (e) => {
        console.log("call here the clearDetails ");
        e.preventDefault();
        this.props.clearOverviewSubmit()
    }


    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }


    clientTokenChangedHandler = (event) => {
        console.log('clientTokenChangedHandler');
        this.setState({clientToken: event.target.value});
    };

    selectedAccountChangedHandler = (event) => {
        this.setState({selectedAccounts: event.target.value});
    };


    render() {

        const {clientToken, selectedAccounts} = this.state;

        const clientTokenField = {
            value: clientToken,
            onChange: this.clientTokenChangedHandler
        };
        const selectedAccountsField = {
            value: selectedAccounts,
            onChange: this.selectedAccountChangedHandler
        };


        return (
            <div>
                <OverviewComponent submitaction={this.getDetails} clearaction={this.clearDetails}
                                   clientToken={clientTokenField}
                                   selectedAccounts={selectedAccountsField}/>
                <br/>
                {this.props.result ? PrettyPrintJson(this.props) : ''}

            </div>
        );
    }
}

const resultsSelector = state => state.OverviewReducer.result;


export const getResultUsingSelector = createSelector(
    resultsSelector, (response) => {
        console.log('getResultUsingSelector :: ', response);
        return response ? response : '';
    }
);


const PrettyPrintJson = (props) => {
    // (destructured) data could be a prop for example
    return (<div><b>Result of API</b> : <pre>{JSON.stringify(props.result, null, 2)}</pre></div>);
};

const mapStateToProps = state => {
    console.log("mapStateToProps :: ", state.OverviewReducer.result);
    return {
        result: getResultUsingSelector(state)
    };
};


const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps entering ",);
    return {
        startOverviewSubmit: (clientToken, selectedAcc) => dispatch(OverviewAction.getOverviewDetails(clientToken, selectedAcc)),
        clearOverviewSubmit: () => dispatch(OverviewAction.clearOverviewSubmit()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewAPIContainer);
