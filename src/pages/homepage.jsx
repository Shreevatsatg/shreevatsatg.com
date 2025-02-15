export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <nav className=" container relative mx-auto flex w-full items-center justify-between px-5 py-3 text-xl ">
        <div ><a href="\src\pages\about.jsx">about</a></div>
        <div className="flex items-center justify-around">
          <ul className="mx-3 flex">
            <li className="mx-3"><a href="\src\pages\projects.jsx">project</a></li>
           
          </ul>
          <button className="hidden rounded-xl bg-white/20 px-4 py-2 text-[#FF00E5] sm:block">
            blog
          </button>
        </div>
      </nav>

      <div className="flex justify-center items-center h-fit">
  <div className="w-56 h-56 rounded-3xl overflow-hidden border-4 border-gray-300 shadow-lg">
    <img 
      src="/photo_2024-09-13_09-13-24.jpg" 
      alt="picture"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      <div className="relative flex flex-col items-center justify-center">
        <div className="relative top-30 max-w-3xl font-Manrope">
          <h1 className="text-5xl font-extrabold sm:text-7xl">
            this is my personal website
          </h1>
          <p className="my-4 font-medium">
          I am a second-year BCA student driven by a deep passion for computer science and technology.

With a strong foundation in programming and problem-solving, I am actively honing my skills in web development, data structures, and algorithms.

My vision is to create innovative solutions that combine technical expertise with creativity to address real-world challenges. Beyond academics, I enjoy exploring my creative side through painting.
I am committed to continuous learning, personal growth, and working on impactful projects that contribute to the tech community
          </p>
          <div>
            <button className="m-1 rounded-xl  bg-[#FF00E5] px-16 py-3">
              Learn More
            </button>
            <button className=" mx-1 rounded-xl bg-white px-16 py-3 text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="relative   top-[10vh] max-w-full sm:top-0 ">
        <div className="absolute w-full object-contain">
          <img src="circle.png" alt="" className="relative  object-fill" />
        </div>
      </div>
    </div>
  );
}
               
