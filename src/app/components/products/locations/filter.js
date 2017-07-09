import React from 'react';
import { Link, browserHistory } from 'react-router';
import FormSelectField from './../../shared_component/redux_form_fields/form_select_field_location';
import FormField from './../../shared_component/redux_form_fields/form_field';
import { Field, reduxForm } from 'redux-form';
import FormSubmit from './../../shared_component/redux_form_fields/form_submit';
import FormSelectFieldFilter from './../../shared_component/redux_form_fields/form_select_field_filter';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {Thumbnail,Form,Table,Image,Pagination,FormGroup,Button,FormControl,HelpBlock,Row,Col,InputGroup,Glyphicon} from 'react-bootstrap';
import './../product_category/style.css';
import { loadLanguage } from './../../../localstorages/local_storage';

let data = {
    location: "",
    page: 1,
    dateRang: 0,
    startPrice: 0,
    endPrice: 0
};

class Filter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ],
            time: [
                'Any Time','Today','This week','This month'
            ]
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleFilterDateRang = this.handleFilterDateRang.bind(this);
        this.handleFilterLocation = this.handleFilterLocation.bind(this);
    }

    componentWillMount(){

        data.category = this.props.category;
        data.subCategory =  this.props.subCategory == undefined ? '' : this.props.subCategory;
        data.productName = this.props.product == undefined ? '' :  this.props.product;
        data.location = this.props.location == undefined ?  '' : this.props.location;
        data.page =  this.props.page == undefined ? 1 : this.props.page;
        data.dateRang = this.props.dateRang == undefined || Number(this.props.dateRang) == 0 ? '' : this.props. dateRang;
        data.startPrice = this.props.startPrice == undefined || Number(this.props.startPrice) == 0 ? '' : this.props. startPrice;
        data.endPrice = this.props.endPrice == undefined || Number(this.props.endPrice) == 0 ? '' : this.props.endPrice;

        this.props.initialValues.dateRang = this.props.dateRang != undefined ? this.props.dateRang : 0;
        this.props.initialValues.location = this.props.location != undefined ? this.props.location : '';
        this.props.initialValues.startPrice = this.props.startPrice == undefined || Number(this.props.startPrice) == 0 ? '' : this.props. startPrice;
        this.props.initialValues.endPrice = this.props.endPrice == undefined || Number(this.props.endPrice) == 0 ? '' : this.props.endPrice;
    }

    handleFilterDateRang(event){
        data.dateRang = event.target.value;
        this.props.handleFilter(data);
        location.href=`/products/location/${this.props.gridOrList}/location?l=${data.location.replace(" ", "+")}&dr=${data.dateRang}&sp=${data.startPrice}&ep=${data.endPrice}&p=${'1'}`;

    }

    handleFilterLocation(event){
        data.location = event.target.value;
        this.props.handleFilter(data);
        location.href=`/products/location/${this.props.gridOrList}/location?l=${data.location.replace(" ", "+")}&dr=${data.dateRang}&sp=${data.startPrice}&ep=${data.endPrice}&p=${'1'}`;
    }

    formSubmit(value) {
        data.startPrice = value.startPrice;
        data.endPrice = value.endPrice;
        this.props.handleFilter(data);
        location.href=`/products/location/${this.props.gridOrList}/location?l=${data.location.replace(" ", "+")}&dr=${data.dateRang}&sp=${data.startPrice}&ep=${data.endPrice}&p=${'1'}`;
    }

    render(){
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="wrap-filter" style={{backgroundColor: "white",marginBottom: "4px",border: "1px solid white"}}>
                <form onSubmit={handleSubmit(this.formSubmit)} >
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h5>{loadLanguage() == "en" || loadLanguage() == undefined ? "Sort" : "តម្រៀបតាម"}​:</h5>
                                <Field name="date" type="select" onChange={this.handleFilterDateRang} component={FormSelectFieldFilter} />
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h5>{loadLanguage() == "en" || loadLanguage() == undefined ? "Location" : "ទីតាំង"}:</h5>
                                <Field name="location" type="select" onChange={this.handleFilterLocation} component={FormSelectField} placeholder="Location" values={this.state.provinces} icon="fa fa-map-marker"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="row">
                            <h5 className="form-edit-category-page">{loadLanguage() == "en" || loadLanguage() == undefined ? "Price" : "តម្លៃចន្លោះ"}:</h5>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 input_search">
                                <Field name="startPrice" type="text" component={FormField} values={this.state.startPrice}  label={loadLanguage() == "en" || loadLanguage() == undefined ? "Start Price" : "ចាប់ពី"}/>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 input_search">
                                <Field name="endPrice" type="text" component={FormField} values={this.state.startPrice} label={loadLanguage() == "en" || loadLanguage() == undefined ? "End Price" : "រហួតដល់"}/>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3">
                                <FormSubmit submitting={submitting} label={loadLanguage() == "en" || loadLanguage() == undefined ? "GO" : "ស្វែងរក"} icon="fa fa-angle-double-right"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Filter = reduxForm({
    form: 'form-product-category-grid',
    validate: (values) => {
        let regex_float = /^-?\d*(\.\d+)?$/;
        const errors = {};

        if (values.startPrice != '') {
            if(!regex_float.test(values.startPrice)){
                errors.startPrice = 'Please enter number only!'
            }
        }else {}

        if(Number(values.startPrice) >= 0 && (Number(values.endPrice) < Number(values.startPrice))){
            errors.endPrice = 'End price must greater than or equal start price !'
        }else{}

        if (values.endPrice != '') {
            if(!regex_float.test(values.endPrice)){
                errors.endPrice = 'Please enter number only!'
            }

        }else {}
        return errors
    }

})(Filter);

function mapStateToProps() {
    return {
        initialValues: {
            dateRang:'',
            location: '',
            startPrice: '',
            endPrice: ''
        }
    }
}

export default connect(mapStateToProps) (Filter);
