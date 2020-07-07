import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";

const styles = {
    topMessage: {
        fontWeight: 'bold',
        fontFamily: 'auto',
    },
    bottomMessage: {
        textAlign: 'center',
        fontFamily: 'monospace',
        lineHeight: 1,
    }
}

const TopWelcomeMessages = () => {

    return (
        <Grid style={{
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 40,
        }} container item xs direction='column' alignItems='center' alignContent='center'>

            <Typography style={styles.topMessage} variant='h3'>
                WELCOME
            </Typography>

            <Typography variant='subtitle1' style={styles.bottomMessage}>
                Send money directly to <Hidden smUp><br/></Hidden> <b>Fayaz Bin Salam</b>
                <br/>
                First select your country and it will show you list of available options to send the money
            </Typography>
        </Grid>
    );
};

export default TopWelcomeMessages;