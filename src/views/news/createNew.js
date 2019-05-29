import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { Editor } from '@tinymce/tinymce-react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    input: {
        display: 'none',
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    media: {
        maxHeight: 500,
        minHeight: 300,
        maxWidth: 500,
        minWidth: 300,
    },
}));

function CreateNew(props) {
    const classes = useStyles();
    const [title, setTitle] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [photo, setPhoto] = React.useState(null);

    const titleChange = (e) => {
        setTitle(e.target.getContent())
        console.log(e.target.getContent());
    }

    const descriptionChange = (e) => {
        setDescription(e.target.getContent())
        console.log(e.target.getContent());
    }

    const photoChange = (event) => {
        setPhoto(event.target.value);
        console.log(photo);
    }

    const name = () => {
        let photo_ = (photo != null) ? photo.split('/')[2] : null;
        return photo_
    }

    return (
      <div className={classes.root}>
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <h4> Title: </h4>
                        <Editor onChange={titleChange} initialValue={title}/>
                    </Grid>
                    <Grid item xs={12}>
                        <h4> Description: </h4>
                        <Editor onChange={descriptionChange} initialValue={description}/>
                    </Grid>
                    <Grid item xs={12}>
                        <h4> Photo: {photo}</h4>
                        <input
                            accept="image/*"
                            id="text-button-file"
                            type="file"
                            className={classes.input}
                            onChange={photoChange}
                        />
                        <label htmlFor="text-button-file">
                            <Button component="span" variant="contained" color="primary" className={classes.button}>
                                <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                                Upload
                            </Button>
                        </label>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
      </div>
    );
  }

export default CreateNew;
