import React from "react";
import "./SongCard.css";
import song1 from "../../assets/Aasa Kooda.mp3";
import song2 from "../../assets/Aathi.mp3";
import song3 from "../../assets/Adada-Adada-MassTamilan.so.mp3";
import song4 from "../../assets/Adangaatha Asuran.mp3";
import song5 from "../../assets/Blue Star Anthem.mp3";
import song6 from "../../assets/Bones - Imagine Dragons-(PagalSongs.Com.IN).mp3";
import song7 from "../../assets/Chella-Kutti.mp3";
import song8 from "../../assets/Dandelions - Dandelions (320 kbps).mp3";   

function SongCard() {
  const songs = [
    {
      id: 1,
      title: "Aasa Kooda",
      artist: "Unknown Artist",
      url: song1,
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Aathi",
      artist: "Unknown Artist",
      url: song2,
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Adada-Adada",
      artist: "Unknown Artist",
      url: song3,
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Adangaatha Asuran",
      artist: "Unknown Artist",
      url: song4,
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Blue Star Anthem",
      artist: "Unknown Artist",
      url: song5,
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 6,
      title: "Bones",
      artist: "Imagine Dragons",
      url: song6,
      bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      id: 7,
      title: "Chella-Kutti",
      artist: "Unknown Artist",
      url: song7,
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      id: 8,
      title: "Dandelions",
      artist: "Dandelions",
      url: song8,
      bg: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)"
    }
  ];


  return (
    <div className="bdy">
      <h1 className="trending-title">Trending Songs</h1>
      <hr />
      <div className="bdy2">
        {songs.map((song) => (
          <div key={song.id} className="container" style={{ background: song.bg }}>
            <h3 className="song-title">{song.title}</h3>
            <p className="song-artist">{song.artist}</p>
            <audio controls src={song.url} className="song"></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongCard;
