import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import unknown from './../../assets/img/unknown.png';

const Character = ({ name, status, species, type, gender, image }) => (
    <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
        <Paper className="defaultPaper">
            <img alt="name" src={ image ? image : unknown } />
            <h3>{ name ? name : 'Unknown' }</h3>
            <ul>
                <li>
                    <strong>Status: </strong>
                    <span>{ !status || status === 'unknown' ? 'Unknown' : status }</span>
                </li>
                <li>
                    <strong>Species: </strong>
                    <span>{ species ? species : 'Unknown' }</span>
                </li>
                <li>
                    <strong>Type: </strong>
                    <span>{ type ? type : 'Unknown' }</span>
                </li>
                <li>
                    <strong>Gender: </strong>
                    <span>{ gender ? gender : 'Unknown' }</span>
                </li>
            </ul>
        </Paper>
    </Grid>
);

Character.displayName = 'Character';

export default Character;