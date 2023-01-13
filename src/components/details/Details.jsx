import "./details.scss";

const Details = () => {
  return (
    <div className="details">
      <div className="container">
        <h3>
          Firewatch is a mystery set in the Wyoming wilderness, where your only emotional lifeline is the person on the
          other end of a handheld radio.
        </h3>
        <div className="story">
          <span className="left">
            The year is 1989. <br />
            <br />
            You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming
            wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.
            <br />
            <br />
            An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to
            you
          </span>
          <span className="right">
            at all times over a small, handheld radio—and is your only contact with the world you've left behind.
            <br />
            <br />
            But when something strange draws you out of your lookout tower and into the world below, you'll explore a
            wild and unknown environment, facing questions and making interpersonal choices that can build or destroy
            the only meaningful relationship you have.
          </span>
        </div>
        <div className="buttons">
          <div className="item-container">
            <div className="arrow rotate"></div>
            <div>SCREEN & TRAILERS</div>
            <div className="arrow"></div>
          </div>
          <div className="item-container">
            <div className="arrow rotate"></div>
            <div>FIREWATCH FAQ</div>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
