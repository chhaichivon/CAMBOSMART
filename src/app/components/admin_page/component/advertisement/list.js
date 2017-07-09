import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Table } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormSelectField from './../../../shared_component/redux_form_fields/form_select_field';
import 'react-datepicker/dist/react-datepicker.css';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { validateAdvertisementAction, deleteAdvertisementAction } from './../../../../actions/admin/advertisement/advertisement';
import { loadState } from './../../../../localstorages/local_storage';

let id = '';

class AdvertisementList extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: [
                'Home page', 'Category page',
                'Location page', 'Detail page'
            ],
            delete: false,
            sweetProps: {
                type: "warning",
                title: "Delete?",
                text: "Are you sure want to delete this advertisement?",
                showCancelButton: true
            }
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.props.validateAdvertisementAction({token: loadState() != undefined ? loadState().token : "", page: ""});
    }

    handleSelect(event){
        this.props.validateAdvertisementAction({token: loadState() != undefined ? loadState().token : "", page: event.target.value});
    }

    handleDelete(advertisementId) {
        id = advertisementId;
        this.setState({ delete: true })
    }

    render() {
        return (
            <div>
                <br/>
                <form>
                    <Row style={{marginLeft: "-15px"}}>
                        <Col xs={12} sm={12} lg={4}>
                            <Field name="page" type="select" onChange={this.handleSelect} component={FormSelectField} placeholder="Advertisement page ..." values={this.state.pages} icon="fa fa-globe"/>
                        </Col>
                    </Row>
                </form>
                <br/>
                <div className="row">
                    <Table responsive bordered hover>
                        <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                        <tr>
                            <th style={{textAlign: 'center'}}>No</th>
                            <th style={{textAlign: 'center'}}>PAGE</th>
                            <th style={{textAlign: 'center'}}>LOCATION</th>
                            <th style={{textAlign: 'center'}}>PRICE ($)</th>
                            <th colSpan="3" style={{textAlign: 'center'}}>ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.props.ads.advertisements != undefined ?
                            this.props.ads.advertisements.length == 0 ?
                                <tr>
                                    <td colSpan="6">
                                        <center><h2>NO RECORD!</h2></center>
                                    </td>
                                </tr>
                                :
                                this.props.ads.advertisements.map((advertisement, index) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                                            <td style={{textAlign: 'center'}}>{advertisement.page}</td>
                                            <td style={{textAlign: 'center'}}>{advertisement.location}</td>
                                            <td style={{textAlign: 'center'}}>{advertisement.price}</td>
                                            <td style={{textAlign: 'center'}}>
                                                <Link to={"/admin/advertisements/detail/" + advertisement._id.$oid} style={{"color": "#03A9F4"}}>
                                                    <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                                </Link>
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                <Link to={"/admin/advertisements/edit/" + advertisement._id.$oid} style={{"color": "#FF9800"}}>
                                                    <i className="fa fa-pencil-square-o" aria-hidden="true">&nbsp;Edit </i>
                                                </Link>
                                            </td>
                                            { loadState().user.userType !== 'editor' ?
                                            <td style={{textAlign: 'center'}}>
                                                <Link to="" onClick={() => this.handleDelete(advertisement._id.$oid)} style={{"color": "red"}}>
                                                    <i className="fa fa-trash-o" aria-hidden="true">&nbsp;Delete</i>
                                                </Link>
                                            </td>
                                            : null }
                                        </tr>
                                    )
                                })
                            :
                            <tr>
                                <td colSpan="6" style={{textAlign: 'center'}}>
                                    <img src="/icon/spinner/default.gif" />
                                </td>
                            </tr>
                        }
                        </tbody>
                    </Table>
                </div>
                <SweetAlert
                    show={this.state.delete}
                    type={this.state.sweetProps.type}
                    title={this.state.sweetProps.title}
                    text={this.state.sweetProps.text}
                    showCancelButton={this.state.sweetProps.showCancelButton}
                    confirmButtonColor="#ff5a00"
                    onConfirm={
                        () => {
                            if (this.state.delete) {
                                this.props.deleteAdvertisementAction({
                                    token: loadState() != undefined ? loadState().token : '',
                                    id: id
                                });
                                setTimeout(function () {
                                    if (this.props.advertisementDelete != undefined) {
                                        if (this.props.advertisementDelete.code == 200) {
                                            this.setState({
                                                sweetProps: {
                                                    type: "success",
                                                    title: "Successful",
                                                    text: "Advertisement has been block successfully.",
                                                    showCancelButton: false
                                                },
                                                delete: true
                                            });
                                            setTimeout(function () {
                                                location.assign('/admin/advertisements/list');
                                            }, 1000);
                                        } else {
                                            this.setState({
                                                sweetProps: {
                                                    type: "error",
                                                    title: "Something wrong !",
                                                    text: "Cannot delete this advertisement.",
                                                    showCancelButton: false
                                                },
                                                delete: true
                                            });
                                            setTimeout(function () {
                                                location.assign('/admin/advertisements/list');
                                            }, 1000);
                                        }
                                    }
                                }.bind(this), 200);
                            } else {
                                this.setState({
                                    sweetPropsBlock: {
                                        type: "warning",
                                        title: "Are you sure?",
                                        text: "You want to delete this Advertisement?",
                                        showCancelButton: true
                                    },
                                    delete: true
                                })
                            }
                        }
                    }
                    onCancel={() => this.setState({ delete: false})}
                />
            </div>
        );
    }
}


AdvertisementList = reduxForm({
    form: 'form_advertisement_filter'
})(AdvertisementList);

function mapStateToProps(state) {
    return {
        ads: state.advertisementValidate,
        advertisementDelete: state.advertisementDelete,
        initialValues: {
            page: ''
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ validateAdvertisementAction, deleteAdvertisementAction }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementList)
