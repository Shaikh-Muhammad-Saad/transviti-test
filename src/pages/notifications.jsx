import MainLayout from "@/components/layout/main-layout";

function NotificationsPage() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <p>This is the Notifications page. Content will be added soon.</p>
    </div>
  );
}

NotificationsPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default NotificationsPage;