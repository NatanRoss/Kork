import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; 
 
// Render the Calendar 
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
 
class Calendar extends Component {
  render() {
    return (
      <InfiniteCalendar
	    width={400}
	    height={400}
	    selected={today}
	    minDate={lastWeek}
	  />
    );
  }
}
export default Calendar;