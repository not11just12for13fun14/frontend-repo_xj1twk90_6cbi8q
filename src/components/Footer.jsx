import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-bold text-gray-900">SparkCode</div>
            <p className="mt-2 text-sm text-gray-600">Made for curious minds. Built with educators.</p>
          </div>
          <NavGroup title="Product" links={["Features","Curriculum","School Plans"]} />
          <NavGroup title="Company" links={["About","Blog","Support"]} />
          <NavGroup title="Legal" links={["Privacy","Terms"]} />
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} SparkCode. All rights reserved.</div>
          <div className="flex items-center gap-3 text-gray-500">
            <a href="#" aria-label="YouTube" className="hover:text-gray-800"><Youtube size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-800"><Instagram size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-800"><Linkedin size={18} /></a>
            <a href="#" aria-label="X" className="hover:text-gray-800"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NavGroup({ title, links }){
  return (
    <div>
      <div className="text-sm font-semibold text-gray-900">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-gray-600">
        {links.map((l) => (<li key={l}><a href="#" className="hover:text-gray-900">{l}</a></li>))}
      </ul>
    </div>
  );
}
