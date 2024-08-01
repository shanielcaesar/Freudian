// src/Components/Songs.jsx
import React from "react";

function Songs() {
  const albums = [
    { name: "Freudian", year: 2017, imageUrl: "/images/freudian.jpg" },
    { name: "Never Enough", year: 2019, imageUrl: "/images/never-enough.png" },
    { name: "Case Study 01", year: 2019, imageUrl: "/images/case-study.png" },
    { name: "Pilgrim's Paradise", year: 2015, imageUrl: "/images/pilgrim.jpg" },
    { name: "Acoustic Break", year: 2020, imageUrl: "/images/acoustic.jpg" },
    { name: "Praise Break", year: 2014, imageUrl: "/images/praise-break.jpg" },
    { name: "Birds of Paradise", year: 2016, imageUrl: "/images/birds.jpg" },
  ];

  return (
    <div className="songs">
      <h1>ALBUMS</h1>
      <p>Browse and manage your favorite album.</p>
      <div className="album-cards">
        {albums.map((album, index) => (
          <a
            key={index}
            href={`#${album.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="album-card"
          >
            <img src={album.imageUrl} alt={album.name} />
            <div className="album-info">
              <div className="album-name">{album.name}</div>
              <div className="album-year">{album.year}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Songs;
