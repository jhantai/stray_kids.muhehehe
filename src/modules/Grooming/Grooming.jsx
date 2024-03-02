import React from 'react';
import './Grooming.css'
import Button from "../../components/button/Button";
import CallIcon from '@mui/icons-material/Call';

function Grooming(props) {
    const color = ''
    return (
        <section className={'groomingSection'}>
            <h2>Уход</h2>
            <div className={'groomingText'}>
                <div>
                    <h3>Все наши животные чистые и ухоженные!</h3>
                    <p>
                        В нашем кафе мы особенно заботимся о наших пушистых друзьях! Регулярные визиты к ветеринару,
                        проверки на наличие блох и вшей - это лишь малая часть нашей заботы. Мы стремимся создать для
                        них максимально комфортные условия, чтобы каждый гость чувствовал себя как дома. Ведь их радость
                        и благополучие - наш приоритет
                    </p>
                </div>
                <div className={'groomingPhoto'}></div>
            </div>
        </section>
    );
}

export default Grooming;