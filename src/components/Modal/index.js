import Avatar from "../Avatar";
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
            <IoIosClose color="#003E6B" size={40} />
          </div>
        </section>
        <section className="modal-body">
          <p>
            Username: <span>{username}</span>
          </p>
          <p>
            Phone #: <span>{phone}</span>
          </p>
          <div className="info-container">
            <h3>Address</h3>
            <div className="horizontal-rule" />
            <p>
              Unit/Suite: <span>{address?.suite}</span>
            </p>
            <p>
              Street: <span>{address?.street}</span>
            </p>
            <p>
              City: <span>{address?.city}</span>
            </p>
            <p>
              Postal code: <span>{address?.zipcode}</span>
            </p>
          </div>
          <div className="info-container">
            <h3>Company</h3>
            <div className="horizontal-rule" />
            <p>
              Name: <span>{company?.name}</span>
            </p>
            <p>
              Service: <span>{company?.bs}</span>
            </p>
            <p>
              Catch phrase: <span>{company?.catchPhrase}</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Modal;
