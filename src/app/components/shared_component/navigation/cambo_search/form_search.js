import React from 'react';
import { FormGroup,InputGroup, Button, FormControl,Row, Col, Glyphicon } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {listAllCategoryAction}from'./../../../../actions/categories/category';
import {fetchProductNameAction ,getProductByCategoryHotAction , getProductByCategoryGoldAction,getProductByCategoryNormalAction} from './../../../../actions/products/products'
import Autosuggest from 'react-autosuggest';
import {loadState} from './../../../../localstorages/local_storage';
import './auto_suggest.css';
import { loadLanguage } from '../../../../localstorages/local_storage';
let categoryName = '';
let productName = '';
let suggestions = [];
let cate = '';
let page=0;
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : suggestions.filter(name =>
        name.productName.toLowerCase().slice(0, inputLength) === inputValue
    );
};
const getSuggestionValue = suggestion => suggestion.productName;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.productName}
    </div>
);
class FormSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectValue: '',
            suggestions: [],
            value: '',
            cate: this.props.params.c != undefined ? this.props.params.c : ''

        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handelSearch = this.handelSearch.bind(this);
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange (event, { newValue }) {
        this.setState({
            value: newValue
        });
    };
    onSuggestionsFetchRequested ({ value }) {
        let categoryName = this.state.cate != undefined || this.state.value ==''? this.state.cate : '';
        let productName = this.state.value != undefined || this.state.value ==''? this.state.value : '';

        this.props.fetchProductNameAction({
            productName:productName,
            categoryName: this.state.cate == undefined ? '':this.state.cate
        });

        this.setState({suggestions: getSuggestions(value)});
    };

    onSuggestionsClearRequested () {
        this.setState({suggestions: []});
    };

    componentWillReceiveProps(data){
        if(data.productName != undefined){
            if(data.productName.products != undefined){
                suggestions = data.productName.products
            }else {
                suggestions = []
            }
        }else {
            suggestions = []
        }
    }
    componentWillMount(){
        let newValue = '';
        if(this.props.params.n != undefined){
            newValue = this.props.params.n
        }
        this.props.listAllCategoryAction();
        this.setState({
            value: newValue
        });
    }
    handleSelect (event) {
        this.setState({
            cate: event.target.value
        });
    }
    handelSearch () {
        let categoryName = this.state.cate == ''  ?  "" : this.state.cate;
        let productName =  this.state.value == '' ? "" : this.state.value;
        if(this.state.value == "" && this.state.cate != ''){
            window.location.href=(`/products/category/grid/category?c=${categoryName.split(' ').join('+')}&n=${''}&s=${''}&l=${''}&dr=${0}&sp=${0}&ep=${0}&p=${1}`);
        }else {
            window.location.href=(`/products/category/grid/category?c=${categoryName.split(' ').join('+')}&n=${productName.split(' ').join('+')}&s=${''}&l=${''}&dr=${0}&sp=${0}&ep=${0}&p=${1}`);
        }
    };

    addProduct(){
        if (loadState() !== undefined) {
            if(loadState().user !== undefined){
                if (loadState().user.userType == "normal") {
                    window.location.assign("/member/ads/add-cat");
                }else if (loadState().user.userType == "merchant") {
                    window.location.assign("/merchant/ads/add-cat");
                }else {}
            }
        }else{
            window.location.assign("/sign-in");
        }
    }
    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: loadLanguage() == "en" || loadLanguage() == undefined ? 'What you are looking for...' : "តើអ្នកកំពុងស្វែងរកអ្វី...",
            value,
            onChange: this.onChange
        };
        return (
           <div>
               <div className="main-header">
                       <Col xs={10} sm={10} md={10} lg={10} className="form-search">
                           <FormGroup>
                               <InputGroup>
                                   <InputGroup.Addon style={{color: 'black', border: '2px', padding: '0px', borderTopLeftRadius: '4px',minWidth: '160px', background: '#FEBD69'}}>
                                       {
                                           this.props.listAll.code == undefined ? null :
                                               <FormGroup>
                                                   <FormControl value={this.state.cate} onChange={this.handleSelect} componentClass="select" type="select" name="username" ref="username" style={{ width: '160px',paddingLeft:'6px',paddingRight:'0px', height: '40px', color: 'black', borderColor:'gray', background: '#FEBD69', minWidth: '160px', position:'relative', maxWidth:"160px"}}>
                                                       <option value="">{loadLanguage() == "en" || loadLanguage() == undefined ? "All Categories" : "ប្រភេទផលិតផលទាំងអស់"}</option>
                                                       {
                                                           this.props.listAll.categories.map((par, index)=> {
                                                               return(

                                                                   <optgroup  key={index} label={loadLanguage() == "en" || loadLanguage() == undefined ? par.categoryName : par.khName} data-max-options="2">
                                                                       { par.sub.map((name, index)=> {
                                                                              return(
                                                                                <option key={index} value={name.categoryName}> {loadLanguage() == "en" || loadLanguage() == undefined ? name.categoryName : name.khName}</option>
                                                                              );
                                                                           })}
                                                                   </optgroup>
                                                               );
                                                           })
                                                       }
                                                   </FormControl>
                                               </FormGroup>
                                       }
                                   </InputGroup.Addon>
                                   <Autosuggest
                                       suggestions={suggestions}
                                       onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                       onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                       getSuggestionValue={getSuggestionValue}
                                       renderSuggestion={renderSuggestion}
                                       inputProps={inputProps}
                                   />
                                   <InputGroup.Button>
                                       <Button onClick={this.handelSearch}  bsStyle="warning" style={{color: 'black', background: '#FEBD69', height: '40px'}}>
                                           <i className="fa fa-search" aria-hidden="true"><span style={{ fontFamily:"Khmer" }}>&nbsp;&nbsp;{loadLanguage() == "en" || loadLanguage() == undefined ? "SEARCH" : "ស្វែងរក"}</span></i>
                                       </Button>
                                   </InputGroup.Button>
                               </InputGroup>
                           </FormGroup>
                       </Col>
                       <Col md={2} lg={2} sm={2}>
                           <Button bsStyle="warning" className="btn_free_post" onClick={this.addProduct.bind(this)}>{loadLanguage() == "en" || loadLanguage() == undefined ? "Post Free Ads" : "ដាក់លក់"}</Button>
                       </Col>

               </div>
           </div>
        );
    }
}
function mapStateToProps(state){
    return({
        listAll:state.listAll,
        productName: state.productName
    });
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            listAllCategoryAction,
            fetchProductNameAction,
            getProductByCategoryHotAction,
            getProductByCategoryGoldAction,

            getProductByCategoryNormalAction
        },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(FormSearch);
