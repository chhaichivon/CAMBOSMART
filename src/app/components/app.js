import React from 'react';
import Navigation from './shared_component/navigation/navigation';
import FooterWeb from './shared_component/footer/footer_web';
import Search from './shared_component/navigation/cambo_search/form_search';
import Logo from './shared_component/navigation/cambo_logo/cambo_logo';
import {handleSwitchLanguage} from './shared_component/translate/global';

 export default class App extends React.Component {
    constructor(){
        super();
        this.setState =({
           lang:'en'
        });
        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    }
    componentWillMount(){
    }
    handleChangeLanguage (data){

    }
    render() {
        return (
            <div>
                <div className="top-header">
                    <div className="container header">
                        <div className="col-xs-2 logo">
                            <Logo/>
                        </div>
                        <div className="col-xs-10 header-menu">
                            <Navigation handleChangeLanguage={this.handleChangeLanguage.bind(this)}/>
                            <Search params={this.props.location.query}/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="wrap-container">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
                <div>
                    <FooterWeb />
                </div>
            </div>
        );
    }
}



