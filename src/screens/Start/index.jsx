import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../components/Type/Heading";
import Button from "../../components/Button";
import Image from "../../components/Image";

import styles from "../../styles.module.css";

const Start = () => (
  <div className={styles.container}>
    <Image
      className={styles.img}
      alt=""
      src="https://i.imgur.com/B7w65Fa.png"
    />
    <Heading>Please answer a few questions</Heading>
    <Link to="/questions">
      <Button>Start</Button>
    </Link>
  </div>
);

export default Start;
