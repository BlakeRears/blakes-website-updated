import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Welcome from './Welcome'
import Skills from './Skills'
import ProjectCard from './ProjectCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Welcome />
      <h2 className= "flex justify-center items-center text-2xl my-4 mt-10 font-extrabold text-white ">Top Skills</h2>
      <div className='mx-2.5 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        <Skills skill={'React'}/>
        <Skills skill={'JavaScript'}/>
        <Skills skill={'Tailwind'}/>
        <Skills skill={'Node.js'}/>
        <Skills skill={'HTML'}/>
        <Skills skill={'CSS'}/>
      </div>
      <h2 className="text-2xl font-extrabold text-white text-center mt-12">Projects</h2>
      <ProjectCard 
        pName={'Chess App'}
        description={'A mobile chess app for Android that allows users to play chess with friends. Features include valid move enforcement, game history, and AI move suggestions.'}
        skills={['Java', 'Android Studio', 'Git']}
        isPlayable={true}
      />
    </>
  );
}

export default App
