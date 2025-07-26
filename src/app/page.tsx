"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link
import { useState } from "react";

export default function Home() {
  const [showWinnersModal, setShowWinnersModal] = useState(false);
  const [conferenceText, setConferenceText] = useState("Model UN Conference @ UNC Chapel Hill, 2024");

  const handleConferenceClick = () => {
    setShowWinnersModal(true);
    setConferenceText("winners for Model UN Conference @ UNC Chapel Hill, 2024");
  };

  const handleCloseModal = () => {
    setShowWinnersModal(false);
    setConferenceText("Model UN Conference @ UNC Chapel Hill, 2024"); // Reset text when closing
  };
  const officers = [
    {
      name: "BIANCA SALVE",
      role: "President",
      imageUrl: "/images/bianca_salve.jpg",
    },
    {
      name: "ANUSHKA BANA",
      role: "Vice President",
      imageUrl: "/images/anushka_bana.jpg",
    },
    {
      name: "ANIKA BABU",
      role: "Secretary",
      imageUrl: "/images/anika_babu.jpg",
    },
    {
      name: "ANANYA UPADHYAY",
      role: "Director of Crisis",
      imageUrl: "/images/ananya_upadhyay.jpg",
    },
    {
      name: "JASON EMSLEY",
      role: "Director of General Assembly",
      imageUrl: "/images/jason_emsley.jpg",
    },
    {
      name: "JACK ELIOTT",
      role: "Director of Simulations",
      imageUrl: "/images/jack_eliott.jpg",
    },
    {
      name: "ALEX ROBINSON",
      role: "Chair of Public Relations",
      imageUrl: "/images/alex_robinson.jpg",
    },
    {
      name: "SELINA SENTOSA HARJO",
      role: "Head Delegate",
      imageUrl: "/images/selina_sentosa_harjo.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.jpg" alt="GH Model UN Logo" width={50} height={50} className="mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">GH Model UN</h1>
          </Link>
          <nav>
            <a href="mailto:ghhsmodelun@gmail.com" className="text-gray-600 hover:text-gray-900 mx-2">Email</a>
            <a href="https://www.instagram.com/ghmodelun" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 mx-2">Instagram</a>
          </nav>
        </div>
      </header>

      <main className="py-8">
        <section className="container mx-auto text-center py-5">
          <h1 className="text-6xl font-bold text-blue-500 animate-big-bounce">GREEN HOPE MODEL UNITED NATIONS</h1>
          <div className="w-1/2 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </section>

        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="parallax -mt-0">
            <Image
              src="/images/conference.jpg"
              alt="Model UN Conference @ UNC Chapel Hill, 2024"
              width={1280}
              height={720}
              className="rounded-lg shadow-lg cursor-pointer"
              priority
              onClick={handleConferenceClick}
            />
            <figcaption
              className="text-center mt-2 text-sm text-blue-500 cursor-pointer hover:text-blue-700"
              onClick={handleConferenceClick}
            >
              {conferenceText}
            </figcaption>
          </div>
          <div className="text-center md:text-left -mt-30">
            <h2 className="text-4xl font-semibold text-blue-400">Welcome to GH Model UN</h2>
            <div className="mt-4 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold">GH Model UN Mission Statement</h3>
              <p className="mt-2 text-lg">
                Green Hope Model UN seeks to inspire, educate, and expose young adults to new ideas, experiences, & discomfort through means of public speaking, research, and debate.
              </p>
            </div>
          </div>
        </section>

        {showWinnersModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-6xl w-full relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-3xl font-semibold text-blue-400 mb-6 text-center">Our Winners</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <Image src="/images/winner_1.jpg" alt="Winner 1" width={400} height={300} className="rounded-lg" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/images/winner_2.jpg" alt="Winner 2" width={400} height={300} className="rounded-lg" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/images/winner_3.jpg" alt="Winner 3" width={400} height={300} className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="mt-2">
          <h2 className="container mx-auto text-3xl font-bold text-center mb-8">The Officer Board 2024-25</h2>
          <div className="marquee">
            <div className="marquee__content">
              {officers.map((officer) => (
                <div key={officer.name} className="marquee__item bg-white p-8 rounded-lg shadow-md text-center">
                  <Image
                    src={officer.imageUrl}
                    alt={officer.name}
                    width={240}
                    height={240}
                    className="w-40 h-40 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold whitespace-nowrap">{officer.name}</h3>
                  <p className="text-lg text-gray-600">{officer.role}</p>
                </div>
              ))}
               {officers.map((officer) => (
                <div key={officer.name} className="marquee__item bg-white p-8 rounded-lg shadow-md text-center">
                  <Image
                    src={officer.imageUrl}
                    alt={officer.name}
                    width={240}
                    height={240}
                    className="w-40 h-40 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold whitespace-nowrap">{officer.name}</h3>
                  <p className="text-lg text-gray-600">{officer.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-12 py-6">
        <div className="container mx-auto text-center text-gray-600">
          <p>&quot;Chaos comes without Peace. Peace does not come without Chaos&quot; - Alex Robinson</p>
        </div>
      </footer>
    </div>
  );
}
