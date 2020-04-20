import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ButtonDefault from './../Common/ButtonDefault';

const SearchCharacters = ({ validateGetDefaultCharacters, validateQCharacter }) => (
    <Paper className="paper defaultPaper">
        <TextField
            id="q_name"
            label="Character"
            margin="normal"
            variant="outlined"
            onKeyPress={ e => validateQCharacter(e) }
        />
        <IconButton onClick={ e => validateQCharacter(e) }>
            <SearchIcon />
        </IconButton>
        <ButtonDefault
            validateGetDefaultCharacters={ validateGetDefaultCharacters }
            text="Reset Search"
        />
    </Paper>
);

SearchCharacters.displayName = 'SearchCharacters';

export default SearchCharacters;