import React from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

class OverviewComponent extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        const {clientToken, selectedAccounts, handleOnChange} = this.props;

        const style = {
            paddingLeft: '5px'
        }


        const techCompanies = [
            {label: "Overview API", value: 1},
            {label: "Consolidated Summary API", value: 2},
            {label: "Netflix", value: 3},
            {label: "Tesla", value: 4},
            {label: "Amazon", value: 5},
            {label: "Alphabet", value: 6},
        ];


        return (
            <div>
                <div className="row">
                    <div className="col-md-4"><label>API : </label></div>
                    <div className="col-md-4"><Select options={techCompanies} onChange={handleOnChange}/></div>
                </div>
                <br/>


                <div className="row">
                    <div className="col-md-4"><label>Client Token : </label></div>
                    <div className="col-md-4"><input type="text" value={clientToken.value}
                                                     onChange={clientToken.onChange}/></div>
                </div>


                <br/>

                <div className="row">
                    <div className="col-md-4"><label>Selected Accounts : </label></div>
                    <div className="col-md-4"><input type="text" value={selectedAccounts.value}
                                                     onChange={selectedAccounts.onChange}/></div>
                </div>


                <br/>


                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <button onClick={this.props.action}>Submit</button>
                        <span style={style}></span>
                        <button>Clear</button>
                    </div>
                </div>

            </div>
        );

    }

}

export {OverviewComponent};

