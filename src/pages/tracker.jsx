import MainLayout from "@/components/layout/main-layout";

function TrackerPage() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">Job Tracker</h1>
      <p>This is the Job Tracker page. Content will be added soon.</p>
    </div>
  );
}

TrackerPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default TrackerPage;