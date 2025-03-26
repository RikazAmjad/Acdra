import Navbar from "../navbar/Navbar"

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-[#1D909D] to-[#1D907D] w-full max-w-1300px flex flex-col justify-center items-center h-auto pb-20 rounded-b-[700px]">
            <Navbar/>
            <h1 className="font-neue text-[70px] text-center w-1/2 mt-20 text-white">where learners never stop learning</h1>
        </div>
    )
}

export default Hero
