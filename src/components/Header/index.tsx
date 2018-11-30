import React, { SFC } from 'react';
import { Link } from 'gatsby';

import * as styles from './header.module.scss';

export interface HeaderProps {
  siteTitle: string
  value: number
}

const Header: SFC<HeaderProps> = (props) => (

  <div
    className={styles['headerWrapper']}
  >
    <div
      className={styles['inner']}
    >
      <h1>
        <Link
          to="/"
        >
          {props.siteTitle}
        </Link>
        <p>{props.value}</p>
      </h1>
    </div>
  </div>
)

Header.defaultProps = {
  siteTitle: 'this is default prop',
  value: 42
}

export default Header;
