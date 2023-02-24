import { useState } from "react";
import Frame from "../static/img/icons/Frame.svg";
function DestinationFrom({ handleFromChange, value }) {
  const [from, setFrom] = useState();

  const handleChange = (e) => {
    handleFromChange(e.target.value);
  };
  return (
    <div class="des-from">
      <p>Destination From</p>
      <div class="flex flex-row">
        <img src={Frame} alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name="from"
          id="lws-from"
          required
          value={value}
          onChange={handleChange}
        >
          <option value="" hidden>
            Please Select
          </option>
          <option>Dhaka</option>
          <option>Sylhet</option>
          <option>Saidpur</option>
          <option>Cox's Bazar</option>
        </select>
      </div>
    </div>
  );
}
export default DestinationFrom;
