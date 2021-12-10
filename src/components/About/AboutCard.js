import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { LogoText } from '../LogoText'
import { Purple } from '../Purple'

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        We believe that the only way programmers can truly
                        ready themselves for the job market in the real world is by having <Purple strong>experience</Purple>, for there is no better programming teacher in the world
                        than one's own passionate work.
                        <br />
                        The goal of <LogoText /> is to create an environment that provides this <Purple>internship-like or job-like experience</Purple> to all undergraduate students at the University of Michigan - Dearborn—even freshmen.
                        <br />
                        We would:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> <Purple>Aim</Purple> to build something we can show off to the world
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> <Purple>Teach</Purple> each other valuable skills
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> <Purple>Collaborate</Purple> on projects using modern tools
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> <Purple>Learn and utilize</Purple> next generation technologies
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
