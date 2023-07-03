import Avatar from "../Avatar";
import InfoText from "../ui/InfoText";
import "./styles.css";
import { IoIosClose } from "react-icons/io";

function Modal({ closeModal, removeActiveRow, selectedContact }) {
  const { name, phone, username, website, email, company, address } =
    selectedContact;

  function onCloseModal() {
    closeModal(false);
    removeActiveRow({});
  }

  const unameInitials = `${username.charAt(0)}${username.charAt(1)}`;

  return (
    <div className="modal-parent" onClick={onCloseModal.bind(this)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <section className="modal-header">
          <div className="avatar-wrapper">
            <Avatar initials={unameInitials} />
            <p>{name}</p>
          </div>
          <div className="email-website-container">
            <span>{email}</span>
            <span> | </span>
            <span>{website}</span>
          </div>
          <div
            className="close-button-wrapper"
            onClick={onCloseModal.bind(this)}
          >
            <IoIosClose color="#fff" size={40} />
          </div>
        </section>
        <section className="modal-body">
          <InfoText title="Username">{username}</InfoText>
          <InfoText title="Phone #">{phone}</InfoText>
          <div className="info-container">
            <h3>Address</h3>
            <div className="horizontal-rule" />
            <InfoText title="Unit/Suite">{address?.suite}</InfoText>
            <InfoText title="Street">{address?.street}</InfoText>
            <InfoText title="City">{address?.city}</InfoText>
            <InfoText title="Postal code">{address?.zipcode}</InfoText>
          </div>
          <div className="info-container">
            <h3>Company</h3>
            <div className="horizontal-rule" />
            <InfoText title="Name">{company?.name}</InfoText>
            <InfoText title="Service">{company?.bs}</InfoText>
            <InfoText title="Catch Phrase">{company?.catchPhrase}</InfoText>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Modal;
