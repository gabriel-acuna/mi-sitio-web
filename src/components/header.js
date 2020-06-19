import React from 'react';
import ilustration from '../images/undraw_code_review_l1q9.svg';
import ContactForm from './contact-form';

export default () => (
    <header className="bg-blue-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">¡Hola! Soy Gabriel</h1>
                    <p className="text-xl font-light">Soy desarrolldor FullStack</p>
                </div>
                <img src={ilustration} alt="review code" style={{ width: '60%' }}></img>

            </div>
            <div>

                <ContactForm />
            </div>
        </div>

    </header>
)