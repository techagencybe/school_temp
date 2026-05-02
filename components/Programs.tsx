const programs = [
    { title: "Crèche", desc: "Staffed with trained and qualified caregivers for our littlest ones.", icon: "👶" },
    { title: "Primary School", desc: "Providing a holistic education and a world-class foundation.", icon: "🏫" },
    { title: "High School", desc: "Encouraging initiative, responsibility, and academic rigor.", icon: "🎓" },
    { title: "Pre-University", desc: "Study in Nigeria, Graduate in Canada through our partnership.", icon: "🌍" },
];

export default function Programs() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-16 text-blue-900">Our Academic Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {programs.map((p) => (
                        <div key={p.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-left">
                            <div className="text-4xl mb-4">{p.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                            <button className="mt-6 text-blue-900 font-semibold text-sm hover:underline">Learn More →</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}