const base_url = 'https://rickandmortyapi.com/api/character';
export const getAllCharacters = (q_page = '1') => `${ base_url }?page=${ q_page }`;
export const getCharactersByName = (q_name, q_page = '1') => `${ base_url }?name=${ q_name }&page=${ q_page }`;