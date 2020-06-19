import React from 'react'; 


export default (props) => { 

    return (
        <div className='flex justify-center bg-gray-300 mt-40 p-10 mx-20 shadow-inner shadow-lg rounded-md'>
            <div className='w-full mt-6'>
             <p className='bold text-purple-600 text-center' style={{fontSize:'80px'}}>
                 404
             </p>
             <p className='text-center text-indigo-600 text-xs'>
                 Página no encontrada
             </p>
            </div>
            
        </div>
    )
}