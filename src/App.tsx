import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main/Main";
import {About} from "./layout/sections/About/About";
import {Portfolio} from "./layout/sections/Portfolio/Portfolio";
import {QuoteOfTheDay} from "./layout/sections/Quote/QuoteOfTheDay";


function App() {
    return (
        <>
            <Main/>
            <About/>
            <Portfolio/>
            <QuoteOfTheDay/>
        </>
    );
}

export default App;

