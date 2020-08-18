import React from 'react'
import classNames from 'classnames'

import Text from '../Text'

import styles from './styles.module.css'

const Paragraph = ({ children, className, ...props }) => (
  <Text
    {...props}
    className={classNames(styles.paragraph, className)}
    component="p"
  >
    {children}
  </Text>
)

export default Paragraph
