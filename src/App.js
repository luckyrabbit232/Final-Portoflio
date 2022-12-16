import './css/App.css';
import PortofolioBox from './components/PortfolioBox';
import data from './assets/portfolio-data.json'
import { useState } from 'react';

// TODO:
// 1: Create the header
// 2: Create the introduction with GIF
// 3: Create The Portfolio in a grid-fashion
// 4: Create the About Me
// 5: Create the links between the header pages and the about me
// 6: Implement fonts

// data.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });

function App() {
  const [displayPortofolio, setPortfolio] = useState(data);

  return (
    <div className="App" id = "App">
      <div className = "Header">
        <div className = "UpperHeader">
          <div className = "Logo">
            <b>My Portfolio</b>
          </div>
          <div className = "Menu">
            <div className = "Menu_Child">
              <a href = "#App">
              Home
              </a>
            </div>
            <div className = "Menu_Child2">
              <a href = "#AboutMe">
              About Me
              </a>
            </div>
          </div>
        </div>
        <div className = "LowerHeader">
          <i>Home</i>
        </div>
      </div>
      <div className = "Introduction">
        <div className = "Introduction_textbox">
          <p className = "TextBox_text">WELCOME TO MY UIUX PORTFOLIO! MY WORK IS INSPIRED BY AESTHETICAL THEORIES LEARNED AT BROWN!</p>
        </div>
      </div>


      <div className = "Portfolio">
        <div className = "Portfolio_Title">
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>

          </div>
          <div className = "Title_Text">
            Portfolio
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Portfolio_components">
            <div className = "Portfolio_Child">
              {displayPortofolio.map((item) => (
                <PortofolioBox
                item = {item}/>
              ))}
            </div>
        </div>
      </div>

      <div className = "AboutMe" id = "AboutMe">
        <div className = "Portfolio_Title">
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            About Me
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "AboutMe_TextBox">
          <div className = "TextBox_Child">
         <p> Hi! My name is Aidan Ma. I am currently a senior student at Brown and will be graduating in Fall 2022! 
          My degree is in Computer Science - Economics Track. </p>

         <p> I am hoping that by taking classes in UI/UX and understanding design philosophy, 
          I will be able to create more user-centric applications. </p>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;