import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GroceryAction } from "../../actions/GroceryAction";
import { createSelector } from "reselect";
import { GroceryComponent } from "../../components/GroceryComponent";

class GroceryContainer extends React.Component {
  static propTypes = {
    categoryList: PropTypes.array,
    productList: PropTypes.array
  };



  static defaultProps = {
    categoryList: [],
    productList: [],
    category: null,
    selectedAccounts: null,
    categoryName: "",
  };

  constructor(props) {
    super(props);

  }


  getProductDetails = e => {
    e.preventDefault();
    console.log(this.state.categoryName);
    this.props.getProductList(this.state.categoryName);
  };

  
  handleCategoryOnChange = (value) => {
    console.log(value.value);
    this.setState({
      categoryName: value.value
    });

};


  clearDetails = e => {
    e.preventDefault();
    this.props.clearOverviewSubmit();
  };

  componentDidMount() {
    this.props.getCategoryList();
    this.props.getProductList(null);
  }

  componentDidUpdate(prevProps) {
    const { deleted } = this.props;
    if (deleted) {
      this.props.getProductList(null);
    }
  }


  componentWillMount() {
  }


  render() {


    return (
      <React.Fragment>
        <GroceryComponent
          searchByCategoryaction={this.getProductDetails}
          categoryList={this.props.categoryList}
          productList={this.props.productList}
          updateProductAction={this.props.updateProduct}
          deleteProductAction={this.props.deleteProduct}
          handleCategoryOnChange={this.handleCategoryOnChange}
        />

      </React.Fragment>
    );
  }
}


const PrettyPrintJson = props => {
  // (destructured) data could be a prop for example
  return (
    <div>
      <b>Result of API</b> : <pre>{JSON.stringify(props.result, null, 2)}</pre>
    </div>
  );
};

const mapStateToProps = state => {

  return {
    categoryList: state.GroceryReducer.categoryList,
    productList: state.GroceryReducer.productList,
    deleted: state.GroceryReducer.deleted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearOverviewSubmit: () => dispatch(GroceryAction.clearOverviewSubmit()),
    getCategoryList: () => dispatch(GroceryAction.getCategoryList()),
    getProductList: (category) => dispatch(GroceryAction.getProductList(category)),
    updateProduct: (product) => dispatch(GroceryAction.startUpdateProduct(product)),
    deleteProduct: (id) => dispatch(GroceryAction.deleteProduct(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryContainer);
