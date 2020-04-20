import React, { createContext, useState, useEffect } from 'react';
import { getAllCharacters, getCharactersByName } from './../constants';

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [currentQName, setCurrentQName] = useState('');
    const [text, setText] = useState('');
    const [characters, setCharacters] = useState([]);
    const [pages, setPages] = useState();
    const [currentQPage, setCurrentQPage] = useState(1);
    const errorMessage = 'Internal server error. Please try again';

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getDefaultCharacters(), []);

    const thenFetch = (data, q_page) => {
        setText(data.results ? 'Characters' : 'No Results');
        setDoneFetch(true);
        setCharacters(data.results ? data.results : []);
        setPages(data.info && data.info.pages && data.info.pages);
        setCurrentQPage(q_page || 1);
    }

    const catchFetch = () => {
        setText(errorMessage);
        setDoneFetch(true);
        setCharacters([]);
        setPages();
        setCurrentQPage(1);
    }

    const getDefaultCharacters = q_page => {
		fetch(getAllCharacters(q_page))
			.then(res => res.json())
            .then(data => {
                setCurrentQName('');
                thenFetch(data, q_page);
            })
            .catch(() => {
                setCurrentQName('');
                catchFetch();
            });
        setDoneFetch(false);
    }

    const getCharacters = (q_name, q_page) => {
        fetch(getCharactersByName(q_name, q_page))
			.then(res => res.json())
			.then(data => thenFetch(data, q_page))
            .catch(() => catchFetch());
            setDoneFetch(false);
    }

    const validateGetDefaultCharacters = () => (currentQName !== '' || currentQPage !== 1) && getDefaultCharacters();

    const validateQCharacter = (e, q_name = document.querySelector('#q_name').value.toLowerCase().trim()) => {
        if (e.type === 'keypress' && e.key !== 'Enter') return;
        const words = q_name.match(/\w+/g);
        q_name = words && words.join(' ');
        if (q_name && q_name !== currentQName) {
            setCurrentQName(q_name);
            getCharacters(q_name);
        }
    }

    const changePage = page => {
        page = page ? Number(page) : currentQPage;
        if (currentQPage === page) return;
        setCurrentQPage(page);
        currentQName !== '' ? getCharacters(currentQName, page) : getDefaultCharacters(page);
    }

    return (
        <CharactersContext.Provider value={{
            validateGetDefaultCharacters,
            validateQCharacter,
            doneFetch,
            characters,
            text,
            pages,
            changePage,
            currentQPage
        }}>
            { children }
        </CharactersContext.Provider>
    );
};

export default CharactersContextProvider;