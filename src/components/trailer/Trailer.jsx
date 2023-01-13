import "./trailer.scss";

const Trailer = () => {
  return (
    <div className="trailer">
      <div className="available">
        <h2>AVAILABLE NOW FOR &#36; 19.99</h2>
        <div className="items">
          <div className="left">
            <div className="item-container">
              <div className="arrow rotate"></div>
              <img src="img/asset0.png" alt="" />
              <div>WINDOWS MAC LINUX</div>
              <div className="arrow"></div>
            </div>
            <div className="item-container">
              <div className="arrow rotate"></div>
              <img src="img/asset1.png" alt="" />
              <div>PLAYSTATION 4</div>
              <div className="arrow"></div>
            </div>
          </div>
          <div className="right">
            <div className="item-container">
              <div className="arrow rotate"></div>
              <img src="img/asset2.png" alt="" />
              <div>NINTENDO SWITCH</div>
              <div className="arrow"></div>
            </div>
            <div className="item-container">
              <div className="arrow rotate"></div>
              <img src="img/asset3.png" alt="" />
              <div>XBOX ONE</div>
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        {/* <div className="youtube-container">
          <iframe src="https://www.youtube.com/embed/cXWlgP5hZzc" title="trailer" className="youtube"></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default Trailer;
