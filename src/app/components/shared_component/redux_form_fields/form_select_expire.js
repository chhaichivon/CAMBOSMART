import React,{ PropTypes } from '../../../../../node_modules/react';
import { FormGroup, FormControl } from '../../../../../node_modules/react-bootstrap';

export default class FormSelectExpire extends React.Component {
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
            return 0
        }
    }
    render(){
        const { input, type, icon, children, meta } = this.props;
        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '15px', height: '40px'}}>
                    <option value='0'>Status</option>
                    {this.state.status.sort().map((status, index) => {
                        return(
                            <option key={index} value={FormSelectExpire.getStatus(status)}>{status}</option>
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
FormSelectExpire.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string

};