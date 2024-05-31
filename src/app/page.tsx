import Calendar from "@/components/Calendar ";
import EventForm from "@/components/EventForm ";
import GoogleCalendarIntegration from "@/components/GoogleCalendarIntegration ";


export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold text-green-950
       shadow-md  hover:text-green-700">My Calendar App</h1>
       <div>
      <GoogleCalendarIntegration />
      <EventForm />
      <Calendar />

       </div>
    </div>
    </>
  );
}
