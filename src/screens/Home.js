import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.contents}>
        <h2>
          <b>iCode Solutions</b>
        </h2>
        <p>
          We are a company leading the revolutionary approach to Information
          Communication Technology (ICT) with solutions built on a world-class,
          secure, resilient infrastructure, delivered according to global best
          practices in partnership with the world’s leading technology vendors.
          The company’s strategy has been to identify partners with
          best-in-class products and culture tuned to provide leading edge
          solutions.{" "}
        </p>
        <br />
        <br />
        <Link to="/payment" className={`${styles.btn} ${styles.green}`}>
          Make Payment
        </Link>
      </div>
    </div>
  );
};

export default Home;
