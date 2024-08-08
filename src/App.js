import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import React, { useRef } from 'react';

// Component imports
import Banner from './components/Banner';
import AboutMe from './Sections/AboutMe';
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

const App = () => {
    return (
        <Router>
            <GlobalStyles/>

            <Banner/>
            <AboutMe/>
            <Projects/>
            <Contact/>
        </Router>
    )
}

export default App;