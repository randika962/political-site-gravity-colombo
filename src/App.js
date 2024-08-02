import React, { useState } from 'react';

function App() {

  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3001/input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        contact,
      }),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-red-500 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Logo" className="h-12" />
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="text-white hover:underline">Home</a>
              <a href="#" className="text-white hover:underline">About</a>
              <a href="#" className="text-white hover:underline">Events</a>
              <a href="#" className="text-white hover:underline">Pages</a>
              <a href="#" className="text-white hover:underline">Contributions</a>
              <a href="#" className="text-white hover:underline">News</a>
              <a href="#" className="text-white hover:underline">Contact</a>
              <button className="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-100">
                Contribute
              </button>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-blue-500 py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">Together we can make better country</h1>
              <p className="text-2xl text-white mb-8">Alem hanold</p>
              <p className="text-lg text-white">Candidate, Democrate</p>
            </div>
            <div className="ml-8">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Candidate" className="rounded-full w-96 h-96" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-500 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-center w-full">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Movement</h2>
            <p className="text-lg text-white mb-8">Help fulfill our promise to Make America Great Again!</p>
            <div className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Email"
                className="border border-white px-4 py-2 rounded-md mr-2 focus:outline-none focus:ring focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your phone"
                className="border border-white px-4 py-2 rounded-md mr-2 focus:outline-none focus:ring focus:ring-blue-300"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <button
                className="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-100"
                onClick={handleSubmit}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Ideological Leader For Youth Generation</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-md shadow-md p-6">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Growing Economy" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">Growing our economy</h3>
              <p className="text-gray-600 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Nullam in justo mattis libero pharetra aliquet</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Read more</button>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-6">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Volunteer" className="w-full h-48 object-cover rounded-md mb-4" />
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-6">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Volunteer" className="w-full h-48 object-cover rounded-md mb-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Support Our Activities By a Raise Voice</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-500 rounded-md shadow-md p-6">
              <h3 className="text-xl font-bold text-white mb-2">Be a volunteer</h3>
              <p className="text-white text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
            <div className="bg-red-500 rounded-md shadow-md p-6">
              <h3 className="text-xl font-bold text-white mb-2">Contribute Now</h3>
              <p className="text-white text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
            <div className="bg-blue-500 rounded-md shadow-md p-6">
              <h3 className="text-xl font-bold text-white mb-2">Get Campaign Gear</h3>
              <p className="text-white text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Walk on idology with hope</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-md shadow-md p-6">
              <p className="text-gray-600 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Globally eenable</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Learn More</button>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-6">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Growing Economy" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">Growing Economy</h3>
              <p className="text-gray-600 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Nullam in justo mattis libero</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-6">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Creating Jobs" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">Creating Jobs</h3>
              <p className="text-gray-600 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Nullam in justo mattis libero</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-500 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-100 rounded-md shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">25007+</h3>
              <p className="text-gray-600 text-sm">Successfully Delivered</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">344771+</h3>
              <p className="text-gray-600 text-sm">Worldwide Clients</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">7079+</h3>
              <p className="text-gray-600 text-sm">Store Clients Products</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">1043+</h3>
              <p className="text-gray-600 text-sm">Total Km Reach So Far</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-500 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">What they say</h2>
          <div className="flex items-center justify-center">
            <div className="text-center w-1/2">
              <p className="text-lg text-white mb-8">I found myself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
              <p className="text-lg text-white font-bold mb-4">Richard Belly</p>
              <p className="text-lg text-white">Director</p>
            </div>
            <div className="ml-8">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Woman" className="rounded-full w-96 h-96" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Have a look what's going on</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-md shadow-md p-6">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Post" className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm">By Sharifur</p>
                <p className="text-gray-600 text-sm">August 16, 2020</p>
              </div>
              <h3 className="text-xl font-bold mb-2">Entrance prospect removing we packages strictly is no</h3>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-6">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Post" className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm">By Sharifur</p>
                <p className="text-gray-600 text-sm">August 16, 2020</p>
              </div>
              <h3 className="text-xl font-bold mb-2">Death means up civil do an offer wound called are squire</h3>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-6">
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Post" className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm">By Sharifur</p>
                <p className="text-gray-600 text-sm">August 16, 2020</p>
              </div>
              <h3 className="text-xl font-bold mb-2">Boisterous estimating interested collecting get</h3>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <img src="https://thegreatdelusion.com/wp-content/uploads/2021/09/trace-3157431_1920.jpg" alt="Logo" className="h-12" />
              <p className="text-gray-400 text-sm mt-4">Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of.</p>
              <div className="flex items-center space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h1a5 5 0 015-5V2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018.4 7.4 8.5 8.5 0 01-2.1 5.3 8.48 8.48 0 01-8.4 7.4l1.9 5.7" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.45l9 9m-9-9l9-9m-9 9v-11M9 13c0-1.312 1.053-2.36 2.361-2.36 1.308 0 2.36 1.047 2.36 2.36 0 1.312-1.053 2.36-2.36 2.36-1.308 0-2.36-1.047-2.36-2.36zm-4 9l4 4m-4-4l4-4" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13.042m0-13.042a3.25 3.25 0 00-3.25 3.25c0 1.293.7 2.468 1.667 3.063l.842.842a3.25 3.25 0 004.592 0l.842-.842c.969-.595 1.667-1.77 1.667-3.063 0-1.293-.7-2.468-1.667-3.063l-.842-.842a3.25 3.25 0 00-4.592 0l-.842.842c-.969.595-1.667 1.77-1.667 3.063z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-400 mb-4">Recent Posts</h3>
              <ul className="list-disc text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">Resolution diminution conviction so mr at unpleasing</a>
                  <p className="text-gray-400 text-xs">Aug 16,2020</p>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Entrance prospect removing we packages strictly is no</a>
                  <p className="text-gray-400 text-xs">Aug 16,2020</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-400 mb-4">Useful Link</h3>
              <ul className="list-disc text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms of use</a></li>
                <li><a href="#" className="hover:text-white">Faq</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-400 mb-4">Contact Us</h3>
              <ul className="list-disc text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">example@example.com</a></li>
                <li><a href="#" className="hover:text-white">123 456 789</a></li>
                <li><a href="#" className="hover:text-white">2320 Nickel Road Irvine, CA 92614</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 text-xs">&copy; 2024 All Right Reserved By Harnold</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

// import React from 'react';
// import Header from './components/Header/Header';
// import JoinMovement from './components/JoinMovement/JoinMovement';
// import PolicyPositions from './components/PolicyPositions/PolicyPositions';
// import SupportActivities from './components/SupportActivities/SupportActivities';
// import VisionMission from './components/VisionMission/VisionMission';
// import Statistics from './components/Statistics/Statistics';
// import Testimonials from './components/Testimonials/Testimonials';
// import LatestNews from './components/LatestNews/LatestNews';
// import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <JoinMovement />
//       <PolicyPositions />
//       <SupportActivities />
//       <VisionMission />
//       <Statistics />
//       <Testimonials />
//       <LatestNews />
//       <Footer />
//     </div>
//   );
// }

// export default App;
