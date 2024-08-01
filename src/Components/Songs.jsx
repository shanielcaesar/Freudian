// src/Components/Songs.jsx
import React from "react";

function Songs() {
  const albums = [
    { name: "Album1", imageUrl: "/images/freudian.jpg" },
    { name: "Album2", imageUrl: "/images/freudian.jpg" },
    { name: "Album3", imageUrl: "/images/freudian.jpg" },
    { name: "Album4", imageUrl: "/images/freudian.jpg" },
    { name: "Album5", imageUrl: "/images/freudian.jpg" },
  ];

  return (
    <div className="songs">
      <h1>Music Collection</h1>
      <p>Browse and manage your favorite songs.</p>
      <div className="album-cards">
        {albums.map((album, index) => (
          <a
            key={index}
            href={`#${album.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="album-card"
          >
            <img src={album.imageUrl} alt={album.name} />
            <div className="album-name">{album.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Songs;
