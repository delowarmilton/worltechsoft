import Lottie from "lottie-react";
import bannerPhoneAnimation from "../../assets/lottieAnimation/Animation - 1710398027566.json";
import bannerContactAnimation from "../../assets/lottieAnimation/Animation - 1710398196686.json";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row px-20 gap-5 items-center bg-indigo-100 py-10">
        <div className="banner-left w-[70%] text-center p-10 space-y-5">
            <h2 className="text-4xl text-green-800 font-bold">Some text will be go here.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil, enim officia quaerat voluptatem minus perferendis deserunt tempore! Ipsum, et fuga quos natus aut dolore labore provident? Fuga, libero repudiandae!</p>
            <button className="border border-yellow-600 text-lg rounded text-yellow-600 px-5 py-1">Contact</button>
        </div>
        <div className="banner-right p-10 w-[30%] flex ">
        <Lottie className="w-[100%]" animationData={bannerPhoneAnimation} loop={true} />
        {/* <Lottie className="w-[100%]" animationData={bannerContactAnimation} loop={true} /> */}
        </div>
    </div>
  )
}

export default Banner
