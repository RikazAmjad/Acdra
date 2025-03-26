const Navbar = () => {
    return (
        <div className="max-w-[1300px] w-full flex justify-between items-center">
            <img src='/logo.png' alt="logo" className="w-20 h-auto"/>
            <div className="flex space-x-2">
                <div>
                    <a href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100  shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">About</span>
                    </a>
                </div>
                <div>
                    <a href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100  shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Modules</span>
                    </a>
                </div>
                <div>
                <a href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-white bg-black border shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-100 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-100 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black rounded-xl ease">Get Started</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
