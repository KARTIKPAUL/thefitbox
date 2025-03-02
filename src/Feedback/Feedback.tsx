// src/pages/Feedback.tsx
import React, { useState } from "react";

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (feedback && name && email) {
      setSubmitted(true);
      // Here you can also send the data to your backend or an API
      console.log({ feedback, name, email });
      setFeedback("");
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="px-6 pt-10 bg-primary-black md:px-10 lg:px-20">
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
        We Value Your Feedback!
      </h1>
      <p className="text-black text-center mb-8 font-semibold text-xl">
        Share your thoughts and experiences with us. Your feedback helps us improve and serve you better!
      </p>

      {submitted ? (
        <div className="text-center">
          <h2 className="text-2xl text-green-500 font-semibold">Thank you for your feedback!</h2>
          <p className="text-gray-600 mt-3">We appreciate you taking the time to share your thoughts with us.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Feedback Textarea */}
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your feedback here..."
              rows={5}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-200"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
