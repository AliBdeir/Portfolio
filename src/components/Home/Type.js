import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "",
                    "We're a group of software engineers, computer scientists...",
                    "And passionate hobbyists at the University of Michigan - Dearborn",
                ],
                delay: 4,
                autoStart: true,
                loop: true,
                deleteSpeed: 2,
                pauseFor: 2000
            }}
        />
    );
}

export default Type;
