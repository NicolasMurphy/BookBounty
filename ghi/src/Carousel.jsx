import React from "react";
import Slider from "react-slick";
import { useGetTopFavoriteBooksQuery } from "./app/booksApiSlice";
import { Link } from "react-router-dom";


export default function Carousel() {

  const { data: topFavoriteBooks } = useGetTopFavoriteBooksQuery();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  let num = 1;
  let num2 = 1;

  return (
    <>
    <div className="w-80 mx-auto mb-8" >
    <Slider {...settings}>
        {topFavoriteBooks?.map((book) => (
          <div className="" key={book.work_id}>
            <Link to={book.work_id}>
                <div>{num++}/10</div>
                <img className="mx-auto" src={book.image} alt={book.title} />
            </Link>
          </div>
        ))}
    </Slider>
    </div>


        {
        topFavoriteBooks?.map((book) => <div key={book.work_id}>
          <Link to={book.work_id} className="w-80 border container mx-auto block p-1 bg-orange-200 rounded-lg shadow hover:bg-orange-300 dark:bg-slate-800 dark:border-gray-700 dark:hover:bg-slate-600">
            <p className="text-left">
              {num2++}
              <span className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"> {book.title}</span>
            </p>
          </Link>
        </div>)
        }



    </>
  );
}