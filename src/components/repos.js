import React, { useEffect, useState } from 'react';

import Repo from './repo';


export default () => {
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);


    useEffect(() => {
        const data = sessionStorage.getItem('repos');
        let myRepos;
        if (data) {
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1, 13);
            return setRepos(myRepos);
        }
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/gabriel-acuna/repos");
            let myRepos = await response.json();
            setReposCount(myRepos.length);
            sessionStorage.setItem('repos', JSON.stringify(myRepos));
            myRepos = myRepos.slice(1, 10);
            setRepos(myRepos);
        }
        fetchRepos();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="txt-3xl font-bold">Mi trabajo en Open Source</h2>
                <p>Colaboración y contribución de código</p>
            </header>
            <ul className="repost-list">
                {
                    repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/gstef09" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver mas en github {reposCount}
                </a>

            </div>
        </div>);
}
