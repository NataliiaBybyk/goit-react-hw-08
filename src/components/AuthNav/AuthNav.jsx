import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        REGISTER
      </NavLink>
      <NavLink className={css.link} to="/login">
        LOG IN
      </NavLink>
    </div>
  );
}
