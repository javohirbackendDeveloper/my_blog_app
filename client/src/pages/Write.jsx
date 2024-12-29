import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title..." />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={{ value }}
            onChange={setValue}
          ></ReactQuill>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status : </b> Draft
          </span>
          <span>
            <b>Visability : </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="it" id="it" />
            <label htmlFor="it">IT</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="family" id="family" />
            <label htmlFor="family">Family</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="sport" id="sport" />
            <label htmlFor="sport">Sport</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="school" id="school" />
            <label htmlFor="school">School</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
