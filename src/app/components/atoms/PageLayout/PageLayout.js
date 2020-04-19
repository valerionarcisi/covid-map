import React from 'react';
import pt from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
});

function PageLayout({ children, className, ...others }) {
  const classes = useStyles();

  return <div className={clsx(classes.root, className)}>{children}</div>;
}

PageLayout.propTypes = {
  children: pt.node.isRequired,
  className: pt.string,
};

export default PageLayout;
