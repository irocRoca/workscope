import React from "react";
import classes from "./Hero.module.css";

function Hero() {
  const [search, setSearch] = React.useState("");
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>
            Find local <span>Projects</span>
          </h1>
          <p className={classes.subtext}>
            Anim aute id amgna aliqua ad ad non desrent sunt.
          </p>
          <div className={classes.search_container}>
            <input
              id="search"
              name="search"
              type="text"
              className={classes.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className={classes.btn}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
