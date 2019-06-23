import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'

export class Resume extends Component {
    render() {
        return (
            <Spring
            from={{opacity: 0, marginTop: +500}}
            to={{opacity: 1, marginTop: 50}}
        >
            { props => (
                <div style={props}>
            <div>   
                <section class="banner-out">
                    <h1 align="center" style={{fontFamily: "'Play', sans-serif"}}>Coming soon, visit this 
                        <a href='https://paulo-ferreira-resume.s3.amazonaws.com/Paulo-Ferreira-Resume.pdf'> link </a> 
                        for the pdf version
                    </h1>
                </section>
                </div>
                                </div>
       
                                )
       
                       }
                       </Spring>
        )
    }
}

export default Resume
