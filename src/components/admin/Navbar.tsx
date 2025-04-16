// components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <h1 className="text-xl font-semibold text-gray-700">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, Admin</span>
      </div>
    </header>
  );
}