import nandn from "../Images/n-and-n-pic.jpg";
import trippinOne from "../Images/trippin1.png";
import trippinTwo from "../Images/trippin2.png";
import snake from "../Images/snake.png";
import fakery from "../Images/fakery.png";

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="ncnews-container">
          <div className="ncnews-underlay"></div>
          <div className="ncnews-images">
            <img src={nandn} className="ncnews-image" />
          </div>
          <a href="https://networkingandnews.netlify.app/">
            <div className="ncnews-overlay">
              <br />
              Networking and news - Made during my course. Article data is
              stored in a SQL database. Endpoints were created to make queries
              to this data using Postgres. Frontend was coded in React and uses
              Axios to make calls to the API. Articles can be filtered by topic,
              and sorted by number of votes and date posted.
            </div>
          </a>
        </div>
        <div className="trippin-container">
          <div className="trippin-underlay"></div>
          <div className="trippin-images">
            <img src={trippinOne} className="trippin-image" />
            <img src={trippinTwo} className="trippin-image" />
          </div>
          <div className="trippin-overlay">
            <br />
            Trippin - Trip-planning app made for the final project of my course.
            Backend database was created using MongoDB. Frontend was created
            using React Native. Users create an upcoming trip with a name, start
            and end-date, and then can add travel, stay, and activity info.
            Members can be added by any users that have been added to the trip
            but can only removed by the trip admin.
            <br />
          </div>
        </div>
        <div className="snake-container">
          <div className="snake-underlay"></div>
          <div className="snake-images">
            <img src={snake} className="snake-image" />
          </div>
          <a href="https://mattssnakegame.netlify.app/">
            <div className="snake-overlay">
              <br />
              Snake - Simple snake game made using HTML, CSS and JavaScript.
            </div>
          </a>
        </div>
        <div className="fakery-container">
          <div className="fakery-underlay"></div>
          <div className="fakery-images">
            <img src={fakery} className="fakery-image" />
          </div>
          <a href="https://fakeryclothing.netlify.app/">
            <div className="fakery-overlay">
              <br />
              Fakery Clothing - Clothes shopping website made using HTML, CSS,
              JavaScript and React.
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
