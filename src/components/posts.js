import React, {Fragment} from 'react';
export default (props)=>(
    <Fragment>
         <h2 className="text-3xl font-bold text-center mt-12">{props.title}</h2>
                    <div className="flex mt-8 mx-20 relative overflow-x-auto">
                        {
                            props.data.map((el,i) => (
                               
                                <props.card element={el} key={i}/>
                            )
                            )
                        }
                    </div>
    </Fragment>
)