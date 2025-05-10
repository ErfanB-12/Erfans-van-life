import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function Reviews() {
  const reviewsData = [
    {
      id: 1,
      rating: 5,
      name: "Elliot",
      date: "December 1, 2025",
      text: "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    },
    {
      id: 2,
      rating: 5,
      name: "Sandy",
      date: "November 23, 2025",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    },
  ];

  function ReviewElements() {
    return reviewsData.map((review) => (
      <div key={review.id}>
        {[...Array(review.rating)].map((_, r) => {
          return <BsStarFill className="star" key={r} />;
        })}
        <h4>
          {review.name} <span>{review.date}</span>
        </h4>
        <p>{review.text}</p>
      </div>
    ));
  }

  return (
    <section className="reviews-container">
      <div className="reviews-header">
        <h1>Your reviews</h1>
        <p>
          last <span>30 days</span>
        </p>
      </div>
      <div className="reviews-rating-header">
        <h2>5.0</h2>
        <p>
          <BsStarFill className="star" />
          <span>overall rating</span>
        </p>
      </div>

      <section className="rating-distribution">
        <div className="rating-row">
          <div className="stars-label">5 stars</div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "100%" }}></div>
          </div>
          <div className="percentage">100%</div>
        </div>

        <div className="rating-row">
          <div className="stars-label">4 stars</div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "0%" }}></div>
          </div>
          <div className="percentage">0%</div>
        </div>

        <div className="rating-row">
          <div className="stars-label">3 stars</div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "0%" }}></div>
          </div>
          <div className="percentage">0%</div>
        </div>

        <div className="rating-row">
          <div className="stars-label">2 stars</div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "0%" }}></div>
          </div>
          <div className="percentage">0%</div>
        </div>

        <div className="rating-row">
          <div className="stars-label">1 star</div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "0%" }}></div>
          </div>
          <div className="percentage">0%</div>
        </div>
      </section>

      <div className="feedback-container">
        <h3>Reviews (2)</h3>

        <ReviewElements />
      </div>
    </section>
  );
}
