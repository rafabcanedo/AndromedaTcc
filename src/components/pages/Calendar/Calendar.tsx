import React from 'react';
import '@fullcalendar/react/dist/vdom'; // solução para errro de import plugins
import FullCalendar, {EventContentArg, EventClickArg, DateSelectArg, EventApi} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg, EventDragStartArg } from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';

let id=0;

function Calendar() {
  const [events, setEvents] = React.useState<Array<EventApi>>([])
  const [initialEvents, setInitialEvents] = React.useState([
        {
            id: String(10001),
            title: "Merhaba Dünya",
            start: new Date().toISOString().split("T")[0]
        },
        {
            id: String(20002),
            title: "Merhaba Dünya 2",
            start: new Date().toISOString().split("T")[0] + "T14:05:00"
        }
    ])

  React.useEffect(() => {
    console.log("eventler", events)
  },[events])

  const handleEvents=(events:EventApi[])=>{
    setEvents(events)
  }

  const renderEventContent=(eventContent:EventContentArg)=>{
    return(
     <>
      <b>{eventContent.timeText}</b>
      <b style={{color:"red"}}>{eventContent.event.title}</b>
     </>
    )
  }

  const handleEventClick=(clickInfo:EventClickArg)=>{
    alert(`Evento teste ${clickInfo.event.title}`)
    console.log(clickInfo.event.id)
    clickInfo.event.remove()
  }
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt("Event Adı Giriniz");
    let calenderApi = selectInfo.view.calendar
    calenderApi.unselect()
    if(title){
        calenderApi.addEvent({
             id:String(id++),
            title,
            start:selectInfo.startStr,
            end:selectInfo.endStr,
            allDay:selectInfo.allDay
        })
    }
}
 return(
  <>
   <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    customButtons={{
     btn: {
      text:"Button Text1",
      click(ev: MouseEvent, element: HTMLElement) {
        alert("TESTE NÃO SEI PRA QUE")
      }
     }
    }}
    dateClick={(e : DateClickArg )=>{
     console.log("dateclick",e)
    }}
    select={handleDateSelect}
    eventClick={handleEventClick}
    eventContent={renderEventContent}
    initialEvents={initialEvents}
    headerToolbar={{
     left:"prev, next today btn",
     center:"title",
     right:"dayGridMonth,timeGridWeek,timeGridDay btn"
    }}
    initialView="dayGridMonth"
    selectable={true}
    editable={true}
    eventDragStart={(e)=>{
        console.log("aaaaaa")
    }}
    eventDragStop={(e)=>{
        console.log("bbbbbb")
    }}
    eventBackgroundColor={"blue"}
    eventBorderColor={"purple"}
    eventRemove={(e)=>{
      console.log("event silindi")
    }}
    eventsSet={handleEvents}
   /* dayHeaderFormat={{
     week:"numeric",
     day:"2-digit",
     month:"short"
    }}*/
    eventAdd={(e)=>{
      console.log("que",e)
    }}
    eventChange={(e)=>{
      console.log("event bla",e)
    }}
    dayMaxEvents={true}
    weekends={true}
    locales={allLocales}
    firstDay={1}
    locale={"br"}
    buttonText={{
     day:"Dia",
     prev:"Anterior",
     nextYear:"Sonraki Yil",
     prevYear:"Onceki Yil",
     next:"Proximo",
     month:"Mensal",
     itoday:"Bugune Gel",
     week:"Semanal"
    }}
   />
  </>
 );
}

export default Calendar;