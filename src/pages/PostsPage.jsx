import React, { useState } from "react";
import "../styles/App.css";

import Posts from "../components/Posts";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";

import { usePosts } from "../hooks/usePosts";
import { useEffect } from "react";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import MyPagination from "../components/UI/pagination/MyPagination";

function PostsPage (){
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.search); // хук с поиском и сортировкой

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchingPost, isPostLoading, error] = useFetching(async () => {
    // Хук для отображение загрузки и ошибки
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchingPost();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setVisibleModal(true)}>Создать пост</MyButton>
      <MyModal visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      {error && <h1>Проищошла ошибка ${error}</h1>}
      {isPostLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MyLoader></MyLoader>
        </div>
      ) : (
        <Posts remove={removePost} posts={sortedAndSearchPosts}></Posts>
      )}
      <MyPagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      ></MyPagination>
    </div>
  );
}

export default PostsPage;
