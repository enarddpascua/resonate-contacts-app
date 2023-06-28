import "./App.css";
import { Colors } from "./const/Colors";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App" style={{ backgroundColor: Colors.primary100 }}>
      <Contacts />
    </div>
  );
}

export default App;
