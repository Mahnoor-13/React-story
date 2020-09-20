import React from "react";
import "./App.css";
import Sdata from "./Sdata";

function App() {
  return (
    <div>
      <div className="App">
        <div>
          <p className="total-score">User total score: 77</p>
        </div>

        <div className="btn">
          <button type="button">New Story</button>
          <button type="button">User??</button>
          <button type="button">Logout</button>
        </div>
      </div>
      <div className="all-div">
        {Sdata.map((val, ind) => {
          return (
            <div key={ind} style={{ width: "20%" }}>
              <div className="all-img">
                <div className="img-score">
                  <div>
                    <img className="img" src={val.imgsrc} />
                  </div>

                  <p>{val.score}</p>
                </div>
                <div className="name-para">
                  <h3>{val.name}</h3>
                  <p className="para">{val.para}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="story-div">
        <div>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="story-title"
          />
        </div>
        <div className="story-img-div img-div-s">
          <img className="story-img" src={require("./images/img2.jpg")} />
        </div>
        <div>
          <textarea
            class="form-control"
            rows="10"
            cols="50"
            id="comment"
          ></textarea>
        </div>
      </div>

      <div className="select-post">
        <div className="select-div">
          <select name="cars" id="story type" className="select">
            <option value="volvo">Story type</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="post">
          <button type="button">New Story</button>
         
        </div>
      </div>
    </div>
  );
}

export default App;
