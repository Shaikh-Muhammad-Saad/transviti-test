import MainLayout from "@/components/layout/main-layout";

function CompaniesPage() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">Top Companies</h1>
      <p>This is the Top Companies page. Content will be added soon.</p>
    </div>
  );
}

CompaniesPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default CompaniesPage;