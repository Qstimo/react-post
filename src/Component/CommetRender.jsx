import React from 'react';

import Comment from './Comment/Comment';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css';

function CommetRender({ items, removeComments }) {
  if (items.length === 0) {
    return <h3 style={{ textAlign: 'center' }}>Комментрарии отсутсвуют:(</h3>;
  }
  return (
    <div>
      <TransitionGroup>
        {items.map((item, id) => (
          <CSSTransition classNames="item" key={item.id} timeout={500}>
            <Comment removeComments={removeComments} {...item} number={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default CommetRender;
