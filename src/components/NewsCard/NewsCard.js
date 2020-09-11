import React from 'react';
import {Card,CardActions, CardActionArea,CardContent,CardMedia,Button,Typography } from '@material-ui/core';
import useStyles from './styles.js';
// import classnames from 'classnames';

const NewsCard=({article:{description,publishedAt,source,title,url,urlToImage},i})=>{
    const classes =useStyles();

    return(
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage ||'https://www.google.com/search?q=news+image+png&rlz=1C5CHFA_enIN893IN893&sxsrf=ALeKk0305ELrGBVEqoTaq7s3fDV8b4g8mw:1597749599564&source=lnms&tbm=isch&sa=X&ved=2ahUKEwilvMmK0aTrAhVKaCsKHfY1AMEQ_AUoAXoECAwQAw&biw=1440&bih=821#imgrc=UZGsFxT88DsYQM'}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                 <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <button size="small" color="primary">Learn More</button>
            <Typography variant="body2" color="textsecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    );
}

export default NewsCard;