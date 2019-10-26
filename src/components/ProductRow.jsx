import React from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';


class ProductRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          categoryName: "",
          categoryValue: ""
        };
    
      }

    categoryChangedHandler = (val) => {
       // this.setState({product.productName: event.target.value});
       return val;
    };
    
    valueChangedHandler = (event) => {
        this.setState({categoryValue: event.target.value});
    };

    render() {

        const { product, updateProductAction, deleteProductAction } = this.props;
       
        return (
            <>
                <div className="row table-striped">
                <input type="text" defaultValue={product.productName} ></input>
                <input type="text" defaultValue={product.productCategory}></input>
                 <input type="text" defaultValue={product.productValue}></input>
                <button class="btn btn-secondary" onClick= {(event) => {event.preventDefault(); updateProductAction(product) } }>Update</button>
                <button class="btn btn-danger" onClick= {(event) => {event.preventDefault(); deleteProductAction(product.id) } }>Delete</button>
                </div>

            </>
        );

    }

}

export { ProductRow };

