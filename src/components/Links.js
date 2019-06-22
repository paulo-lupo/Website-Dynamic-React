import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'

export class Links extends Component {
    render() {
        return (
            <Spring
                from={{opacity: 0, marginTop: +500}}
                to={{opacity: 1, marginTop: 50}}
            >
            { props => (
                <div style={props}>
                    <div>              
                        <section class="links-sec">
                            <div class="container-width">
                                <div class="links-title">Important Links
                                </div>
                                <div class="links-desc">Find out more about the projects I have worked and am working on as well as my past job experiences
                                </div>
                                <div class="links">
                                <a href="https://github.com/Paulo-Lupo/" target="_blank" rel="noopener noreferrer">
                                    <div class="link"> 
                                    <div class="link-header-1">
                                    </div>
                                    <div class="link-body">
                                        <div class="link-title">GitHub
                                        </div>
                                        <div class="link-desc">Code repository that includes some of my projects.
                                        </div>
                                    </div>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/paulolupo/" target="_blank" rel="noopener noreferrer">
                                    <div class="link">
                                    <div class="link-header-2">
                                    </div>
                                    <div class="link-body">
                                        <div class="link-title">LinkedIn
                                        </div>
                                        <div class="link-desc">Professional porfolio that includes description of school and job experiences.
                                        </div>
                                    </div>
                                    </div>
                                </a>
                                <a href="https://paulo-ferreira-resume.s3.amazonaws.com/Paulo-Ferreira-Resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <div class="link">
                                    <div class="link-header-3">
                                    </div>
                                    <div class="link-body">
                                        <div class="link-title">Resume
                                        </div>
                                        <div class="link-desc">One page file that includes my most relevant job experience. 
                                        </div>
                                    </div>
                                    </div>
                                </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>    
            )}
            </Spring>
        )
    }
}

export default Links
