"use client";

import { useState, FormEvent } from "react";

const HomePage = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<number | null>(null);

  const emotions = [
    { id: 1, name: "angry", icon: "/mark_face_angry.png" },
    { id: 2, name: "ase", icon: "/mark_face_ase.png" },
    { id: 3, name: "cry", icon: "/mark_face_cry.png" },
    { id: 4, name: "hehe", icon: "/mark_face_hehe.png" },
    { id: 5, name: "jito", icon: "/mark_face_jito.png" },
    { id: 6, name: "laugh", icon: "/mark_face_laugh.png" },
    { id: 7, name: "odoroki", icon: "/mark_face_odoroki.png" },
    { id: 8, name: "smile", icon: "/mark_face_smile.png" },
    { id: 9, name: "tere", icon: "/mark_face_tere.png" },
  ];

  const handleEmotionClick = (id: number) => {
    // todo 感情トランザクション発行
    console.log("Submitted emotion:", id);
    setSelectedEmotion(id);
  };

  return (
    <div className="container">
      <h1>How are you feeling today?</h1>
      <div className="emotions-grid">
        {emotions.map((emotion) => (
          <div
            key={emotion.id}
            className="emotion-item"
            onClick={() => handleEmotionClick(emotion.id)}
          >
            <img src={emotion.icon} alt={emotion.name} />
            <p>{emotion.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
