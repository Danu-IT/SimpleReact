import React from "react";

const MySelect = ({ options, defaultName, value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value={defaultName}>
          Выбрать способ сортировки
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MySelect;
