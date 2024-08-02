// src/Components/Freudian.jsx
import React from "react";
import "./Freudian.css"; // Make sure to create this CSS file for styling

function Freudian() {
  const songs = [
    {
      number: 1,
      title: "Get You",
      artist: "Daniel Caesar",
      duration: "4:39",
      imageUrl: "/images/freudian.jpg",
    },
    {
      number: 2,
      title: "Best Part",
      artist: "Daniel Caesar",
      duration: "3:30",
      imageUrl: "/images/freudian.jpg",
    },
    {
      number: 3,
      title: "Hold Me Down",
      artist: "Daniel Caesar",
      duration: "3:52",
      imageUrl: "/images/freudian.jpg",
    },
    {
      number: 4,
      title: "Neu Roses (Transgressor's Song)",
      artist: "Daniel Caesar",
      duration: "3:02",
      imageUrl: "/images/freudian.jpg",
    },
    {
      number: 5,
      title: "Loose",
      artist: "Daniel Caesar",
      duration: "3:06",
      imageUrl: "/images/freudian.jpg",
    },
    {
      number: 6,
      title: "We Find Love",
      artist: "Daniel Caesar",
      duration: "4:15",
      imageUrl: "/images/freudian.jpg",
    },
    {
      number: 7,
      title: "Blessed",
      artist: "Daniel Caesar",
      duration: "4:02",
      imageUrl: "/images/freudian.jpg",
    },
    {
      number: 8,
      title: "Take Me Away",
      artist: "Daniel Caesar",
      duration: "3:47",
      imageUrl: "/images/freudian.jpg",
    },
    {
      number: 9,
      title: "Transform",
      artist: "Daniel Caesar",
      duration: "4:41",
      imageUrl: "/images/freudian.jpg",
    },
    {
      number: 10,
      title: "Freudian",
      artist: "Daniel Caesar",
      duration: "10:03",
      imageUrl: "/images/freudian.jpg",
    },
  ];

  return (
    <div className="album-container">
      <div className="album-cover">
        <img src="/images/freudian.jpg" />
        <div className="album-details">
          <h1>Freudian</h1>
          <h4>Daniel Caesar • Freudian • 2017 • 10:02 • 37,581,970</h4>
        </div>
      </div>
      <div className="gradient-wrapper">
        <div className="songs-list">
          <p>
            On August 25th, 2017, Daniel Caesar released his debut album,
            “Freudian.” Freudian is an album consisting of 10 songs that
            represent how it feels to fall in and out of love. The first two
            songs, “Get You” which features Kali Uchis, and “Best Part” which
            features H.E.R, capture the feeling of being in deep love. <br />
            <br />
            The album itself is a dive into the heart and mind of Caesar as he
            reflects upon his past relationships which were severed, seemingly
            at the fault of Caesar. The album is titled after the Oedipus
            Complex crafted by Sigmund Freud which states that a child has an
            unconscious desire for the parent of the opposite sex.
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

export default Freudian;
