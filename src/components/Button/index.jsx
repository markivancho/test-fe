import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

const Button = ({ type, children, className, ...props }) => (
  <button
    {...props}
    className={classNames(styles.button, className)}
    type={type}
  >
    {children}
  </button>
)

Button.defaultProps = {
  type: 'button',
}

export default Button
