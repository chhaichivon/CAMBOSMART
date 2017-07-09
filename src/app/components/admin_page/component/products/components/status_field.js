import React,{ PropTypes } from 'react';
import { FormGroup, FormControl, Glyphicon, HelpBlock } from 'react-bootstrap';

export default class StatusField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: [
                'Active', 'Block'
            ]
        };
    }
    static getStatus(status){
        if(status == 'Active'){
            return 1
        }else if(status == 'Deleted'){
            return 0
        }else {
            return -1
        }
    }
    render(){
        const { input, type, icon, children, meta } = this.props;
        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '30px', height: '40px'}}>
                    <option value=''>All Status</option>
                    {this.state.status.sort().map((status, index) => {
                        return(
                            <option key={index} value={StatusField.getStatus(status)}>{status}</option>
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
StatusField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string

};