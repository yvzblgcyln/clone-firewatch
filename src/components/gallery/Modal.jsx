import { useEffect } from "react";

const Modal = ({ clickedImg, setClickedImg, handelRotationRight, handelRotationLeft }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
      console.log(e.target.classList);
    }
  };

  useEffect(() => {
    console.log("xx");
  }, []);
  return (
    <div className="overlay dismiss" onClick={handleClick}>
      <img className="img" src={clickedImg} alt="bigger pic" />
      <span className="dismiss" onClick={handleClick}>
        &#215;
      </span>
      <div onClick={handelRotationLeft} className="overlay-arrows_left">
        <div>&#60;&#60;</div>
      </div>
      <div onClick={handelRotationRight} className="overlay-arrows_right">
        <div>&#62;&#62;</div>
      </div>
    </div>
  );
};

export default Modal;
