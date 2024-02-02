import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa6';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl mb-2 font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg flex font-semibold rounded-lg hover:bg-opacity-90">
          <FaPlay className="mr-1 size-7" /> Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white font-semibold p-4 px-12 text-lg bg-opacity-50 rounded-lg flex hover:bg-opacity-40">
          <IoIosInformationCircleOutline className=" mr-1 size-7" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
