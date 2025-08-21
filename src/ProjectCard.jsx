
function ProjectCard({ pName, description, skills, isPlayable, link, onPlay, onShow}) {

    return (
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-102 transition-transform duration-300 mx-10 my-5">
            <h2 className="text-xl font-bold text-cyan-300 mb-2">{pName}</h2>
            <h3 className="font-semibold text-white mt-2">Description</h3>
            <p className="text-gray-300">{description}</p>
            <h3 className="font-semibold text-white mt-2">Skills</h3>
            <div className="flex flex-wrap gap-2 mt-1">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-cyan-700 text-white px-2 py-1 rounded-full text-sm">
                        {skill}
                    </span>
                ))}
            </div>
            {isPlayable ? (
                <button
                    onClick={onPlay}
                    className="bg-transparent border-2 rounded-3xl hover:bg-gray-200 text-cyan-500 font-semibold px-4 py-2 shadow-lg transition-colors duration-300 inline-block mt-4 text-shadow-mg"
                >
                    Play
                </button>
            ) : link ? (
                <a href='https://appetize.io/app/b_4z2hay3rkldces3jxe7t7v74wi?device=pixel7&osVersion=13.0&toolbar=true'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-transparent border-2 rounded-3xl hover:bg-gray-200 text-cyan-500 font-semibold px-4 py-2 shadow-lg transition-colors duration-300 inline-block mt-4 text-shadow-mg'
                >
                Use App
                </a>
            ) : onShow ? (
                <button
                    onClick={onShow}
                    className="bg-transparent border-2 rounded-3xl hover:bg-gray-200 text-cyan-500 font-semibold px-4 py-2 shadow-lg transition-colors duration-300 inline-block mt-4 text-shadow-mg"
                >
                    See Video
                </button>
            ) : null}
        </div>
    );

}

export default ProjectCard