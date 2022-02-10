import React from 'react';
import image1 from './images/1.jpg'
import image2 from './images/privacy.jpg'
import image3 from './images/privacy.jpg'
import {handleNav} from '../actions/navbar';
import {connect} from 'react-redux';

class About extends React.Component {
    componentDidMount() {
        // this.props.dispatch(handleNav(null))
    }
    render() {
        return (
            <React.Fragment>
                <div className="pageB" style={{backgroundImage: image3}}>
                    <h1 className="pageSub">
                        ABOUT US
                    </h1>
                </div>
                <div class="bannerMove">
                    <div class="page">
                        <div class="right">
                            <h1>
                            Edge45® is your one-stop digital marketing agency.
                            </h1>
                            <h3>
                            York based businesses need look no further, as our locally minded team are here to help your company succeed in an ever-expanding online world.
                            All good marketing agencies, York based or otherwise, are built on solid foundations and it is our engineering background that gives us the base upon which we grow. Our love for numbers, statistics, and analytics give us the ability to create bespoke plans that are individual to your business.
                            From well-structured PPC and SEO campaigns, through to affiliate marketing and conversion rate optimisation, we’ve got you covered. Heck, we’ll even write stunningly seductive copy for you too, if you so wish.
                            Give our office a call today to find out why we are regarded as York’s leading digital marketing agency. It could be the best business call you’ll ever make.
                            </h3>
                        </div>
                        <div class="left">
                            <img src={image1} />
                            <img src={image2} />
                            <div class="caption"> 
                             
                            </div>
                            <div class="row">
                                <h2>Curiosity</h2>
                                <h4>Some sort of ethos, make around 10 to 20 words, longer than this, needs to be longer.</h4>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps() {
    return {

    }
}
export default connect(mapStateToProps)(About);