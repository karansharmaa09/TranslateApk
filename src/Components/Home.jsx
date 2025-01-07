const Home = () => {
  return (
    <>
      <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10 bg-black">
        <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
          <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
          <div className="relative bg-white shadow-lg sm:rounded-3xl">
            <div className="flex items-center justify-start pt-6 pl-6">
              <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
            </div>

            <div className="px-20 py-6">
              {/* <!-- nav --> */}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                    TranslateXpert
                  </div>
                  <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                    <a
                      href="#"
                      className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                    >
                      Home
                    </a>

                    <a
                      href="/Contact"
                      className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                    >
                      About
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <a
                    href="#"
                    className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"
                  >
                    Login
                  </a>
                  <button className="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
              {/* <!-- /nav --> */}

              {/* <!-- hero section --> */}
              <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
                <div className="text-6xl font-semibold text-gray-900 leading-none">
                  Speak the World Translate with Ease!
                </div>
                <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                  Unlock a Better World – Effortless Translation for Clearer
                  Connections and Stronger Communication.
                </div>
                <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                  Use for Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
