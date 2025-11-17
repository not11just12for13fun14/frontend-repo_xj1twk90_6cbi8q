import { Menu, Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 text-white">
              <Code2 size={20} />
            </span>
            <span className="font-bold text-gray-900 text-lg">SparkCode</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#curriculum" className="hover:text-gray-900">Curriculum</a>
            <a href="#pricing" className="hover:text-gray-900">Plans</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <a href="/test" className="hover:text-gray-900">System Test</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm font-semibold text-blue-700 hover:text-blue-800">Try Free</a>
            <a href="#pricing" className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md">Start Learning</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
