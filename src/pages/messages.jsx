import MainLayout from "@/components/layout/main-layout";

function MessagesPage() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">Messages</h1>
      <p>This is the Messages page. Content will be added soon.</p>
    </div>
  );
}

MessagesPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default MessagesPage;