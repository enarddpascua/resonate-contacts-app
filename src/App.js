import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Colors } from "./const/Colors";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App" style={{ backgroundColor: Colors.primary100 }}>
      <div id="app-container">
        <Header />

        <Contacts />

        <Footer />
      </div>
    </div>
  );
}

export default App;
