import { h } from 'start-dom-jsx';

const FeedItem = (title = 'title', body = 'body') => {
  return(
      <div class='box animate__animated animate__slideInLeft' style='width: 100%;'>
        <div class='content'>
          <h3 style='text-align: center; margin-bottom: 0;'>{title}</h3>
          <p style='text-align: center; margin-bottom: 0;'>{body}</p>
        </div>
        <button name='deletebutton' class='button is-warning'>Delete</button>
      </div>
  )
}

export default FeedItem
