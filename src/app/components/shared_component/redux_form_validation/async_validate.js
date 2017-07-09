const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values) => {
    return sleep(1000)
        .then(() => {
            if ([ '070906308'].includes(values.emailOrPhone)) {
                throw { emailOrPhone: 'Phone number has already taken' }
            }else if(['oudam@2ntkh.com'].includes(values.emailOrPhone)){
                throw { emailOrPhone: 'Email has already taken' }
            }
        })
};

export default asyncValidate