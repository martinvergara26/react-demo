import React from 'react';
import Menu from '../../components/Menu'

export default function Layout (props) {

    return [
      <Menu key={'menu'}
        title={props.title}
      />,
      props.children
    ]

}