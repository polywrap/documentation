import Link from '@docusaurus/Link';
import React from 'react';
import "../css/custom.css";

export const NavButton = (props: { to: string, text: string }) => {
  return (
    <Link to={props.to}>
      <button className="tutorial-nav-button">{props.text} ➔</button>
    </Link>
  )
}