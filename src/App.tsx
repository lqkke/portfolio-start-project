import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main/Main";
import {About} from "./layout/sections/About/About";


function App() {
    return (
        <div className="App">
            <Main/>
            <About/>
        </div>
    );
}

export default App;

