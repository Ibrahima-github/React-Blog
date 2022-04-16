import React, { useEffect, useState } from 'react';
import {Card} from '../components/Card';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        fetch(process.env.REACT_APP_API+'posts')
            .then(response => {
                if(response.status === 200){
                   return response.json()
                }
                throw response;
            }    )
            .then(data => {
                console.log(data);
                setPosts(data.reverse());
            })
            .catch(error => {
                console.error(error.message)
            }); 

    }, []);
   

    return(
        <div className="d-flex justify-content-center">
           

            <div className='Card'>
            {posts.map(post=>
            
                        <Card 
                            key={post.PostId}
                            title={post.PostName}
                            category={post.Category}
                            uploaded={post.ArticleUploadDate}
                            description={post.PostDescription}
                            url={post.PostYoutubeHref}
                            adsTitle={post.AdsTitle}
                            adsImageFileName={post.AdsImageFileName}
                            adsLink={post.AdsLink}
                        />
                        )}
            </div>
        </div>
    )
}
export default Posts;