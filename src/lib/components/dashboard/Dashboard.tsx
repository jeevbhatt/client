import Sidebar from "./Sidebar";
import Image from "next/image";

function Dashboard({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-100 flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <Image
              src="https://tailwindflex.com/images/logo.svg"
              alt="Logo"
              className="h-8 w-auto"
              width={48}
              height={48}
            />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Dashboard
            </span>
          </div>
        </div>
        <Sidebar />
        <div className="mt-auto p-4 border-t">
          <div className="flex items-center">
            <Image
              className="h-8 w-8 rounded-full"
              src="/"
              alt="User"
              width={48}
              height={48}
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Welcome Admin</p>
              <p className="text-xs font-medium text-gray-500">View Profile</p>
            </div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="mt-4 p-6 bg-white rounded-lg shadow-md">{children}</div>
      </main>
    </div>
  );
}

export default Dashboard;
