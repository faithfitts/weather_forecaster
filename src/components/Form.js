import React from "react";

const Form = ({ zipCode, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input style={{ marginTop: "15px", borderRadius: "5px" }}
      required
      placeholder="Enter Zipcode"
      name="zipCode"
      value={zipCode}
      onChange={handleChange}
    />
    <button style={{ marginLeft: "15px", borderRadius: "5px", backgroundColor: "#66ff00" }} type="submit">Search</button>
  </form>
);

export default Form;
