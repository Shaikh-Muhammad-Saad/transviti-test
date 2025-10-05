import MainLayout from "@/components/layout/main-layout";

function DocumentsPage() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">Documents</h1>
      <p>This is the Documents page. Content will be added soon.</p>
    </div>
  );
}

DocumentsPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default DocumentsPage;