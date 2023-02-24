import TableData from "./TableData";
import TableHead from "./TableHead";
import { useSelector } from "react-redux";
function Table() {
  const value = useSelector((state) => state);
  // console.log(value);
  return value.length > 0 ? (
    <table className="booking-table">
      <TableHead />

      <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
        {value.map((data) => {
          return <TableData key={data.id} data={data} />;
        })}
      </tbody>
    </table>
  ) : null;
}
export default Table;
