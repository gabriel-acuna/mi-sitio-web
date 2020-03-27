import React from 'react';
export default (props) => {
    const course = props.element;
    return (
        <div className="shadow p-4 bg-white mr-4  flex-shrink-0 mt-8 rounded" style={{width:'200px'}}>
            <h4 className="font-bold">
                <a href="{course.url}">{course.title}</a>
            </h4>
            <div className="text-center">
                <span className="inline-block bg-blue-200 text-blue-900 p-2 mt-2 radius">
                    Progreso: {course.progress}
                </span>
            </div>
        </div>
    );
}