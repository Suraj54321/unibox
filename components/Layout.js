import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ComposeButton from './Compose';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
        <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 bg-gray-100 overflow-auto">
        {children}
        <ComposeButton />
      </main>
    </div>
    </div>
  );
}
