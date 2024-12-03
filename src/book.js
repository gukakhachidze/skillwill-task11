import React from "react";

const Book = ({ image, title, description, characters, onButtonClick }) => {
  return (
    <div style={styles.container}>
      <img src={image} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>პერსონაჟები:</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <button
        onClick={() => onButtonClick(title, characters)}
        style={styles.button}
      >
        წიგნის დალოგვა
      </button>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px",
    textAlign: "center",
    maxWidth: "400px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Book;
