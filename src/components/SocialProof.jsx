export default function SocialProof(){
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Loved by students, trusted by parents and teachers</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <Quote text="I built my first game in a week! The AI tips helped me fix bugs fast." author="Maya, 13"/>
              <Quote text="My son finally enjoys learning. The weekly reports make it easy to follow his progress." author="Daniel, Parent"/>
              <Quote text="The classroom tools save me hours. My students are engaged and proud of their projects." author="Ms. Alvarez, CS Teacher"/>
              <Quote text="I used to think coding was too hard. Now it’s my favorite subject." author="Noah, 12"/>
            </div>
          </div>
          <div className="lg:pl-8">
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote({ text, author }){
  return (
    <div className="p-6 rounded-xl border border-gray-100 bg-gray-50">
      <p className="text-gray-800">“{text}”</p>
      <div className="mt-3 text-sm text-gray-600">— {author}</div>
    </div>
  );
}

function Stats(){
  const stats = [
    { label: "Students enrolled", value: "50,000+" },
    { label: "Projects created", value: "120,000+" },
    { label: "Schools using the platform", value: "1,200+" },
  ];
  return (
    <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">By the numbers</h3>
      <dl className="mt-4 space-y-3">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <dt className="text-sm text-gray-600">{s.label}</dt>
            <dd className="text-base font-semibold text-gray-900">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
