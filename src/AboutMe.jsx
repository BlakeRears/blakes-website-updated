import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";

function AboutMe() {

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <>
            <div data-aos='ade-up' className='px-6 bg-gray-900 text-white max-w-3xl mx-auto mb-20'>
                <p className='text-lg leading-relaxed'>
                    I began programming in <span className="font-bold text-cyan-400">Java</span> during my sophomore year of high school, and since then, I’ve
                    developed several projects that I’m proud of. One of my early accomplishments was designing a
                    2D platformer and boss rush game using <span className="font-bold text-cyan-400">Unity</span> and <span className="font-bold text-cyan-400">C#</span>. Players had to navigate challenging
                    obstacle courses and face unique boss fights at the end of each level.
                    In college, I developed a <span className="font-bold text-cyan-400">mobile chess app</span> for Android using <span className="font-bold text-cyan-400">Java</span> and <span className="font-bold text-cyan-400">Android Studio</span> in
                    collaboration with a partner. The app allowed users to move pieces only when a move was valid,
                    review previous games, save replays, and even receive <span className="font-bold text-cyan-400">AI-generated</span> move suggestions.
                    Throughout my journey, I’ve continued to explore and build projects that deepen my passion for
                    software engineering. I’m a fast learner and an <span className="font-bold text-cyan-400">effective communicator</span>. With a background in
                    acting, I’m confident in presenting ideas clearly and engagingly, both individually and in team
                    settings.
                </p>
            </div>
        </>
    );
}

export default AboutMe