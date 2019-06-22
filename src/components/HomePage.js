import React, { Component } from 'react';
import Photo from '../components/images/me2.jpg';
import PhotoComponent from 'react-rounded-image';
import { Spring } from 'react-spring/renderprops';

export class HomePage extends Component {
    render() {
        return(
            <Spring
                from={{opacity: 0, marginTop: +500}}
                to={{opacity: 1, marginTop: 50}}
            >
            { props => (
                <div style={props}>
                    <div>  
                        <section class="banner">
                            <div class="container-width">
                                <div class="banner-container">
                                <PhotoComponent image={Photo}
                                                    roundedColor="#321124"
                                                    imageWidth="500"
                                                    imageHeight="500"
                                                    roundedSize="13"
                                                />

                                <div class="banner-content">
                                    <div class="banner-title">Who am I?
                                    </div>
                                    <div class="banner-description">My name is Paulo Lupo, and I am from New Jersey.
                                    I am a 25 years old dedicated software developer who loves solving problems. Currently I am in my Senior year of Computer
                                    Science at Montclair State University, New Jersey. I am extremely passionate about developing amazing software
                                    that has a pratical use. Some of my current projects involve using machine learning to solve certain graph theory problems,
                                    developing a class scheduler, and more! If you have any questions, feel free to contact me.
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>

                        
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

export default HomePage
