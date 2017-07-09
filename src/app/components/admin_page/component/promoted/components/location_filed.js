import React,{ PropTypes } from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

export default class LocationField extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { input, type, placeholder, values, icon, children, meta } = this.props;

        return(
            <FormGroup controlId="formControlsSelect" validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass={type} type={type} style={{paddingLeft: '30px', paddingRight: '5px', height: '40px'}}>
                    <option value=''>{placeholder}</option>
                    {values.sort().map((value, index) => {
                        return(
                            <option key={index} value={value}>{value}</option>
                        )
                    })}
                    {children}
                </FormControl>
                <FormControl.Feedback style={{left: 0, marginTop: '13px', width: '30px', height: '30px'}}>
                    <i className={icon} aria-hidden="true"></i>
                </FormControl.Feedback>
                <HelpBlock>
                    {meta.touched && meta.error ? meta.error : null}
                </HelpBlock>
            </FormGroup>
        );
    }
}
LocationField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.array

};
