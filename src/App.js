import React from 'react';
import MainRoute from "./routes/MainRoute";
import Header from "./modules/Header/Header";
import Footer from './modules/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <MainRoute />
            <Footer/>
        </div>
    );
};

export default App;