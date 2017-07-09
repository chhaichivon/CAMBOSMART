import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Line} from 'react-chartjs-2';
import {fetchViewWebsiteAction} from './../../../../actions/admin/common';
import {loadState} from './../../../../localstorages/local_storage';
import './style.css';
let amounts = [];
let days = [];
const getMonth = (month) => {
    if(month == 1){
        return 'Jan'
    }else if(month == 2){
        return 'Feb'
    }else if(month == 3){
        return 'Mar'
    }else if(month == 4){
        return 'Apr'
    }else if(month == 5){
        return 'May'
    } else if(month == 6){
        return 'Jun'
    }else if(month == 7){
        return 'Jul'
    }else if(month == 8){
        return 'Aug'
    }else if(month == 9){
        return 'Sep'
    }else if(month == 10){
        return 'Oct'
    }else if(month == 11){
        return 'Nov'
    }else if(month == 12){
        return 'Dec'
    }
};

const lineData = {
    labels: days,
    datasets: [
        {
            label: 'Visitors',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: amounts
        }
    ]
};

class Chart extends React.Component {

    componentWillMount(){
        this.props.fetchViewWebsiteAction({
            token: loadState() != undefined ? loadState().token : '',
            year: 0,
            month: 0
        });

    }

    componentWillReceiveProps(data){
        const views = data.fetchWebsite;
        if(views.visitors != undefined){
            if(views.visitors.length > 0){
                views.visitors.map((view) => {
                    amounts.push(view.amount);
                    days.push(view.year + '-' + getMonth(view.month) + '-' + view.day);
                });
            }else {
                lineData.labels = [];
                lineData.datasets[0].data = [];
            }
        }
        if(days.length > 0 && amounts.length > 0){
            lineData.labels = days;
            lineData.datasets[0].data = amounts;
        }
    }

    render() {
        return (
            this.props.fetchWebsite.visitors != undefined ?
                this.props.fetchWebsite.visitors.length > 0 ?
                    <div>
                        <br />
                        <strong style={{marginLeft: '73%'}}>NUMBER OF VISITORS'S VIEW REPORT</strong>
                        <p className="rotate">Amounts</p>
                        <Line data={lineData} />
                        <p style={{marginLeft: '50%', fontSize: '16px', fontWeight: 'bold', color: 'red', opacity: '0.5'}}>Day in month</p>
                    </div>
                    :
                    null
                :
                null
        );
    }
}

function mapStateToProps(state) {
    return {
        fetchWebsite: state.fetchWebsite
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchViewWebsiteAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);