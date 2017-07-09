/**
 * Created by Naseat_PC on 3/8/2017.
 */
import React from 'react';
import { loadLanguage } from './../../../../localstorages/local_storage';

export  default class PostRule extends React.Component{

    render(){
        return(
            <div className="row">
                {
                    loadLanguage() == 'en' ||  loadLanguage() == undefined ?
                        <div>
                            <div className="cambo-smart-privacy col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <div className="top-title-privacy">
                                    <p className="head-title">Ad Posting Rule</p>
                                </div>
                                <div className="content-privacy">
                                    <p className="head-title">Purposes and General Provisions of Cambosmart.com</p>
                                    <p>To serve the user’s interests, trust, and happiness with the services [provided by Cambosmart.com], the user is requested to follow the following measures: </p>
                                    <p className="title">
                                    <ol>
                                        <li>Shall honor the rules and regulations of the government</li>
                                        <li>Shall reduce buyer and seller risks</li>
                                        <li>Shall provide equal opportunity in purchasing [product/service] and to all buyers</li>
                                        <li>Shall protect intellectual property</li>
                                        <li>[Shall provide] genuine service and advertisement in order to keep his/her dignity and happiness in doing business.</li>
                                    </ol>
                                    </p>
                                </div>
                            </div>
                            <div className="cambo-smart-privacy col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <div className="title-privacy">
                                    <p className="head-title">Understanding and Prohibition that User Should Know </p>

                                </div>
                                <div className="content-privacy">
                                    <p className="title">
                                        <p>To avoid any user’s activity that might face the laws, the user of Cambosmart.com shall learn of and understand the information, circular of the government,
                                            constitution of the Kingdom of Cambodia, business law, and intellectual property law by his/her own.</p>
                                        <p>
                                            The user shall use, advertise and exhibit his/her product in the row/column of business and product set in advance by the system. In the event that the user fails to follow the rules, Cambosmart.com reserves rights to remove [the advertisement from the website] without prior notice.
                                            Cambosmart.com shall not be responsible for any doing or activity of the user. Any party who makes an intentional or unintentional mistake, the said default party shall undertake to accept full responsibility before the law in force.
                                        </p>
                                   </p>
                                </div>
                            </div>
                            <div className="cambo-smart-privacy col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <div className="title-privacy">
                                    <p className="head-title">Other Prohibitions</p>
                                </div>
                                <div className="content-privacy">
                                    <p className="title" >
                                    <ol>
                                        <li>Declaration of service that is against to the state’s law or circular of the government</li>
                                        <li>Political ads, troll politics and troll general that might infringe on the rights and honors of the King, the government, government officials, the public, and other religions</li>
                                        <li>Open advertisement of confidential information of the country, confidentiality of the government, police and army, air’s confidential data, confidential information of individual, company, institution and unit, terrorism, kidnap, spying, or any other information related to national security</li>
                                        <li>Using intellectual property product, exclusive rights, copy, using picture and name of the public figure, politician, government officials, artist, [and] writer without his/her prior consent</li>
                                        <li>Counterfeit products, illegal products, porn products, explosives, weapon, drug ingredient, drug, counterfeit drug, illegal production tool, illegal products, artifacts prohibited by the law, and products banned by the government or law</li>
                                        <li>Illegal trafficking such as sexual trafficking, human trafficking, trafficking of human and animal organs, trafficking of endangered species or wildlife that are not allowed to be traded, trafficking of forest byproduct, trafficking of any good and service that breaks to the circular of the government and the law of the Kingdom of Cambodia</li>
                                        <li>Advertisement and exhibition of product and service lied to and cheated on customer shall be reported to the competent authority to take legal action.</li>
                                    </ol>
                                    </p>
                                </div>
                            </div>
                            <div className="cambo-smart-privacy col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <div className="title-privacy">
                                    <p className="head-title">Exclusive rights of Cambosmart.com</p>
                                </div>
                                <div className="content-privacy">
                                    <p className="title" >
                                     <p>Cambosmart.com is entitled to delete user’s data, advertisement and exhibition of product without prior notice in the case that the aforementioned doings are found irregularity and breach of its internal regulations. In the event of serious case, user’s account shall be
                                         unconditionally deleted and prohibited from the system.</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="cambo-smart-privacy col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <div className="top-title-privacy">
                                    <p className="head-title">វិធានប្រកាស់ប្រើទូទៅ ( Ad Posting Rule)</p>
                                </div>
                                <div className="content-privacy">
                                    <p className="head-title">គោលបំណង និង ច្បាប់ទូទៅរបស់របស់ខេមបូស្មាត (Cambosmart.com)</p>
                                    <p className="title">
                                    <p>ដើម្បីបម្រើផលប្រយោជន៏ដល់អ្នកប្រើប្រាស់ ភាពជឿទុកចិត្ត និងភាពរីករាយជាមួយសេវាកម្ម សូមលោកអ្នកប្រើប្រាស់អនុវត្តតាមវិធានការមួយចំនួនដូចខាងក្រោម ៖</p>
                                    <ol>
                                        <li>ការគាំទ្រច្បាប់ និងបទបញ្ជារបស់រដ្ធាភិបាល </li>
                                        <li>កាត់បន្ថយហានិភ័យ ទាំងអ្នកទិញនិងអ្មកលក់ </li>
                                        <li> ផ្ដល់ជូននូវឳកាសស្មើរៗគ្នា រវាងអ្នកទិញ និងអ្នកលក់ទាំងអស់ </li>
                                        <li>ការពារសិទ្ធិកម្មសិទ្ធិបញ្ញារ </li>
                                        <li>សេវាកម្មនិងការផ្សព្វផ្សាយពិតប្រាកដ រក្សារភាពថ្លៃថ្នូ និងភាពរីករាយក្នុងការធ្វើអាជីវកម្ម</li>
                                    </ol>
                                    </p>
                                </div>
                            </div>
                            <div className="cambo-smart-privacy col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <div className="title-privacy">
                                    <p className="head-title">ការស្វែងយល់និងការហាមឃាត់ ដែលលោកអ្នកប្រើប្រាស់ត្រូវដឹងជាពត៏មាន</p>
                                </div>
                                <p className="title">ដើម្បីជៀសវាងសកម្មភាព ណាមួយដែលលោកអ្នកអាចប្រឈមនិងច្បាប់ ។ លោកអ្នកប្រើប្រាស់ ខេមបូស្មាត (Cambosmart.com) ត្រូវស្វែងយល់ពីពត៏មាន សេចក្ដីណែនាំរបស់រដ្ធាភិបាល ច្បាប់រដ្ធធម្មនុញ្ញនៃព្រះរាជាណាចក្រកម្ពុជា ច្បាប់អាជីវកម្ម ច្បាប់កម្មសិទ្ធិបញ្ញា ផ្សេងៗដោយខ្លួនឯង ។
                                    លោកអ្នកប្រើប្រាស់ ត្រូវប្រើប្រាស់ ផ្សព្វផ្សាយ និងការ តាំងបង្ហាញផលិតផល ទៅតាមផ្នែកនៃអាជីវកម្ម ផលិតផលដែលបាន កំណត់ជូនរួចជាស្រេច នៅក្នុងប្រព័ន្ធគ្រប់គ្រង ។
                                    ក្នុងករណីដែលលោកអ្នកអនុវត្តន៏ផ្ទុយពីការកំណត់ នោះខេមបូស្មាត (Cambosmart.com) និងរក្សារសិទ្ធិក្នុងការលុបចេញ ដោយគ្មានការជូនដំណឹងជាមុន ។
                                    ខេមបូស្មាត (Cambosmart.com) មិនទទួលខុសត្រូវ លើទង្វើ ឬ សកម្មភាពណាមួយ ដែលបង្ករដោយអ្នកចូលប្រើប្រាស់ (Users) សេវាកម្មរបស់យើង នោះឡើយ ។ ភាគ្គីណាមួយដែលបង្កើតកំហុស ទោះដោយចេតនា ឬ អចេតនាភាគីនោះត្រូវទទួលខុសត្រូវ ចំពោះមុខច្បាប់ ដោយខ្លួនឯង ។
                                </p>
                            </div>
                            <div className="cambo-smart-privacy col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <div className="title-privacy">
                                    <p className="head-title">លក្ខ័ណ្ឌ ហាមឃាត់ផ្សេងៗ </p>
                                </div>
                                <div className="content-privacy">
                                    <p className="title">
                                    <ol>
                                        <li>ការប្រកាសសេវាកម្ម ដែលប្រឆាំងនិងច្បាប់ប្រទេស ឬគោលការណ៏ដែលណែនាំដោយរដ្ធាភិបាល </li>
                                        <li>ការប្រកាស់ផ្សព្វផ្សាយពត៏មាននយោបាយ រូបភាពថ្លុកនយោបាយ រូបថ្លុកទូទៅដែលធ្វើឲ្យប៉ះពាល់ សិទ្ធិនិងកិត្តិយសរបស់ព្រះមហាក្សត្រ រដ្ធាភិបាល មន្រ្តីសាធារណៈ សាធារណៈជន សាសនាផ្សេងៗ ់</li>
                                        <li>ប្រកាស់ផ្សព្វផ្សាយប់កចំហរ ពីពត៏មានសម្ងាត់របស់ប្រទេស កិច្ចការងារសំងាត់របស់រដ្ធាភិបាល ពូលីស កងទ័ពការពារសន្តិសុខជាតិ ទិន្នន័យសម្ងាត់ផ្លូវអាកាស ពីពត៏មានសម្ងាត់របស់ឯកជន ក្រុមហ៊ុនស្ថាប័ន អង្គភាព ផ្សេងៗ អំពើភារវកម្ម អំពើចាប់ចំរិត ចារកម្ម ឬ ពត៏មានទាំងឡាយណាដែល ពាក់ព័ន្ធ ជាមួយសន្តិសុខសង្គមជាតិ ។</li>
                                        <li>ការប្រើប្រាស់ពីផលិតផលកម្មសិទ្ឋិបញ្ញា សិទ្ឋិផ្តាច់មុខ ករលូចចម្លង ករេ្របើ្របស់រូបថត
                                            ឈ្នោះ បុគ្គលសាធារណៈ  អ្នកនយោបាយ មន្រ្តីរាជការ សិល្បករ អ្នកនិពន្ធ ផ្សេងៗ ដោយគ្មនការអនុញ្ញាតិ។
                                        </li>
                                        <li>ផលិតផលក្លែងក្លាយ ផលិតផលខុសច្បាប់ទូទៅ ផលិតផលបែប អាសអាភាស អសិលធម៏ សារធាតុគ្រឿងផ្ទុះ អាវុធ សារធាតុ ផ្សុំ គ្រឿងញៀន គ្រឿងញៀនផ្សេងៗ  ឳសថក្លែងក្លាយ
                                            ឧបករណ៏ ផលិតដែលខុសច្បាប់ ទំនិញខុសច្បាប់ វត្ថុបុរាណ ដែលឋិតក្នុងច្បាប់ ហាមឃត់
                                            និងទំនិញដែលឋិតក្នុងការហាមឃត់របស់ រាជរដ្ធាភិបាល ឬ ជោយច្បាប់ជាដើម ។
                                        </li>
                                        <li>ការជួញដូរខុសច្បាប់ដូចជា ការប្រកាសការជួញដូរផូ្លវេភទ ជួញដូរមនុស ជួញដូរផ្នែកណាមួយ
                                            របស់មនុស្ស សត្វ  ជួញដូរសត្វជិតផុតពូជឬសត្វព្រៃដែលជាប្រភេទសត្តហាមឃាត់ ករជួញដូរ
                                            អនុផលព្រៃឈើខុសច្បាប់ ការជួញដូររាល់ទំនិញឬសេវាកម្មទំាងឡាយដែលរំលោភបំពាន លើ
                                            សរាចរណ៏ ណែនំារបស់រដ្ធាភិបាលនិងច្បាប់របស់្រពះរាជាណាចក្រកម្ពុជា ។
                                        </li>
                                        <li>ការផ្សព្វផ្សាយនិងការតាំង បង្ហាញផលិតផលសេវាកម្ម ដែលមានការភូតកុហក់ បោកប្រាស់ ដល់អ្នក
                                            ប្រើប្រាស់ និង តូ្រវរាយការណ៏ ជូនដល់ដែនសមត្តិកិច្ច ដើម្បីចាត់ តាមវិធានការច្បាប់។
                                        </li>
                                    </ol>
                                    </p>
                                </div>
                            </div>
                            <div className="cambo-smart-privacy col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <div className="title-privacy">
                                    <p className="head-title">សិទ្ឋិផ្តាច់មុខរបស់ ខេមបូស្មាត (Cambosmart.com)</p>
                                </div>
                                <p className="title">
                                <p>ខេមបូស្មាត (Cambosmart.com) មនសិទ្ឋលុបទិន្នន័យ ការផ្សព្វផ្សាយ ការតាំងបង្ហាញ
                                    ផលិតផល របស់អ្នកប្រើប្រាស់ ក្នុងករណី ខេមបូស្មាត (Cambosamart.com)
                                    យល់ឃើញថា មានភាពមិនប្រក្រតី និងមិនគោរពបទបញ្ជារផ្ទៃក្នុង របស់យើង
                                    ដោយគ្មានជូនដំណឹងជា មុន។ ក្នុងករណី កំរិត ធ្ងន់ធ្ងរ គឺ គណនីរបស់លោកអ្នកតូ្រវលុបេចញ
                                    និងហាមឃត់ពីប្រព័ន្ធ គ្រប់គ្រង ដោយគ្មានលក្ខ័ណ្ឌតវា ។
                                </p>
                                </p>
                            </div>
                        </div>
                }

            </div>
        )
    }
}
