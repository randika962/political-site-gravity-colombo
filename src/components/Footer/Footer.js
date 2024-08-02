import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">Harnold</h3>
            <p className="mt-2">Up election contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Recent Posts</h3>
            <ul className="mt-2">
              <li className="mt-2">Revolution distributio channels</li>
              <li className="mt-2">Entrance prospect removing packages</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="mt-2">example@example.com</p>
            <p className="mt-2">(123) 456-7890</p>
            <p className="mt-2">1234 North Road, Irvine, CA 92620</p>
          </div>
        </div>
        <p className="mt-8">© 2020 All Right Reserved by Harnold</p>
      </div>
    </footer>
  );
};

export default Footer;
