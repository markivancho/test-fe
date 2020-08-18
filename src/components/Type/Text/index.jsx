import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

const Text = ({ component: Component, children, className, color }) => (
  <Component className={classNames(styles.text, styles[color], className)}>
    {children}
  </Component>
)

Text.defaultProps = {
  component: 'span',
  color: 'black',
}

export default Text
