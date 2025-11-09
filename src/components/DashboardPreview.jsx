import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Flame, Clock, Music2 } from 'lucide-react';

const Chip = ({ children }) => (
  <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/90 text-xs border border-white/15">
    {children}
  </span>
);

const Card = ({ title, children }) => (
  <div className="rounded-2xl p-4 md:p-5 bg-white/10 backdrop-blur border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
    <h3 className="text-white/90 font-medium mb-3" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{title}</h3>
    {children}
  </div>
);

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="max-w-6xl mx-auto px-4 -mt-10 md:-mt-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-5 gap-5"
      >
        {/* Left column */}
        <div className="md:col-span-3 space-y-5">
          <Card title="Today's Reviews">
            <div className="space-y-3">
              {[
                { name: 'Organic Chem: Alkanes', due: 'in 3h' },
                { name: 'World War II causes', due: 'tomorrow' },
                { name: 'Linear Algebra: Eigenvalues', due: 'in 1d' },
              ].map((t, i) => (
                <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2 border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80 shadow"></span>
                    <p className="text-white/90 text-sm">{t.name}</p>
                  </div>
                  <Chip>Next review {t.due}</Chip>
                </div>
              ))}
            </div>
            <button className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 hover:bg-emerald-400/25 transition">
              <PlusCircle className="h-4 w-4" /> Add Topic
            </button>
          </Card>

          <Card title="Study Tools">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="h-4 w-4" /> Pomodoro
                </div>
                <p className="text-xs text-white/70 mt-2">25/5 with soft chime</p>
              </div>
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-white/90">
                  <Music2 className="h-4 w-4" /> Rain Player
                </div>
                <p className="text-xs text-white/70 mt-2">gentle drizzle loop</p>
              </div>
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-white/90">
                  <Flame className="h-4 w-4" /> Streaks
                </div>
                <p className="text-xs text-white/70 mt-2">Keep the glow alive!</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 space-y-5">
          <Card title="Streak">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-amber-300/30 border border-amber-200/30 grid place-items-center shadow-inner">
                <Flame className="h-8 w-8 text-amber-200" />
              </div>
              <div>
                <p className="text-4xl font-semibold text-white">7</p>
                <p className="text-xs text-white/70">days in a row</p>
              </div>
            </div>
          </Card>
          <Card title="Progress">
            <div className="h-28 grid grid-rows-3 gap-2">
              {[60, 40, 75].map((p, i) => (
                <div key={i} className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-300 to-sky-300 rounded-full" style={{ width: `${p}%` }} />
                </div>
              ))}
              <p className="text-xs text-white/70 mt-2">Smooth progress bars instead of charts for now.</p>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardPreview;
