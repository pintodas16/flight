function Date({ handleDate, value }) {
  const handleChange = (e) => {
    handleDate(e.target.value);
  };
  return (
    <div className="des-from">
      <p>Journey Date</p>
      <input
        type="date"
        className="outline-none px-2 py-2 w-full date"
        name="date"
        id="lws-date"
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
export default Date;
