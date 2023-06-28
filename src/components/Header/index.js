import Title from "../ui/Title";
import "./styles.css";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <header>
      <div className="title-container">
        <CgProfile size={30} />
        <Title>Contacts</Title>
      </div>
    </header>
  );
}

export default Header;
