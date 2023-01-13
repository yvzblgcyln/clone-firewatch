import React, { useState } from "react";
import Modal from "./Modal";
import "./index.scss";

const img = [
  { link: "/img/img1.jpeg" },
  { link: "/img/img2.jpeg" },
  { link: "/img/img3.jpeg" },
  { link: "/img/img4.jpeg" },
];

function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = img.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = img[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = img.filter((item) => {
      return img.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = img.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = img[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = img.filter((item) => {
      return img.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery">
      <div className="wrapper">
        {img.map((item, index) => (
          <div key={index} className="wrapper-images">
            <img src={item.link} alt={item.text} onClick={() => handleClick(item, index)} />
          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
