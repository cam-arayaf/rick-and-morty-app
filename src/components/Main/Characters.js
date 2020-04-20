import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Character from './Character';
import Message from './../Common/Message';

const Characters = ({ characters, text }) => (
    <Fragment>
        <Message text={ text }/>
        <div className="root">
            <Grid container spacing={ 3 } justify="center">
                {
                    characters.map(character => {
                        const {
                            id,
                            name,
                            status,
                            species,
                            type,
                            gender,
                            image
                        } = character;
                        return (
                            <Character
                                key={ id }
                                name={ name }
                                status={ status }
                                species={ species }
                                type={ type }
                                gender={ gender }
                                image={ image }
                            />
                        );
                    })
                }
            </Grid>
        </div>
    </Fragment>
);

Characters.displayName = 'Characters';

export default Characters;