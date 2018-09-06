import * as React from 'react';
import Greet from './component/Greet';

export const About = () => {
    const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap', 'Fontawsome'];

    return (
        <Greet techs={techStack} />
    )
}