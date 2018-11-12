import React, { Component } from 'react';

import styles from './List.scss';

export default function List(props) {
  const name = props.items[0].name;
  const item = props.items[0].items[0].name;
  const item2 = props.items[0].items[1].name;

  const newList = props.items.map((list) => {
    const newSubList = list.items.map((subItem) => {
       <li key={subItem.uniqueId}> {subItem.name} </li>
    }); 
    return (
      <div>
        <p> {list.name} </p>
        <ul key={list.uniqueId}>
          {newSubList}
        </ul>
      </div>
    );
  });


  return (
    <div>
      {/* <div>{name}</div>
      <div>{item}</div>
      <div>{item2}</div> */}
      {newList}

    </div>
  );
}
