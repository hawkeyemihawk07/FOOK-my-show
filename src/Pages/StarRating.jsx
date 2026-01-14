import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Give Your Rating</h2>

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            cursor: "pointer",
            fontSize: "40px",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ⭐
        </span>
      ))}

      <p style={{ marginTop: "10px" }}>
        You rated: <b>{rating}</b> star{rating > 1 && "s"}
      </p>
    </div>
  );
};

export default StarRating;
