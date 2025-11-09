import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sample = [
  {
    type: 'mcq',
    q: 'Which reagent primarily converts alkenes to diols?',
    options: ['KMnO4 (cold, dilute)', 'H2, Pt', 'HBr', 'SOCl2'],
    a: 0,
  },
  {
    type: 'short',
    q: 'Derivative of sin(x) is __?',
    a: 'cos(x)',
  },
];

const QuizPreview = () => {
  const [i, setI] = useState(0);
  const [input, setInput] = useState('');

  const q = sample[i];
  const isLast = i === sample.length - 1;

  const submit = () => {
    if (q.type === 'mcq') {
      setI((v) => Math.min(v + 1, sample.length - 1));
    } else {
      setI((v) => Math.min(v + 1, sample.length - 1));
      setInput('');
    }
  };

  const progress = ((i + 1) / sample.length) * 100;

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="rounded-2xl p-6 bg-white/10 backdrop-blur border border-white/20" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-medium" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Quick Quiz</h3>
          <div className="w-40 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-lime-300 to-sky-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-white/90 text-lg">{q.q}</p>

            {q.type === 'mcq' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map((op, idx) => (
                  <button
                    key={op}
                    onClick={submit}
                    className="text-left px-4 py-3 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 text-white/90"
                  >
                    {op}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your answer"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/50 focus:outline-none"
                />
                <button onClick={submit} className="px-4 py-3 rounded-xl bg-sky-400/30 text-white border border-sky-300/30">
                  Submit
                </button>
              </div>
            )}

            {isLast && (
              <p className="text-emerald-200 text-sm mt-2">Nice! This is just a preview — the real app will use AI to generate personalized questions.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuizPreview;
