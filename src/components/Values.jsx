import { Puzzle, Bot, BadgeCheck, Gamepad2, School, Hammer } from "lucide-react";

const values = [
  {
    icon: Puzzle,
    title: "Learn by Doing",
    text: "Write real code from day one. Short lessons, instant feedback, and quick wins build momentum.",
  },
  {
    icon: Hammer,
    title: "Kid‑Friendly Editor",
    text: "A clean editor with color hints and autocomplete. No setup needed—just open and code.",
  },
  {
    icon: BadgeCheck,
    title: "Beginner‑First Curriculum",
    text: "Start at zero and level up step by step with clear goals and real examples.",
  },
  {
    icon: Bot,
    title: "AI‑Assisted Learning",
    text: "Ask for hints and explanations in plain language—never feel stuck.",
  },
  {
    icon: Gamepad2,
    title: "Gamified Progress",
    text: "Earn points, badges, and streaks so learning feels like a game, not homework.",
  },
  {
    icon: School,
    title: "For Schools & Classes",
    text: "Teacher dashboards, assignments, and standards alignment included.",
  },
];

export default function Values() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What makes us different</h2>
          <p className="mt-3 text-gray-600">Friendly, simple and exciting—built for students, trusted by parents and teachers.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 inline-flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
