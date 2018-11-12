import React, { Component } from 'react';
import Collapsible from './Collapsible';
import styles from './List.scss';

export default function List(props) {
  const name1 = props.items[0].name;
  const item1 = props.items[0].items[0].name;
  const item2 = props.items[0].items[1].name;
  const name2 = props.items[1].name;
  const item3 = props.items[1].items[0].name;
  const name3 = props.items[2].name;
  const item4 = props.items[2].items[0].name;
  const item5 = props.items[2].items[1].name;
  const item6 = props.items[2].items[2].name;
//Dynamic rendering code 
  // const newList = props.items.map((list) => {
  //   const newSubList = list.items.map((subItem) => {
  //      <li key={subItem.uniqueId}> {subItem.name} </li>
  //   }); 
  //   return (
  //     <div>
  //       <p> {list.name} </p>
  //       <ul key={list.uniqueId}>
  //         {newSubList}
  //       </ul>
  //     </div>
  //   );
  // });


  return (
    <div>
      <Collapsible title = {name1}>
        <p>{item1}</p>
        <p>{item2}</p>
      </Collapsible>
      <Collapsible title = {name2}>
        <p>{item3}</p>
      </Collapsible>
      <Collapsible title = {name3}>
        <p>{item4}</p>
        <p>{item5}</p>
        <p>{item6}</p>
      </Collapsible>


      {/* <p className ="panel-heading">{name1}</p>
      <div className ="panel-collapse">
        <p>{item1}</p>
        <p>{item2}</p>
      </div>
      <p className ="panel-heading">{name2}</p>
      <div className ="panel-collapse">
        <p>{item3}</p>
      </div>
      <p className ="panel-heading">{name3}</p>
      <div className ="panel-collapse">
        <p>{item4}</p>
        <p>{item5}</p>
        <p>{item6}</p>
      </div> */}
      {/* {newList} */}
    </div>
  );
}
