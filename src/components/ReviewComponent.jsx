import { useState } from "react";
import '../styles/Reviews.css';

export default function ReviewComponent() {
  const [reviews, setReviews] = useState([
    { name: "Alice", text: "Great product! Highly recommend.", rating: 5 },
    { name: "Bob", text: "Good service, but delivery was slow.", rating: 3 },
    { name: "Charlie", text: "Amazing experience! Will buy again.", rating: 4 },
  ]);

  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", text: "", rating: 5 });
    }
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">User's Reviews</h2>
      
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <p className="rating">⭐ {review.rating}/5</p>
          </div>
        ))}
      </div>

      <h3 className="review-form-title">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="Your Review"
          value={newReview.text}
          onChange={handleChange}
          required
        />
        <select name="rating" value={newReview.rating} onChange={handleChange}>
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
