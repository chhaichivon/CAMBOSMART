import React, { PropTypes } from "../../../../../node_modules/react";
import { FormGroup, FormControl, HelpBlock } from "../../../../../node_modules/react-bootstrap";

export default class FormSimpleTextbox extends React.Component {
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
        const { input, componentClass, type, label, children, disabled, values, handleChange } = this.props;
        return (

            <FormControl {...input} componentClass={componentClass} type={type} disabled={disabled} value={values} onChange={handleChange} placeholder={label} autoComplete="on" >
                {children}
            </FormControl>

        );
    }
}
FormSimpleTextbox.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    label: PropTypes.string,
    componentClass: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};