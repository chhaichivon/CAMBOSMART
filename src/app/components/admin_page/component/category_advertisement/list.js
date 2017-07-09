import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-datepicker/dist/react-datepicker.css';
import SweetAlert from 'sweetalert-react';
import './../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import { fetchCategoryAdvertisementsAction, deleteCategoryAdvertisementAction } from './../../../../actions/admin/advertisement/category_advertisement';
import { loadState } from './../../../../localstorages/local_storage';

let id = '';

class CategoryAdvertisementList extends React.Component {
    constructor() {
        super();
        this.state = {
            delete: false,
            sweetProps: {
                type: "warning",
                title: "Delete?",
                text: "Are you sure want to delete this advertisement?",
                showCancelButton: true
            }
        };
    }

    componentWillMount() {
        this.props.fetchCategoryAdvertisementsAction(loadState() != undefined ? loadState().token : "");
    }

    handleDelete(advertisementId) {
        id = advertisementId;
        this.setState({ delete: true })
    }

    render() {
        return (
            <div>
                <br/>
                <center><h4 style={{color:'#f77416'}}><b><u>Category Advertisement List</u></b></h4></center>
                <div className="row">
                    <Table responsive bordered hover>
                        <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                        <tr>
                            <th style={{textAlign: 'center'}}>No</th>
                            <th style={{textAlign: 'center'}}>NAME</th>
                            <th style={{textAlign: 'center'}}>PRICE ($)</th>
                            <th style={{textAlign: 'center'}}>DESCRIPTION</th>
                            <th colSpan="2" style={{textAlign: 'center'}}>ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.props.categoryAdvertisements.advertisements != undefined ?
                            this.props.categoryAdvertisements.advertisements.length == 0 ?
                                <tr>
                                    <td colSpan="5">
                                        <center><h2>NO RECORD!</h2></center>
                                    </td>
                                </tr>
                                :
                                this.props.categoryAdvertisements.advertisements.map((advertisement, index) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                                            <td>{advertisement.name}</td>
                                            <td style={{textAlign: 'center'}}>{advertisement.price}</td>
                                            <td>{advertisement.description}</td>
                                            <td style={{textAlign: 'center'}}>
                                                <Link to={`/admin/advertisements/category/edit/${advertisement._id.$oid}`} style={{"color": "#FF9800"}}>
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
                                this.props.deleteCategoryAdvertisementAction({
                                    token: loadState() != undefined ? loadState().token : '',
                                    id: id
                                });
                                setTimeout(function () {
                                    if (this.props.categoryAdvertisementDelete != undefined) {
                                        if (this.props.categoryAdvertisementDelete.code == 200) {
                                            this.setState({
                                                sweetProps: {
                                                    type: "success",
                                                    title: "Successful !!",
                                                    text: "Advertisement has been delete successfully.",
                                                    showCancelButton: false
                                                },
                                                delete: true
                                            });
                                            setTimeout(function () {
                                                location.assign('/admin/advertisements/category/list');
                                            }, 1000);
                                        } else {
                                            this.setState({
                                                sweetProps: {
                                                    type: "error",
                                                    title: "Something wrong !!",
                                                    text: "Cannot delete this advertisement.",
                                                    showCancelButton: false
                                                },
                                                delete: true
                                            });
                                            setTimeout(function () {
                                                location.assign('/admin/advertisements/category/list');
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

function mapStateToProps(state) {
    return {
        categoryAdvertisements: state.categoryAdvertisements,
        categoryAdvertisementDelete: state.categoryAdvertisementDelete
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchCategoryAdvertisementsAction, deleteCategoryAdvertisementAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdvertisementList)
