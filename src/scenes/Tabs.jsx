import { h } from 'start-dom-jsx';
import 'bulma/css/bulma.min.css';

const Tabs = () => {
  return(
    <div id="tabs-with-content">
      <div class="tabs is-centered is-boxed is-fullwidth is-toggle">
        <ul>
          <li>Game</li>
          <li>Info</li>
        </ul>
      </div>
      <div>
        <section class="tab-content">Game here</section>
        <section class="tab-content">Info here</section>
      </div>
    </div>
  )
}

export default Tabs
