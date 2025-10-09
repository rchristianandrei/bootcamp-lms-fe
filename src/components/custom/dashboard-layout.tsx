"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function DashboardLayout(props: { children: ReactNode }) {
  const linkDashboard = "/";
  const linkMyCourses = "/MyCourses";
  const linkManageCourses = "/ManageCourses";
  const linkManageUsers = "/ManageUsers";

  const pathName = usePathname();

  const isActive = (path: string) => pathName === path;

  return (
    <section className="h-screen bg-[whitesmoke] flex flex-col">
      <header className="bg-green-700 text-[whitesmoke] py-2">
        <div className="flex justify-between items-center px-2">
          <h1 className="text-3xl">LMS</h1>
          <p className="text-xl">(Last Name, First Name)</p>
        </div>
      </header>
      <main className="flex-1">
        <div className="flex flex-row h-full">
          <section className="bg-green-300 px-2">
            <h3 className="text-xl text-center">Menu</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={linkDashboard}>
                  <nav
                    className={`${
                      isActive(linkDashboard) ? "bg-[whitesmoke]" : ""
                    } cursor-pointer border rounded px-2 border-black flex items-center gap-2 transform transition-all duration-200 hover:translate-y-[-4px]`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <p>Dashboard</p>
                  </nav>
                </Link>
              </li>
              <li>
                <nav
                  className={`${
                    isActive(linkMyCourses) ? "bg-[whitesmoke]" : ""
                  } cursor-pointer border rounded px-2 border-black flex items-center gap-2 transform transition-all duration-200 hover:translate-y-[-4px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <p>My Courses</p>
                </nav>
              </li>
              <hr />
              <li>
                <nav
                  className={`${
                    isActive(linkManageCourses) ? "bg-[whitesmoke]" : ""
                  } cursor-pointer border rounded px-2 border-black flex items-center gap-2 transform transition-all duration-200 hover:translate-y-[-4px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>

                  <p>Manage Courses</p>
                </nav>
              </li>
              <hr />
              <li>
                <nav
                  className={`${
                    isActive(linkManageUsers) ? "bg-[whitesmoke]" : ""
                  } cursor-pointer border rounded px-2 border-black flex items-center gap-2 transform transition-all duration-200 hover:translate-y-[-4px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                  <p>Manage Users</p>
                </nav>
              </li>
            </ul>
          </section>
          <section className="flex-1">{props.children}</section>
        </div>
      </main>
    </section>
  );
}
