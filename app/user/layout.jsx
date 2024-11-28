import Sidebar from "@/components/layouts/Sidebar";
import Undernavbar from "../../app/product/components/Undernavbar"

export default function UserLayout({ children }) {
  return (
    <>
    <Undernavbar/>
      <section className="py-10 bg-gray-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Sidebar />
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                {children}
              </article>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}