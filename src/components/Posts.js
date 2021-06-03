import React, { useState, useEffect } from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';


function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
        .then(json => setLoading(false))
    }, []);
    
    return (
        <div className="posts">
            {loading && <div className="loading"><img className="rotate" src={logo}/>
             <h2>Loading...</h2></div>}
            <div className="grid">
                { posts.map(post => (
                    <div className="box" data-aos="zoom-in" key={post.id}>
                        <Link to={`post/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </Link>
                    </div>
                )) }
            </div>
        </div>
    )
}
export default Posts
