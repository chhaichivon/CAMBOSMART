import React from 'react';
import { Image } from 'react-bootstrap';
import { loadLanguage } from './../../../../localstorages/local_storage';

export default class AboutUs extends React.Component{
    render(){
        return(
            <div className="row about-us">

                <div className="col-xs-12 col-sm-12 col-md-12">
                    <h3 style={{textAlign:'center'}}>Cambosamrt</h3>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <p>
                        {loadLanguage() == "en" || undefined ? "Is an E-Commerce website in Cambodia which provides many special features for users and merchants to sell and buy products easily."
                            : "ខេមបូស្មាតគឺជាគេហទំព័រមួយក្នុងប្រទេសកម្ពុជាដែលផ្តល់អោយនូវភាពងាយស្រួលទៅដល់អតិថិជនក្នុងការស្វែងរកទិញទំនិញតាមរយៈអនឡាញយ៉ាងសំបូរបែបនិងការដាក់លក់ផលិតផលយ៉ាងងាយស្រួលនៅលើគេហទំព័ររបស់យើង។"}

                    </p>
                </div>
                <br/><br/>
                <div className="row about-us">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <h3 style={{textAlign:'center'}}>{loadLanguage() == "en" || undefined ? "Our Leaders" : "ម្ចាស់គេហទំព័រ"}</h3>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4">
                        <Image src="/images/owners/makara.jpg" responsive />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8">
                        <p>{loadLanguage() == "en" || undefined ? "Name: Mr. Thea Makara" : "ឈ្មោះ ៖ ធា មករា"} </p>
                        <p>{loadLanguage() == "en" || undefined ? "Nationality: Cambodian" : "សញ្ជាតិ ៖ ខ្មែរ"} </p>
                        <p>{loadLanguage() == "en" || undefined ? "Job: Managing Director at Engineering Construction and Consultant (ECC)" : "មុខរបរ ៖ Managing Director at Engineering Construction and Consultant (ECC)"}</p>
                        <p>{loadLanguage() == "en" || undefined ? "Phone Number: (855)92 97 22 32" : "លេខទូរសព្ទ័ ៖ (855)77 45 67 52"}</p>
                        <p>{loadLanguage() == "en" || undefined ? "Email: theamakara@gmail.com" : "អ៊ីម៉េល ៖ theamakara@gmail.com"}</p>
                    </div>
                </div>
                <br/><br/>
                <div className="row about-us">
                    <div className="col-xs-4 col-sm-4 col-md-4">
                        <Image src="/images/owners/ratha.jpg" responsive />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8">
                        <p>{loadLanguage() == "en" || undefined ? "Name: Eth Ratha" : "ម្ចាស់គេហទំព័រ"}</p>
                        <p>{loadLanguage() == "en" || undefined ? "Nationality: Cambodian" : "សញ្ជាតិ ៖ ខ្មែរ"}</p>
                        <p>{loadLanguage() == "en" || undefined ? "Job: Project Manager at Engineering Construction and Consultant (ECC)" : "មុខរបរ ៖ Project Manager at Engineering Construction and Consultant (ECC)"}</p>
                        <p>{loadLanguage() == "en" || undefined ? "Phone Number: (855)77 45 67 52" : "លេខទូរសព្ទ័ ៖ (855)77 45 67 52"}</p>
                        <p>{loadLanguage() == "en" || undefined ? "Email: ratha.ecc@gmail.com" : "អ៊ីម៉េល ៖ ratha.ecc@gmail.com"}</p>
                    </div>
                </div>

            </div>

        )
    }
}