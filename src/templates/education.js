import React from 'react';
import { graphql, Link } from 'gatsby';
import EducationNav from '../components/education-nav';
export default (props) => {
    const pageData = props.data.educationJson;
    return (
        <div>
            <header className="py-12 border-blue-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                <Link className="uppercase inline-block text-green-400 underline" to="/">Regresar al inicio</Link>

                    <h2 className="capitaliza text-6xl font-bold capitalize">{pageData.title}</h2>
                   
                    <p className="text-gray-800 text-xl">{pageData.description}</p>
                </div>

            </header>
            <ul>
                {
                    pageData.items.map((item, index) => (
                        <li className="bg-white shadow mt-4 flex" key={index}>
                            <p className="vertical-text">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1 justify-around">
                                    <h3>{item.name}</h3>
                                    {
                                        item.degree && <span className="inline-block bg-purple-200 text-purple-700 p-2 mx-2">{item.degree}</span>

                                    }
                                    {
                                        item.platform && <span className="inline-block bg-purple-200 text-purple-700 p-2 mx-2">{item.platform }</span>

                                    }
                                    {
                                         item.mention && <span className="float bg-gray-300 text-gray-700 p-2 mx-2">Especialización: {item.mention}</span>
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <EducationNav/>
        </div>
       
   );
}
export const query = graphql`
    query($slug:String){
        educationJson(slug: { eq: $slug }){
            title
            description
            slug
            items{
                name
                degree
                mention
                platform

            }
        }
    }
`;