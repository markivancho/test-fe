import React, { useContext } from 'react'

import Heading from '../../components/Type/Heading'
import DataContext from '../../utils/DataContext'

import styles from '../../styles.module.css'
import { Redirect } from 'react-router-dom'

const Result = () => {
  const [data] = useContext(DataContext)

  if (!data.first_name) return <Redirect to="/test-fe" />

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        alt=""
        src="https://i.imgur.com/m5eaZf6.png"
      />
      <Heading>
        {`Thanks for Your Answers, ${data.first_name} ${data.last_name}. We Will Call You at ${data.phone} Within 24 Hours`}
      </Heading>
    </div>
  )
}

export default Result
