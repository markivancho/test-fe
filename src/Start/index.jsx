import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../components/Type/Heading'
import Button from '../components/Button'

import styles from './styles.module.css'

const Start = () => (
  <>
    <img
      className={styles.img}
      alt=""
      src="https://i.imgur.com/B7w65Fa.png"
    ></img>
    <Heading>Please answer a few questions</Heading>
    <Link to="/test-fe/step2">
      <Button>Start</Button>
    </Link>
  </>
)

export default Start
