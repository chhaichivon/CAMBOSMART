import React, { PropTypes } from "../../../../../node_modules/react";
import { FormGroup, FormControl, HelpBlock, Glyphicon } from "../../../../../node_modules/react-bootstrap";

export default class FormTextArea extends React.Component {
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
FormTextArea.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};