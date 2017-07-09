const validate = values => {
        var regex_name = /^[A-Za-z]+$/;
        var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regex_password = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        var regex_phone = /^0\d{8,9}$/;

        const errors = {};
        if (!regex_name.test(values.firstName)) {
            errors.firstName = 'First name is invalid';
        } else if (values.firstName.length < 2) {
            errors.firstName = 'First name must greater than or equal 2 characters';
        } else if (values.firstName.length > 20) {
            errors.firstName = 'First name must less than or equal 20 characters';
        }
        if (!regex_name.test(values.lastName)) {
            errors.lastName = 'Last name is invalid'
        } else if (values.lastName.length < 2) {
            errors.lastName = 'Last name must greater than or equal 2 characters';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Last name must less than or equal 20 characters';
        }
        if (!regex_email.test(values.emailOrPhone) && !regex_phone.test(values.emailOrPhone)) {
            errors.emailOrPhone = 'Email or Phone number is invalid !';
        }
        if (!regex_password.test(values.password)) {
            errors.password = 'Password must include characters and numeric !';
        }else if(values.password.length < 6){
            errors.password = 'Password must greater than or equal 6 characters !';
        }
        if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Your password did not match !';
        }
        if (!(values.agreement)) {
            errors.agreement = "You must agree our Term and condition !";
        }
        if(!values.location || values.location.length < 1){
            errors.location = "Please select your location !"
        }
        return errors
    }
    ;

export default validate
