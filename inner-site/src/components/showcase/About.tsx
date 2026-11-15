import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Amine Belkoubaa</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Full-Stack Developer and AI Engineer student, currently
                    pursuing a Master 2 in Health and Artificial Intelligence (Health-AI)
                    at Université Bourgogne Europe in Dijon, France.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:medaminebelkoubaa@gmail.com">
                        medaminebelkoubaa@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a very young age, I have had a strong fascination with computers
                    and technology. I got hooked on computing and video games as a kid,
                    curious about how software, graphics, and interactive systems work behind the scenes.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me in 2005, already in front of the screen :)
                        </sub>
                    </p>
                </div>

                <p>
                    My academic journey started with a strong foundation in software engineering,
                    graduating with honors (Mention Bien) in Software Engineering from EMSISA (Fès, Morocco),
                    followed by a Master 1 in Information Systems Engineering and Artificial Intelligence.
                    Currently, I am in Dijon completing my Master 2 in Health-AI at Université Bourgogne Europe,
                    combining cutting-edge deep learning with modern full-stack web and mobile architectures.
                </p>
                <br />
                <p>
                    Professionally, I have worked as a Full-Stack Developer at INCUBOOSTER building a comprehensive
                    real estate platform with Django REST Framework, React, and PostgreSQL, and at PALMARÈS ASCENSEURS
                    developing customer maintenance and intervention management applications. In AI, I specialize in
                    Vision Transformers, LSTM time-series autoencoders, and modern deep learning frameworks.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Interests & Hobbies</h3>
                        <br />
                        <p>
                            Beyond code and algorithms, I love playing football, gaming, surfing,
                            and traveling to discover new cultures. I thrive on curiosity, continuous
                            self-learning, team spirit, and tackling challenging technical problems.
                        </p>
                        <br />
                        <p>
                            I speak Arabic (native), French (bilingual), English (intermediate),
                            and have notions of Spanish.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Amine Belkoubaa
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. Have fun testing the interactive retro OS!
                </p>
                <br />
                <p>
                    If you have any questions or opportunities, I would love to hear
                    from you. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:medaminebelkoubaa@gmail.com">
                        medaminebelkoubaa@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
