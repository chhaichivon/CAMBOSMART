import React from 'react';
import {Panel} from 'react-bootstrap';
import AdvertisementInfo from './advertisement_info';
import AdvertisementSchedule from '../schedule/page/advertisement_schedule';

export default class Advertiser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            back: false,
            advertisement: {}
        };
        this.advertisementInfo = this.advertisementInfo.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }


    advertisementInfo(advertisement){
        this.setState({back: advertisement.back, advertisement: advertisement});
    }

    handleBack(){
        this.setState({back: false})
    }

    render(){
        return(
            <div>
                { this.state.back ?
                    <div>
                        <br />
                        <Panel className="advertisement" header={<strong>Advertiser Information</strong>}>
                            <AdvertisementInfo handleBack={this.handleBack} advertisement={this.state.advertisement} />
                        </Panel>
                    </div>
                    :
                    <AdvertisementSchedule advertisementInfo={this.advertisementInfo}/>
                }
            </div>
        )
    }
}
