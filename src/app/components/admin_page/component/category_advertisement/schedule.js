import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Table} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormSelectCategory from './../../../shared_component/redux_form_fields/form_select_category';
import {fetchParentCategoriesAction} from './../../../../actions/admin/category/category';
import {fetchScheduleCategoryAdvertisementsAction, fetchCategoryAdvertisementAction} from './../../../../actions/admin/advertisement/category_advertisement';
import {loadState} from './../../../../localstorages/local_storage';
import {formatDate} from './../../../../utils/format_date';
import {renderRemainingTime} from './../../../../utils/remain_time';

let categories = [];

class CategoryAdvertisementSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            value: ''
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount(){
        this.props.fetchParentCategoriesAction({
            token: loadState() != undefined ? loadState.token : '',
            start: 1,
            limit: 0
        });
    }

    handleSelect(event) {
        if(event.target.value != ""){
            this.setState({status: true});
        }else {
            this.setState({status: false});
        }

        this.props.fetchScheduleCategoryAdvertisementsAction({
            token: loadState() != undefined ? loadState().token : '',
            id: event.target.value
        });
        this.props.fetchCategoryAdvertisementAction({
            token: loadState() != undefined ? loadState().token : '',
            id: event.target.value
        });
    }

    render() {
        const {handleSubmit} = this.props;
        const advertisements = this.props.scheduleCategoryAdvertisements.advertisements;
        const advertisement = this.props.categoryAdvertisement.advertisement;

        return (
            <div className="container-fluid">
                <br />
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={3} style={{marginTop: '7px', textAlign: 'right'}}>
                            <strong>Choose advertisement <span style={{color: 'red'}}> *</span></strong>
                        </Col>
                        <Col lg={4}>
                            <Field name="category" type="select" onChange={this.handleSelect} component={FormSelectCategory} placeholder="Choose advertisement ..." values={categories} icon="fa fa-indent"/>
                        </Col>
                    </Row>
                </form>
                <div>
                    { advertisement == undefined ? null :
                        advertisement == null ? null :
                            advertisements == undefined ? null :
                                this.state.status ?
                                    advertisements.length == 0 ?
                                        <div>
                                            <Table responsive bordered hover>
                                                <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                                <tr>
                                                    <th style={{textAlign: 'center'}}>No</th>
                                                    <th style={{textAlign: 'center'}}>COMPANY</th>
                                                    <th style={{textAlign: 'center'}}>CONTACT</th>
                                                    <th style={{textAlign: 'center'}}>ADS NAME</th>
                                                    <th style={{textAlign: 'center'}}>PRICE</th>
                                                    <th style={{textAlign: 'center'}}>START DATE</th>
                                                    <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td colSpan="7">
                                                        <center><h3>Space available !</h3></center>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        :
                                        <div>
                                            <Table responsive bordered hover>
                                                <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                                                <tr>
                                                    <th style={{textAlign: 'center'}}>No</th>
                                                    <th style={{textAlign: 'center'}}>COMPANY</th>
                                                    <th style={{textAlign: 'center'}}>CONTACT</th>
                                                    <th style={{textAlign: 'center'}}>ADS NAME</th>
                                                    <th style={{textAlign: 'center'}}>PRICE</th>
                                                    <th style={{textAlign: 'center'}}>START DATE</th>
                                                    <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                                                    <th style={{textAlign: 'center'}}>TIME REMAINING</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                { advertisements.map((advertisement, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.company}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.phones}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.name}</td>
                                                            <td style={{textAlign: 'center'}}>{advertisement.uPrice}</td>
                                                            <td style={{textAlign: 'center'}}>{formatDate(advertisement.startDate)}</td>
                                                            <td style={{textAlign: 'center'}}>{formatDate(advertisement.expireDate)}</td>
                                                            <td style={{textAlign: 'center', color: 'green'}}>{renderRemainingTime(advertisement.expireDate)}</td>
                                                        </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </Table>
                                        </div>
                                    : null
                    }

                </div>
            </div>
        );
    }
}

CategoryAdvertisementSchedule = reduxForm({
    form: 'form_category_advertisement_schedule_list',
    validate: function (values) {
        const errors = {};

        if (values.category == undefined || values.category == "") {
            errors.category = "Please select category !!";
        }

        return errors
    }
})(CategoryAdvertisementSchedule);

function mapStateToProps(state) {
    if(state.parentCategories.categories != undefined){
        state.parentCategories.categories.map((category, index) => {
            categories[index] = {
                categoryId: category._id.$oid,
                categoryName: category.categoryName
            };
        })
    }
    console.log(JSON.stringify(state.scheduleCategoryAdvertisements));
    return {
        parentCategories: state.parentCategories,
        scheduleCategoryAdvertisements: state.scheduleCategoryAdvertisements,
        categoryAdvertisement: state.categoryAdvertisement,
        initialValues: {
            category: '',
            duration: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchParentCategoriesAction, fetchScheduleCategoryAdvertisementsAction, fetchCategoryAdvertisementAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdvertisementSchedule);