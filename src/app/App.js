import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myDiv: {
    backgroundColor: 'green',
    width: 200,
    height: 200,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.myDiv} />
  );
}

export default App;
