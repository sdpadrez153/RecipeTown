$(function() {
  $("#calendar").fullCalendar({
    themeSystem: "bootstrap4",
    height: 650,
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay,listMonth"
    },
    weekNumbers: true,
    eventLimit: true, // allow "more" link when too many events
    // events: "https://fullcalendar.io/demo-events.json"
  });
});
