import React from 'react';

export default (props) => (
    <li className="flex">
        <div className="w-10/12 mt-2">
            <h4 className="text-red-800 fond-bold mt-2"> {props.repo.name}</h4>
            <p className="text-sm text-gray-800  truncate" style={{ height: '1.3em' }}>{props.repo.description}</p>
        </div>
        <div className="flex-1 text-right text-indigo-500">
            <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">Ver</a>

        </div> 
    </li>
)
