import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../img/error/error.svg';
import Button from '../ui/Button';
export default function Error() {
    const navigate = useNavigate();
    return (
        <>
            <div className='error'>
                <div className='container'>
                    <div className='error__inner'>
                        <div><img className='error__img' src={error} /></div>
                        <div><p className='error__text'>
                            Запрашиваемая страница не найдена
                        </p></div>
                        <div onClick={() => navigate('/')}><Button text='Вернуться на главную страницу' /></div>
                    </div>
                </div>
            </div>
        </>
    )
}