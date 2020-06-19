import React, { useState } from 'react';

export default () => {
    const [contactMessage, setContactMessage] = useState('');

    const sendContent = (ev) => {
        ev.preventDefault();
        console.log(contactMessage);
        let whastApp = `https://wa.me/593985910098/?text=${encodeURI(contactMessage)}`;
        window.open(whastApp);
        setContactMessage('');
    };

    return (
        <form className="mt-16 text-center" onSubmit={ev => sendContent(ev)}>
            <label htmlFor="conctact-message" className="block text-gray-800 text-sm font-bold mb-2">Cuéntame de esa idea que quieres hacer realidad:</label>
            <div className="flex shadow bg-white rounded p-2 border">
                <textarea name="conctact-message" id="conctact-message" className="flex-1 py-2 px-3 text-gray-800 focus:outline-none focus:outline" onChange={ev => setContactMessage(ev.target.value)} value={contactMessage}> </textarea>
                <button className="btn ml-4" disabled={contactMessage === ''}>Enviar</button>
            </div>
        </form>
    )
}