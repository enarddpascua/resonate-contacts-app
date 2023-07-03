import "./styles.css";

function Avatar({ initials }) {
  return (
    <div className="avatar-container">
      <span>{initials}</span>
    </div>
  );
}

export default Avatar;
