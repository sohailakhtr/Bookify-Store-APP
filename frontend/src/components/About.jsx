import React from "react";

function About() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-slate-950 dark:text-white">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8 dark:bg-slate-900">
        <h1 className="text-4xl font-bold text-center mb-6">About Bookify</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-7">
          Welcome to{" "}
          <span className="font-semibold text-blue-500">Bookify</span>, your
          ultimate destination for exploring and purchasing books online. Our
          platform is designed for book enthusiasts, offering a wide range of
          genres to suit every taste. From timeless classics to the latest
          bestsellers, we have it all!
        </p>
        <br />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-7">
          At Bookify, we believe in the power of stories to inspire, educate,
          and entertain. Our mission is to make reading more accessible by
          connecting readers with their favorite books through an intuitive and
          user-friendly app.
        </p>
        <br />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-7">
          Our team is passionate about creating a seamless experience for book
          lovers. Whether you're searching for your next great read or looking
          to explore new genres, Bookify is here to guide you every step of the
          way.
        </p>
        <br />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-7">
          We’re constantly updating our collection and enhancing our features to
          ensure you have the best experience. Thank you for choosing Bookify as
          your trusted book companion. Happy reading!
        </p>
        <br />
        <p className="text-center text-lg font-medium">
          📚 Explore, Discover, and Read with{" "}
          <span className="font-semibold text-blue-500">Bookify</span>!
        </p>
      </div>
    </div>
  );
}

export default About;
