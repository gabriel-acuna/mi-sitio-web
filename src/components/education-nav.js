import React from 'react';
import { useStaticQuery, graphql,Link } from 'gatsby';

export default (props) => {
    const data = useStaticQuery(graphql`{
        allEducationJson{
          edges{
            node{
              slug
              description
              title
              
            }
          }
        }
      }`);
    return (
        <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center">Conoce sobre mi fromación educativa</h2>
            <nav className="flex flex-wrap flex-row-reverse mt-8">
                {
                    data.allEducationJson.edges.map(
                        (element, index) => {
                            const { node } = element;
                            return (
                                <article className="flex-1 bg-white shadow m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4" key={index}>
                                    <header>
                                        <p className="font-bold leading-loose text-left">{node.title}</p>
                                        <div className="mt-8">
                                            <p className="font-light  text-left">{node.description}</p>
                                            <Link className="btn inline-block mt-4 float-right" to={`/${node.slug}`}> Ver</Link>
                                        </div>
                                       
                                    </header>
                                </article>
                            );
                        }

                    )
                }
            </nav>
        </div>
    );

}