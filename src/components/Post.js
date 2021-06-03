import React, { useState, useEffect } from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';


function Post({ match }) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.pid}`)
        .then(response => response.json())
        .then(json => setPost(json))
        .then(json => setLoading(false))
        
    }, []);
    
    return (
        <div className="posts">
            <div className="post-container">
                {loading && <div className="loading"><img className="rotate" src={logo}/>
                <h2>Loading...</h2></div>}

                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export default Post
