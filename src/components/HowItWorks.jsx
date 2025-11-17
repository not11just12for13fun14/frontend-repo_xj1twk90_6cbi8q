import { UserPlus, Shuffle, MousePointer2, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create an account",
    text: "Sign up as a student, parent, or teacher in under a minute.",
  },
  {
    icon: Shuffle,
    title: "Pick a track",
    text: "Choose Web Basics, Python for Beginners, or Make Your First Game.",
  },
  {
    icon: MousePointer2,
    title: "Learn by doing",
    text: "Follow interactive lessons and mini‑challenges with instant feedback.",
  },
  {
    icon: Rocket,
    title: "Build your first project",
    text: "Apply your skills to something real—customize and share it!",
  },
];

export default function HowItWorks(){
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">A clear path from sign‑up to first project in just a few steps.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({icon: Icon, title, text}, i) => (
            <div key={title} className="relative p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-md bg-indigo-50 text-indigo-700 inline-flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <div className="text-xs text-gray-500 mb-1">Step {i+1}</div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
