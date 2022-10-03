import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/App.css";

const Posts = ({ posts, remove }) => {
  if (!posts.length) {
    return (
      <div style={{ color: "red", fontSize: "24px", textAlign: "center" }}>
        Постов не существует
      </div>
    );
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Список постов</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <PostItem
                remove={remove}
                post={post}
              ></PostItem>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default Posts;
