import React from 'react';
export default (props) => {
    const certificate = props.element;
    return (
        <div className="shadow p-4 bg-white mr-4  flex-shrink-0 mt-2 rounded" style={{width:'200px'}}>
            <h4 className="font-bold">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-blue-200 text-blue-900 p-2 mt-2 radius">
                    Calificación: {certificate.score}
                </span>
            </div>
        </div>

    );
}