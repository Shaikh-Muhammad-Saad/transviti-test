import MainLayout from "@/components/layout/main-layout";
import { useState } from "react";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import AddEventModal from "@/components/profile/add-event-modal";

const initialEvents = {
  "2025-10-08": [{ title: "Team Meeting", color: "blue" }],
  "2025-10-15": [{ title: "Project Deadline", color: "red" }],
  "2025-10-22": [
    { title: "Design Review", color: "purple" },
    { title: "Client Call", color: "green" },
  ],
  "2025-11-05": [{ title: "Product Launch", color: "indigo" }],
};

const getEventColor = (color) => {
    switch (color) {
        case "blue": return "bg-blue-500";
        case "red": return "bg-red-500";
        case "purple": return "bg-purple-500";
        case "green": return "bg-green-500";
        case "indigo": return "bg-indigo-500";
        default: return "bg-gray-500";
    }
}

function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1)); // October 2025
  const [events, setEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEvent = ({ title, date, color }) => {
    const newEvents = { ...events };
    if (!newEvents[date]) {
      newEvents[date] = [];
    }
    newEvents[date].push({ title, color });
    setEvents(newEvents);
  };

  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const renderCalendar = () => {
    const totalDays = daysInMonth(currentDate);
    const startDay = firstDayOfMonth(currentDate);
    const calendarDays = [];

    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="border p-2 h-32"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
        const dateStr = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const dayEvents = events[dateStr] || [];

        calendarDays.push(
            <div key={day} className="border p-2 h-32 flex flex-col relative">
            <span className="font-bold">{day}</span>
            <div className="mt-1 space-y-1 overflow-y-auto">
                {dayEvents.map((event, index) => (
                <div key={index} className={`text-white text-xs rounded px-1 ${getEventColor(event.color)}`}>
                    {event.title}
                </div>
                ))}
            </div>
            </div>
        );
    }

    return calendarDays;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <>
      <AddEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddEvent={handleAddEvent}
      />
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
              <div>
                  <h1 className="text-4xl font-bold text-gray-800">My Calendar</h1>
                  <p className="text-gray-600">Schedule and manage your events.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
              >
                  <PlusCircle className="h-5 w-5 mr-2" />
                  Add Event
              </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <button onClick={goToPreviousMonth} className="p-2 rounded-full hover:bg-gray-100">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-semibold">{`${monthName} ${year}`}</h2>
              <button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-gray-100">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div key={day} className="text-center font-semibold py-2 bg-gray-100">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 grid-rows-5 gap-px bg-gray-200">
              {renderCalendar()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CalendarPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default CalendarPage;