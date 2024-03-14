const Header = () => {
  return (
    <div className="px-20 py-2 flex flex-col md:flex-row justify-between bg-indigo-800 gap-5">
        <div><h2 className="text-yellow-500 text-xl">WorldTechSoft</h2></div>
        <ul className="flex flex flex-col md:flex-row gap-1 md:gap-5 text-white">
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Service</a></li>
            <li><a href="">Our Work</a></li>
            <li><a href="">Faq</a></li>
        </ul> 
    </div>
  );
};

export default Header;
