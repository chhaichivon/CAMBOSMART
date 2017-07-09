import React from 'react';
import {Panel} from 'react-bootstrap';
import CategoryAdvertisementInfo from './category_advertisement_info';
import CategoryAdvertisementSchedule from '../schedule/category/category_advertisment_schedule';

export default class CategoryAdvertiser extends React.Component{
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
                            <CategoryAdvertisementInfo handleBack={this.handleBack} advertisement={this.state.advertisement} />
                        </Panel>
                    </div>
                    :
                    <CategoryAdvertisementSchedule advertisementInfo={this.advertisementInfo}/>
                }
            </div>
        )
    }
}
