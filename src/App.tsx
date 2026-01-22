import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { CaseStudyDetail } from './components/CaseStudyDetail';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  if (selectedCaseStudy) {
    return <CaseStudyDetail caseStudyId={selectedCaseStudy} onBack={() => setSelectedCaseStudy(null)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <CaseStudies onSelectCaseStudy={setSelectedCaseStudy} />
      <Experience />
      <Skills />
      <Tools />
      <Contact />
    </div>
  );
}
