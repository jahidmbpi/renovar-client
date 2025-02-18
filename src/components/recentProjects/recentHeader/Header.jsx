const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mx-auto md:mt-16 space-y-6">
      <div className="flex items-center justify-center">
        <h2 className="border-l-2 border-[#ff651e] text-[#a8a2a0] font-bold uppercase pl-2">
          Explore Projects
        </h2>
      </div>
      <h2 className="text-3xl text-white uppercase">Recent Projects</h2>
    </div>
  );
};

export default Header;
