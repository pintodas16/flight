import "./style/style.css";
import FormContainer from "./components/FormContainer";
import Form from "./components/Form";
import { Provider } from "react-redux";

import Header from "./components/Header";
import { store } from "./redux/store";

import BookingDetails from "./components/BookingDetails";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <FormContainer /> *
        <BookingDetails />
        {/* <Form />
        <BookingDetails /> */}
      </div>
    </Provider>
  );
}

export default App;
