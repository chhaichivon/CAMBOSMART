import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Panel } from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import FormField from '../../../shared_component/redux_form_fields/form_field';
import FormSelectField from '../../../shared_component/redux_form_fields/form_select_field';
import FormSubmit from '../../../shared_component/redux_form_fields/form_submit';
import FormTextArea from '../../../shared_component/redux_form_fields/form_textarea';
import ImageUpload from './fileupload/image_upload';
import { loadState } from '../../../../localstorages/local_storage';
import { updateAdvertiserAction } from '../../../../actions/admin/advertisement/advertiser';
import moment from 'moment';

class AdvertiserEdit extends React.Component {

    constructor(props) {
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
            phone2: false
        };
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
        this.addPhone = this.addPhone.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleStartDate(date) {
        this.setState({
            start: date
        });
    }

    handleEndDate(date) {
        this.setState({
            end: date
        });
    }

    addPhone(){
        this.setState({phone2: !this.state.phone2});
    }

    componentWillReceiveProps(data) {
        if(data.advertiserUpdate.code == 200){
            location.href = '/admin/advertisers/list';
        }else {

        }
    }

    formSubmit(value){
        this.props.updateAdvertiserAction({
            token: loadState() != undefined ? loadState().token : '',
            advertiser: {
                _id: {$oid: this.props.params.id},
                name: value.name,
                description: value.description,
                phones: (value.phone2 != undefined && value.phone2.length != 0) ? [value.phone1, value.phone2] : [value.phone1],
                email: value.email,
                city: value.city,
                address: value.address,
                image: '',
                url: value.url
            }
        });
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;
        return (
            <div >
                <br />
                <Link to="/admin/advertisers/list"><i className="fa fa-angle-double-left" aria-hidden="true" style={{fontWeight:"bold"}}>&nbsp;Back</i></Link>
                <br/><br/>
                <Panel className="advertisement" header={<strong>Advertiser Information</strong>}>
                    <br />
                    <ImageUpload id={this.props.params.id} default={this.props.params.image.replace("+",".")} />
                    <br />
                    <form onSubmit={handleSubmit(this.formSubmit)}>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row>
                                    <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Name <span style={{color: 'red'}}>*</span></strong>
                                    </Col>
                                    <Col lg={10}>
                                        <Field name="name" type="text" component={FormField} label="Company name" icon="fa fa-keyboard-o"/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Description : </strong>
                                    </Col>
                                    <Col lg={10}>
                                        <Field name="description" component={FormTextArea} label="Company description"/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Website : </strong>
                                    </Col>
                                    <Col lg={10}>
                                        <Field name="url" type="text" component={FormField} label="Website URL" icon="fa fa-globe"/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Phone <span style={{color: 'red'}}>*</span> </strong>
                                    </Col>
                                    <Col lg={9}>
                                        <Field name="phone1" component={FormField} label="Phone" icon="fa fa-phone"/>
                                    </Col>
                                    <Col lg={1}>
                                        <Button onClick={this.addPhone} style={{height: '40px', float: 'right'}}>
                                            {this.state.phone2 ?
                                                <i className="fa fa-minus-circle" aria-hidden="true" style={{color: 'red'}}>
                                                </i>
                                                :
                                                <i className="fa fa-plus-circle" aria-hidden="true" />
                                            }
                                        </Button>
                                    </Col>
                                </Row>

                                {this.state.phone2 ?
                                    <Row>
                                        <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                            <strong>Phone 2 : </strong>
                                        </Col>
                                        <Col lg={10}>
                                            <Field name="phone2" component={FormField} label="Phone" icon="fa fa-phone"/>
                                        </Col>
                                    </Row>
                                    :
                                    null
                                }

                                <Row>
                                    <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Email : </strong>
                                    </Col>
                                    <Col lg={10}>
                                        <Field name="email" type="email" component={FormField} label="Email" icon="fa fa-envelope"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Location <span style={{color: 'red'}}>*</span> </strong>
                                    </Col>
                                    <Col lg={10}>
                                        <Field name="city" type="select" component={FormSelectField} placeholder="Location" values={this.state.provinces} icon="fa fa-map-marker"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={2} style={{marginTop: '10px', textAlign: 'right'}}>
                                        <strong>Address <span style={{color: 'red'}}>*</span> </strong>
                                    </Col>
                                    <Col lg={10}>
                                        <Field name="address" component={FormTextArea} label="E.g : #168E0, Khan Toul Kork, Phnom Pehn, Cambodia"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lgOffset={8} lg={2}>
                                        <Button onClick={() => location.assign("/admin/advertisers/list")} style={{height: '40px', width: '132.66px', borderRadius: '0'}}>Cancel</Button>
                                    </Col>
                                    <Col lg={2}>
                                        <FormSubmit error={error} invalid={invalid} submitting={submitting} label="SAVE"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </form>
                </Panel>
            </div>
        );
    }
}

