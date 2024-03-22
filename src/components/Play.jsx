import style from "../components/Play.module.css";

const Play = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;
  return (
    <div className={style.ModalOverlay}>
      <div className={style.ModalContent}>
        <span className={style.CloseButton} onClick={onClose}>
          &times; Close
        </span>
        <div className={style.ModalBody}>
          <iframe
            width="900px"
            height="600px"
            src={`https://www.youtube.com/embed/${videoId}`}
            // src="https://www.youtube.com/embed/RMGSXzJFudg?si=QvzkMElTJETUG8nR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Play;

// <div>
//   <div key={videoid}>
//     <iframe
//       width="560"
//       height="315"
//       src={`https://www.youtube.com/embed/${videos}`}
//       // src="https://www.youtube.com/embed/RMGSXzJFudg?si=QvzkMElTJETUG8nR"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//     ></iframe>
//   </div>
// </div>
//   )
// };
// export default Play;
