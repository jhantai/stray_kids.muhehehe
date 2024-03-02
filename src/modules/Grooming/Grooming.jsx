import React from 'react';
import Button from "../../components/button/Button";
import CallIcon from '@mui/icons-material/Call';

function Grooming(props) {
    const color = ''
    return (
        <section>
            <h2>Уход</h2>
            <div>
                <div></div>
                <div>
                    <h3>Все наши животные чистые и ухоженные!</h3>
                    <p></p>
                    <Button
                        color = '#41EAC1'
                        value ={`#{CallIcon}`}
                    />
                </div>
            </div>
        </section>
    );
}

export default Grooming;