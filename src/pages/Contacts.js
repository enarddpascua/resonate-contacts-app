import Header from "../components/Header";
import SubTitle from "../components/ui/SubTitle";
import { Colors } from "../const/Colors";
import "./styles.css";

function Contacts() {
  const columnTitles = [
    "Name",
    "Username",
    "Email",
    "Phone",
    "City",
    "Company",
  ];
  return (
    <div id="container">
      <Header />
      <div className="column-title-parent">
        {columnTitles.map((title, idx) => {
          return (
            <div key={idx} className="column-title-wrapper">
              <SubTitle>{title}</SubTitle>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contacts;
