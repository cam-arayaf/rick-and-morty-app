import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Message from './../Common/Message';
import ButtonDefault from './../Common/ButtonDefault';

const NotFound = () => (
    <Fragment>
        <Message text="404: URL Not Found" />
        <Link className="buttonPrimary" to="/">
            <ButtonDefault text="Go Back" />
        </Link>
    </Fragment>
);

NotFound.displayName = 'NotFound';

export default NotFound;