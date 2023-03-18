import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import "./styles/card.css"
import wordlist from './components/wordlist'
import NoMatch from './components/NoMatch'
import TableInput from "./components/table/TableInput";
import Slider from './components/game/Slider';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App () {

    let arrKnown = [];
    let arrUnknown = [];

    return (
    <Router>
      <div className="wrapper">
          <Header/>
            <Routes>
              <Route exact path="/" index element={<TableInput item={wordlist}/>} />
              <Route path="/game" element={<Slider words={wordlist.map(word => {return word})} arrKnown={arrKnown} arrUnknown={arrUnknown}/>}/>
              {/* <Route path="/sign-in" element={''}> Sign-in page</Route>
              <Route path="/sign-up" element={''}> Sign-up page</Route> */}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          <Footer/>
      </div>
      </Router>
    );
  }