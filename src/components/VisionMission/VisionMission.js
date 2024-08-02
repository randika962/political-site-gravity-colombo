import React from 'react';

const VisionMission = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Walk on ideology with hope</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-100 p-4">
            <img src="/path/to/image1.jpg" alt="Vision 1" />
            <h3 className="mt-4 font-bold">Growing Economy</h3>
            <p className="mt-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-gray-100 p-4">
            <img src="/path/to/image2.jpg" alt="Vision 2" />
            <h3 className="mt-4 font-bold">Creating Jobs</h3>
            <p className="mt-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
