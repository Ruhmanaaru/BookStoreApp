import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import {Link} from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div max-w-screen-2xlcontainer mx-auto md:px-20 px-4>
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here!</span>
          </h1>
          <p className="mt-12">
            We're delighted to have you join our vibrant learning community! Our
            free courses are designed to inspire and educate, offering a diverse
            range of topics from literature and creative writing to professional
            skills and personal development. Engage with interactive lessons,
            connect with fellow learners, and gain valuable knowledge at your
            own pace. Whether you're looking to advance your career, explore a
            new passion, or simply broaden your horizons, our courses provide
            the perfect platform for growth and discovery. Welcome aboard, and
            happy learning!
          </p>
          <Link to="/">
          <button className=" mt-6  bg-pink-500 cursor-pointer px-4 py-2 rounded-full border-[2px] hover:bg-pink-800 hover:text-white duration-200">
            Back
          </button>
          </Link>
        </div>
        <div className=" ml-20 mr-20 mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
