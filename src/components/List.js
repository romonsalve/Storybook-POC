import React from 'react';

export default function List(props) {

  const list = props.list.map((element, i) => <li key={i}>{element}</li>);
  return (
    <ol> {list} </ol>
  )
}