import React from 'react'

import Logo from '../components/svg/Logo'
import Paragraph from '../components/Type/Paragraph'

import styles from './styles.module.css'

const Header = () => (
  <header className={styles.wrap}>
    <div className={styles.center}>
      <Logo />
    </div>
    <div className={styles.info}>
      <div className={styles.phone}>
        <Paragraph>
          Call an insurance agent at{' '}
          <a className={styles.underline} href="tel:(877) 507-6722">
            (877) 507-6722
          </a>
        </Paragraph>
      </div>
      <Paragraph color="grey">Working hours: 9AM - 5PM (EST)</Paragraph>
    </div>
  </header>
)

export default Header
