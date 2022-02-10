import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import gsap, {TimelineMax} from 'gsap';
import home from './images/home.jpg'
import about from './images/about.jpg'
import contact from './images/contact.jpg'
import privacy from './images/privacy.jpg'
import { handleNav } from '../actions/navbar';
const images = {home, about, contact, privacy}
gsap.registerPlugin(TimelineMax)
class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.tl = new TimelineMax({paused: true})
        this.overlay = React.createRef()
    }
    componentDidMount() {
        let toMap = Array.from(this.props.burgerIcon.current.querySelectorAll('span') );
        this.tl
            .to(this.overlay.current, {duration: 0.01, display: 'block'})
            .to(this.overlay.current, {duration: 0.7, opacity: 1})
            .to(toMap[0], {display: 'none', duration: 0.001}, '<0')
            .to(toMap[1], {rotate: 45, y:12, zIndex: 101, duration: 0.5}, '<0')
            .to(toMap[2], {rotate: -45, zIndex: 101, duration: 0.5}, '<0')
    }
    componentDidUpdate() {
        if (this.props.overlay === null) {
            this.tl.reverse()
        } else {
            if (this.props.overlay) {
                this.tl
                .play()
            } else {
                this.tl
                .reverse()
            }
        }
    }
    state = {
        hover: '',

    }
    handleHover = (e) => {
        this.setState({
            hover: e.target.id
        })
    }
    render() {
        const {hover} = this.state;
        return (
            <React.Fragment>
                <div ref={this.overlay} className="navbarOverlay">
                    <div className="image">
                        <div style={hover ? {backgroundImage: `url('${images[hover]}')`} : null} className="imageHere"></div>
                    </div>
                    <div className="inner">
                        <span id="home" onMouseEnter={(e) => this.handleHover(e)}>
                            <Link to="/" onClick={() => this.props.dispatch(handleNav(null))}>Home</Link>
                        </span>
                        <span id="about"  onMouseEnter={(e) => this.handleHover(e)}>
                            <Link to="/about" onClick={() => this.props.dispatch(handleNav(null))}>About</Link>
                        </span>
                        <span id="privacy"  onMouseEnter={(e) => this.handleHover(e)}>
                            <Link to="/work" onClick={() => this.props.dispatch(handleNav(null))}>Our Work</Link>
                        </span>
                        <span id="contact"  onMouseEnter={(e) => this.handleHover(e)}>
                            <Link to="/contact" onClick={() => this.props.dispatch(handleNav(null))}>Contact</Link>
                        </span>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        overlay: state.reducer1
    }   
}
export default connect(mapStateToProps)(Overlay);