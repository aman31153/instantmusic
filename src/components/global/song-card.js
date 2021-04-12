import React from 'react';


export default function SongCard() {


  return (
    <div className="card-wrapper">
    <div className="image-wrapper">
      <img src="/album.jpg" alt="album" />
    </div>
    <div className="info">
       <span>Tu ho mere pss</span>
    <span className="playIcon" ><i className="fa fa-play" aria-hidden="true"></i></span> 
       <span>Xyz</span>
    </div>
</div>

  );
}