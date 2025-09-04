
function Contact() {
    return (
        <div className='border-2 mb-10 mx-10 md:mx-30 xl:mx-60 rounded-2xl border-cyan-400 py-8 px-6 bg-gray-900 text-white shadow-md'>
            <h2
                id='contact'
                className="text-2xl font-extrabold text-white text-center my-10 xl:text-5xl"
            >
                Contact
            </h2>

            <p
                className='text-center text-lg leading-relaxed xl:text-[25px]'>I’m always open to connecting with fellow developers, recruiters, or anyone interested in my work. Reach out via email or LinkedIn!
            </p>
            <div className=" py-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="mailto:RearsBlake@gmail.com"
                    className="px-6 py-3 bg-cyan-500 text-white rounded-xl text-center hover:bg-cyan-600 transition"
                >
                    Email Me
                </a>

                <a
                    href="https://www.linkedin.com/in/blakerears/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-cyan-500 text-white rounded-xl text-center hover:bg-cyan-500 hover:text-black transition"
                >
                    LinkedIn
                </a>
            </div>

        </div>
    );
}

export default Contact