"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-sky font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between rounded-xl p-4 backdrop-blur-lg shadow-lg border transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 border-gray-200' 
            : 'bg-white/20 border-white/30'
        }`}>
          <div className={`text-2xl font-bold font-display transition-colors duration-300 ${
            isScrolled ? 'text-brand-green' : 'text-white'
          }`}>
            Taman Langit
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`hover:text-brand-teal transition-colors duration-300 ${
              isScrolled ? 'text-brand-green' : 'text-white'
            }`}>Home</a>
            <a href="#about" className={`hover:text-brand-teal transition-colors duration-300 ${
              isScrolled ? 'text-brand-green' : 'text-white'
            }`}>About</a>
            <a href="#gallery" className={`hover:text-brand-teal transition-colors duration-300 ${
              isScrolled ? 'text-brand-green' : 'text-white'
            }`}>Gallery</a>
            <a href="#info" className={`hover:text-brand-teal transition-colors duration-300 ${
              isScrolled ? 'text-brand-green' : 'text-white'
            }`}>Info</a>
            <a href="#contact" className={`hover:text-brand-teal transition-colors duration-300 ${
              isScrolled ? 'text-brand-green' : 'text-white'
            }`}>Contact</a>
          </div>
          <button className="bg-brand-orange hover:bg-opacity-90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080/1E3A3A/FFFFFF?text=View+of+Taman+Langit')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg font-display">
            Explore Taman Langit
            <span className="block text-brand-teal">Pangalengan</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md max-w-2xl mx-auto">
            Discover the breathtaking beauty of the sky, clouds, and hills from 360 degrees at 1,670 mdpl
          </p>
          <button className="bg-brand-teal hover:bg-brand-orange text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Plan Your Visit
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-6 font-display">A Heaven on Earth</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Taman Langit Pangalengan offers a magical experience, perched 1670 meters above sea level. It's the perfect destination to enjoy stunning sunrises, a sea of clouds, and the sparkling city lights of Bandung at night.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Experience the breathtaking 360° panoramic views of the border between South Bandung & South Garut, cool mountain air, and complete facilities for your comfort.
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="https://placehold.co/500x350/2D5757/FFFFFF?text=Pathway+at+Taman+Langit" 
                alt="Beautiful scenery at Taman Langit" 
                width={500} 
                height={350}
                className="rounded-xl shadow-2xl object-cover w-full max-w-md h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-brand-sky">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-green mb-6 font-display">Moments to Cherish</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Experience unforgettable views and capture memories that last a lifetime.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "https://placehold.co/400x256/66C5CC/FFFFFF?text=Sunrise+View", alt: "Sunrise view" },
              { src: "https://placehold.co/400x256/F5A623/FFFFFF?text=Camping+Under+Stars", alt: "Camping under the stars" },
              { src: "https://placehold.co/400x256/2D5757/FFFFFF?text=Sky+Garden+Path", alt: "Sky garden path" },
              { src: "https://placehold.co/400x256/1E3A3A/FFFFFF?text=Night+City+Lights", alt: "Night view of city lights" }
            ].map((item, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg group">
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  width={400} 
                  height={256}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket & Info Section */}
      <section id="info" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-green mb-6 font-display">Visit Us</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Plan your trip with all the essential information you need.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-brand-sky p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-brand-light-green mb-2">Ticket Price</h3>
              <p className="text-4xl font-bold text-brand-green mt-2">Rp 10,000</p>
              <p className="text-gray-500 mt-1">per person</p>
            </div>
            <div className="bg-brand-sky p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-brand-light-green mb-2">Opening Hours</h3>
              <p className="text-4xl font-bold text-brand-green mt-2">24 Hours</p>
              <p className="text-gray-500 mt-1">Open every day</p>
            </div>
            <div className="md:col-span-2 lg:col-span-1 bg-brand-sky p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-brand-light-green mb-2">Location</h3>
              <p className="text-lg text-brand-green mt-2 font-semibold">Kp. Puncak Mulya, Pangalengan</p>
              <p className="text-gray-500 mt-1">Bandung, West Java</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.423982470123!2d107.57500361536768!3d-7.192080072618995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e688d0111162ccf%3A0x7d28b183615a133e!2sTaman%20Langit%20Pangalengan!5e0!3m2!1sen!2sid!4v1672533000000!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-brand-sky">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-green mb-6 font-display">What to Do</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">From thrilling adventures to relaxing moments, we have something for everyone.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Camping Ground", desc: "Spend a night under the stars in our spacious camping area.", img: "https://placehold.co/500x192/F5A623/FFFFFF?text=Camping+Ground" },
              { title: "Sky Walk Bridge", desc: "Walk on our iconic wooden bridge and feel like you're on top of the world.", img: "https://placehold.co/500x192/66C5CC/FFFFFF?text=Sky+Walk+Bridge" },
              { title: "Photo Spots", desc: "Capture stunning photos with breathtaking backgrounds everywhere you look.", img: "https://placehold.co/500x192/2D5757/FFFFFF?text=Beautiful+Photo+Spots" },
              { title: "Culinary Area", desc: "Enjoy delicious local food and warm drinks while enjoying the cool air.", img: "https://placehold.co/500x192/1E3A3A/FFFFFF?text=Local+Culinary+Area" }
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative">
                  <Image src={activity.img} alt={activity.title} width={500} height={192} className="w-full h-auto object-cover" unoptimized />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-green mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-16 px-4 bg-brand-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 font-display">Ready for an Adventure?</h2>
          <p className="text-xl mb-8 max-w-xl mx-auto text-gray-300">Contact us for more information or book your camping spot now!</p>
          
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-orange text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg mb-12">
            Book via WhatsApp
          </a>
          
          <div className="mt-12">
            <p>Taman Langit Pangalengan © 2024</p>
            <p className="text-sm text-gray-400 mt-1">Website designed with ❤️ in Bandung</p>
          </div>
        </div>
      </section>
    </div>
  );
}
