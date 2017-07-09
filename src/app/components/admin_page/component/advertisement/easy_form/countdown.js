import React, {Component, PropTypes} from 'react';
import moment from 'moment';

const NOT_STARTED = -1;
const STARTED = 1;
const FINISHED = 0;

export default class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remainingTime: 0,
            status: NOT_STARTED
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.tick();
            this.setState({status: STARTED});

            this.timer = setInterval(() => {
                this.tick();
            }, this.props.interval);
        }, this.props.startDelay);

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    calculateRemainingTime() {
        //let now = moment().toDate();
        return moment(this.props.targetDate).diff(moment());
    }

    addLeadingZero(value) {
        if (value.length < 2) {
            return '0' + value
        }
        return value
    }

    tick() {
        this.setState({remainingTime: this.calculateRemainingTime()});

        if (this.state.remainingTime <= 0) {
            this.setState({status: FINISHED});
            if (this.props.onFinished) {
                this.props.onFinished();
            }
            clearInterval(this.timer);
        }
    }

    renderRemainingTime() {
        let time = moment(this.state.remainingTime);
        let html = [];

        let timeSeparator;
        if (this.props.timeSeparator) {
            timeSeparator = this.props.timeSeparator
        } else {
            timeSeparator = '&nbsp;'
        }


        if (this.props.format.day) {
            let days = parseInt((time / 86400000)).toString();
            if (this.props.leadingZero) {
                days = this.addLeadingZero(days)
            }
            html.push(
                <span key="day">{days + ' days'}&nbsp;</span>
            );
        }

        if (this.props.format.hour) {
            let hours = parseInt((time % 86400000) / 3600000).toString();
            if (this.props.leadingZero) {
                hours = this.addLeadingZero(hours)
            }
            html.push(
                <span key="hour">{hours}{timeSeparator}</span>
            );
        }

        if (this.props.format.minute) {
            let minutes = parseInt(((time % 86400000) % 3600000) / 60000).toString();
            if (this.props.leadingZero) {
                minutes = this.addLeadingZero(minutes)
            }
            html.push(
                <span key="minute">{minutes}{timeSeparator}</span>
            );
        }

        if (this.props.format.second) {
            let seconds = parseInt((((time % 86400000) % 3600000) % 60000) / 1000).toString();
            if (this.props.leadingZero) {
                seconds = this.addLeadingZero(seconds)
            }
            html.push(
                <span key="second">{seconds}</span>
            );
        }

        return html;
    }

    render() {
        if (this.state.status === NOT_STARTED) {
            return <span></span>;
        }
        return (
            <div>
                {this.renderRemainingTime()}
            </div>
        );
    }
}

Countdown.propTypes = {
    targetDate: PropTypes.instanceOf(Date).isRequired,
    interval: PropTypes.number,
    startDelay: PropTypes.number,
    onFinished: PropTypes.func,
    format: PropTypes.object
};

Countdown.defaultProps = {
    interval: 1000,
    startDelay: 0,
    format: {
        hour: 'HH',
        minute: 'MM',
        second: 'SS'
    }
};
