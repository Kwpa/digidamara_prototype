import { h } from 'start-dom-jsx';

const Modal = () => {
  return(
    <div id="modalContainer" style="width: 100%; height: 100%;">
      <div id="modal1" class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button id="modalClose" class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">

          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button id="modalClose" class="button">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Modal
