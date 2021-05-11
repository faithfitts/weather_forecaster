import React from "react";

const Form = ({ zipCode, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input
      required
      placeholder="Enter Zipcode"
      name="zipCode"
      value={zipCode}
      onChange={handleChange}
    />
    <button type="submit">Search</button>
  </form>
);

export default Form;
