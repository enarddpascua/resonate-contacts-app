import { useEffect, useState } from "react";
import axios from "axios";
import ContactCard from "../components/ContactCard";
import "./styles.css";
import Spinner from "../components/Spinner";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

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
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((el) => {
                  return <ContactCard data={el} key={el.id} />;
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
    </div>
  );
}

export default Contacts;
