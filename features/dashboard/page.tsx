import { signOut } from "@/lib/auth";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1>Dashboard</h1>
      <button
        onClick={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default DashboardLayout;
