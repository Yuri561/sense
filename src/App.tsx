import './App.css'; // Make sure to import your CSS
import Header from './components/Header/Header'; // Make sure this path is correct
import LeftContent from './components/LeftContent/LeftContent'; // Make sure this path is correct
import RightContent from './components/RightContent/RightContent'; // Make sure this path is correct
import MainContent from './components/MainContent/MainContent'; // Make sure this path is correct

function App() {
  return (
    <div className="grid-container">
      <div className="header">
      <Header />
      </div>
      <div className="left-sidebar">
      <LeftContent />
      </div>
      <div className="main-content">
        <MainContent />
      </div>
      <div className="right-sidebar">
        <RightContent />
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
