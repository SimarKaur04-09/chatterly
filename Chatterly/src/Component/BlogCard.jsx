import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import girlImage from './girls.jpeg'; 
import Image from './blog.jpeg'// Import locally stored image

const BlogCard = () => {
    const [isLiked, setIsLiked] = useState({});
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((data) => data.json())
          .then((data) => setData(data));
      }, []);
    
    
    const handleLike = (id) => {
        setIsLiked(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ml-4 mr-4">
            {data.map(item => (
                <div key={item.id} className="bg-blue-100 p-4 shadow-xl rounded-md">
                    <Link to={`/blog/${item.id}`} className="text-black">
                        {/* Use locally stored image */}
                        <img src={item.image} alt="Girl" className=" h-[300px] w-[300px] border-4 border-purple-950 justify-center items-center mt-2 mx-auto mb-2" />
                        <h1 className="font-serif font-bold text-center">{item.title}</h1>
                    </Link>
                    <hr />
                    <div className="flex justify-between items-center">
                        <div>
                            {/* Similarly, use locally stored author image */}
                            <img className="rounded-full h-12 w-12 border border-purple-600" src={girlImage} alt="Author" />
                        </div>
                        <div>
                            <p>{item.author}</p>
                            <p>{item.date}</p>
                        </div>
                        <div>
                            <p className="text-center" onClick={() => handleLike(item.id)}>
                                {isLiked[item.id] ? <i className="fas fa-heart text-red-700"></i> :
                                    <i className="far fa-heart"></i>}
                            </p>
                        </div>
                        <div>
                            <i className="far fa-comment-dots">12</i>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogCard;
