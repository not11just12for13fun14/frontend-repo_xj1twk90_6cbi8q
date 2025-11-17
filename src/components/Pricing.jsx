export default function Pricing(){
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Plans for every learner</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade anytime. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Tier name="Student" price="$9/mo" highlight
            perks={["All beginner tracks","Real‑time editor","Quizzes & challenges","AI tutor (daily hints)","Progress dashboard"]}
            cta="Try Free" />
          <Tier name="Parent" price="$15/mo"
            perks={["Everything in Student","Parent monitoring","Weekly summaries","Extra AI tutor hints","Project mentoring tips"]}
            cta="Try Free" />
          <Tier name="Teacher" price="$49/mo"
            perks={["Classroom management","Assignments & grading","Up to 30 students","Standards alignment","Priority support"]}
            cta="Try Free" />
          <Tier name="School" price="Custom"
            perks={["All teacher features","SIS/LMS integrations","SSO","Admin analytics","Dedicated onboarding"]}
            cta="Contact Sales" />
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">14‑day refund window. No credit card required for trial.</p>
      </div>
    </section>
  );
}

function Tier({ name, price, perks, cta, highlight }){
  return (
    <div className={`p-6 rounded-xl border ${highlight ? 'border-blue-300 bg-white shadow-md' : 'border-gray-100 bg-white shadow-sm'}`}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <div className="text-2xl font-bold text-gray-900">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {perks.map((p) => (<li key={p} className="flex items-start gap-2"><span className="text-blue-600">•</span> {p}</li>))}
      </ul>
      <a href="#" className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-md font-semibold ${highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-black'}`}>{cta}</a>
    </div>
  );
}
