import { useState } from 'react'
import { motion } from "framer-motion";

import './App.css'
import Nav from './Nav'
import Welcome from './Welcome'
import Skills from './Skills'
import ProjectCard from './ProjectCard'
import Tictactoe from './Tictactoe'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import ScrollFade from './ScrollFade';

import GameVideo from './assets/blakesgame.mp4'

import AOS from "aos";
import "aos/dist/aos.css";
import CursorLight from './CursorLight';

function App() {
  const [showGame, setShowGame] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='relative z-10'>
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0  bg-black/50 z-40"
          />
        )}

        <div
          className={`fixed top-0 right-0 w-full md:w-50 bg-gray-900 text-white transform transition-transform duration-300 p-6 rounded-l-2xl shadow-lg z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl"
          >
          </button>

          <ul className='mt-15 space-y-6 '>
            <li className='border-b-1 border-gray-500'>
              <a href='#topPage' onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li className='border-b-1 border-gray-500'>
              <a href='#topSkills' onClick={() => setMenuOpen(false)}>Top Skills</a>
            </li>
            <li className='border-b-1 border-gray-500'>
              <a href='#projects' onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li className='border-b-1 border-gray-500'>
              <a href='#aboutme' onClick={() => setMenuOpen(false)}>About Me</a>
            </li>
            <li className='border-b-1 border-gray-500'>
              <a href='#contact' onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Welcome />
      </div>

      <ScrollFade>
        <h2 id='topSkills' className="flex justify-center items-center text-2xl my-10 mt-10 font-extrabold text-white lg:text-5xl">Top Skills</h2>
        <div className='mx-10 grid grid-cols-2 sm:grid-cols-2 md:mx-30 lg:grid-cols-4 gap-4 lg:px-0 lg:mx-50'>
          <Skills skill={'React'} />
          <Skills skill={'JavaScript'} />
          <Skills skill={'Tailwind'} />
          <Skills skill={'Node.js'} />
          <Skills skill={'HTML'} />
          <Skills skill={'CSS'} />
          <Skills skill={'Photoshop'} />
          <Skills skill={'OOP'} />

        </div>
      </ScrollFade>

      <ScrollFade>
        <h2 id='projects' className="text-2xl font-extrabold text-white text-center my-10 lg:text-5xl lg:mt-50">Projects</h2>
        <div className='sm:mx-10 md:grid md:grid-cols-2 md:mx-20'>
          <ProjectCard
            pName={'Chess App'}
            description={'A mobile chess app for Android that allows users to play chess with friends. Features include valid move enforcement, game history, and AI move suggestions.'}
            skills={['Java', 'Android Studio', 'Git']}
            isPlayable={false}
            link={'https://appetize.io/app/b_4z2hay3rkldces3jxe7t7v74wi?device=pixel7&osVersion=13.0&toolbar=true'}
          />
          <ProjectCard
            pName={'Tic Tac Toe'}
            description={'A simple Tic Tac Toe game built with HTML, CSS, and JavaScript. Players can take turns placing Xs and Os on a 3x3 grid until one player wins or the game ends in a draw.'}
            skills={['JavaScript', 'React', 'Tailwind']}
            isPlayable={true}
            onPlay={() => setShowGame(true)}
          />

          {showGame && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl">
                <Tictactoe />
                <button
                  onClick={() => setShowGame(false)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <ProjectCard
            pName={'2D Video Game'}
            description={'2D platformer and boss rush game using Unity and C#. Players had to navigate challenging obstacle courses and face unique boss fights at the end of each level.'}
            skills={['C#', 'Unity', 'OOP', 'Photoshop']}
            onShow={() => setShowVideo(true)}
          />

          {showVideo && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl">
                <video width="640" controls autoPlay>
                  <source src={GameVideo} type="video/mp4" />
                </video>
                <button
                  onClick={() => setShowVideo(false)}
                  className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600'
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <ProjectCard
            pName={'Photo Album'}
            description={'Built a photo management system with CRUD operations, tagging, and advanced search functionality.'}
            skills={['Java', 'JavaFX', 'OOP', 'File I/O']}
          />
        </div>
      </ScrollFade>

      <ScrollFade>
        <h2
          id='aboutme'
          className="text-2xl font-extrabold text-white text-center my-10 lg:text-5xl lg:mt-50"
        >
          About Me
        </h2>
        <AboutMe />
      </ScrollFade>

      <ScrollFade>
        <div className='lg:mt-50'>
          <Contact />
        </div>
      </ScrollFade>

      <Footer />
    </>
  );
}

export default App
