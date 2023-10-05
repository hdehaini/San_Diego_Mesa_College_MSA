import logo from './logo.svg';
import SocialFollow from "./SocialFollow"
import './App.css';
import main from "./main";
//dehaini sucks
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          San Diego Mesa Community College MSA
        </h1>
        <SocialFollow />
      </header>

      <body>
        <div>
          <main />
        </div>
      </body>




    </div>

  );

}
export default App;
