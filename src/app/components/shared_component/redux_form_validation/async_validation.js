import axios from 'axios';
import { API_ENDPOINT} from './../../../api/headers';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidation = (values) => {
    let userName=[];
    let phone=[];
    let email=[];
    axios({
        url: API_ENDPOINT + 'users/phones',
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en',
            'X-Api-Key': 'AbCdEfGhIjK1',
        }
    }).then(function(response) {
        const data=response.data.data;
        for(let i=0;i<data.length;i++){
            if(data[i].userName!=""){
                userName.push(data[i].userName.toLowerCase())
            }
            if(data[i].phone!="") {
                phone.push(data[i].phone.replace("+855", "0"));
            }
            if(data[i].email!="") {
                email.push(data[i].email);
            }
        }
    }).catch(function(error) {
        console.log("error:", error);
    });

    return sleep(500).then(() => {
        if(userName.includes(values.userName.toLowerCase())){
            throw {userName: 'Username already used, please try another !!'}
        }else if (phone.includes(values.emailOrPhone)) {
            throw {emailOrPhone: 'Phone number already used, please try another !!'}
        } else if (email.includes(values.emailOrPhone)) {
            throw {emailOrPhone: 'Email already used, please try another !!'}
        }else if(phone.includes(values.phone)){
            throw {phone: 'Phone number already used, please try another !!'}
        }else if(email.includes(values.email)){
            throw {email: 'Email already used, please try another !!'}
        }
    })
};
export default asyncValidation