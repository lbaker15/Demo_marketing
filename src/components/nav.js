import React from 'react';
import Overlay from './overlay';
import {connect} from 'react-redux';
import {handleNav} from '../actions/navbar';
import {gsap} from 'gsap';

class Nav extends React.Component {
    state = {
        navbar: false
    }
    handleClick = () => {
        // this.setState((prev) => ({
        //     navbar: !prev.navbar
        // }))
        this.props.dispatch(handleNav(!this.props.overlay))
    }
    burgerIcon = React.createRef()
    render() {
        return (
            <React.Fragment>
                <div className="navbar">
                    <div className="logo">Loremipsum</div>
                    <button 
                    ref={this.burgerIcon}
                    onClick={this.handleClick}
                    className="burgerIcon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <Overlay burgerIcon={this.burgerIcon} />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        overlay: state.reducer1
    }
}
export default connect(mapStateToProps)(Nav);