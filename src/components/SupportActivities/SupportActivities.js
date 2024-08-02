import React from 'react';

const SupportActivities = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Support Our Activities By Raising Your Voice</h2>
        <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md">Watch Video</button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-4">
            <img src="/path/to/image1.jpg" alt="Activity 1" />
            <h3 className="mt-4 font-bold">Be a volunteer</h3>
            <p className="mt-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white p-4">
            <img src="/path/to/image2.jpg" alt="Activity 2" />
            <h3 className="mt-4 font-bold">Get Campaign Gear</h3>
            <p className="mt-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white p-4">
            <img src="/path/to/image3.jpg" alt="Activity 3" />
            <h3 className="mt-4 font-bold">Contribute Now</h3>
            <p className="mt-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportActivities;
