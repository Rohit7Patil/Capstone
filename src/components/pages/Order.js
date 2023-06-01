import Heading from "../sections/orderPages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm";
import { useState } from "react";

export default function Order() {
  const initialAvailableTimes = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"];
  const [availableTimes, setAvailableTimes] = useState(initialAvailableTimes);

  function updateTimes(selectedDate) {
    const newAvailableTimes = [];

    // You can implement your own logic for updating the available times here
    // For example, you could use a database or an API to get the available times for the selected date
    // For this example, let's just assume that the available times for weekdays are different from weekends

    const selectedDay = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    if (selectedDay === 0 || selectedDay === 6) {
      // Weekend
      newAvailableTimes.push("10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM");
    } else {
      // Weekday
      newAvailableTimes.push(
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM"
      );
    }
    setAvailableTimes(newAvailableTimes);
  }

  return (
    <>
      <Heading />
      <ReservationForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </>
  );
}
