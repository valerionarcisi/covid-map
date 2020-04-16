import React from 'react';
import { createUseStyles } from 'react-jss';
import useFetchProvsAndSaveToRedux from './api/useFetchProvsAndSaveToRedux';

const useStyles = createUseStyles({
  myDiv: {
    backgroundColor: 'green',
    width: 200,
    height: 200,
  },
});

function App() {
  const classes = useStyles();
  const doFetchProvsAndSaveToRedux = useFetchProvsAndSaveToRedux();
  doFetchProvsAndSaveToRedux();

  return <div className={classes.myDiv} />;
}

export default App;
