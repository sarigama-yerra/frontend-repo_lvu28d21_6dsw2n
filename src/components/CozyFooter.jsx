import React from 'react';

const CozyFooter = () => {
  return (
    <footer className="mt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5 flex items-center justify-between">
          <p className="text-white/80" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
            Made with calm vibes • Stay curious ✦
          </p>
          <div className="flex gap-2">
            <span className="h-6 w-6 rounded-full bg-white/30" />
            <span className="h-6 w-6 rounded-full bg-white/20" />
            <span className="h-6 w-6 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CozyFooter;
