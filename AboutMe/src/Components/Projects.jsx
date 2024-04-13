import imageOne from "../Images/n-and-n-pic.jpg";

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="project-container">
          <div className="project-image">
            <a href="https://networkingandnews.netlify.app/">
              <img src={imageOne} className="project-image" />
            </a>
          </div>
          <div className="project-info">
            This was a project undertaken during my time on the Northcoders
            software development bootcamp. I first created the API endpoints
            that would store the data to be fetched by the frontend, and used
            Express to create a server for these. The data was stored in SQL and
            queries to the database were made using Postgres.
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">Project 2 Title</div>
          <div className="project-info">Project 2 info</div>
        </div>
        <div className="project-container">
          <div className="project-image">Project 3 Title</div>
          <div className="project-info">Project 3 info</div>
        </div>
      </div>
    </>
  );
}
