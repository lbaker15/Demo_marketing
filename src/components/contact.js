import React from 'react';
import Map, { MapContainer } from './map.js';
import Footer from './footer.js';
import {connect} from 'react-redux';
import image3 from './images/privacy.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faComment, faMousePointer, faMapMarker } from '@fortawesome/free-solid-svg-icons';


const coords = {
    lat: 53.9604173,
    lng: -1.0632613 
}
class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="pageB" style={{backgroundImage: image3}}>
                    <h1 className="media pageSub2">
                        CONTACT US
                    </h1>
                </div>
                <div className="contact">
                    <div className="text">
                        <h1>We'd love to hear from you! Feel free to Send us a message and get in touch!</h1>
                        <h3>If you are looking for a new agency or support in growing your business, send our team a message and we will give you a call to discuss how we can help.</h3>
                    </div>
                    <div className="flex">
                        <div className="col">
                            <div className="row">
                                <label htmlFor="name">Your Name:</label>
                                <input name="name" />
                            </div>
                            <div className="row">
                                <label htmlFor="email">Your Email:</label>
                                <input name="email" />
                            </div>
                            <div className="row">
                                <label htmlFor="subject">Subject:</label>
                                <input name="subject" />
                            </div>
                            <div className="row">
                                <label htmlFor="message">Your Message:</label>
                                <input name="message" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="row2">
                                <div className="iconRow">
                                    <FontAwesomeIcon icon={faMobile} />
                                    <h1>Call Us</h1>
                                </div>
                                <h2>0113 543 1234</h2>
                            </div>
                            <div className="row2">
                                <div className="iconRow">
                                    <FontAwesomeIcon icon={faMousePointer} />
                                    <h1>Email Us</h1>
                                </div>
                                <h2>marketing123@hotmail.co.uk</h2>
                            </div>
                            <div className="row2">
                                <div className="iconRow">
                                    <FontAwesomeIcon icon={faComment} />
                                    <h1>Social Media</h1>
                                </div>
                                <div style={{display: 'flex', gap: '5px'}}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row2">
                                <div className="iconRow">
                                    <FontAwesomeIcon icon={faMapMarker} />
                                    <h1>Come And See Us</h1>
                                </div>
                                <div style={{marginTop: 10, flexDirection: 'column'}}>
                                    <h2>123 Address Line </h2>
                                    <h2>York </h2>
                                    <h2>North Yorkshire </h2>
                                    <h2>YO24 53SJ </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Map center={coords} zoom={16} />
                {/* PRIVACY POLICY */}
                <Footer />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps)(Contact)