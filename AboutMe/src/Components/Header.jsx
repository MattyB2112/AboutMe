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
                      color: "rgb(192, 41, 134)",
                      padding: 8,
                    }
                  : {
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>Home 🏠</button>
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
                      color: "rgb(192, 41, 134)",
                      padding: 8,
                    }
                  : {
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>About 💬</button>
            </NavLink>
          </div>
          <div className="right-header-element">
            <NavLink
              to="/cv"
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "rgb(192, 41, 134)",
                      padding: 8,
                    }
                  : {
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>CV 🗒️</button>
            </NavLink>
          </div>
          <div className="right-header-element">
            <NavLink
              to="/projects"
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "rgb(192, 41, 134)",
                      padding: 8,
                    }
                  : {
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>Projects 🔧</button>
            </NavLink>
          </div>
          <div className="right-header-element">
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "rgb(192, 41, 134)",
                      padding: 8,
                    }
                  : {
                      padding: 8,
                      textDecoration: "none",
                      color: "inherit",
                    };
              }}
            >
              <button>Contact 📫</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
