import { h } from 'start-dom-jsx';


const Panel = (text = 'Todo', coupleID = 'A + B') => {
  return(
    <div>
      <div class='section'>

        <div class='content' >
          <h1 class='has-text-white'>Digidamara Prototype Larger Larger Larger Larger larger Larger</h1>
        </div>

        <div class='level'>
          <div class='level-left'></div>
          <div class='level-right'>
            <div class='level-item'>
              <div class='field'>
                <div class='control'>
                  <input name="emailField" class="input" type="email" placeholder="Email"></input>
                </div>
              </div>
            </div>
            <div class='level-item'>
              <div class='field'>
                <div class='control'>
                  <input name="passwordField" class="input" type="password" placeholder="Password"></input>
                </div>
              </div>
            </div>
            <div class='level-item'>
              <div class='field'>
                <div class='control'>
                  <button name='loginButton' class="button is-primary">Login</button>
                </div>
              </div>
            </div>
            <div class='level-item'>
              <div class='field'>
                <div class='control'>
                  <button class="button is-info">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="level">
          <div class="level-item has-text-centered">
            <div id="clicksBox" class="notification is-warning">
              <p class="title">Clicks</p>
              <p id="clicksText" class="title">0</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div id="fameBox" class="notification is-warning">
              <p class="title">Entropy</p>
              <p id="fameText" class="title">0</p>
            </div>
          </div>
        </div>

      </div>

      <div class='columns'>
        <div class='column is-two-thirds'>
          <div class='box' style="min-height: 400px;">
            <table class='table'>
              <tbody>
                <tr>
                  <td>
                    <figure class='image'>
                      <progress class='progress is-large' value='65' max='100'></progress>
                      <img id="team" src="https://i.pinimg.com/originals/08/d6/32/08d632c6672e852506b78bb22e23b25f.gif" class='heartbeat'></img>

                    </figure>
                    <div id="teamName" class="level">
                      <div class="level-item mx-0">
                        <span class="icon is-large has-text-info">
                          <i class="fas fa-star fa-2x"></i>
                        </span>
                      </div>
                      <div class="level-item mx-0">
                        <div class="title" style="text-align: center;">Team A</div>
                      </div>
                      <div class="level-item mx-0">
                        <span class="icon is-large has-text-info">
                          <i class="fas fa-star fa-2x"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <figure class='image'>
                      <progress class='progress is-large' value='25' max='100'></progress>
                      <img id="team" src="https://i.pinimg.com/originals/08/d6/32/08d632c6672e852506b78bb22e23b25f.gif"></img>

                    </figure>
                    <div id="teamName" class="level">
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                      <div class="level-item mx-0">
                        <div class="title" style="text-align: center;">Team B</div>
                      </div>
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <figure class='image'>
                      <progress class='progress is-large' value='5' max='100'></progress>
                      <img id="team" src="https://i.pinimg.com/originals/08/d6/32/08d632c6672e852506b78bb22e23b25f.gif" class='heartbeat'></img>

                    </figure>
                    <div id="teamName" class="level">
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                      <div class="level-item mx-0">
                        <div class="title" style="text-align: center;">Team C</div>
                      </div>
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure class='image'>
                      <progress class='progress is-large' value='75' max='100'></progress>
                      <img id="team" src="https://i.pinimg.com/originals/08/d6/32/08d632c6672e852506b78bb22e23b25f.gif" class='pulse'></img>

                    </figure>
                    <div id="teamName" class="level">
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                      <div class="level-item mx-0">
                        <div class="title" style="text-align: center;">Team D</div>
                      </div>
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <figure class='image'>
                      <progress class='progress is-large' value='100' max='100'></progress>
                      <img id="team" src="https://i.pinimg.com/originals/08/d6/32/08d632c6672e852506b78bb22e23b25f.gif" class='pulse'></img>

                    </figure>
                    <div id="teamName" class="level">
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                      <div class="level-item mx-0">
                        <div class="title" style="text-align: center;">Team E</div>
                      </div>
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <figure class='image'>
                      <progress class='progress is-large' value='20' max='100'></progress>
                      <img id="team" src="https://i.pinimg.com/originals/08/d6/32/08d632c6672e852506b78bb22e23b25f.gif" class='heartbeat'></img>

                    </figure>
                    <div id="teamName" class="level">
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                      <div class="level-item mx-0">
                        <div class="title" style="text-align: center;">Team F</div>
                      </div>
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure class='image'>
                      <progress class='progress is-large' value='90' max='100'></progress>
                      <img id="team" src="https://i.pinimg.com/originals/08/d6/32/08d632c6672e852506b78bb22e23b25f.gif" class='floater'></img>

                    </figure>
                    <div id="teamName" class="level">
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                      <div class="level-item mx-0">
                        <div class="title" style="text-align: center;">Team G</div>
                      </div>
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <figure class='image'>
                      <progress class='progress is-large' value='40' max='100'></progress>
                      <img id="team" src="https://i.pinimg.com/originals/08/d6/32/08d632c6672e852506b78bb22e23b25f.gif" class='wiggle'></img>

                    </figure>
                    <div id="teamName" class="level">
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                      <div class="level-item mx-0">
                        <div class="title" style="text-align: center;">Team H</div>
                      </div>
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <figure class='image'>
                      <progress class='progress is-large' value='55' max='100'></progress>
                      <img id="team" src="https://i.pinimg.com/originals/08/d6/32/08d632c6672e852506b78bb22e23b25f.gif" class='pulse'></img>

                    </figure>
                    <div id="teamName" class="level">
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                      <div class="level-item mx-0">
                        <div class="title" style="text-align: center;">Team I</div>
                      </div>
                      <div class="level-item mx-0">
                        <span class="icon is-large">
                          <i class="fas fa-circle fa-2x"></i>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class='column is-one-third'>
          <div class='box'>
            <div class='content'>
              <h3 style='text-align: center; margin-bottom: 0;'>Feed</h3>
            </div>
            <button name='newFeedItem' class='button is-info'>{text}</button>
          </div>
          <div id='insertnewitems' class='scrollingfeed'></div>
        </div>
      </div>
    </div>
  )
}

export default Panel

// <div name='mainNotification' class="box is-info ">
//   <div class='content'>
//     <h1>{coupleID}</h1>
//     <strong><h2>Energy Left</h2></strong>
//     <progress class="progress is-danger is-large" value="15" max="100">15%</progress>
//   </div>
// </div>
// <div name='mainNotification' class="box is-info ">
//   <div class='content'>
//     <h1>{coupleID}</h1>
//     <strong><h2>Energy Left</h2></strong>
//     <progress class="progress is-danger is-large" value="15" max="100">15%</progress>
//   </div>
// </div>
//
// <div name='mainNotification' class="notification is-info ">
//   <button name='close' class="delete"></button>
//   Lorem ipsum dolor sit amet, consectetur
//   adipiscing elit lorem ipsum dolor.
//   <strong>Pellentesque risus mi</strong>,
//   te felis venenatis.
// </div>
//
// <div name='mainNotification' class="box is-info ">
//   <div class='content'>
//     <h1>{coupleID}</h1>
//     <strong><h2>Energy Left</h2></strong>
//     <progress class="progress is-danger is-large" value="15" max="100">15%</progress>
//   </div>
// </div>
// </div>
//
// <figure class='image'>
//   <img src="https://i.imgur.com/mjXfKJP.png"></img>
// </figure>
