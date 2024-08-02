import React from 'react';

const LatestNews = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Have a look what's going on</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-4">
            <img src="/path/to/image1.jpg" alt="News 1" />
            <p className="mt-4">Entrance prospect removing we packages strictly is no</p>
            <p className="mt-2 text-gray-500">August 18, 2020</p>
          </div>
          <div className="bg-white p-4">
            <img src="/path/to/image2.jpg" alt="News 2" />
            <p className="mt-4">Death means up will do an offer wound called are squire</p>
            <p className="mt-2 text-gray-500">August 18, 2020</p>
          </div>
          <div className="bg-white p-4">
            <img src="/path/to/image3.jpg" alt="News 3" />
            <p className="mt-4">Boisterous estimating interested collecting get</p>
            <p className="mt-2 text-gray-500">August 18, 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
