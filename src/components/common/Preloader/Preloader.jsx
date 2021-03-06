import preloader from "../../../assets/images/preloader.gif";
import s from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={s.preloaderBlock}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