AdvertiserEdit = reduxForm({
    form: 'form_edit_advertiser',
    validate: function (values) {
        const errors = {};
        let regex_phone = /^0[1-9]\d{7,8}$/;
        let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regex_url = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;

        if(values.name.charAt(0) == " " || values.name.length < 2 || values.name.length > 50){
            errors.name="Name must in between (2-50) characters !!"
        }
        if(values.description.charAt(0) == " " || values.description.length < 2 || values.description.length > 4850){
            errors.description="Description must in between (2-4850) characters !!"
        }
        if (!regex_phone.test(values.phone1)) {
            errors.phone1 = 'Phone number is invalid !!';
        }
        if (values.phone2 != undefined && values.phone2 != "") {
            if (!regex_phone.test(values.phone2)) {
                errors.phone2 = 'Phone number is invalid !!';
            }else{}
        }
        if(!regex_email.test(values.email)){
            errors.email = "Email is invalid !!";
        }
        if(values.url != ""){
            if (!regex_url.test(values.url)) {
                errors.url = 'Website is invalid !!';
            }else {}
        }else {}

        if (values.city == undefined || values.city == "") {
            errors.city = "Please select your province or city !!";
        }
        if(values.address.charAt(0) == " " || values.address.length < 2 || values.address.length > 100){
            errors.address="Address must in between (2-100) characters !!"
        }
        return errors
    }
})(AdvertiserEdit);

function mapStateToProps(state, own_props) {
    let newAdvertiser = {
        name: '',
        description: '',
        phone1: '',
        phone2: '',
        email: '',
        city: '',
        address: '',
        url: ''
    };

    function getId(_id) {
        if (_id == undefined) {
            return 0;
        } else {
            return Object.values(_id);
        }
    }
    if(state.advertisersFetch.advertisers != undefined){
        const advertiser = state.advertisersFetch.advertisers.find(ads => getId(ads.id) == own_props.params.id) || newAdvertiser;
        if(advertiser != undefined && advertiser.phones != undefined){
            newAdvertiser = {
                name: advertiser.company,
                description: advertiser.description,
                email: advertiser.email,
                phone1: advertiser.phones[0],
                phone2: advertiser.phones[1],
                city: advertiser.city,
                address: advertiser.address,
                url: advertiser.url
            };
        }
    }

    if(state.categoryAdvertisers.advertisers != undefined){
        const advertiser = state.categoryAdvertisers.advertisers.find(ads => getId(ads.id) == own_props.params.id) || newAdvertiser;
        if(advertiser != undefined && advertiser.phones != undefined){
            newAdvertiser = {
                name: advertiser.company,
                description: advertiser.description,
                email: advertiser.email,
                phone1: advertiser.phones[0],
                phone2: advertiser.phones[1],
                city: advertiser.city,
                address: advertiser.address,
                url: advertiser.url
            }
        }
    }


    return ({
        categoryAdvertisers: state.categoryAdvertisers,
        advertiserUpdate: state.advertiserUpdate,
        initialValues: newAdvertiser
    });
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateAdvertiserAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdvertiserEdit);