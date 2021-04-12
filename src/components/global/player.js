import React, { useRef, useState } from 'react';




export default function MediaControlCard() {
 const sound = useRef(null);
 const [playState,setplayState]=useState(true)
 const [playMute,setplayMute]=useState(false)

    const handlePlay = ()=>{
        if(sound.current.paused ){
            setplayState(false);
            sound.current.play();
        }else{
            setplayState(true);
            sound.current.pause();
        }
    }

    const handleSound = ()=>{
        if(sound.current.muted ){
            setplayMute(false);
            sound.current.muted=false;
        }else{
            setplayMute(true);
            sound.current.muted=true;
        }
    }
  return (
   <>
 <div id="icerik">
</div>
<footer id="player">
{/* https://rockfm.rockfm.com.tr:9450/stream */}
  <audio src="Oh Sanam - Tony Kakkar.mp3" type="audio/mp3" ref={sound} controls="controls" className="player" autoPlay={0}></audio>
  <div className="container">
    <ul id="gecmis"></ul>
    <div id="bilgiler">
      <div id="kapak">
        <img src="https://www.flaticon.com/premium-icon/icons/svg/193/193154.svg" alt="" />
      </div>
      <div className="radyo"><strong></strong></div>
      <br />
      <div className="sarki"><strong>Şu an çalan şarkı : </strong><span>fgrh</span></div>
      <div className="liste" data-toggle="tooltip" data-placement="top" title="Önceki Şarkılar"><i className="fa fa-bars"></i></div>
      <div className="istek" data-toggle="modal" data-target="#myModal"><i className="fa fa-envelope" data-toggle="tooltip" data-placement="top" title="İstek Gönder" ></i></div>
    </div>
    <div id="kontrol" data-toggle="tooltip" data-placement="top" title="Oynat / Durdur" onClick={handlePlay}>
      {playState?<i className="fa fa-play-circle"></i>:<i className="fa fa-pause-circle"></i>}
    </div>
    <div id="sag">
      <div className="yenile" data-toggle="tooltip" data-placement="top" title="Yenile"><i className="fa fa-refresh"></i></div>
      <div className="sessiz" data-toggle="tooltip" data-placement="top" title="Sessiz" onClick={handleSound}>{playMute?<i className="fa fa-volume-down"></i>:<i className="fa fa-volume-up"></i>}</div>
      <div id="mesaj">
        {/* <marquee></marquee> */}
      </div>
      <div id="sosyal">
        <li><a href="#!" target="_blank"><i className="fa fa-facebook"></i></a></li>
        <li><a href="#!" target="_blank"><i className="fa fa-twitter"></i></a></li>
        <li><a href="#!" target="_blank"><i className="fa fa-apple"></i></a></li>
        <li><a href="#!" target="_blank"><i className="fa fa-android"></i></a></li>
      </div>
    </div>
  </div>
</footer>
      
   </>

  );
}