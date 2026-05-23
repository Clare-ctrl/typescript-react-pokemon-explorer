import { NavLink, Outlet } from "react-router-dom";
import "./TabSection.css";

export default function TabSection() {
  return (
    <section id="selection">
      <menu>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "tab-button active" : "tab-button"
          }
        >
          Search
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "tab-button active" : "tab-button"
          }
        >
          Gallery
        </NavLink>
      </menu>

      <main>
        <Outlet />
      </main>
    </section>
  );
}
