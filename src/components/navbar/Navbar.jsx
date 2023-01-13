import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="link">
          <a href="#">CAMPO SANTO</a>
        </div>
      </div>
      <div className="right">
        <div className="link">
          <a href="#">FIREWATCH</a>
        </div>
        <div className="link">
          <a href="#" className="link3">
            BLOG
          </a>
        </div>
        <div className="link">
          <a href="#" className="link4">
            REVIEW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
