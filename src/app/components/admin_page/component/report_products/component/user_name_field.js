import React, { PropTypes } from "react";
import { FormGroup, FormControl, HelpBlock, Glyphicon } from "react-bootstrap";

export default class UserNameFiled extends React.Component {
    render() {
        const {className, meta, icon} = this.props;
        return (
            <FormGroup className={className}
                       validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                {this.field()}
                <FormControl.Feedback style={{left: 0, marginTop: '13px', width: '30px', height: '30px'}} autoComplete="off">
                    <i className={icon} aria-hidden="true"></i>
                </FormControl.Feedback>
                <HelpBlock>
                    {meta.touched && meta.error ? meta.error : null}
                </HelpBlock>
            </FormGroup>
        );
    }
    field() {
        const { input, componentClass, type, label, children } = this.props;
        return (

            <FormControl {...input} componentClass={componentClass} type={type} placeholder={label}
                                    style={{paddingLeft: '30px', paddingRight: '5px', height: '40px'}}
                                    autoComplete="off" >
                {children}
            </FormControl>

        );
    }
}
UserNameFiled.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    label: PropTypes.string,
    componentClass: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};