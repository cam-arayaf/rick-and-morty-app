import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonDefault = ({ validateGetDefaultCharacters, text }) => (
    <Button
        variant="contained"
        onClick={ validateGetDefaultCharacters ? () => validateGetDefaultCharacters() : null }
    >
        { text }
    </Button>
);

ButtonDefault.displayName = 'ButtonDefault';

export default ButtonDefault;