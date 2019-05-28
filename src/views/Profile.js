import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import red from '@material-ui/core/colors/red';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PersonalData from './PersonalData'
import SlideReact from './SlideReact';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  media: {
    maxHeight: 500,
    minHeight: 300,
  },
  avatar: {
    backgroundColor: red[500],
  },  
});

function FullWidthGrid(props) {
  const { classes } = props;
  const [values, setValues] = React.useState({
    amount: '',
  });

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://files.gamebanana.com/img/ss/wares/57031b385348a.jpg"
                  title="Contemplative Reptile"
                />
                <List>
                  <ListItem>
                    <ListItemText primary="Juanse1080"/>
                  </ListItem>
                </List>
              </CardActionArea>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <PersonalData></PersonalData>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SlideReact></SlideReact>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);