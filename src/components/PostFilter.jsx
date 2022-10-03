import React from "react";

import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect"

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.search}
        onChange={(e) => setFilter({...filter, search: e.target.value})}
        placeholder="Поиск..."
      ></MyInput>
      <MySelect
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        defaultName="Сортировка по"
        value={filter.sort}
        onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
      ></MySelect>
    </div>
  );
};

export default PostFilter;
