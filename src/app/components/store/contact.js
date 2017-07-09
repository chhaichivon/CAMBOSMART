/**
 * Created by chhaichivon on 4/21/2017.
 */
import React from 'react';
import './store.css';
import {Row, Col} from 'react-bootstrap';
import {saveLatLng, loadLatLng,loadLanguage} from './../../localstorages/local_storage'

let userInformation ={
    storeName :'',
    phoneNumber:'',
    email:'',
    address:'',
    otherPhones:[],
    latitude:'',
    longitude:''
};
let lat ='';
let lng ='';

let newlatLng = {};


class StoreContact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activePage: 1,
            col : 3
        };
    }

    componentDidMount() {

        const laLong = {
            lat:  parseFloat(userInformation.latitude) != undefined ?  parseFloat(userInformation.latitude) : 11.5448729,
            lng:  parseFloat(userInformation.longitude) != undefined ? parseFloat(userInformation.longitude) : 104.89216680000004
        };

        if (loadLatLng() != undefined) {
            newlatLng = loadLatLng()
        } else {
            newlatLng = {
                lat: 11.5448729,
                lng: 104.89216680000004
            }
        }

        let map = new google.maps.Map(this.refs.map, {
            center: newlatLng,
            zoom: 7
        });

        let marker = new google.maps.Marker({
            position: newlatLng,
            map: map,
            draggable: true,
            title: "Drag me!",
        });

        map.addListener('click', function (event) {
            lat = event.latLng.lat();
            lng = event.latLng.lng();
            marker.setPosition(event.latLng);
        });

        google.maps.event.addListener(marker, 'dragend', function (event) {
            lat = event.latLng.lat();
            lng = event.latLng.lng();
        });


       /* let map = new google.maps.Map(this.refs.map, {
            center: laLong,
            zoom:7
        });
        let  marker = new google.maps.Marker({
            position: laLong,
            map: map,
            draggable:true,
            title:"Drag me!",
        });
        map.addListener('click', function(event) {
            lat=event.latLng.lat();
            lng=event.latLng.lng();
            marker.setPosition(event.latLng);
        });

        google.maps.event.addListener(marker, 'dragend', function(event){
            lat= event.latLng.lat();
            lng= event.latLng.lng();
        });*/





    }

    render() {

        this.props.userInformation != undefined ?
                this.props.userInformation.map((userInfo) => {
                    userInformation.storeName = userInfo.storeName;
                    userInformation.phoneNumber = userInfo.phoneNumber;
                    userInformation.email = userInfo.email;
                    userInformation.address = userInfo.address;
                    userInformation.otherPhones = userInfo.otherPhones;
                    userInformation.latitude = userInfo.latitude;
                    userInformation.longitude = userInfo.longitude;
                })
            : null

        return (
        <div>
            <br/>
            <Row>
                <Col xs={12} sm={12} lg={12} md={12}>
                    <h4 className="title-store" style={{ marginLeft: '-5px', marginRight: '-14px'}}><p className="store-name-cap">
                        {loadLanguage() == "en" ||  loadLanguage() == undefined ? "Information Store" : "ព័ត៏មានហាង" }</p></h4>
                </Col>
            </Row>
            <Row>
                <Col xs={3} sm={3} lg={3} md={3}><p className="store-title-label">
                    {loadLanguage() == "en" ||  loadLanguage() == undefined ? "Store Name " : "ឈ្មោះហាង" } : </p></Col>
                <Col xs={9} sm={9} lg={9} md={9}><span className="store-name-cap">{userInformation.storeName != undefined ?  userInformation.storeName : '...'}</span></Col>
            </Row>
            <Row>
                <Col xs={3} sm={3} lg={3} md={3}><p className="store-title-label">
                    {loadLanguage() == "en" ||  loadLanguage() == undefined ? "Email " : "អ៊ីម៉ែល" } : </p></Col>
                <Col xs={9} sm={9} lg={9} md={9}><p className="store-title-label">{userInformation.email != undefined ?  userInformation.email : '...'}</p></Col>
            </Row>
            <Row>
                <Col xs={3} sm={3} lg={3} md={3}><p className="store-title-label">
                    {loadLanguage() == "en" ||  loadLanguage() == undefined ? "Phone Number: " : "ទូរស័ព្ទ" }</p></Col>
                <Col xs={9} sm={9} lg={9} md={9}><p className="store-title-label">
                  { userInformation.phoneNumber == undefined || userInformation.phoneNumber == '' ?  null : userInformation.phoneNumber+'/'}
                  { userInformation.otherPhones != undefined ?
                                <span>
                                    <span>
                                        {userInformation.otherPhones == undefined || userInformation.otherPhones[0] == undefined || userInformation.otherPhones[0] == '' ? null : userInformation.otherPhones[0]}
                                    </span>
                                    <span>
                                        {userInformation.otherPhones == undefined || userInformation.otherPhones[1] == undefined || userInformation.otherPhones[1] == '' ?  null : '/'+userInformation.otherPhones[1]}
                                    </span>
                                </span>
                        : null
                  }
                </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} lg={12} md={12}>
                    <div ref="map" style={{width:"100%",height:"600px",border:"1px solid #D5D5D5"}} ></div>
                </Col>
            </Row>
            <br/><br/>
        </div>
        )
    }
}
export  default  StoreContact;

