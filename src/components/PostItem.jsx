import React from 'react'
import MyButton from './UI/button/MyButton'
import {useNavigate} from 'react-router-dom'

const PostItem = ({post, remove}) => {
    const navigate = useNavigate();

    const removePost = () => {
        remove(post)
    }

  return (
        <div className="post">
            <div className="post__container">
                <strong>{post.id}. {post.title}</strong>
                <div className="">
                    {post.body}
                </div>
            </div>
            <div style={{display: 'flex'}}>
            <MyButton onClick={removePost}>Удалить</MyButton>
            <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
            </div>
        </div>
  )
}

export default PostItem