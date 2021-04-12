import React from 'react';
import SongCard from './global/song-card';
import Slider from "react-slick";
function Home() {  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  return (
    <>
     
        <h1>Recently Played</h1>
        <div className="song-wrapper">
        <Slider {...settings}>
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard /> 
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          </Slider>
        </div>
        {/*  */}
        <h1>Recently Played</h1>

        <div className="song-wrapper">
        <Slider {...settings}>

          <SongCard />

          <SongCard />
         </Slider>
        </div>
      </>
  );
}

export default Home;
