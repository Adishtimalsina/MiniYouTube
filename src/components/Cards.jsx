import { useEffect, useState } from "react";
import style from "../components/Cards.module.css";
import Play from "./Play";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Cards = ({ datas }) => {
  const [data, setData] = useState([]);
  const [snippetData, setSnippetData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Using useEffect to update the state once, after the component is mounted
    if (datas.length > 0) {
      const videoIds = datas.map((news) => news.id.videoId);
      setData(videoIds);
      const otherDatas = datas.map((snippe) => snippe.snippet);
      setSnippetData(otherDatas);
    }
  }, []);

  const handlePlayClick = (index) => {
    setSelectedVideo(data[index]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.Container}>
      {snippetData.map((details, index) => (
        <div key={details.name} className={`${style.Cards} card`}>
          <img
            src={details.thumbnails.high.url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{details.title}</h5>
            <p className="card-text">{details.channelTitle}</p>

            {/* <a className="btn btn-primary">Play</a> */}
            <button
              key={details.channelId}
              className="btn btn-primary"
              onClick={() => handlePlayClick(index)}
            >
              Play
            </button>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <Play
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoId={selectedVideo}
        />
      )}
    </div>
  );
};

export default Cards;
