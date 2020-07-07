import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
    avatar: {
        height: 80,
        width: 80
    },
    desc: {
        whiteSpace: 'pre-line'
    }
}

const OurListItem = (props) => {
    const {item} = props
    return (
        <Grid style={{marginBottom: 4}} item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Paper elevation={4} style={{height: 'auto', padding: 16}}>
                <Grid container direction='column' justify='center' alignContent='center' alignItems='center'>
                    <Avatar variant='square' style={styles.avatar}
                            src={item.logo}></Avatar>

                    <Grid container direction='column' justify='flex-start'
                          alignContent='flex-start'
                          alignItems='flex-start'>
                        <Typography style={styles.desc} variant='body2'>{item.desc || item.link}</Typography>
                    </Grid>
                    <Button style={{marginTop: 16}} target="_blank"
                            href={item.link} variant='outlined' color='primary'>Go to {item.title}</Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default OurListItem;