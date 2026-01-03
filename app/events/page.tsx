'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

// map event titles → images  ✅ FIXED
const eventImages: Record<string, string> = {
  "DATA SPHERE": "/data.png",
  "DIRACOSMOS": "/dira.png",
  "INNOVEARTH": "/innov.png",
  "CTRL + ALT + HACK": "/cntl.png",
  "SUPER-KNOW-A": "/super.png",
  "SKYSCAPE": "/skyscape.png"
};

// EVENTS DATA
const eventsByDay = [
  {
    day: "Day 1",
    date: "21 FEB 2025",
    events: [
      { id: 1, title: "INNOVEARTH", tagline: "Ideathon", description: "Innovate solutions for global challenges.", date: "21 FEB", time: "10:00 AM - 5:00 PM", prize: "₹50,000", venue: "APJ HALLS", category: "INNOVATION" },
      { id: 2, title: "WEB-A-THON", tagline: "Frontend Design", description: "Design space-themed websites.", date: "21 FEB", time: "12:00 PM - 5:00 PM", prize: "₹50,000", venue: "MINI AUDI 2", category: "DESIGN" },
      { id: 3, title: "COSMOS TALK", tagline: "Tech Seminar", description: "Learn from space experts.", date: "21 FEB", time: "2:00 PM - 4:00 PM", prize: "NA", venue: "MAIN AUDI", category: "SEMINAR" },
      { id: 4, title: "ROVER RACE", tagline: "Robotics", description: "Build space exploration rovers.", date: "21 FEB", time: "11:00 AM - 4:00 PM", prize: "₹75,000", venue: "ROBOTICS LAB", category: "ROBOTICS" },
      { id: 5, title: "SPACE STARTUP", tagline: "Pitch Competition", description: "Pitch space-tech startup ideas.", date: "21 FEB", time: "3:00 PM - 6:00 PM", prize: "₹1,00,000", venue: "INNOVATION HUB", category: "BUSINESS" },
    ]
  },

  {
    day: "Day 2",
    date: "22 FEB 2025",
    events: [
      { id: 11, title: "CTRL + ALT + HACK", tagline: "Hackathon", description: "Build AI solutions.", date: "22-23 FEB", time: "8:00 AM - Next Day", prize: "₹1,50,000", venue: "MAIN AUDI", category: "HACKATHON" },
      { id: 12, title: "DATA SPHERE", tagline: "Data Analytics", description: "Analyze cosmic datasets.", date: "22 FEB", time: "12:00 PM - 5:00 PM", prize: "₹50,000", venue: "CBT", category: "ANALYTICS" },
      { id: 13, title: "SUPER-KNOW-A", tagline: "Quiz", description: "Test space knowledge.", date: "22 FEB", time: "12:00 PM - 5:00 PM", prize: "₹50,000", venue: "MAIN AUDI", category: "QUIZ" },
    ]
  },

  {
    day: "Day 3",
    date: "23 FEB 2025",
    events: [
      { id: 21, title: "DIRACOSMOS", tagline: "Case Study", description: "Solve space industry problems.", date: "23 FEB", time: "11:00 AM - 5:00 PM", prize: "₹50,000", venue: "CBT", category: "RESEARCH" },
      { id: 22, title: "SKYSCAPE", tagline: "Photography", description: "Space photography challenge.", date: "29 JAN - 15 FEB", time: "All Day", prize: "₹6,000", venue: "ONLINE", category: "PHOTOGRAPHY" },
    ]
  }
];

export default function EventsPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const currentDay = eventsByDay[selectedDay];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto pt-24 px-4">

        {/* HEADER + BACK BUTTON */}
        <div className="flex items-start justify-between mb-12">

          <div>
            <h1 className="text-6xl font-black mb-3">ALL EVENTS</h1>
            <p className="text-gray-400">Explore day-wise challenges and activities.</p>
          </div>

          {/* desktop back button */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
          >
            BACK TO HOME
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l-7 7m0 0l7 7m-7-7h22" />
            </svg>
          </Link>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-3 mt-4">
          {eventsByDay.map((d, i) => (
            <button
              key={i}
              onClick={() => setSelectedDay(i)}
              className={`px-6 py-3 rounded-full border text-sm transition 
                ${selectedDay === i
                  ? "bg-white text-black"
                  : "border-gray-700 text-gray-300 hover:bg-gray-900"}`}
            >
              {d.day} — {d.date}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 pb-24">
          {currentDay.events.map(event => (
            <div
              key={event.id}
              className="rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/30 transition"
            >
              <div className="relative h-44">
                <Image
                  src={eventImages[event.title] || "/data.png"}
                  alt={event.title}
                  fill
                  className="object-cover opacity-90"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-1">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-900 border border-gray-700">
                    {event.category}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-5">{event.description}</p>

                <div className="grid grid-cols-2 text-sm gap-y-2 mb-6">
                  <span>📅 {event.date}</span>
                  <span className="truncate">📍 {event.venue}</span>
                  <span>⏰ {event.time}</span>
                  <span>💰 {event.prize}</span>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-white text-black rounded-lg text-sm font-bold">
                    REGISTER
                  </button>
                  <button className="flex-1 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-900">
                    KNOW MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* mobile back button */}
        <div className="text-center pb-10 md:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-gray-400 text-sm font-medium">
              © SpaceCon {currentYear}
            </span>

            <div className="hidden sm:block w-px h-4 bg-white/20" />

            <Link 
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
