import React from "react";
import PropTypes from "prop-types";
import { statistics, label, percentage, item, titlesel, statlist } from "./Statistics.module.css";
import RandomColor from "./RandomColor";

export default function Statistics({ title, stats }) {
  return (
    <section className={statistics}>
      {title && <h2 className={titlesel}>{title}</h2>}

      <ul className={statlist}>
        {stats.map((s) => (
          <li key={s.id} style={{ backgroundColor: `${RandomColor()}` }} className={item}>
            <span className={label}>{s.label}</span>
            <span className={percentage}>{s.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

console.log(RandomColor());
