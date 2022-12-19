import './css/App.css';
import PortofolioBox from './components/PortfolioBox';
import data from './assets/portfolio-data.json'
import { useState } from 'react';

// TODO:
// 3: Change fonts
// 4: Write a better about me

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
             <b> Home</b>
              </a>
            </div>
            <div className = "Menu_Child2">
              <a href = "#AboutMe">
              <b>=About Me</b>
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
          <p className = "TextBox_text">WELCOME TO MY UIUX PORTFOLIO! MY WORK IS INSPIRED BY AESTHETICAL THEORIES!</p>
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
          
        <p>You can find me either researching about new recipes, or at the gym. I am also an avid tennis player, and I
          hope to learn golf soon. I enjoy travelling with my friends. Recently, I travelled to Peru and love the food
          and the old architecture there. I even got to see Machu Pichu!
        </p>

         <p> Meanwhile in the technical side, I enjoy learning more about how industries work. I hope that with my
          Economics and Computer Science degree, I can create software applications that industries can use to become more efficient.
          My UIUX class has taught me more about design philosophy, 
          I hope that I will be able to create more user-centric applications that will help others utilize apps more intuitively. I hope that you enjoy my 
          portfolio!</p>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;