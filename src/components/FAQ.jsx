export default function FAQ(){
  const items = [
    { q: "Is this suitable for complete beginners?", a: "Yes. We start from the basics and build step by step with plenty of guidance." },
    { q: "What ages is this for?", a: "Designed for ages 11–18, with tracks that grow in difficulty." },
    { q: "Do students need special software?", a: "No. Everything runs in the browser. Just log in and start coding." },
    { q: "How does the AI tutor work?", a: "It explains mistakes, offers hints, and suggests next steps—encouraging learning without giving away answers." },
    { q: "Can parents track progress?", a: "Yes. Parents get dashboards and weekly summaries showing activity and achievements." },
    { q: "Is this safe for kids?", a: "Yes. Student accounts are protected, and content is moderated and age‑appropriate." },
    { q: "Can teachers use this in class?", a: "Absolutely. Classroom tools help assign lessons, track progress, and run projects." },
    { q: "Which languages are included?", a: "Start with HTML/CSS and Python. More tracks are added regularly." },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently asked questions</h2>
          <p className="mt-3 text-gray-600">Simple answers for parents, teachers and kids.</p>
        </div>
        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
          {items.map((item) => (
            <div key={item.q} className="p-6">
              <div className="font-semibold text-gray-900">{item.q}</div>
              <div className="mt-2 text-gray-600 text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
