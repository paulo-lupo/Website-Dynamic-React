import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'

export class Projects extends Component {
    render() {
        return (
            <Spring
            from={{opacity: 0, marginTop: +500}}
            to={{opacity: 1, marginTop: 50}}
        >
            { props => (
                <div style={props}>
            <div>   
                <section className="banner-out">
                    <h1 align="center" style={{fontFamily: "'Play', sans-serif"}}>Coming soon! Visit my 
                        <a href='https://github.com/Paulo-Lupo' target="_blank" rel="noopener noreferrer"> GitHub </a> 
                        page for the source code of some of my projects
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

export default Projects
