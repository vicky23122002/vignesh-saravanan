import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { caseStudyData } from './data/caseStudyData';

interface CaseStudyDetailProps {
  caseStudyId: string;
  onBack: () => void;
}

export function CaseStudyDetail({ caseStudyId, onBack }: CaseStudyDetailProps) {
  const study = caseStudyData[caseStudyId];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button onClick={onBack} className="btn-primary">
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className={`${study.color} py-24 px-6 lg:px-12`}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              {study.category} • {study.year}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {study.title}
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              {study.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Role</p>
                <p className="font-medium text-gray-900">{study.role}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Timeline</p>
                <p className="font-medium text-gray-900">{study.timeline}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Platform</p>
                <p className="font-medium text-gray-900">{study.platform}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Tools</p>
                <p className="font-medium text-gray-900">{study.tools}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem Statement</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{study.problem}</p>
        </div>
      </section>

      {/* Research */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Research & Insights</h2>
          <div className="space-y-4">
            {study.research.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">User Personas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {study.personas.map((persona, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{persona.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{persona.role}</p>
                <p className="text-gray-600 leading-relaxed">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Process</h2>
          <div className="space-y-12">
            {study.designProcess.map((step, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                <div className="bg-white rounded-xl p-8 flex items-center justify-center min-h-[300px]">
                  <span className="text-gray-300 text-6xl">{step.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {study.features.map((feature, index) => (
              <div key={index} className="border-l-4 border-gray-900 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Outcome & Learnings</h2>
          <div className="space-y-4">
            {study.outcome.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <button onClick={onBack} className="btn-primary">
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}
