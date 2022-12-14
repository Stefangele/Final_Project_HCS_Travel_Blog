import React, { useState } from "react";

function NewPostForm() {
  const [newInputCity, setnewInputCity] = useState("");
  function handleChange(e) {
    setnewInputCity(e.target.value);
  }

  return (
    <>
      <div className="field">
        <label className="label">Name of the City</label>
        <div className="control">
          <input
            className="input is-success"
            type="text"
            placeholder="e.g London"
            value={newInputCity}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Country</label>
        <div className="control">
          <input
            className="input is-success"
            type="email"
            placeholder="e.g. United Kingdom"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea is-success"
            placeholder="e.g. What cool nature spots can I see there? Give me a hint!"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Longitude</label>
        <div className="control">
          <input
            className="input is-success"
            type="text"
            placeholder="e.g -0.118092"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Latitude</label>
        <div className="control">
          <input
            className="input is-success"
            type="text"
            placeholder="e.g 51.509865"
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link is-success is-medium">
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light is-success is-medium">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default NewPostForm;
