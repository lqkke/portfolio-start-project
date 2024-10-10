import './App.css';
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {QuoteOfTheDay} from "./layout/sections/Quote/QuoteOfTheDay";
import {Achievements} from "./layout/sections/achievements/Achievements";


function App() {
    return (
        <>
            <Main/>
            <About/>
            <Portfolio/>
            <QuoteOfTheDay/>
            <Achievements/>
        </>
    );
}

export default App;

