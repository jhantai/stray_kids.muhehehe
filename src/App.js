import React from 'react';
import MainRoute from "./routes/MainRoute";
import Header from "./modules/Header/Header";

const App = () => {
    return (
        <div>
            <Header />
            <MainRoute />
        </div>
    );
};

export default App;