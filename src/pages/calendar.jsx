import MainLayout from "@/components/layout/main-layout";

function CalendarPage() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">My Calendar</h1>
      <p>This is the Calendar page. Content will be added soon.</p>
    </div>
  );
}

CalendarPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default CalendarPage;