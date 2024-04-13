import github from "../Images/github1.jpg";
import mail from "../Images/email-icon-3.png";
import linkedin from "../Images/linkedinicon.png";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-text">
          <a href="https://github.com/MattyB2112">
            <img src={github} className="github-icon" />
          </a>
          &nbsp; My Github
        </div>
        <div className="contact-text">
          <a href="https://www.linkedin.com/in/matt-barker-9246a1a2/">
            <img src={linkedin} className="linkedin-icon" />
          </a>
          &nbsp; My LinkedIn
        </div>
        <div className="contact-text">
          <a href="mailto:mattbarker23@hotmail.com?body=My custom mail body">
            <img src={mail} className="mail-icon" />
          </a>
          &nbsp; Email me
        </div>
      </div>
    </>
  );
}
