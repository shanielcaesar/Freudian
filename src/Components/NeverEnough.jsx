import React from "react";
import "./NeverEnough.css"; // Make sure to create this CSS file for styling

function NeverEnough() {
  const songs = [
    {
      number: 1,
      title: "Ocho Rios",
      artist: "Daniel Caesar",
      duration: "2:33",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 2,
      title: "Valentina",
      artist: "Daniel Caesar",
      duration: "2:35",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 3,
      title: "Toronto 2014",
      artist: "Daniel Caesar",
      duration: "4:38",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 4,
      title: "Let Me Go",
      artist: "Daniel Caesar",
      duration: "3:37",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 5,
      title: "Do You Like Me?",
      artist: "Daniel Caesar",
      duration: "3:48",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 6,
      title: "Always",
      artist: "Daniel Caesar",
      duration: "3:45",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 7,
      title: "Cool",
      artist: "Daniel Caesar",
      duration: "4:04",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 8,
      title: "Disillusioned",
      artist: "Daniel Caesar",
      duration: "4:01",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 9,
      title: "Buyer's Remorse",
      artist: "Daniel Caesar",
      duration: "2:32",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 10,
      title: "Shot My Baby",
      artist: "Daniel Caesar",
      duration: "4:28",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 11,
      title: "Pain Is Inevitable",
      artist: "Daniel Caesar",
      duration: "4:55",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 12,
      title: "Homiesexual",
      artist: "Daniel Caesar",
      duration: "3:50",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 13,
      title: "Vince Van Gogh",
      artist: "Daniel Caesar",
      duration: "2:44",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 14,
      title: "Superpowers",
      artist: "Daniel Caesar",
      duration: "2:55",
      imageUrl: "/images/never-enough.png",
    },
    {
      number: 15,
      title: "Unstoppable",
      artist: "Daniel Caesar",
      duration: "4:08",
      imageUrl: "/images/never-enough.png",
    },
  ];

  return (
    <div className="never-enough-container">
      <div className="never-enough-cover">
        <img src="/images/never-enough.png" />
        <div className="album-details">
          <h1>Never Enough</h1>
          <h4>Daniel Caesar • Never Enough • 2023 • 15 songs, 54 min 32 sec</h4>
        </div>
      </div>
      <div className="never-enough-wrapper">
        <div className="songs-list">
          <p>
            Never Enough is the third studio album by Canadian singer-songwriter
            Daniel Caesar. It was released through Republic on April 7, 2023,
            two days after his 28th birthday. Production was handled by Caesar
            himself, Zachary Simmonds (his younger brother), Sir Dylan, Sevn
            Thomas, Rami, and Raphael Saadiq. "Do You Like Me?"
            <br />
            <br />
            After almost four years since his last studio album “Case Study 01,”
            Daniel Caesar is back with his long awaited work “Never Enough,”
            released on April 7. The themes of this album are nothing new for
            Caesar, dealing with the ups and downs of love and heartbreak, as
            well as the painful passage of time.
            <br />
            <br />
            <br />
          </p>
          <h4>Songs</h4>
          {songs.map((song, index) => (
            <div key={index} className="song-item">
              <div className="song-number">{song.number}</div>
              <img
                src={song.imageUrl}
                alt={song.title}
                className="song-image"
              />
              <div className="song-details">
                <div className="song-title">{song.title}</div>
                <div className="song-artist">{song.artist}</div>
              </div>
              <div className="song-duration">{song.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NeverEnough;
