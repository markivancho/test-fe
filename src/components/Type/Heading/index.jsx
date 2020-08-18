import React from 'react'
import classNames from 'classnames'

import Text from '../Text'

import styles from './styles.module.css'

const Heading = ({ children, level, ...props }) => (
  <Text
    {...props}
    component={level}
    className={classNames(styles.heading, styles[level])}
  >
    {children}
  </Text>
)

Heading.defaultProps = {
  level: 'h2',
}

export default Heading
