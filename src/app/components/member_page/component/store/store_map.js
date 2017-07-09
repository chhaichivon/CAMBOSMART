import React from 'react';
import {Button} from 'react-bootstrap';
import {saveLatLng, loadLatLng,loadLanguage} from './../../../../localstorages/local_storage'
import './map.css'
import {updateStoreMapAction} from './../../../../actions/store/store'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadState} from './../../../../localstorages/local_storage';
import SweetAlert from 'sweetalert-react';

let lat;
let lng;
let newlatLng = {};

class StoreMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            success: false
        }
    }

    componentDidMount() {

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

        let geocoder = new google.maps.Geocoder();
        document.getElementById('search').addEventListener('click', function () {
            let address = document.getElementById('address').value;
            geocoder.geocode({'address': address}, function (results, status) {
                if (status === 'OK') {
                    map.setCenter(results[0].geometry.location);
                    marker.setPosition(results[0].geometry.location)
                    lat = results[0].geometry.location.lat()
                    lng = results[0].geometry.location.lng();
                    console.log("RESULT : " + JSON.stringify(results))
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
    }

    componentWillReceiveProps(data) {
        if (data.updateStoreMap.code == 200) {
            this.setState({success: true})
        }
    }

    save() {
        const store = {
                store:{
                        userId: loadState().user.userId,
                        latitude: parseFloat(lat),
                        longitude: parseFloat(lng)
                    },
                token : loadState().token
            };
        newlatLng = {
            lat: lat,
            lng: lng
        };
        saveLatLng(newlatLng);
        this.props.updateStoreMapAction(store);
    }

    render() {
        return (
            <div>
                {
                    loadLanguage() == "en" || loadLanguage() == undefined ?
                        <p style={{fontSize: "14px", textAlign: "center", marginTop: "10px"}}>
                            You can move the google marker or click on the map or input the name of place to search.
                        </p>
                        :
                        <p style={{fontSize: "14px", textAlign: "center", marginTop: "10px"}}>
                            លោកអ្នកអាចផ្លាស់ប្តូរ marker​ នៅលើ Map ឬ​ ធ្វើការ Search ទីតាំង
                        </p>
                }
                <div className="floating-panel">
                    <input id="address" type="text"/>
                    <input id="search" type="button" value={
                        loadLanguage() == "en" || loadLanguage() == undefined ?
                                "Search"
                            :
                                "ស្វែងរក"
                        }/>
                </div>
                <div ref="map" style={{width: "100%", height: "600px", border: "1px solid #D5D5D5"}}>
                </div>
                <br/>
                        <center><Button bsStyle="warning" onClick={this.save.bind(this)}>
                            {
                                loadLanguage() == "en" || loadLanguage() == undefined ?
                                    "Save"
                                    :
                                    " រក្សាទុក"
                            }
                        </Button></center>
                <SweetAlert
                    show={this.state.success}
                    type="success"
                    title="Successfully !!"
                    text="Yor location successful saved!"
                    confirmButtonColor="#ff5a00"
                    onConfirm={() => setTimeout(function () {
                        if (loadState().user.userType == "normal") {
                            location.href =  '/normal';
                        } else if (loadState().user.userType == "merchant") {
                            location.href = '/merchant';
                        }
                    }.bind(this), 10)}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        updateStoreMap: state.updateStoreMap
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateStoreMapAction}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(StoreMap)