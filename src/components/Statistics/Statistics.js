import React from 'react';

const Statistics = () => {
  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold">25007+</h3>
            <p className="mt-2">Successfully Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">344771+</h3>
            <p className="mt-2">Worldwide Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">707+</h3>
            <p className="mt-2">Store Clients Products</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">1043+</h3>
            <p className="mt-2">Total Branches</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
