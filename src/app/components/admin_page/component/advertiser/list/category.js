import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Row, Col, Button, Table, Pagination } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormField from '../../../../shared_component/redux_form_fields/form_field';
import FormSelectField from '../../../../shared_component/redux_form_fields/form_select_field';
import FormSelectExpire from '../../../../shared_component/redux_form_fields/form_select_expire';
import FormSubmit from '../../../../shared_component/redux_form_fields/form_submit';
import FormDatePicker from '../../../../shared_component/redux_form_fields/form_datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import SweetAlert from 'sweetalert-react';
import ModalRenew from './../modal_renew';
import { loadState } from './../../../../../localstorages/local_storage';
import {fetchCategoryAdvertisersAction, fetchScheduleCategoryAdvertisementsAction} from './../../../../../actions/admin/advertisement/category_advertisement';
import {blockAdvertiserAction} from './../../../../../actions/admin/advertisement/advertiser';
import { formatDate } from './../../../../../utils/format_date';

let advertiser = {
    start: 1,
    limit: 10,
    token: loadState() != undefined ? loadState().token : '',
    advertiser: {
        name: "",
        location: "",
        status: 1,
        startDate: '1970-1-1',
        endDate: '1970-1-1'
    }
};
let advertisements = [];
let id = '';

class AdvertiserCategoryList extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: null,
            endDate: null,
            activePage: 1,
            block: {
                show: false,
                hide: false
            },
            renew:{
                modalShow: false,
                id: '',
                categoryId: '',
                page: '',
                location: '',
                price: 0
            },
            sweetPropsBlock: {
                type: "warning",
                title: "Block?",
                text: "Are you sure want to block this user account?",
                showCancelButton: true
            },
            provinces: [
                'Phnom Penh', 'Banteay Meanchey',
                'Battambong', 'Kampong Cham', 'Kampong Chhnang',
                'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Koh Kong',
                'Kep', 'Kratie', 'Mondulkiri', 'Oddar Meanchey',
                'Pailin', 'Preah Sihanouk', 'Peah Vihear', 'Pursat',
                'Prey Veng', 'Ratanakiri', 'Siem Reap', 'Stung Treng', 'Svay Rieng',
                'Takeo', 'Tboung Khmum'
            ]
        };

        this.handleFromDate = this.handleFromDate.bind(this);
        this.handleToDate = this.handleToDate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.setState({
            activePage: this.props.params.page != undefined ? Number(this.props.params.page) : 1
        });
        advertiser.start = this.props.params.page != undefined ? this.props.params.page : 1;
        this.props.fetchCategoryAdvertisersAction(advertiser)
    }

    componentWillReceiveProps(data){
        if(data.scheduleCategoryAdvertisements.advertisements != undefined){
            advertisements = data.scheduleCategoryAdvertisements.advertisements;
            console.log(JSON.stringify(advertisements));
            /*this.setState({
             renew: {
             modalShow: true,
             id: this.state.renew.id,
             page: this.state.renew.page,
             location: this.state.renew.location
             }
             });*/
        }
    }

    handleFromDate(date) {
        this.setState({
            startDate: date
        });
    }

    handleToDate(date) {
        this.setState({
            endDate: date
        });
    }

    formSubmit(value) {
        if (value.name != undefined) {
            advertiser.advertiser.name = value.name;
        }
        if (value.location != undefined) {
            advertiser.advertiser.location = value.location;
        }
        if (value.status != undefined) {
            advertiser.advertiser.status = Number(value.status);
        }
        if (value.startDate != undefined && value.endDate != undefined) {
            advertiser.advertiser.startDate = value.startDate;
            advertiser.advertiser.endDate = value.endDate;
        }
        advertiser.start = 1;
        this.setState({
            activePage: 1
        });
        this.props.fetchCategoryAdvertisersAction(advertiser);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
        advertiser.start = eventKey;
        this.props.fetchCategoryAdvertisersAction(advertiser);
        browserHistory.push(`/admin/advertisers/list/categories/${eventKey}`)
    }

    static handleItem(total) {
        if (total <= 10) {
            return 1
        } else if (total % 10 == 0) {
            return total / 10
        } else if (total % 10 > 0) {
            return parseInt(total / 10) + 1
        }
    }

    openBlockAdvertiser(advertiserId) {
        id = advertiserId;
        this.setState({
            block: {
                show: true,
                hide: true
            }
        })
    }

    openRenewAdvertiser(data){
        this.setState({
            renew: {
                modalShow: true,
                id: data.id,
                categoryId: data.categoryId,
                page: '',
                location: '',
                price: data.price
            }
        });
        this.props.fetchScheduleCategoryAdvertisementsAction({
            token: loadState() != undefined ? loadState().token : '',
            id: data.categoryId
        });
    }

    render() {
        const {handleSubmit, submitting} = this.props;
        let total = 0;
        return (
            <div>
                <br/>
                <div style={{marginLeft: '-15px'}}>
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <Row>
                            <Col lg={4}>
                                <Field name="location" type="select" component={FormSelectField} placeholder="Location"
                                       values={this.state.provinces} icon="fa fa-map-marker"/>
                            </Col>
                            <Col lg={2}>
                                <Field name="status" type="select" component={FormSelectExpire}/>
                            </Col>
                            <Col lg={3}>
                                <Field name="startDate" component={FormDatePicker} placeholder="From Date"
                                       defaultDate={this.state.startDate} handleChange={this.handleFromDate}/>
                            </Col>
                            <Col lg={3}>
                                <Field name="endDate" component={FormDatePicker} placeholder="To Date"
                                       defaultDate={this.state.endDate} handleChange={this.handleToDate}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={9}>
                                <Field name="name" type="text" component={FormField} label="Name" icon="fa fa-user"/>
                            </Col>
                            <Col lg={2}>
                                <FormSubmit submitting={submitting} label="SEARCH" icon="fa fa-search"/>
                            </Col>
                            <Col lg={1}>
                                <Button onClick={() => location.assign("/admin/advertisers/list")} style={{height: '40px', width: '72px', borderRadius: '0'}}>Reset</Button>
                            </Col>
                        </Row>
                    </form>
                </div>
                <br/>
                {this.props.categoryAdvertisers.advertisers != undefined ?
                    <div className="row">
                        <Table responsive bordered hover>
                            <thead style={{backgroundColor: '#ff6903', color: 'white', border: '2px solid #ff6903'}}>
                            <tr>
                                <th style={{textAlign: 'center'}}>No</th>
                                <th style={{textAlign: 'center'}}>ADS NAME</th>
                                <th style={{textAlign: 'center'}}>COMPANY</th>
                                <th style={{textAlign: 'center'}}>LOCATION</th>
                                <th style={{textAlign: 'center'}}>CONTACT</th>
                                <th style={{textAlign: 'center'}}>START DATE</th>
                                <th style={{textAlign: 'center'}}>EXPIRE DATE</th>
                                <th colSpan="3" style={{textAlign: 'center'}}>ACTIONS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.categoryAdvertisers.advertisers.length == 0 ?
                                <tr>
                                    <td colSpan="8">
                                        <center><h3>NO RECORD!</h3></center>
                                    </td>
                                </tr>
                                :
                                this.props.categoryAdvertisers.advertisers.map((advertiser, index) => {
                                    total = advertiser.total;
                                    return (
                                        <tr key={index}>
                                            {this.state.activeIndex == 1 ?
                                                <td style={{textAlign: 'center'}}>{index + 1}</td> :
                                                <td style={{textAlign: 'center'}}>{index + ((this.state.activePage - 1) * 10) + 1}</td>
                                            }
                                            <td>{advertiser.name}</td>
                                            <td>{advertiser.company}</td>
                                            <td style={{textAlign: 'center'}}>{advertiser.city}</td>
                                            {advertiser.phones != undefined  ?
                                                advertiser.phones.length > 1 ?
                                                    <td style={{textAlign: 'center'}}>{advertiser.phones[0] + ' / ' + advertiser.phones[1]}</td>
                                                    :
                                                    <td style={{textAlign: 'center'}}>{advertiser.phones}</td>
                                                :
                                                <td style={{textAlign: 'center'}}>{advertiser.email}</td>
                                            }

                                            <td style={{textAlign: 'center'}}>{formatDate(advertiser.startDate)}</td>
                                            <td style={{textAlign: 'center'}}>{formatDate(advertiser.expireDate)}</td>


                                            <td style={{textAlign: 'center'}}>
                                                <Link to={`/admin/advertisers/category/detail?id=${advertiser.id.$oid}&s=${advertiser.startDate}&e=${advertiser.expireDate}`} style={{"color": "#03A9F4"}}>
                                                    <i className="fa fa-eye" aria-hidden="true">&nbsp;View</i>
                                                </Link>
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                <Link to={`/admin/advertisers/edit/${advertiser.id.$oid}/${advertiser.image.replace(".","+")}`} style={{"color": "#FF9800"}}>
                                                    <i className="fa fa-pencil-square-o" aria-hidden="true">&nbsp;Edit </i>
                                                </Link>
                                            </td>
                                            { loadState().user.userType !== 'editor' ? 
                                            <td style={{textAlign: 'center'}}>
                                                { advertiser.expireDate > new Date().getTime() ?
                                                    advertiser.status != -1 ?
                                                        <Link onClick={() => this.openBlockAdvertiser(advertiser.id.$oid)} to="" style={{"color": "red"}}>
                                                            <i className="fa fa-ban" aria-hidden="true">&nbsp;Block</i>
                                                        </Link>
                                                        :
                                                        <Link onClick={() => this.openRenewAdvertiser({
                                                            id: advertiser.id.$oid,
                                                            categoryId: advertiser.categoryId.$oid,
                                                            price: advertiser.uPrice
                                                        })} to=""
                                                              style={{"color": "green"}}>
                                                            <i className="fa fa-refresh" aria-hidden="true">&nbsp;
                                                                Renew </i>
                                                        </Link>
                                                    :
                                                    <Link onClick={() => this.openRenewAdvertiser({
                                                        id: advertiser.id.$oid,
                                                        categoryId: advertiser.categoryId.$oid,
                                                        price: advertiser.uPrice
                                                    })} to=""
                                                          style={{"color": "green"}}>
                                                        <i className="fa fa-refresh" aria-hidden="true">&nbsp;
                                                            Renew </i>
                                                    </Link>
                                                }
                                            </td>
                                            : null }
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                        {total <= 10
                            ?
                            null
                            :
                            <Pagination style={{float: 'right'}}
                                        prev
                                        next
                                        first
                                        last
                                        ellipsis
                                        boundaryLinks
                                        items={AdvertiserCategoryList.handleItem(total)}
                                        maxButtons={5}
                                        activePage={this.state.activePage}
                                        onSelect={this.handleSelect}
                            />
                        }
                        <SweetAlert
                            show={this.state.block.show}
                            type={this.state.sweetPropsBlock.type}
                            title={this.state.sweetPropsBlock.title}
                            text={this.state.sweetPropsBlock.text}
                            showCancelButton={this.state.sweetPropsBlock.showCancelButton}
                            confirmButtonColor="#ff5a00"
                            onConfirm={
                                () => {
                                    if (this.state.block.show && this.state.block.hide) {
                                        this.props.blockAdvertiserAction({
                                            token: loadState() != undefined ? loadState().token : '',
                                            id: id,
                                            check: 0
                                        });
                                        setTimeout(function () {
                                            if (this.props.advertiserBlock != undefined) {
                                                if (this.props.advertiserBlock.code == 200) {
                                                    this.setState({
                                                        sweetPropsBlock: {
                                                            type: "success",
                                                            title: "Successful !!",
                                                            text: "Advertiser have been block successfully.",
                                                            showCancelButton: false
                                                        },
                                                        block: {
                                                            show: true,
                                                            hide: false
                                                        }
                                                    });
                                                    setTimeout(function () {
                                                        window.location.assign('/admin/advertisers/list');
                                                    }, 1000);
                                                } else {
                                                    this.setState({
                                                        sweetPropsBlock: {
                                                            type: "error",
                                                            title: "Something wrong !!",
                                                            text: "Cannot block this advertiser.",
                                                            showCancelButton: false
                                                        },
                                                        block: {
                                                            show: true,
                                                            hide: false
                                                        }
                                                    })
                                                }
                                            }
                                        }.bind(this), 200);
                                    } else {
                                        this.setState({
                                            sweetPropsBlock: {
                                                type: "warning",
                                                title: "Are you sure?",
                                                text: "You want to block this advertiser?",
                                                showCancelButton: true
                                            },
                                            block: {
                                                show: false,
                                                hide: false
                                            }
                                        })
                                    }
                                }
                            }
                            onCancel={() => this.setState({block: {show: false, hide: false}})}
                        />
                    </div>
                    :
                    <div style={{textAlign: 'center'}}><img src="/icon/spinner/default.gif" /></div>
                }
                <ModalRenew renew={this.state.renew} advertisements={advertisements} />
            </div>
        );
    }
}

AdvertiserCategoryList = reduxForm({
    form: 'form_advertiser_category_list',
    validate: function (values) {
        const errors = {};
        if (new Date(values.startDate).getTime() > new Date(values.endDate).getTime()) {
            errors.endDate = 'It must greater or equal FROM DATE !!'
        }
        return errors
    }
})(AdvertiserCategoryList);

function mapStateToProps(state) {
    console.log("D.............." + JSON.stringify(state.categoryAdvertisers));
    return {
        categoryAdvertisers: state.categoryAdvertisers,
        advertiserBlock: state.advertiserBlock,
        scheduleCategoryAdvertisements: state.scheduleCategoryAdvertisements,
        initialValues: {
            status: 1
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchCategoryAdvertisersAction, blockAdvertiserAction, fetchScheduleCategoryAdvertisementsAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertiserCategoryList)
