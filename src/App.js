import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import "./styles/card.css"
import wordlist from './components/wordlist'
// import Words from "./components/Words"
// import Table from "./components/Table"
// import TableOne from "./components/TableOne"
// import TableTwo from "./components/TableTwo"
import NoMatch from './components/NoMatch'
import TableInput from "./components/table/TableInput";
import Slider from './components/game/Slider';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


class App extends React.Component {
  render (){
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


          {/* рабочий <div className="cardContainer">
             рабочий <div className="cardBox"> */}
                {/* <div className="cardPlace"> */}
                  {/* <div className="wordPlace"> */}
                    {/* рабочий <Slider words={wordlist.map(word => {return word})}/> */}
                  {/* </div> */}
                {/* </div> */}
              {/* рабочий </div> */}
          {/* рабочий </div> */}

          {/* <Words words={wordlist}/> */}
            {/* <Table key={wordlist.id} words={wordlist}/> */}
            {/* {wordlist.map(el => {
              return <TableOne key={el.id} item={el}/>
            })} */}
            {/* <TableTwo item={wordlist}/> */}

          {/* рабочая таблица  <TableInput item={wordlist}/> */} 
          <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
