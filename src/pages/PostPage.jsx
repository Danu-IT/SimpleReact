import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";

import Loader from "../components/UI/loader/MyLoader";
const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchingPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentId(params.id);
    console.log(response.data);
    setComments(response.data);
  });

  useEffect(() => {
    fetchingPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h3>Комментарии</h3>
      {isComLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {comments.map((comment) => {
            return (
              <div style={{ marginTop: 15 }}>
                <h5>{comment.email}</h5>
                <div>{comment.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostPage;
