import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="left-header-container">
          <div className="left-header-element">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderRadius: "10px",
                      borderBottom: "solid rgb(122, 19, 83)",
                      color: "rgb(141, 24, 96)",
                      padding: 8,
                    }
                  : {
                      borderRadius: "10px",
                      border: "solid transparent",
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>Home</button>
            </NavLink>
          </div>
        </div>
        <div className="right-header-container">
          <div className="right-header-element">
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderRadius: "10px",
                      borderBottom: "solid rgb(122, 19, 83)",
                      color: "rgb(141, 24, 96)",
                      padding: 8,
                    }
                  : {
                      borderRadius: "10px",
                      border: "solid transparent",
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>About</button>
            </NavLink>
          </div>
          <div className="right-header-element">
            <NavLink
              to="/cv"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderRadius: "10px",
                      borderBottom: "solid rgb(122, 19, 83)",
                      color: "rgb(141, 24, 96)",
                      padding: 8,
                    }
                  : {
                      borderRadius: "10px",
                      border: "solid transparent",
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>CV</button>
            </NavLink>
          </div>
          <div className="right-header-element">
            <NavLink
              to="/projects"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderRadius: "10px",
                      borderBottom: "solid rgb(122, 19, 83)",
                      color: "rgb(141, 24, 96)",
                      padding: 8,
                    }
                  : {
                      borderRadius: "10px",
                      border: "solid transparent",
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>Projects</button>
            </NavLink>
          </div>
          <div className="right-header-element">
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderRadius: "10px",
                      borderBottom: "solid rgb(122, 19, 83)",
                      color: "rgb(141, 24, 96)",
                      padding: 8,
                    }
                  : {
                      borderRadius: "10px",
                      border: "solid transparent",
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>Contact</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
