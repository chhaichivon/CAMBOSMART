import React,{ PropTypes } from '../../../../../../../../node_modules/react';
import { FormGroup, FormControl, Glyphicon, HelpBlock } from '../../../../../../../../node_modules/react-bootstrap';

export default class UserTypeField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: [
                "Normal","Merchant"
            ]
        };
    }
    static getStatus(status){
        if(status == "Normal"){
            return "normal";
        }else if(status == "Merchant"){
            return "merchant";
        }else {
            return "";
        }
    }

    render(){
        const { input, type, icon, children, meta } = this.props;
        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '30px', height: '40px'}}>
                    <option value=''>All User Types</option>
                    {this.state.status.sort().map((status, index) => {
                        return(
                            <option key={index} value={UserTypeField.getStatus(status)}>{status}</option>
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
UserTypeField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string

};