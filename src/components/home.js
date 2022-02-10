import React from "react";
import {connect} from 'react-redux';
import { Canvas, glsl } from 'glsl-canvas-js';
import image from './images/displacement1.jpg';
import TouchCarousel, {clamp} from 'react-touch-carousel'
import NonPassiveTouchTarget from './NonPassiveTouchTarget'
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC'
import data from './data';
import frag from './frag';
import {handleNav} from '../actions/navbar';
import gsap from "gsap/gsap-core";



const cardSize = 300
const cardPadCount = 2

function CarouselContainer (props) {
  const {cursor, carouselState, ...rest} = props
  return (
    <NonPassiveTouchTarget className='carousel-container'>
      <NonPassiveTouchTarget className='carousel-track' {...rest} />
    </NonPassiveTouchTarget>
  )
}
const Container = touchWithMouseHOC(CarouselContainer)  

  
class Home extends React.Component {
    scroll = React.createRef();
    parent = React.createRef();
    card = React.createRef();
    fbCards = React.createRef();
    constructor(props) {
      super(props);
        this.myRef = React.createRef();
    }
    state = {
        playing: 0
    }
    componentDidMount() {
        let gls = new Canvas(this.myRef.current);
        gls.load(frag)
        gls.setUniform('displacement', image)
        let stagger = Array.from(this.parent.current.querySelectorAll('.stagger'));
        stagger.map((x, i) => {
            //console.log(x, i)
            gsap.fromTo(x, {y: (i===0 | i===3 | i===6) ? 40 : (i===1 | i===4 | i===7) ? 60 : 80, opacity: 0}, {
                y: 0,
                opacity: 1,
                duration: (i===0 | i===3 | i===6) ? 0.4 : (i===1 | i===4 | i===7) ? 0.6 : 0.8,
                //delay: (i===0 | i===3 | i===6) ? 0 : (i===1 | i===4 | i===7) ? 0.4 : 0.8,
                scrollTrigger: {
                    trigger: x.parentElement,
                    start: 'top 60%',
                    end: 'top 40%',
                    toggleActions: 'restart none none reverse'
                }
            })
        })
        let map = Array.from(this.parent.current.querySelectorAll('.scroll'))
        map.map(item => {
            gsap.fromTo(item, {opacity: 0}, {
                opacity: 1,
                duration:1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 60%',
                    end: 'top 40%',
                    scrub:1
                }
            })
        })
        let fbCards = Array.from(this.fbCards.current.querySelectorAll('.avatar'));
        fbCards.map((x, i) => {
            let img = x.querySelector('.right').querySelector('.imgA');
            gsap.fromTo(img, {scale: 0.6}, {
                scale: 1,
                //ease: 'Back.ease.config(1.7)',
                duration: 1,
                scrollTrigger: {
                    trigger: x.parentElement,
                    start: 'top 40%',
                    toggleActions: 'restart none none reverse'
                }
            })
            gsap.fromTo(x, {y: 50, opacity: 0.2}, {
                y: 0,
                opacity: 1,
                duration: (i==0) ? 0.3 : (i==1) ? 0.5 : 0.7,
                scrollTrigger: {
                    trigger: x.parentElement,
                    start: 'top 40%',
                    toggleActions: 'restart none none reverse'
                }
            })
        })
    }
    renderCard = (index, modIndex, cursor) => {
        const item = data[modIndex]
        const opacity = 1 - 1.5 * Math.abs(index + cursor)
        const zIndex = opacity * data.length
        return (
          <div
            key={index}
            className='carousel-card'
            style={{
              opacity: clamp(opacity, 0, 1),
              zIndex
            }}
          >
            <div
              className='carousel-card-inner'
              style={{
                backgroundColor: item.background
              }}
            >
              <div className='carousel-title'>{item.title}</div>
              <div className="car-row">
                
                <div style={{backgroundImage: `url(${item.img})`}} className='carousel-img'></div>
                <div className="col">
                    <div className='carousel-text'>{item.text}</div>
                    <div className='carousel-jr'>{item.jobRole}</div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    render() {
    
        return (
            <React.Fragment>
                <canvas ref={this.myRef} style={{width: 700, height: 700}}></canvas>
                <section className="section">
                    <div className="inhale">
                        Loremlong
                    </div>
                    <div className="exhale">
                        Marketing
                    </div>
                </section>

                <div ref={this.parent} className="grid">
                    <div ref={this.scroll} className="scroll grid1">
                        <p>Loremipsum is a digital marketing agency based in York that helps businesses grow their online presence and profitability by providing expert analysis and actionable insights that make your website work harder for you.</p>
                    </div>
                    <div ref={this.scroll} className="scroll grid2">
                        <div ref={this.card} className="row">
                            <div className="stagger img"></div>
                            <h1 className="stagger">A Digital Marketing Agency with Real Expertise</h1>
                            <h3 className="stagger">A proven track record | Every client strategy is unique</h3>
                        </div>
                        <div ref={this.card} className="row">
                            <div className="stagger img"></div>
                            <h1 className="stagger">We're An Extension Of Your Own Team</h1>
                            <h3 className="stagger">Regular, direct contact | Easy to get in touch with</h3>
                        </div>
                        <div ref={this.card} className="row">
                            <div className="stagger img"></div>
                            <h1 className="stagger">Passion, Pride & Commitment</h1>
                            <h3 className="stagger">Going the extra mile is just a normal day’s work | Class leading knowledge gives our clients the Edge </h3>
                        </div>
                    </div>
                    <div ref={this.scroll} className="scroll grid3">
                        <h1>Our Digital Marketing Services</h1>
                        <h3>Once we have a thorough understanding of your business’s goals & objectives we identify & action the specific marketing channels & strategies that will deliver the best ROI for you including:</h3>
                        <div className="inside">
                            <div className="row1">
                                <div className="box">
                                    <h2>Search Engine Optimisation</h2>
                                    <h4>SEO increases the quantity of traffic to your website by ranking higher in search engine results.</h4>
                                </div>
                                <div className="box">
                                    <h2>Pay Per Click Advertising</h2>
                                    <h4>PPC gives your website instant page 1 visibility for the search terms critical to your online business.</h4>
                                </div>
                                <div className="box">
                                    <h2>Conversion Rate Optimisation</h2>
                                    <h4>SEO & PPC drives more visitors to your website, CRO converts as many as possible into customers.</h4>
                                </div>
                            </div>
                            <div className="row2">
                                <div className="img">
                                    <div ref={this.fbCards} className="inner">
                                        <div className="avatar">
                                            <div className="right">
                                                <div className="imgA"></div>
                                            </div>
                                            <div className="left">
                                                <h5>Higher engagement</h5>
                                                <h2>Our proven strategies boost engagement.</h2>
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="right">
                                                <div className="imgA"></div>
                                            </div>
                                            <div className="left">
                                                <h5>Greater Recognition</h5>
                                                <h2>We help establish a brand.</h2>
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="right">
                                                <div className="imgA"></div>
                                            </div>
                                            <div className="left">
                                                <h5>More Sales</h5>
                                                <h2>Creating a more profitable business.</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row3">
                            <div className="box">
                                    <h2>Email Marketing</h2>
                                    <h4>With double digit conversion rates & little cost, if you aren’t doing email marketing, you should be.</h4>
                                </div>
                                <div className="box">
                                    <h2>Affiliate Marketing</h2>
                                    <h4>Get other websites to promote your services & only pay for visitors they send that convert.</h4>
                                </div>
                                <div className="box">
                                    <h2>Branding & Merchandising</h2>
                                    <h4>Why should people buy from you & not your competitors? Get this right and get more sales.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="scroll grid5">
                        <div className="left">
                            <h1>Loremipsum</h1>
                            <h2>Marketing Agency</h2>
                            <h3>&#169; Loremipsum Ltd </h3>
                        </div>
                        <div className="right">
                            <div className="address">
                            Swinegate Court East,
                            Swinegate,
                            York, YO1 8AJ
                            </div>
                            <h3>testemail@email.com</h3>
                            <h4>0113 432 4321</h4>
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
export default connect(mapStateToProps)(Home);