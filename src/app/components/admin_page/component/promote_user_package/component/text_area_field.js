import React, { PropTypes } from "react";
import { FormGroup, FormControl, HelpBlock, Glyphicon } from "react-bootstrap";

export default class TextAreaField extends React.Component {
    render() {
        const {className, input, label, height, meta} = this.props;
        return (
            <FormGroup className={className}
                       validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
                <FormControl {...input} componentClass="textarea" placeholder={label} style={{height: height}} />
                <HelpBlock>
                    {meta.touched && meta.error ? meta.error : null}
                </HelpBlock>
            </FormGroup>
        );
    }
}
TextAreaField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};