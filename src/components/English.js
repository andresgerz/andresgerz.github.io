
class English extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({ mode: 'open'});

    const html = `
      <div>
        <h1>English</h1>
        
        <div class="table-container">
          <div class="item">Verbs Tenses</div>
          <div class="item">Fomation</div>
          <div class="item">Time Indicators</div>

          <div class="item">Present Simple</div>
          <div class="item"><h2>Verb + -/-s</h2></div>
          <div class="item">
            <p>- every day/week/month</p>
            <p>- sometimes/never/always/often/usually</p>
          </div>

          <div class="item">Present Continuous</div>
          <div class="item"><h2>am/is/are + verb + -ing</h2></div>
          <div class="item">
            <p>- now</p>
            <p>- at the moment</p>
          </div>

          <div class="item">Past Simple</div>
          <div class="item"><h2>Verb + -ed</h2></div>
          <div class="item">
            <p>- yerterday</p>
            <p>- a day before yesterday</p>
            <p>- in 2018</p>
            <p>- long ago/3 days ago/4 hours ago
          </div>

          <div class="item">Past Continuous</div>
          <div class="item"><h2>was/were + Verb + -ing</h2></div>
          <div class="item">
            <p>- at 3 o'clock yesterday</p>
            <p>- from 6 till 7 yesterday</p>
            <p>- all day long yesterday</p>          
          </div>

          <div class="item">Past Perfect</div>
          <div class="item"><h2>had + participle</h2></div>
          <div class="item">
            <p>- by 3 o'clock yesterday</p>
            <p>- by the moment you came</p>
          </div>

          <div class="item">Future Simple</div>
          <div class="item"><h2>will + Verb</h2></div>
          <div class="item">
            <p>- tomorrow</p>
            <p>- next day/week/month</p>
          </div>

          <div class="item">Future Continuous</div>
          <div class="item"><h2>will + be + Vern + -ing</h2></div>
          <div class="item">
            <p>- at 3 o'clock tomorrow</p>
            <p>- all day long tomorrow</p>
            <p>- from 3 till 5 tomorrow</p>
          </div>

          <div class="item">Furute Perfect</div>
          <div class="item"><h2>will + have + participle</h2></div>
          <div class="item">
            <p>by 2 o'clock tomorrow</p>
            <p>by the moment he comes</p>
          </div>
          
          
        </div>
        <p>Compound sentences</p>
      </div>
    `;

    const style = `
      
      h1 {
        text-align: center;
      }


      .table-container {
        display: grid;
        grid-template-columns: 200px repeat(2, 400px);
        grid-template-rows: repeat(10, 150px); 
        column-gap: 10px;
        row-gap: 10px; 
      }


      .item {
        background-color: #41BEE6;
        border: 1px solid black;
        text-align: center;
      }

      .item h2 {
        text-align: center;
        vertical-align: middle;
      }
    `;

    this.shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      ${html}
    `;
  } 

}


window.customElements.define('nav-bar', English);