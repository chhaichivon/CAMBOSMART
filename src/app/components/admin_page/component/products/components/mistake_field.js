import React,{ PropTypes } from 'react';
import { FormGroup, FormControl, Glyphicon, HelpBlock } from 'react-bootstrap';

export default class MistakeField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: [
                'User Mistake', 'Product Mistake'
            ]
        };
    }
    static getStatus(status){
        if(status == 'User Mistake'){
            return "User Mistake"
        }else{
            return "Product Mistake"
        }
    }
    render(){
        const { input, type, icon, children, meta } = this.props;
        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '30px', height: '40px'}}>
                    <option value=''>Mistake Type</option>
                    {this.state.status.sort().map((status, index) => {
                        return(
                            <option key={index} value={MistakeField.getStatus(status)}>{status}</option>
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
MistakeField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string

};