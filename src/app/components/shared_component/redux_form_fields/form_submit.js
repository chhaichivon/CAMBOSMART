import React, { PropTypes } from "../../../../../node_modules/react";
import { FormGroup, HelpBlock, Button } from "../../../../../node_modules/react-bootstrap";

export default class FormSubmit extends React.Component {
    render() {
        const {error, invalid, submitting, label, icon, disabled} = this.props;
        return (
            <div>
                {error &&
                <FormGroup validationState="error">
                    <HelpBlock>{error}</HelpBlock>
                </FormGroup>}

                <FormGroup className="submit">
                    <Button bsStyle="warning" type="submit" className="btn button_search" block disabled={disabled || invalid || submitting}>
                        {label}&nbsp;&nbsp;<i className={icon} aria-hidden="true"></i>
                    </Button>
                </FormGroup>
            </div>
        );
    }
}
FormSubmit.propTypes = {
    error: PropTypes.string,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    buttonSaveLoading: PropTypes.string,
    buttonSave: PropTypes.string
};
