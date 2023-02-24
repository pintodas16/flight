import DestinationFrom from "./DestinationFrom";
import DestinationTo from "./DestinationTo";
import Date from "./Date";
import Button from "./Button";
import Guest from "./Guest";
import Class from "./Class";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { book } from "../redux/book/action";

function Form() {
  const dispatch = useDispatch();

  let [count, setCount] = useState(1);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [date, setDate] = useState();
  const [guest, setGuest] = useState();
  const [classes, setClasses] = useState();
  const handleFromChange = (value) => {
    setFrom(value);
  };
  const handleSetToChange = (value) => {
    setTo(value);
  };
  const handleDateChange = (value) => {
    setDate(value);
  };
  const handleGuest = (value) => {
    setGuest(value);
  };
  const handleClasses = (value) => {
    setClasses(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    let submitDetails = {
      count,
      from,
      to,
      date,
      guest,
      classes,
    };
    dispatch(book(submitDetails));
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform">
          <DestinationFrom handleFromChange={handleFromChange} value={from} />
          <DestinationTo handleToChange={handleSetToChange} value={to} />
          <Date handleDate={handleDateChange} value={date} />
          <Guest handleGuest={handleGuest} value={guest} />

          <Class handleClass={handleClasses} value={classes} />
          {count <= 3 ? <Button handleClick={handleFormSubmit} /> : <Button />}
        </form>
      </div>
    </div>
  );
}
export default Form;
