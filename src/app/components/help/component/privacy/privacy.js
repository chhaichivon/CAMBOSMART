import React from 'react';
import './../../index.css';
import { loadLanguage } from './../../../../localstorages/local_storage';
export default class TermAndPrivacy extends React.Component{
    render(){
        return(
            <div className="row">
                {
                    loadLanguage() == 'en' || loadLanguage() == undefined ?
                        <div>
                            <div className="cambo-smart-privacy col-xs-12 col-md-12 col-sm-12 col-lg-12">
                                <div className="top-title-privacy">
                                    <p className="head-title">Privacy Policy</p>
                                </div>
                                <div className="content-privacy">
                                    <div className="title-privacy">
                                        <p className="head-title">General Purposes</p>
                                    </div>
                                    <p>
                                        Cambosmart.com is made for general customer to be able to advertise his/her service, sale-purchase-lease information, product exhibition, and business and job information seeking, and to have an opportunity to meet his/her business partner.
                                        Cambosmart.com do not accept or cooperate in advertising any activity related to political party, politician, political message, spying, crime, or any picture that has a bad affect to the society and is against to the humanity.

                                    </p>

                                </div>
                            </div>
                            <div className="cambo-smart-privacy col-xs-12 col-md-12 col-sm-12 col-lg-12">
                                <div className="title-privacy">
                                    <p className="head-title">Personal Information of Those Who Create Cambosmart.com Account</p>
                                </div>
                                <div className="content-privacy">
                                    <p className="title">
                                        <p>
                                        Those who agree to create Cambosmart.com account shall absolutely provide their exact personal information, address, and contact number. In the event of giving false information, he/she shall undertake to accept full responsibility before the law in force.
                                    </p>
                                    </p>
                                </div>
                            </div>
                            <div className="cambo-smart-privacy col-xs-12 col-md-12 col-sm-12 col-lg-12">
                                <div className="title-privacy">
                                    <p className="head-title">Responsibilities</p>
                                </div>
                                <div className="content-privacy">
                                    <p className="title">
                                    <p>
                                        Cambosmart.com is not responsible for any intentional or unintentional doing of the user regarding his/her advertisement and activity that are contrary to the declaration of the government or any doing that is against to the constitution of the Kingdom of Cambodia or international laws.
                                        Cambosmart.com is not responsible for force majeure (including natural disaster, war, political change, law [change], amendment to the law, business oppression, public problem, or the website is hacked by hacker or any person with his/her purpose to disturb or delete user’s data and to damage any format [of the website], making the user be not able to continue using services [provided by Cambosmart.com]).
                                        Cambosmart.com reserves the rights to amend any terms and conditions without prior notice.
                                    </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="cambo-smart-privacy col-xs-12 col-md-12 col-sm-12 col-lg-12">
                                <div className="top-title-privacy">
                                    <p className="head-title">គោលការណ៍ភាពឯកជន</p>
                                </div>
                                <div className="title-privacy">
                                    <p className="head-title">គោលបំណងទូទៅ </p>
                                </div>
                                <div className="content-privacy">
                                    <p className="title">
                                        ខេមបូស្មាត (Cambosmart.com) គឺតូ្រវបានបងើ្កតឡើងដើម្បីអោយអតិថិជនទូទៅអាចផ្សព្វផ្សាយ
                                        សេវាកម្ម ពត៏មានទិញ​ លក់ ជួល ការតាំងបង្ហាញ ពីផលិតផល ផ្សេងៗ ការស្វែងរកពត័មាន អាជីវកម្ម
                                        ពត៏មានការងារ ដើម្បីបង្កើត ឳកាសអោយអតិថិជន ងាយស្រួលក្នុងការស្វែងរក ដៃគូធើ្វពាណិជ្ជកម្ម
                                        ជាមួយគ្នា ទៅវិញទៅមក។
                                        ខេមបូស្មាត (Cambosmart.com) មិនទទួល ឬ ចូលរួម ក្នុងការ ផ្សព្វផ្សាយ សកម្មភាព ផ្សេងៗ ដែលទាក់ទង
                                        ទៅនឹង បក្សនយោបាយ  បុគ្គលនយោបាយ  សារនយោបាយ ចារកម្ម ឧកិ្រតកម្ម ឬ  រូបភាព ពត័មាន ណាមួយ
                                        ដែល បង្ករឲ្យមាន ផលប៉ះពាល់ដល់ សង្គមជាតិ និង ប្រឆំាង និង មនុស្សជាតិ។

                                    </p>
                                </div>
                            </div>
                            <div className="cambo-smart-privacy col-xs-12 col-md-12 col-sm-12 col-lg-12">
                                <div className="title-privacy">
                                    <p className="head-title">ពត៏មានផ្ទាល់ខ្លួន របស់ អ្នកចុះឈ្មោះប្រើប្រាស់ </p>
                                </div>
                                <div className="content-privacy">
                                    <p className="title">
                                        អ្នកដែលចុះឈ្មោះ ប្រើប្រាស់ វេបសាយ ខេមបូស្មាត (Cambosamart.com) គឺដាច់ខាត ត្រូវ តែ រាយការណ៏ ពី ពត៏មាន អត្តសញ្ញាណផ្ទាល់ខ្លួន ទីតាំង រស់នៅ និង លេខទំនាក់ទំនង ឲ្យបាន
                                        ពិតប្រាកដ និង ត្រឹមតូ្រវ។ ក្នុងករណី ដែលអ្នក ចុះឈ្មោះ ប្រើប្រាស់ ភូតកុហក ប្រើប្រាស់ នូវពត៏មាន ទីកន្លែង
                                        មិនពិតផ្សេងៗ  លោកអ្នក​ ត្រូវទទួលខុសត្រូវ ប្រឈមជាមួយច្បាប់ជាកំហិត ។

                                    </p>
                                </div>
                            </div>
                            <div className="cambo-smart-privacy col-xs-12 col-md-12 col-sm-12 col-lg-12">
                                <div className="title-privacy">
                                    <p className="head-title">ការទទួលខុសតូ្រវ</p>
                                </div>
                                <div className="content-privacy">
                                    <p className="title">
                                        ខេមបូស្មាត (Cambosmart.com)  មិនទទួលខុសតូ្រវ លើ ទង្វើ ចេតនា ឬ​ អចេតនា
                                        របស់អ្នក ប្រើប្រាស់ ក្នុងការផ្សព្វផ្សាយ ការបង្ហាញ សកម្មភាពណាមួយ ដែល បានប្រព្រឹត្ត ផ្ទុយពី
                                        សេចកី្តប្រកាស របស់​ រដ្ធាភិបាល ឬ ទងើ្វរំលោភបំពាន និងច្បាប់រដ្ឋធម្មនុញ្ញ នៃ ព្រះរាជាណាចក្រកម្ពុជា
                                        ឬ ច្បាប់អន្តរជាតិផ្សេងៗ។
                                        ខេមបូស្មាត (Cambosmart.com) មិនទទួលខុសតូ្រវ លើករណី ប្រធានសកិ្ត (ដូចជា គ្រោះ ធម្មជាតិ
                                        សង្រ្គាម បំរែបំរួលនយោបាយ ច្បាប់គ្រប់គ្រង វិសោធន៏កម្មច្បាប់ ការគៀបសង្កត់ផ្នែកអាជីវកម្ម
                                        បញ្ហារសាធារណៈផ្សេងៗ   ឬក៏ មានការវាយប្រហាតាម ប្រព័ន្ធ បច្ចេកវិទ្យាពីជនខិលខូច ឬ ជនទំាងឡាយណា
                                        ដែល បង្ករភាពរំខាន ឬ លុបបំផ្លាញ  ទិន្នន័យ ប្រើប្រាស់ និង ធ្វើឲ្យខូច ទិន្នន័យ ប្រើប្រាស់ផ្សេងៗ ដែលបណ្ដាល ឲ្យ អ្នកប្រើប្រាស់ ខាតបង់ ពុំអាចទទួលបាន ការប្រើប្រាស់សេវាកម្មបន្ត) ។
                                        ខេមបូស្មាត (Cambosmart.com) រក្សាសិទ្ឋិ ក្នុងការ កែរប្រែ លក្ខ័ណ្ឌ ផ្សេងៗដោយមិនបានជំរាប
                                        ពត៏មានជាមុន។

                                    </p>
                                </div>
                            </div>
                        </div>
                }

            </div>
        );
    }
}