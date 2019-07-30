import React, { useEffect } from 'react'
import bulmaCalendar from 'bulma-calendar'

const CalendarInput = ({ onChange, ...otherProps }) => {
  useEffect(() => {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', {
      color: 'dark',
      enableYearSwitch: false,
      showButtons: false,
      showFooter: false,
      startDate: new Date(),
    })

    // Loop on each calendar initialized
    calendars.forEach(calendar => {
      // Add listener to date:selected event
      calendar.on('date:selected', date => {
        console.log('date:selected', date)
      })
    })

    // To access to bulmaCalendar instance of an element
    const element = document.querySelector('#my-element')
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on('select', datepicker => {
        console.log('select', datepicker.data)
        onChange(datepicker.data)
      })
    }
  })

  return (
    <input type='date' {...otherProps} />
  )
}
export default CalendarInput
