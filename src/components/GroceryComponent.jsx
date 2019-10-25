import React from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductRow } from "./ProductRow";


class GroceryComponent extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {

        const { categoryList, productList, handleCategoryOnChange, searchByCategoryaction,
            updateProductAction, deleteProductAction } = this.props;

        //debugger;

        return (

            <>
                <div className="row">
                    <div className="col-md-1"><label>Category </label></div>
                    <div className="col-md-2 mr-sm-2"><Select options={categoryList} onChange={handleCategoryOnChange} /></div>
                    <div className="col-md-2">
                        <button class="btn btn-primary" onClick={searchByCategoryaction}>Search</button>

                    </div>
                </div>

                <div>
                    {
                        productList.map(product => (
                            <ProductRow
                                key={product.id}
                                product={product}
                                updateProductAction={updateProductAction}
                                deleteProductAction={deleteProductAction}
                            />
                        ))
                    }
                </div>
            </>
        );

    }

}

export { GroceryComponent };

