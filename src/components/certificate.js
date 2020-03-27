import React from 'react';
export default (props) => {
    const certificate = props.element;
    return (
        <div className="shadow p-4 bg-white mr-4 rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mt-4">
            <h4 className="font-bold">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-blue-200 text-blue-900 p-2 mt-2 radius">
                    Calificación: {certificate.score}
                </span>
            </div>
        </div>

    );
}