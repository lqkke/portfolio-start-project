import './App.css';
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {QuoteOfTheDay} from "./layout/sections/Quote/QuoteOfTheDay";
import {Achievements} from "./layout/sections/achievements/Achievements";
import {Blogs} from "./layout/sections/blogs/Blogs";
import {Testimonials} from "./layout/sections/testimonials/Testimonials";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <>
            <Main/>
            <About/>
            <Portfolio/>
            <QuoteOfTheDay/>
            <Achievements/>
            <Blogs/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;

