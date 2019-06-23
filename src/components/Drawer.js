import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>       
          <ListItem button >
            <ListItemText primary='Projects'
              onClick={ function() { 
                window.location.assign("https://paulof.dev/Projects");}
            }/>
          </ListItem>

          <ListItem button >
            <ListItemText primary='Links'
              onClick={ function() { 
                window.location.assign("https://paulof.dev/Links");}
            }/>
          </ListItem>

          <ListItem button >
            <ListItemText primary='Resume'
              onClick={ function() { 
                window.location.assign("https://paulof.dev/Resume");}
            }/>
          </ListItem>
      </List>

               
              
    </div>
  );

  // const fullList = side => (
  //   <div
  //     className={classes.fullList}
  //     role="presentation"
  //     onClick={toggleDrawer(side, false)}
  //     onKeyDown={toggleDrawer(side, false)}
  //   >
  //     <List>
  //       {['Projects', 'Links', 'Resume'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemText primary={text} secondary={index} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>
        <span class="material-icons">v</span>
      </Button> 
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div> 
  );
}