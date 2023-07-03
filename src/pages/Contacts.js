import { useEffect, useState } from "react";
import axios from "axios";
import ContactCard from "../components/ContactCard";
import "./styles.css";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  async function getContacts() {
    setLoading(true);
    try {
      let response = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          return res;
        });
      setContacts(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);
  console.log(contacts);

  return (
    <div id="container">
      <div className="table-wrapper">
        {loading ? (
          <div className="spinner-wrapper">
            <Spinner />
          </div>
        ) : (
          <table className="table-content">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Username</th>
                <th>City</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((el) => {
                  return (
                    <ContactCard
                      data={el}
                      key={el.id}
                      setShowModal={setShowModal}
                      selectedContact={selectedContact}
                      setSelectedContact={setSelectedContact}
                    />
                  );
                })
              ) : (
                <tr>
                  <td>no data</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      {showModal && (
        <Modal
          closeModal={setShowModal}
          removeActiveRow={setSelectedContact}
          selectedContact={selectedContact}
        />
      )}
    </div>
  );
}

export default Contacts;
