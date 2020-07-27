import React from "react";
import PropTypes from "prop-types";
import { statistics, titlesel, statlist } from "./Statistics.module.css";
import StatListItem from "../StatListItem/StatListItem";

export default function Statistics({ title, stats }) {
  return (
    <section className={statistics}>
      {title && <h2 className={titlesel}>{title}</h2>}
      <ul className={statlist}>
        {stats.map((s) => (
          <StatListItem statLabel={s.label} statPercentage={s.percentage} key={s.id} />
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
