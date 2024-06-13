import logo from './logo.svg';
import './App.css';
import OrderRange from './components/OrderRange';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OrYoCo</h1>
        <p className='fs-6'>Coffee made with <i className='bi bi-heart-fill'></i></p>
        <div className='container text-start'>
        <form>
          {/* <div class="row">
            <div class="col-3">
              <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                <nav class="nav nav-pills flex-column">
                  <a class="nav-link" href="#item-1">Latte</a>
                  <nav class="nav nav-pills flex-column">
                    <a class="nav-link ms-3 my-1" href="#item-1-1">40% coffee</a>
                    <a class="nav-link ms-3 my-1" href="#item-1-2">50% coffee</a>
                  </nav>
                  <a class="nav-link" href="#item-2">Mocha</a>
                  <nav class="nav nav-pills flex-column">
                    <a class="nav-link ms-3 my-1" href="#item-2-1">2% chocolate</a>
                    <a class="nav-link ms-3 my-1" href="#item-2-2">4% chocolate</a>
                  </nav>
                  <a class="nav-link" href="#item-3">Espresso</a>
                  <nav class="nav nav-pills flex-column">
                    <a class="nav-link ms-3 my-1" href="#item-3-1">1 shot</a>
                    <a class="nav-link ms-3 my-1" href="#item-3-2">2 shots</a>
                    <a class="nav-link ms-3 my-1" href="#item-3-3">3 shots</a>
                  </nav>
                  <a class="nav-link" href="#item-4">Matcha</a>
                  <nav class="nav nav-pills flex-column">
                    <a class="nav-link ms-3 my-1" href="#item-3-1">2 spoons</a>
                    <a class="nav-link ms-3 my-1" href="#item-3-2">3 spoons</a>
                  </nav>
                </nav>
              </nav>
            </div>

            <div class="col-9">
              <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                <div id="item-1">
                  <h4><i class="bi bi-cup-hot-fill"></i> Latte</h4>
                </div>
                <div id="item-1-1">
                  <h5>
                    40% Coffee <span class="badge text-bg-primary rounded-pill">RM3</span>
                  </h5>
                  <p>Milk + Ice</p>
                </div>
                <div id="item-1-2">
                  <h5>
                    50% Coffee <span class="badge text-bg-primary rounded-pill">RM4</span>
                  </h5>
                  <p>Milk + Ice</p>
                </div>
                <div id="item-2">
                  <h4>
                    <i class="bi bi-cup-hot-fill"></i> Mocha
                  </h4>
                  <p>40% Coffee, 58% Milk, 2% Chocolate</p>
                </div>
                <div id="item-2-1">
                  <h5>
                    2% chocolate <span class="badge text-bg-primary rounded-pill">RM3</span>
                  </h5>
                  <p>Need</p>
                </div>
                <div id="item-2-2">
                  <h5>
                    4% chocolate <span class="badge text-bg-primary rounded-pill">RM4</span>
                  </h5>
                  <p>Energy</p>
                </div>
                <div id="item-3">
                  <h4><i class="bi bi-cup-hot-fill"></i> Espresso</h4>
                </div>
                <div id="item-3-1">
                  <h5>
                    1 shot <span class="badge text-bg-primary rounded-pill">RM3</span>
                  </h5>
                  <p>Need</p>
                </div>
                <div id="item-3-2">
                  <h5>
                    2 shots <span class="badge text-bg-primary rounded-pill">RM4</span>
                  </h5>
                  <p>Energy</p>
                </div>
                <div id="item-3-3">
                  <h5>
                    3 shots <span class="badge text-bg-primary rounded-pill">RM5</span>
                  </h5>
                  <p>Wake me the f-up!</p>
                </div>
                <div id="item-4">
                  <h4><i class="bi bi-cup-hot-fill"></i> Matcha</h4>
                </div>
                <div id="item-4-1">
                  <h5>
                    2 spoons <span class="badge text-bg-primary rounded-pill">RM5</span>
                  </h5>
                  <p>Need</p>
                </div>
                <div id="item-4-2">
                  <h5>
                    3 spoons <span class="badge text-bg-primary rounded-pill">RM6</span>
                  </h5>
                  <p>Bitter</p>
                </div>
              </div>
            </div>
          </div> */}
          <div>
            <label for="orders" className="form-label">Menu</label>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto text-start">
                  <div class="fw-bold">
                    <i class="bi bi-cup-hot-fill"></i> Latte
                  </div>
                  40% Coffee, 60% Milk
                </div>
                <span class="badge text-bg-primary rounded-pill">RM3</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto text-start">
                  <div class="fw-bold">
                    <i class="bi bi-cup-hot-fill"></i> Mocha
                  </div>
                  <ul>
                    <li>48% Coffee, 50% Milk, 2% Chocolate</li>
                    <li>46% Coffee, 50% Milk, 4% Chocolate</li>
                  </ul>
                  {/* 49% Coffee, 50% Milk, 1% Chocolate */}
                </div>
                <span class="badge text-bg-primary rounded-pill">RM4</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto text-start">
                  <div class="fw-bold">
                    <i class="bi bi-cup-hot-fill"></i> Flat white
                  </div>
                  40% Coffee, 60% Frothed Milk
                </div>
                <span class="badge text-bg-primary rounded-pill">RM3.50</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto text-start">
                  <div class="fw-bold">
                    <i class="bi bi-cup-hot-fill"></i> Matcha
                  </div>
                  40% Matcha Coffee, 60% Milk
                </div>
                <span class="badge text-bg-primary rounded-pill">RM5</span>
              </li>
            </ul>
          </div>
          <div className="mb-3">
            <label for="mobile" className="form-label">Mobile number</label>
            <input type="tel" className="form-control" id="mobile" aria-describedby="mobileHelp" />
            <div id="mobileHelp" className="form-text">We'll never share your mobile number with anyone else.</div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
