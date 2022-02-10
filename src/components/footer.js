import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
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
        )
    }
}

export default Footer;