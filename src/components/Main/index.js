import React, { Fragment, useContext } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { CharactersContext } from './../../contexts/CharactersContext';
import SearchCharacters from './SearchCharacters';
import Characters from './Characters';
import ProgressBar from './../Common/ProgressBar';
import Message from './../Common/Message';

const Main = () => {
    const {
        validateGetDefaultCharacters,
        validateQCharacter,
        doneFetch,
        characters,
        text,
        pages,
        changePage,
        currentQPage
    } = useContext(CharactersContext);
    return (
        <Fragment>
            <SearchCharacters
                validateGetDefaultCharacters={ validateGetDefaultCharacters }
                validateQCharacter={ validateQCharacter }
            />
            {
                doneFetch ?
                    (characters.length ? <Characters text={ text } characters={ characters } /> : <Message text={ text } />)
                :
                    <ProgressBar />
            }
            {
                doneFetch && pages &&
                    <Pagination
                        hidePrevButton
                        hideNextButton
                        count={ pages }
                        page={ currentQPage }
                        onClick={ e => changePage(e.target.innerText) }
                    />
            }
        </Fragment>
    );
}

Main.displayName = 'Main';

export default Main;