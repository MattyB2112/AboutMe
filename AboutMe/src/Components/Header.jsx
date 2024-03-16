export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="left-header-container">
          <div className="left-header-element">
            <button>Home</button>
          </div>
        </div>
        <div className="right-header-container">
          <div className="right-header-element">
            <button>About</button>
          </div>
          <div className="right-header-element">
            <button>CV</button>
          </div>
          <div className="right-header-element">
            <button>Projects</button>
          </div>
          <div className="right-header-element">
            <button>Contact</button>
          </div>
        </div>
      </div>
    </>
  );
}
