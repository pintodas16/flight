import VectorThree from "../static/img/icons/Vector (3).svg";
function Class({ handleClass, value }) {
  const handleChange = (e) => {
    handleClass(e.target.value);
  };
  return (
    <div className="des-from !border-r-0">
      <p>Class</p>
      <div className="flex flex-row">
        <img src={VectorThree} alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name="ticketClass"
          id="lws-ticketClass"
          required
          value={value}
          onChange={handleChange}
        >
          <option value="" hidden>
            Please Select
          </option>
          <option>Business</option>
          <option>Economy</option>
        </select>
      </div>
    </div>
  );
}
export default Class;
