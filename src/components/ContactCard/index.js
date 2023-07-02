import "./styles.css";

function ContactCard({ data }) {
  const { name, email, username, phone, address, company } = data;
  return (
    <tr className="table-row-container">
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{address.city}</td>
      <td>{phone}</td>
      <td>{company.name}</td>
    </tr>
  );
}

export default ContactCard;
