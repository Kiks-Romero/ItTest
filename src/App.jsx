import MyNavbar from "./components/MyNavbar";
import MyForm from "./components/MyForm";
import Farmer from "./assets/Farmer.png";
function App() {
  return (
    <div className="app-container">
      <MyNavbar />
      <div className="content">
        <MyForm />
        <img src={Farmer} alt="Logo" className="illustration" />
      </div>
    </div>
  );
}

export default App;
