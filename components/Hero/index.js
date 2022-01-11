import React from "react";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Find your local contractor</h1>
        <button className={classes.btn}>View More</button>
      </div>
    </div>
  );
}

export default Hero;
