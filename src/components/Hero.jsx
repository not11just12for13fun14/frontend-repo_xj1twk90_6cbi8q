import { Sparkles, Rocket, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
              <Sparkles size={14} />
              Friendly, fun & beginner-ready
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Coding made simple for teens — build apps, games and confidence
            </h1>
            
            <p className="mt-4 text-lg text-gray-600">
              Learn by doing with bite-sized lessons, an AI tutor, and real projects in a kid-friendly editor. Perfect for ages 11–18 and made for home and classroom.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Start Learning
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 font-semibold">
                Try Free
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="inline-flex items-center gap-1"><ShieldCheck className="text-green-600" size={16} /> Safe for students</div>
              <div className="inline-flex items-center gap-1"><Star className="text-yellow-500" size={16} /> Parent & teacher approved</div>
              <div className="inline-flex items-center gap-1"><Rocket className="text-blue-600" size={16} /> No setup required</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 p-1">
              <div className="w-full h-full rounded-[10px] bg-white grid grid-cols-6 p-4 gap-2">
                <div className="col-span-3 bg-gray-50 rounded-md p-3 space-y-2">
                  <div className="w-24 h-3 bg-blue-200 rounded" />
                  <div className="w-32 h-3 bg-gray-200 rounded" />
                  <div className="w-full h-36 rounded-md bg-white border border-gray-200 p-3 font-mono text-[11px] text-gray-800">
                    {'>'} print("Hello, world!")
                    <br />
                    {'>'} name = input("Your name: ")
                    <br />
                    {'>'} print(f"You got this, {`{name}`}!")
                  </div>
                </div>
                <div className="col-span-3 rounded-md p-3 bg-white border border-gray-200">
                  <div className="h-full rounded-md bg-gradient-to-br from-gray-50 to-white flex items-center justify-center text-gray-500">
                    Live Preview
                  </div>
                </div>
                <div className="col-span-6 grid grid-cols-3 gap-2">
                  <div className="bg-white rounded-md border p-3 text-sm">
                    <div className="font-semibold">Badges</div>
                    <div className="text-xs text-gray-500">Streak 7 days</div>
                  </div>
                  <div className="bg-white rounded-md border p-3 text-sm">
                    <div className="font-semibold">AI Tutor</div>
                    <div className="text-xs text-gray-500">Hint: Check your loop</div>
                  </div>
                  <div className="bg-white rounded-md border p-3 text-sm">
                    <div className="font-semibold">Projects</div>
                    <div className="text-xs text-gray-500">2 games, 1 website</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
