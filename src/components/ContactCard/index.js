import "./styles.css";

function ContactCard({
  data,
  setShowModal,
  selectedContact,
  setSelectedContact,
}) {
  const { name, email, username, phone, address, company } = data;

  function onRowClick() {
    setShowModal(true);
    setSelectedContact(data);
  }
  console.log(selectedContact.id == data.id ? "active-row" : "");
  return (
    <tr
      className={`table-row-container ${
        selectedContact.id == data.id ? "active-row" : ""
      }`}
      onClick={onRowClick.bind(this)}
    >
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{username}</td>
      <td>{address.city}</td>
      <td>{company.name}</td>
    </tr>
  );
}

export default ContactCard;
