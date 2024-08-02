import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3001/input", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    <div className="bg-white">
      <div>
        <section className="p-4 text-center w-full mx-auto max-w-6xl">
          <h1 className="mb-4 font-bold text-2xl text-darkRed">
            Welcome to Indira Kalugalla
          </h1>
          <p className="text-md font-normal mb-16">
            Join us in building a prosperous nation. Indira Kalugalla, a
            dedicated social activist and the only female candidate in the
            upcoming presidential election, is committed to leading Sri Lanka
            towards a future of prosperity and growth. Her campaign focuses on
            innovation, inclusivity, and sustainability to ensure a brighter
            future for all Sri Lankans.
          </p>

          <div className="flex items-center">
            <div className="w-[384px] overflow-hidden rounded-md shadow cursor-pointer hover:shadow-lg duration-200">
              <img src="/images/movement/low-angle-people-celebrating-indian-republic-day.png" />
            </div>
            <div className="w-[384px] h-[520px] overflow-hidden rounded-md shadow cursor-pointer hover:shadow-xl duration-200 bg-green relative">
              <img src="/images/movement/front-view-people-celebrating-indian-republic-day-9.png" />
              <div className="absolute bottom-0 text-white">
                <h1 className="mb-4 font-bold text-4xl">Join Our Movement</h1>
                <p className="text-xl font-normal mb-16 px-14">
                  Help fulfill our promise to{" "}
                  <span className="font-bold">Make SRI LANKA Great!</span>
                </p>
              </div>
            </div>
            <div className="w-[384px] overflow-hidden rounded-md shadow cursor-pointer hover:shadow-lg duration-200">
              <img src="/images/movement/front-view-people-celebrating-indian-republic-day-3.png" />
            </div>
          </div>

          <h1 className="mb-4 font-bold text-2xl text-darkRed mt-24">
            A Vision for a Brighter Sri Lanka
          </h1>
          <p className="text-md font-normal mb-16">
            Indira Kalugalla, a dedicated social activist and the only female
            candidate in the upcoming presidential election, brings a fresh
            perspective to the political landscape of Sri Lanka. With a strong
            background in public service and social activism, she is committed
            to addressing contemporary challenges with innovative solutions.
          </p>
        </section>

        {/* <section className="w-full relative mb-28">
          <img
            className="absolute z-10 -top-10 bottom-0 left-10 right-0 w-36 h-auto object-cover"
            src="/images/lsquo.png"
          />
          <img
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-auto object-cover"
            src="/images/layer-4.png"
          />
          <img
            className="absolute z-10 top-[720px] bottom-0 left-[90%] right-10 w-36 h-auto object-cover"
            src="/images/rsquo.png"
          />
        </section> */}

        <section className="p-4 text-center w-full mx-auto max-w-6xl">
          <p className="text-md uppercase text-green font-semibold mb-4">
            vision statement:
          </p>
          <h1 className="mb-4 font-bold text-2xl text-darkRed">
            "A Prosperous Sri Lanka"
          </h1>
          <p className="text-md font-normal mb-16">
            Our vision is to create a nation where every citizen has the
            opportunity to thrive in a prosperous, inclusive, and sustainable
            environment. We envision a Sri Lanka that stands strong in unity,
            celebrates its diversity, and leads with innovation and progress,
            ensuring a better future for all.
          </p>

          <p className="text-md uppercase text-green font-semibold mb-4">
            mission statement:
          </p>
          <h1 className="mb-4 font-bold text-2xl text-darkRed">
            "Empowering Citizens, Promoting Unity, Driving Progress"
          </h1>
          <p className="text-md font-normal mb-16">
            Our mission is to empower every citizen, especially women and
            marginalized communities, to actively contribute to and benefit from
            our nation's prosperity. We are committed to fostering national
            unity and harmony among all ethnic and religious groups. Through
            sustainable economic development, technological advancement, and
            comprehensive education reforms, we aim to drive progress and build
            a vibrant, forward-thinking Sri Lanka. Together, we will create a
            nation where every individual is valued, every community is
            included, and our shared future is bright and promising.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
