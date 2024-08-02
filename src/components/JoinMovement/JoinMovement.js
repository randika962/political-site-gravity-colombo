import React from 'react';

const JoinMovement = () => {
  return (
    <section className="bg-blue-600 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">Join Our Movement</h2>
        <p className="mt-4">Help fulfill our promise to Make America Great Again!</p>
        <div className="mt-4 flex justify-center">
          <input type="email" placeholder="Email" className="p-2 rounded-l-md" />
          <input type="tel" placeholder="Your phone" className="p-2 rounded-r-md" />
          <button className="p-2 bg-red-600 rounded-md ml-2">Join</button>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
