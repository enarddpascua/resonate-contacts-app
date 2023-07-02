import "./App.css";
import Header from "./components/Header";
import { Colors } from "./const/Colors";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App" style={{ backgroundColor: Colors.primary100 }}>
      <Header />
      <Contacts />
    </div>
  );
}

export default App;
