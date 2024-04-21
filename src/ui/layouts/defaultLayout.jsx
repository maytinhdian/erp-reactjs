import React from 'react';
import Header from '../headers/Header';

import Footer from '../footers/Footer';
import MainContent from '../mainContents/MainContent';

function defaultLayout(props) {
    return (
        <>
            Default Layout
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    );
}

export default defaultLayout;