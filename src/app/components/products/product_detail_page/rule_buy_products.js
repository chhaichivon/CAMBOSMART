/**
 * Created by chhaichivon on 5/3/17.
 */
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { loadLanguage } from './../../../localstorages/local_storage';
import './style.css';
export default class RoleBuyProducts extends React.Component{
    render(){
        return(
            <Row style={{ marginTop:'4px',marginBottom:'4px' }}>
                <Col xs={12} sm={12} md={12} lg={12} className="product-detail">
                    {loadLanguage() == "en" || loadLanguage() == undefined ?
                        <div className="safty">
                            <span className="title">សុវត្ថិភាពក្នុងការទិញទំនិញលើ cambosmart.com៖</span>
                            <span className="title"> ចំណាំ៖</span>
                            <p>រាល់ការទិញទំនិញមិនត្រូវធ្វើការផ្ញើប្រាក់ទៅមុនជាដាច់ខាត ត្រូវជួបអ្នកលក់នៅទីតាំងដែលមានសុវត្ថិភាព និងសូមពិនិត្យមើលទំនិញមុនពេលដែលបង់ប្រាក់។</p>
                            <p>យើងខ្ញុំមិនមិនទទួលខុសត្រូវចំពោះមាតិកា ដែលបានបង្ហោះឡើងដោយសមាជិកឡើយ។ ដូច្នេះយើងខ្ញុំមិនទទួលខុសត្រូវលើការផ្សាយផលិតផលនេះទេ ហើយក៏មិនធានាចំពោះបញ្ហាដែលទាក់ទងដោយផ្ទាល់ ឬ ដោយប្រយោលទៅនឹងសកម្មភាព ឬ អសកម្មណាមួយឡើយ។</p>
                        </div>
                        :
                        <div className="safty">
                            <span className="title">សុវត្ថិភាពក្នុងការទិញទំនិញលើ cambosmart.com៖</span>
                            <p>រាល់ការទិញទំនិញមិនត្រូវធ្វើការផ្ញើប្រាក់ទៅមុនជាដាច់ខាត ត្រូវជួបអ្នកលក់នៅទីតាំងដែលមានសុវត្ថិភាព និងសូមពិនិត្យមើលទំនិញមុនពេលដែលបង់ប្រាក់។</p>
                            <span className="title"> ចំណាំ៖</span>
                            <p>យើងខ្ញុំមិនមិនទទួលខុសត្រូវចំពោះមាតិកា ដែលបានបង្ហោះឡើងដោយសមាជិកឡើយ។ ដូច្នេះយើងខ្ញុំមិនទទួលខុសត្រូវលើការផ្សាយផលិតផលនេះទេ ហើយក៏មិនធានាចំពោះបញ្ហាដែលទាក់ទងដោយផ្ទាល់ ឬ ដោយប្រយោលទៅនឹងសកម្មភាព ឬ អសកម្មណាមួយឡើយ។</p>
                        </div>
                    }
                </Col>
            </Row>
        )
    }
}