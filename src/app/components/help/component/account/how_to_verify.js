
import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';
import './../help.css';
export default class HowToVerify extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="help-content">
                        {
                            loadLanguage() == "en" ||  loadLanguage() == undefined ?
                                <div>
                                    <p className="head-title">I.How to verify account</p>
                                    <p className="title">Please Check your verify code in your Email or messege in your phone and click Submit(you can click on send code again if your not recive any code )</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/verify_code/verify_code_en.png"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="head-title">I.របៀបបញ្ជាក់គណនី</p>
                                    <p className="title">សូមពិនិត្យលេខកូដនៅក្នុងអ៊ីម៉ែល ឬ សារនៅក្នុងទូរស័ព្ទរបស់លោកអ្នក  រូចបញ្ចូលលេខសម្ងាត់នោះអោយបានត្រឹមត្រូវ ហើយចុចបញ្ជួន (បើលោកអ្នកមិនបានឃើញសារលេខសម្ងាត់នោះទេ លោកអ្នកអាចចុចផ្ញើសារម្តងទៀត)</p>
                                    <div className="img-help">
                                        <img src="/icon/help/account/verify_code/verify_code_kh.png"/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}