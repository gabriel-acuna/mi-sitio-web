import React, { useState, useEffect } from 'react';
import Posts from './posts';
import Post from './post';


//   'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz'

export default () => {
    const  [posts, setPosts] = useState([]);

    useEffect(() => {
        const data = sessionStorage.getItem('posts');
        if (data) {
            setPosts(JSON.parse(data));
        }
        let myPosts;
        async function getMediumPost() {
            const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40gabriel.acuna.reg27');
            myPosts = await response.json();
            sessionStorage.setItem('posts', JSON.stringify(myPosts.items));
            setPosts(myPosts.items);
        }
        getMediumPost();
    }
        , []);

    return (
       <div className="max-w-6xl mx-auto overflow-y-scroll">
           { posts.length < 0 && <Posts
            data={posts}
            card={Post}
            title="Mis publicaciones en Medium"
        />}
       </div>

        
    );

}