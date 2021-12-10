import React from "react";
import { Purple } from "../Purple";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/small.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { LogoText } from "../LogoText";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            WHAT WE AIM TO DO <span className="purple"> TOGETHER </span>
                        </h1>
                        <p className="home-about-body">
                            We are a student organization at the <span className="logo-yellow">University of Michigan - Dearborn</span>. We believe that the only way programmers can truly
                            ready themselves for the job market in the real world is by having <Purple strong>experience</Purple>, for there is no better programming teacher in the world
                            than one's own passionate work.
                            <br />
                            The goal of <LogoText /> is to create an environment that provides this <Purple>internship-like or job-like experience</Purple> to all undergraduate students at the University of Michigan - Dearborn—even freshmen.
                            <br />
                            Learn more in the <Purple strong><a href='/About' style={{ textDecoration: 'none' }}>About</a></Purple> page.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND US ON</h1>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/OLogN-umd"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            {/* <li className="social-icons">
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
