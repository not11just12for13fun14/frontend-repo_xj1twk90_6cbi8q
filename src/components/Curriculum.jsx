export default function Curriculum(){
  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Curriculum overview</h2>
          <p className="mt-3 text-gray-600">Tracks → Courses → Modules → Projects. Clear structure, steady progress.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Track
            name="Web Basics"
            summary="HTML & CSS foundations—make your first website."
            modules={["Intro to HTML","Styling with CSS","Page Layouts","Responsive Design"]}
            project="Personal Portfolio Website"
          />
          <Track
            name="Python for Beginners"
            summary="Logic, variables, loops and functions—build small programs."
            modules={["Variables & Input","Loops & Logic","Functions","Working with Data"]}
            project="Trivia Quiz App"
          />
          <Track
            name="Make Your First Game"
            summary="Game logic, sprites and interactions—create a 2D game."
            modules={["Sprites & Movement","Collisions","Scores & Lives","Polish & Sound"]}
            project="Arcade‑Style Collecting Game"
          />
        </div>
      </div>
    </section>
  );
}

function Track({ name, summary, modules, project }){
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="mt-1 text-gray-600 text-sm">{summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
        {modules.map((m) => (<li key={m}>{m}</li>))}
      </ul>
      <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-md text-sm">
        Capstone project: <span className="font-semibold">{project}</span>
      </div>
    </div>
  );
}
