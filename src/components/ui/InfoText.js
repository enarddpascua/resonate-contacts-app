import "./styles.css";

function InfoText({ children, title }) {
  return (
    <div className="info-text-container">
      <div>
        <p>{title}:</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default InfoText;
