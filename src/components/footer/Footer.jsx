import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="texts">
          <p>"AS VISUALLY STRIKING AS ITS UNIQUE PREMISE."</p>
          <p>ENTERTAINMENT WEEKLY</p>
        </div>
        <div className="icons">
          <div className="item-container">
            <div className="arrow rotate"></div>
            <div>SCREEN & TRAILERS</div>
            <div className="arrow"></div>
          </div>
          <img src="/img/tree.png" className="tree-icon" alt="" />
          <div className="item-container">
            <div className="arrow rotate"></div>
            <div>FIREWATCH FAQ</div>
            <div className="arrow"></div>
          </div>
        </div>
        <div className="bottom-footer">
          <h2>日本語に関する情報</h2>
          <p>©2023 CAMPO SANTO, IN COOPERATION WITH PANIC.</p>
          <p>FIREWATCH IS A TRADEMARK OF CAMPO SANTO.</p>
          <p>NINTENDO SWITCH IS A TRADEMARK OF NINTENDO.</p>
          <div className="icons">
            <img src="/img/campo-santo.png" alt="" />
            <img src="/img/P-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
