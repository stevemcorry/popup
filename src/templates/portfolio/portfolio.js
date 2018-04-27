import React, { Component } from 'react';
import './portfolio.css';
import Modal from '../modal/modal';

class Portfolio extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            mobile: false,
            mobileInfo: "ios and android app. Keep track of customers and send them marketing emails and text messages.",
            desktopInfo: "Desktop App. Keep track of customers and send them marketing emails and text messages.",
            roomingInfo: "A website to find and sell apartment listings for college students.",
            dayoffInfo: "Front end app built using the angular framework.",
            scrollAbout: 0
         };
        this.scrollEvent = this.scrollEvent.bind(this);
    }
    componentDidMount () {

      window.addEventListener('scroll', this.scrollEvent);

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      let about = document.getElementById('aboutWrap');
      let topAbout = about.getBoundingClientRect().top+window.scrollY
      this.state.scrollAbout = topAbout;

    }
    scrollEvent(){

        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var menu = document.getElementById('navbar');
        if(scrollTop > 140 ){
            if(!menu.classList.contains('open')){
            menu.classList += ' open';
            }
        } else {
            if(menu.classList.contains('open')){
            menu.classList.remove('open');
            }
        }

        //Document Heights

        let height = document.documentElement.scrollHeight;
        let offSetHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollTop;
        
        //About Heights

        let about = document.getElementById('aboutWrap');
        let aboutSpacer = document.getElementById('aboutSpacer');
        let aboutTop = aboutSpacer.getBoundingClientRect().top;
        let aboutHeight = aboutSpacer.scrollHeight;
        let aboutDimmer = document.getElementById('aboutDimmer');
        let about1 = document.getElementById('about1');
        let about2 = document.getElementById('about2');
        let about3 = document.getElementById('about3');

        //Footer heights

        let footer = document.getElementById('footWrap');
        let footId = footer.getBoundingClientRect().top;

        //console.log(aboutTop, aboutHeight);
        if(aboutTop <= 0){
            if(!about.classList.contains('aboutFix')){
                about.classList += ' aboutFix';
            }
            //if(height <= (scrollHeight + offSetHeight) + 50){
            if(aboutTop <  -350 ){
                if(!footer.classList.contains('footerOn')){
                    footer.classList += ' footerOn';
                }
            } else{
                if(footer.classList.contains('footerOn')){
                    footer.classList.remove('footerOn');
                }
            }
        } else {
            if(about.classList.contains('aboutFix')){
                about.classList.remove('aboutFix');
            }
            if(footer.classList.contains('footerOn')){
                footer.classList.remove('footerOn');
            }
        }
        if(aboutTop < -50){
            if(!about1.classList.contains('aboutOn')){
                about1.classList += ' aboutOn';
            }
            if(!aboutDimmer.classList.contains('dimmerOn')){
                aboutDimmer.classList += ' dimmerOn';
            }
        } else{
            if(about1.classList.contains('aboutOn')){
                about1.classList.remove('aboutOn');
            }
            if(aboutDimmer.classList.contains('dimmerOn')){
                aboutDimmer.classList.remove('dimmerOn');
            }
        }
        //if((aboutTop * -1) >= aboutHeight/5){
        if(aboutTop <  -150 ){
            if(!about2.classList.contains('aboutOn')){
                about2.classList += ' aboutOn';
            }
        } else{
            if(about2.classList.contains('aboutOn')){
                about2.classList.remove('aboutOn');
            }
        }
        //if(height <= (scrollHeight + offSetHeight) + 60){
        if(aboutTop <  -250 ){
            if(!about3.classList.contains('aboutOn')){
                about3.classList += ' aboutOn';
            }
        } else{
            if(about3.classList.contains('aboutOn')){
                about3.classList.remove('aboutOn');
            }
        }

    }
    projectShow(proj){
        if(proj == 'mobile'){
            this.state.mobile = !this.state.mobile;
        } else if(proj == 'desktop'){
            this.state.desktop = !this.state.desktop;
        } else if(proj == 'rooming'){
            this.state.rooming = !this.state.rooming;
        } else if(proj == 'dayoff'){
            this.state.dayoff = !this.state.dayoff;
        } else if(proj == 'off'){
            this.state.dayoff = false;
            this.state.rooming = false;
            this.state.desktop = false;
            this.state.mobile = false;
        }
        this.setState({});
    }
    closeModals(){
        this.state.mobile = false;
    }

    render(){
    return (
        <div className="Portfolio">
            <div id="navbar" className="header">
                <div className="headerList">Popup Diner</div>
                <div className="headerList portfolio"></div>
            </div>
            <div className="main-image">
                <div className="infoWrap">
                    <div className="mainWrapTitle">Popup</div>
                    <div className="mainWrapSubTitle">Great food, Great time</div>
                </div>
            </div>
            <div className="homeWrap">
                <div className="portfolioTitle">The popup experience</div>
                <div className="portfolioSubTitle">Where we've been</div>
                <div className="portfolioWrap">
                    <div className="project" onClick={(e)=>this.projectShow('rooming')}>
                        <div className="projectImage rooming"></div>
                        <div className="projectInfo">
                            <div className="projectInfoTitle">
                                Provo
                            </div>
                            <div className="projectInfoSubTitle">
                                
                            </div>
                        </div>
                    </div>
                    <div className="project" onClick={(e)=>this.projectShow('dayoff')}>
                        <div className="projectImage dayoff"></div>
                        <div className="projectInfo">
                            <div className="projectInfoTitle">
                                Orem
                            </div>
                            <div className="projectInfoSubTitle">
                                
                            </div>
                        </div>
                    </div>
                    <div className="project" onClick={(e)=>this.projectShow('mobile')}>
                        <div className="projectImage mobile"></div>
                        <div className="projectInfo">
                            <div className="projectInfoTitle">
                                Salt Lake
                            </div>
                            <div className="projectInfoSubTitle">
                                
                            </div>
                        </div>
                    </div>
                    <div className="project" 
                        onClick={(e)=>this.projectShow('desktop')}>
                        <div className="projectImage desktop"></div>
                        <div className="projectInfo">
                            <div className="projectInfoTitle">
                                St George
                            </div>
                            <div className="projectInfoSubTitle">
                                
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.mobile ? 
                    <Modal parentMethod={(e)=>this.projectShow('off')} 
                        name="EnrollPro Mobile" 
                        pic="mobile"
                        info={this.state.mobileInfo}/> 
                :  null}
                {this.state.desktop ? 
                    <Modal parentMethod={(e)=>this.projectShow('off')} 
                        name="EnrollPro Desktop"  
                        pic="desktop"
                        info={this.state.desktopInfo}/> 
                :  null}
                {this.state.dayoff ? 
                    <Modal parentMethod={(e)=>this.projectShow('off')} 
                        name="Day Off"  
                        pic="dayoff"
                        info={this.state.dayoffInfo}/> 
                :  null}
                {this.state.rooming ? 
                    <Modal parentMethod={(e)=>this.projectShow('off')} 
                        name="Rooming Board"  
                        pic="rooming"
                        info={this.state.roomingInfo}/> 
                :  null}

                <div id="aboutSpacer">
                    <div className="aboutWrap" id="aboutWrap">
                        <div id="aboutDimmer">
                            <div className="about" id="about1">
                                <div className="footerSubTitle">Hear live music</div>
                            </div>
                            <div className="aboutRight" id="about2">
                                <div className="footerSubTitle">Different experience every time</div>
                            </div>
                            <div className="about" id="about3">
                                <div className="footerSubTitle">New food and faces</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerWrap" id="footWrap">
                <div className="footerTitle">Reserve your spot with us </div>
                <div className="footerSubTitle">popupbois@gmail.com</div>
                <div></div>
                <div></div>
            </div>
        </div>
    )}

}

export default Portfolio;