import imageOne from "../Images/n-and-n-pic.jpg";
import imageTwo from "../Images/trippin1.png";
import imageThree from "../Images/trippin2.png";

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="ncnews-container">
          <a href="https://networkingandnews.netlify.app/">
            <img src={imageOne} className="ncnews-image" />
          </a>

          <div className="ncnews-info">
            News article-style website - Made during my course. Article data is
            stored in a SQL database. Endpoints were created to make queries to
            this data using Postgres. Frontend was coded in React and uses Axios
            to make calls to the API.
          </div>
        </div>
        <div className="trippin-container">
          <div className="trippin-images">
            <img src={imageThree} className="trippin-image" />
            <img src={imageTwo} className="trippin-image" />
          </div>
          <div className="trippin-info">
            Trippin - Trip-planning app made for final project of my course.
            Backend database was created using MongoDB. Frontend was created
            using React Native.
          </div>
        </div>
      </div>
    </>
  );
}
