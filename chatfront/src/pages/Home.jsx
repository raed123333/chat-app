import bg from "../assets/bg.png";
const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-purple-100">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-cover w-2/4 h-[calc(100vh-60px)] rounded-lg flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-6xl py-3 bg-white bg-opacity-80 font-bold text-gry-700 rounded-lg">
            welcome
          </h2>
          <button className="p-3 hover:bg-blue-300 rounded-lg mt-2 bg-blue-200 text-white text-3xl font-ui-sans-serif ">
            Login / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
