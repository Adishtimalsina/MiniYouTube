import style from "../components/Header.module.css";

const Header = () => {
  return (
    <div className={style.Header}>
      <img src="logoo.png" className={style.Logo} />
      <b>MiniYouTube </b>{" "}
    </div>
  );
};

export default Header;
