import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerURL, setBannerURL] = useState(
    "https://placehold.co/1500x400/png"
  );

  const [profileURL, setProfileURL] = useState("https://placehold.co/100");

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    console.log(event.target.files);

    if (file) {
      setBannerURL(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setProfileURL(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[95%] max-md:w-[89%] ml-[5rem]">
      {/* banner image uploader  */}

      <div className="relative">
        <img
          src={bannerURL}
          alt="banner"
          className="w-full h-60 object-cover"
        />

        <button className="button">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            name="banner"
            id="banner-upload"
            className="hidden"
            accept="image/*"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* profile image uploader */}

      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileURL}
          alt="Profile Image"
          className="border-2 border-white w-40 h-40 relative rounded-full object-cover"
        />

        <button className="button2">
          <label htmlFor="profile img" className="cursor-pointer">
            <FaCamera size={21} />
          </label>
          <input
            type="file"
            name="profile"
            id="profile img"
            className="hidden"
            accept="image/*"
            onChange={handleProfileChange}
          />
        </button>

        {/* channel details  */}

        <div className="ml-[2rem]">
          <h1 className="text-2xl font-bold">Satoru Gojo</h1>
          <p>1 million views</p>
          <p className="mt-2 w-[320px]">
            Jujtsu kaisen is one of the best anime in the world it has lots of
            action.
          </p>
          <button className=" active:scale-[0.96] mt-3 bg-red-600 text-white py-2 px-4 rounded font-bold hover:bg-red-500 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
