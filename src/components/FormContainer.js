import Frame from "../static/img/icons/Frame.svg";
import VectorOne from "../static/img/icons/Vector (1).svg";
import VectorThree from "../static/img/icons/Vector (3).svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { book } from "../redux/book/action";
function FormContainer() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state);
  const item = value.length;
  console.log(item);
  // console.log(value.length);
  // value.map((el) => {
  //   console.log(el);
  // });

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [date, setDate] = useState();
  const [guest, setGuest] = useState();
  const [classes, setClasses] = useState();
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    let bookingDetails = {
      id: count,
      from,
      to,
      date,
      guest,
      classes,
    };
    dispatch(book(bookingDetails));
  };
  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };
  const handleSetToChange = (e) => {
    setTo(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleGuest = (e) => {
    setGuest(e.target.value);
  };
  const handleClasses = (e) => {
    setClasses(e.target.value);
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
          <div class="des-from">
            <p>Destination From</p>
            <div class="flex flex-row">
              <img src={Frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                value={from}
                onChange={handleFromChange}
                required
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

          <div className="des-from">
            <p>Destination To</p>
            <div class="flex flex-row">
              <img src={Frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                value={to}
                onChange={handleSetToChange}
                required
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

          {/* date  */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={VectorOne} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                value={guest}
                onChange={handleGuest}
                required
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

          {/* <!-- Class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={VectorThree} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                value={classes}
                onChange={handleClasses}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          {/* {item < 3 ? (
            <button className="addCity" type="submit" id="lws-addCity">
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          ) : null} */}

          {/* button disable using apply middleware  */}
          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}
export default FormContainer;
