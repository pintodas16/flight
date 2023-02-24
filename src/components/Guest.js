import VectorOne from "../static/img/icons/Vector (1).svg";
function Guest({ handleGuest, value }) {
  const handleChange = (e) => {
    handleGuest(e.target.value);
  };
  return (
    <div className="des-from">
      <p>Guests</p>
      <div className="flex flex-row">
        <img src={VectorOne} alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name="guests"
          id="lws-guests"
          required
          value={value}
          onChange={handleChange}
        >
          <option value="" hidden>
            Please Select
          </option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4 Persons</option>
        </select>
      </div>
    </div>
  );
}
export default Guest;
