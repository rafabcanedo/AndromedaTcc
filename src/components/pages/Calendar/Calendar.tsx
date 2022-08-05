import React from 'react';
import '@fullcalendar/react/dist/vdom'; // solução para errro de import plugins
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
 return(
  <>
   <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    headerToolbar={{
     left:"prev, next today",
     center:"title",
     right:"dayGridMonth,timeGridWeek,timeGridDay"
    }}

    buttonText={{
     day:"Gun",
     prev:"Geri",
     nextYear:"Sonraki Yil",
     prevYear:"Onceki Yil",
     next:"Ileri",
     month:"Ay",
     itoday:"Bugune Gel",
     week:"Haftaaa"
    }}
   />
  </>
 );
}

export default Calendar;