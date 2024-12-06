import { NavBar } from "./nav-bar";

const MainLayout = ({ page }) => {

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-[#F4F4F4]">
                <main className="mx-auto  px-4 py-8 sm:px-6 lg:px-8 xl:px-12">
                    <div className="flex flex-col gap-8 lg:flex-row">
                        {page}
                    </div>
                </main>
            </div>
        </>
    )

};

export default MainLayout;