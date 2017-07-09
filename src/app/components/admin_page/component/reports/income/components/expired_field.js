import React,{ PropTypes } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default class ExpiredField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: [
                'Active', 'Expired'
            ]
        };
    }
    static getStatus(status){
        if(status == 'Active'){
            return 1
        }else if(status == 'Expired'){
            return -1
        }else {
            return 1
        }
    }
    render(){
        const { input, type, icon, children, meta } = this.props;
        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '15px', height: '40px'}}>
                    <option value=''>Status</option>
                    {this.state.status.sort().map((status, index) => {
                        return(
                            <option key={index} value={ExpiredField.getStatus(status)}>{status}</option>
                        )
                    })}
                    {children}
                </FormControl>
                <FormControl.Feedback>
                    <i className={icon} aria-hidden="true"></i>
                </FormControl.Feedback>
            </FormGroup>
        );
    }
}
ExpiredField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string

};