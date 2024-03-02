import React from 'react';
import Button from "../../components/button/Button";

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
                    />
                </div>
            </div>
        </section>
    );
}

export default Grooming;