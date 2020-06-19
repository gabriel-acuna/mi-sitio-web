import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Posts from './posts';
import Certificate from './certificate';
import Course from './course';
export default () => {

    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
          data {
            certificates {
              title
              score
              code
            }
            courses {
              progress
              title
              url
            }
          }
        }
      }`);
      
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts data={data.codigofacilitoJson.data.certificates}
                        title="Mis certificados on line en Código Facilito"
                        card={Certificate} />

                    


                </div>
                <div className="max-w-4xl mx-auto mb-2">
                <Posts data={data.codigofacilitoJson.data.courses}
                        title="Mis cursos en Código Facilito"
                        card={Course} />

                </div>
            </div>
          
        </section>
    );
}