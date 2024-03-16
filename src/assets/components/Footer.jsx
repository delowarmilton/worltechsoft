const Footer = () => {
  return (
    <div className="px-20 py-8 bg-indigo-700 flex flex-col md:flex-row justify-between items-center">
      <div className="footer-left w-[40%]">
        <div className="mb-5">
          <h2 className="text-3xl text-yellow-500">Just say Hello!</h2>
          <p className="text-lg text-white">Let us know more about you!</p>
        </div>
        <form action="" method="" className="space-y-3">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              className="px-2 py-1 rounded-lg bg-indigo-300 placeholder-gray-500 w-full"
              placeholder="Farst Name"
            />
            <input
              type="text"
              className="px-2 py-1 rounded-lg bg-indigo-300 placeholder-gray-500 w-full"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              className="px-2 py-1 rounded-lg bg-indigo-300 placeholder-gray-500 w-full"
              placeholder="Email"
            />
            <input
              type="text"
              className="px-2 py-1 rounded-lg bg-indigo-300 placeholder-gray-500 w-full"
              placeholder="Phone"
            />
          </div>
          <textarea
            className="px-2 py-1 rounded-lg w-full h-[100px] bg-indigo-300 placeholder-gray-500"
            placeholder="Message"
          ></textarea>
          <br></br>
          <button
            type="submit"
            className="bg-red-300 text-white hover:bg-red-500 uppercase transition-all duration-500 px-2 py-1 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="footer-right w-[30%]">
        <div className="mb-5 space-y-3 text-white">
          <h2 className="text-3xl text-yellow-500 mb-3">Contact Information</h2>
          <p className="text-lg">
            106/A Nurjahan road, <br></br>
            Mohammadpur, Dhaka-1012<br></br>
            </p>
            <p>Call us : +8801738118208</p>
            <p>Email : delowar@worldtechsoft.com</p>
        </div>
        <div className="mb-5 space-y-3 text-white">
          <h2 className="text-3xl text-yellow-500 mb-3">Follow us</h2>
          <ul className="text-white font-bold flex flex-col md:flex-row gap-5">
            <li><a href="">Facebook</a></li>
            <li><a href="">Linkedin</a></li>
            <li><a href="">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
