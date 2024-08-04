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
      <div className="relative">
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

        <section className="w-full h-[900px] relative mb-28">
          <img
            className="absolute z-10 -top-10 bottom-0 left-10 right-0 w-36 h-auto object-cover"
            src="/images/lsquo.png"
          />
          <img
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
            src="/images/layer-4.png"
          />
          <img
            className="absolute z-10 top-[820px] bottom-0 left-[90%] right-10 w-36 h-auto object-cover"
            src="/images/rsquo.png"
          />
        </section>

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
            included, and our shared{" "}
            <span className="font-semibold uppercase">
              future is bright and promising
            </span>
            .
          </p>
        </section>

        <section className="w-full px-8 relative h-full pb-64">
          <div className="absolute  -top-32 w-full flex items-end justify-center overflow-hidden gap-64">
            <img
              src="/images/indian-republic-day-celebration-digital-art-with-man.png"
              alt="man"
              className="w-96 h-auto object-cover"
            />

            <img
              src="/images/lion.png"
              alt="man"
              className="pb-8 w-96 h-auto object-cover"
            />

            <img
              src="/images/indian-republic-day-celebration-digital-art-with-woman.png"
              alt="woman"
              className="w-96 h-auto object-cover"
            />
          </div>
        </section>

        <section className="relative">
          <div className="flex items-center">
            <div className="w-full h-8 bg-darkRed"></div>
            <div className="w-full h-8 bg-green"></div>
            <div className="w-full h-8 bg-saffron"></div>
            <div className="w-full h-8 bg-yellow"></div>
          </div>

          <div className="relative h-[800px] w-full">
            <img
              src="/images/video.png"
              alt="video"
              className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
            />
            <img
              src="/images/play.png"
              alt="play"
              className="relative top-[50%] left-[48%] w-16 h-16 object-cover"
            />
          </div>

          <div className="flex items-center">
            <div className="w-full h-8 bg-darkRed"></div>
            <div className="w-full h-8 bg-green"></div>
            <div className="w-full h-8 bg-saffron"></div>
            <div className="w-full h-8 bg-yellow"></div>
          </div>
        </section>

        <section className="relative bg-darkRed h-auto w-full pt-16">
          <div>
            <img
              src="/images/yellow-lsquo.png"
              alt="lsquo"
              className="absolute z-10 -top-10 bottom-0 left-10 right-0 w-36 h-auto object-cover"
            />

            <img
              src="/images/yellow-rsquo.png"
              alt="rsquo"
              className="absolute z-10 top-[720px] bottom-0 left-[90%] right-10 w-36 h-auto object-cover"
            />
          </div>

          <div className="w-full flex items-center justify-center mb-16">
            <img
              src="/images/lion.png"
              alt="lion"
              className="w-96 h-full object-cover\"
            />
          </div>

          <div className="w-full mx-auto px-28 py-16">
            <div className="grid grid-cols-4 gap-8 items-center">
              <div className="bg-darkRed shadow-2xl w-full">
                <div className="w-full h-[650px]">
                  <img
                    src="/images/smiling-woman-colorful-sari-with-red-scarf.png"
                    alt="woman"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center justify-center py-16">
                  <img
                    src="/images/layer-30.png"
                    alt="logo"
                    className="w-36 h-36 object-cover mb-12"
                  />

                  <div className="text-white text-center">
                    <h3 className="font-semibold text-xl px-16 mb-8">
                      Women's Empowerment
                    </h3>
                    <p className="uppercase px-8">
                      Advocating for gender equality and economic opportunities
                      for women
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green shadow-2xl w-full">
                <div className="w-full h-[650px]">
                  <img
                    src="/images/clever-little-boy-casualwear-eyeglasses-connecting-details-robot.png"
                    alt="woman"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center justify-center py-16">
                  <img
                    src="/images/layer-28.png"
                    alt="logo"
                    className="w-36 h-36 object-cover mb-12"
                  />
                  <div className="text-white text-center">
                    <h3 className="font-semibold text-xl px-16 mb-8">
                      Education Reform
                    </h3>
                    <p className="uppercase px-8">
                      Ensuring quality education for all children, regardless of
                      background
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-saffron shadow-2xl w-full">
                <div className="w-full h-[650px]">
                  <img
                    src="/images/young-india-bank-officer-completing-paper-work-with-farmer.png"
                    alt="woman"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center justify-center py-16">
                  <img
                    src="/images/layer-29.png"
                    alt="logo"
                    className="w-36 h-36 object-cover mb-12"
                  />
                  <div className="text-white text-center">
                    <h3 className="font-semibold text-xl px-16 mb-8">
                      Economic Development
                    </h3>
                    <p className="uppercase px-8">
                      Promoting sustainable and inclusive growth
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow shadow-2xl w-full">
                <div className="w-full h-[650px]">
                  <img
                    src="/images/portrait-happy-smiling-tailor-working-laptop-atelier.png"
                    alt="woman"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center justify-center py-16">
                  <img
                    src="/images/layer-31.png"
                    alt="logo"
                    className="w-36 h-36 object-cover mb-12"
                  />
                  <div className="text-white text-center">
                    <h3 className="font-semibold text-xl px-16 mb-8">
                      Digital Engagement
                    </h3>
                    <p className="uppercase px-8">
                      Leveraging technology to enhance governance and connect
                      with citizens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-full h-8 bg-darkRed"></div>
            <div className="w-full h-8 bg-green"></div>
            <div className="w-full h-8 bg-saffron"></div>
            <div className="w-full h-8 bg-yellow"></div>
          </div>
        </section>

        <section className="w-full px-32 py-16 grid grid-cols-3 gap-16">
          <div className="cursor-pointer">
            <div className="shadow-2xl rounded w-full h-96 overflow-hidden mb-16">
              <img
                src="images/clay-banks-qT7fZVbDcqE-unsplash.png"
                className="w-full h-full  object-cover"
                alt="image"
              />
            </div>
            <div className="text-center">
              <h2 className="font-bold text-3xl mb-8">Empowerment</h2>

              <p className="font-semibold uppercase">
                Empowering all citizens, especially women and marginalized
                communities, to contribute to and benefit from national
                prosperity. Indira believes in creating opportunities for
                everyone, ensuring that every voice is heard and valued.
              </p>
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="shadow-2xl rounded w-full h-96 overflow-hidden mb-16">
              <img
                src="images/friendship-day.png"
                className="w-full h-full  object-cover"
                alt="image"
              />
            </div>
            <div className="text-center">
              <h2 className="font-bold text-3xl mb-8">Unity</h2>

              <p className="font-semibold uppercase">
                Promoting national unity, harmony, and inclusivity among all
                ethnic and religious groups. Indira's vision is to build a
                cohesive and harmonious society where diversity is celebrated,
                and every citizen feels a sense of belonging.
              </p>
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="shadow-2xl rounded w-full h-96 overflow-hidden mb-16">
              <img
                src="images/basketball-court-team-sports-high-five-hands-success-support-winner-achievement-outdoor-excited-basketball-player-community-friends-group-celebration-goals-competition-motivation.png"
                className="w-full h-full  object-cover"
                alt="image"
              />
            </div>
            <div className="text-center">
              <h2 className="font-bold text-3xl mb-8">Progress</h2>

              <p className="font-semibold uppercase">
                Emphasizing economic development, technological advancement,
                education, and sustainable development. Indira's policies aim to
                drive progress and innovation, fostering a dynamic and
                forward-thinking Sri Lanka.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-darkRed py-16">
          <div className="text-center px-28">
            <p className="text-xl text-yellow font-semibold">
              Our campaign aims to build a prosperous and inclusive Sri Lanka by
              focusing on key areas that drive empowerment, unity, and progress.
              We will promote gender equality and support marginalized
              communities, ensuring that all citizens have the opportunity to
              thrive. By fostering national harmony and encouraging community
              engagement, we aim to unite the nation across ethnic and religious
              lines. Our commitment to progress includes driving economic
              development, advancing technological innovation, reforming
              education, and ensuring environmental sustainability. We will
              enhance transparency and accountability in governance, improve
              public services, and uphold the rule of law. Additionally, we
              prioritize universal healthcare access, mental health support, and
              robust public health infrastructure to improve the overall
              well-being of our citizens. Together, these objectives will pave
              the way for a vibrant, forward-thinking, and resilient Sri Lanka.
            </p>
          </div>

          <div className="flex flex-col items-center mt-16 relative">
            <img
              src="/images/lion.png"
              alt="lion"
              className="w-[450px] absolute h-auto object-cover"
            />
            <img
              src="/images/indian-republic-day-celebration-digital-art-with-people-2.png"
              alt="republic day"
              className=""
            />
          </div>
        </section>

        <section className="w-full">
          <div className="bg-yellow h-72 w-full flex items-end p-4 z-40 shadow-2xl">
            <h1 className="uppercase font-bold text-4xl text-white">Empower</h1>
          </div>
          <div className="bg-saffron h-auto w-full flex items-end py-8 p-4 z-30 shadow-inner shadow-black/40 ">
            <h1 className="uppercase font-bold text-4xl text-white">unity</h1>
          </div>
          <div className="bg-green h-auto w-full flex items-end p-4 py-8 z-20 shadow-inner shadow-black/40 ">
            <h1 className="uppercase font-bold text-4xl text-white">
              progress
            </h1>
          </div>
          <div className="bg-darkRed h-auto w-full flex items-center flex-col p-4 pt-16 pb-0 z-10 shadow-inner shadow-black/40 ">
            <img
              src="/images/lion.png"
              alt="lion"
              className="w-96 h-auto object-cover"
            />

            <div className="grid grid-cols-6 gap-8 px-64 my-16">
              <a href="/" className="uppercase text-yellow font-bold">
                <a>home</a>
              </a>

              <a href="/" className="uppercase text-yellow font-bold">
                <a>about</a>
              </a>

              <a href="/" className="uppercase text-yellow font-bold">
                <a>campaign</a>
              </a>

              <a href="/" className="uppercase text-yellow font-bold">
                <a>volunteer</a>
              </a>

              <a href="/" className="uppercase text-yellow font-bold">
                <a>dontate</a>
              </a>

              <a href="/" className="uppercase text-yellow font-bold">
                <a>contact</a>
              </a>
            </div>

            <img
              src="/images/layer-24.png"
              alt="lion"
              className="w-72 h-auto object-cover mb-14"
            />

            <div className="text-yellow uppercase text-xl text-center">
              <p>Follow us:</p>

              <img
                src="/images/layer-25.png"
                alt="lion"
                className="w-72 h-auto object-cover mb-14"
              />
            </div>

            <p className="text-yellow uppercase text-xl text-center px-96">
              Together, we can make a difference. Your support and involvement
              are crucial in our journey towards a brighter, more inclusive
              future. Follow us on social media, stay updated with our latest
              news, and get involved in our campaign to create a prosperous
              nation for all.
            </p>

            <h1 className="text-yellow uppercase my-16 text-4xl font-">
              Join Us in Building a Prosperous Sri Lanka
            </h1>
            <div className="h-2 bg-yellow w-full shadow-2xl mx-28" />

            <div className="w-full py-4 flex items-center justify-center h-auto">
              <p className="text-yellow">
                &copy; 2024 All Right Reserved By indira kalugalla
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
