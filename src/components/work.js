import React from 'react';
import gsap, {TimelineMax} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
gsap.registerPlugin(TimelineMax, ScrollTrigger, ScrollToPlugin);

class Work extends React.Component {
    state = {
        hover: null,
        touch: false,
        target: null, startX: null, startTime: null,
        left: false, right: false
    }
    tl = new TimelineMax({paused: true})
    inner = React.createRef()
    trig1 = React.createRef()
    componentDidMount() {
        let items = Array.from(this.inner.current.querySelectorAll('.img'))
        console.log(items)
        items.map((item,i) => {
            let nums = ['90', '140']
            if (i > 0) {
                gsap.to(item, {
                    x: -(i * 100) + '%',
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trig${i}`,
                        start: `top ${90 + ((i-1)*50)}%`,
                        end: 'top 0%',
                        scrub: 1,
                    }
                })
            }
        })
    }
    handleHover = (e) => {
        let h1 = e.target.querySelector('h1')
        let h3 = e.target.querySelector('h3')
        let tl = new TimelineMax({paused: true})
        tl
        .fromTo(e.target, {filter: 'grayscale(0%)'}, {filter: 'grayscale(60%)', duration: 0.4, ease: 'easeOut'})
        .to(h1, {
            opacity: 1, y: -50, duration: 0.5
        }, '<')
        .to(h3, {
            opacity: 1, y: -50, duration: 0.5
        }, '<')
        .restart()
        this.setState({
            hover: e.target.id,
            tl: tl
        })

    }
    handleOut = (e) => {
        this.state.tl.reverse(0)
        this.setState({
            hover: null, 
        })
    }
    touchStarted = (e) => {
        this.setState({
            touch: true,
            startX: e.changedTouches[0].clientX,
            startTime: new Date().getTime(),
            target: e.target
        })
    }
    touchEnded = (e) => {
        let {left, right, target} = this.state;
        if (left) {
            if (target.id === 'img1') {
                gsap.to('body', {scrollTo: window.innerHeight})
            } else if (target.id === 'img2') {
                gsap.to('body', {scrollTo: window.innerHeight*2})
            } 
        } else if (right) {
            if (target.id === 'img2') {
                gsap.to('body', {scrollTo: window.innerHeight-window.innerHeight})
            } else if (target.id === 'img3') {
                gsap.to('body', {scrollTo: window.innerHeight})
            } 
        }
        setTimeout(() => {
            this.setState({
                left: false, right: false, touch: null, startTime: null, startX: null, target: null
            })
        }, 500)
    }
    pointerMove = (e) => {
        let {startX, startTime} = this.state;
        let x = e.changedTouches[0].clientX;
        //SWIPE LEFT WILL BE POSITIVE NUM SWIPE RIGHT NEGATIVE
        let dist = startX - x;
        let elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= 1000 && dist >= 125) {
            this.setState({
                left: true
            })
        } else if (elapsedTime <= 1000 && dist <= -120) {
            this.setState({
                right: true
            })
        }
    }
    render() {
        const {hover} = this.state;
        return (
            <React.Fragment>
                <div className="trig1" ref={this.trig1}></div>
                <div className="trig2"></div>
                <div className="scrollContain">
                    <div className="carousel">
                        <div ref={this.inner} className="inner">
                            <div 
                            //style={hover === "img1" ? {filter: 'brightness(75%) grayscale(20%)'} : null}
                            onTouchStart={this.touchStarted}
                            onTouchMove={this.pointerMove}
                            onTouchEnd={this.touchEnded}
                            onMouseOver={this.handleHover}
                            onMouseOut={this.handleOut}
                            id="img1" className="img img1">
                                <h1>Project 1</h1>
                                <h3>Lorem ipsum is the standard language of the typing industry.</h3>
                            </div>
                            <div 
                            //style={hover === "img2" ? {filter: 'brightness(75%) grayscale(20%)'} : null}
                            onTouchStart={this.touchStarted}
                            onTouchMove={this.pointerMove}
                            onTouchEnd={this.touchEnded}
                            onMouseOver={this.handleHover}
                            onMouseOut={this.handleOut}
                            id="img2" className="img img2">
                                <h1>Project 2</h1>
                                <h3>Lorem ipsum2 is the standard language of the typing industry.</h3>
                            </div>
                            <div 
                            //style={hover === "img3" ? {filter: 'brightness(75%) grayscale(20%)'} : null}
                            onTouchStart={this.touchStarted}
                            onTouchMove={this.pointerMove}
                            onTouchEnd={this.touchEnded}
                            onMouseOver={this.handleHover}
                            onMouseOut={this.handleOut}
                            id="img3" className="img img3">
                                <h1>Project 3</h1>
                                <h3>Lorem ipsum3 is the standard language of the typing industry.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Work;