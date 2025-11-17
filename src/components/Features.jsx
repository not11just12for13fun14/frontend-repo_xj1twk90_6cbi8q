import { TerminalSquare, ClipboardCheck, Blocks, BarChart3, UsersRound, Eye } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything students need to succeed</h2>
          <p className="mt-3 text-gray-600">Clear explanations, instant practice, and encouraging feedback make coding feel doable.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Feature title="Interactive lessons" icon={<ClipboardCheck className="text-blue-600" /> }
              text="Bite‑sized lessons mix visuals and hands‑on coding. Learn a concept, try it right away, celebrate the win."/>
            <Feature title="Real‑time coding editor" icon={<TerminalSquare className="text-blue-600" />}
              text="Type code and see results instantly with syntax highlighting, inline tips and a built‑in console."/>
            <Feature title="Quizzes & mini challenges" icon={<Blocks className="text-blue-600" />}
              text="Quick checks and playful challenges reinforce learning one step at a time."/>
            <Feature title="AI tutor support" icon={<UsersRound className="text-blue-600" />}
              text="On‑demand hints, explanations and encouragement that match each student’s level."/>
          </div>

          <div className="space-y-6">
            <Feature title="Projects for students" icon={<Blocks className="text-blue-600" />}
              text="Build mini‑games, web pages and simple apps. Templates help students start fast and customize freely."/>
            <Feature title="Progress dashboard" icon={<BarChart3 className="text-blue-600" />}
              text="See lessons completed, badges earned and streaks. Students, parents and teachers can track growth."/>
            <Feature title="Classroom tools for teachers" icon={<UsersRound className="text-blue-600" />}
              text="Create classes, assign lessons and view progress. Ready‑made plans save time."/>
            <Feature title="Parent monitoring features" icon={<Eye className="text-blue-600" />}
              text="Weekly summaries and simple insights keep parents involved and supportive."/>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, text, icon }){
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-md bg-blue-50 inline-flex items-center justify-center">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}
