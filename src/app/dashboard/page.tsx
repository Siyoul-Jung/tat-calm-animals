// src/app/dashboard/page.tsx
'use client';

import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle2, Lock, ChevronRight, Award, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Dashboard() {
  const sections = [
    {
      title: "Start Here",
      description: "New to TAT®? Begin your journey with these essential onboarding sessions.",
      status: "In Progress",
      lessons: [
        { title: "Introduction to TAT® Calm", duration: "5 min", completed: true },
        { title: "Working with Your Animal", duration: "8 min", completed: false },
        { title: "Setting Your Intention", duration: "4 min", completed: false },
      ]
    },
    {
      title: "Foundational",
      description: "Core techniques for daily relief and long-term grounding.",
      status: "Locked",
      lessons: [
        { title: "The Signature 2-Minute Calm", duration: "2 min", completed: false },
        { title: "Addressing Separation Anxiety", duration: "12 min", completed: false },
        { title: "Evening Wind-down", duration: "10 min", completed: false },
      ]
    },
    {
      title: "Go Deeper",
      description: "Advanced sessions for complex situations and professional-level healing.",
      status: "Premium",
      lessons: [
        { title: "Trauma Release for Rescues", duration: "25 min", completed: false },
        { title: "Deep Bonding Ceremonies", duration: "30 min", completed: false },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-charcoal mb-2">Practice Hub</h1>
            <p className="text-charcoal/60 text-lg">Welcome back. Continue your healing journey today.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-brand/10 px-6 py-3 rounded-2xl border border-brand/20 flex items-center gap-3">
              <Award className="text-brand w-6 h-6" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand">Experience Level</p>
                <p className="text-sm font-bold text-charcoal">Beginner Explorer</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {sections.map((section, idx) => (
              <motion.section 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/50 rounded-[2.5rem] p-8 border border-brand-light/30 shadow-sm relative overflow-hidden"
              >
                {section.status === "Locked" && (
                   <div className="absolute inset-0 bg-cream/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                      <div className="bg-white p-6 rounded-3xl shadow-xl border border-brand-light flex flex-col items-center gap-3">
                         <Lock className="w-8 h-8 text-charcoal/40" />
                         <p className="font-bold text-charcoal">Complete Start Here to Unlock</p>
                         <Button variant="outline" size="sm">View Requirements</Button>
                      </div>
                   </div>
                )}

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-2">{section.title}</h2>
                    <p className="text-charcoal/60 max-w-md">{section.description}</p>
                  </div>
                  <span className={idx === 0 ? "text-brand font-bold text-xs uppercase tracking-widest bg-brand/10 px-3 py-1 rounded-full" : "text-charcoal/40 font-bold text-xs uppercase tracking-widest"}>
                    {section.status}
                  </span>
                </div>

                <div className="space-y-3">
                  {section.lessons.map((lesson) => (
                    <div 
                      key={lesson.title} 
                      className={`group flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                        lesson.completed ? 'bg-brand/5 border-brand/20' : 'bg-white border-brand-light/20 hover:border-brand/40 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {lesson.completed ? <CheckCircle2 className="w-6 h-6 text-brand" /> : <PlayCircle className="w-6 h-6 text-charcoal/30 group-hover:text-brand transition-colors" />}
                        <div>
                          <p className={`font-semibold ${lesson.completed ? 'text-charcoal/60' : 'text-charcoal'}`}>{lesson.title}</p>
                          <div className="flex items-center gap-4 mt-1 text-xs text-charcoal/40">
                             <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {lesson.duration}</span>
                             <span>Video Lesson</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-charcoal/20 group-hover:text-brand transition-all group-hover:translate-x-1" />
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          <aside className="space-y-8">
            <div className="bg-charcoal text-cream p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-brand/20 rounded-full blur-[60px] group-hover:scale-110 transition-transform duration-700" />
               <h3 className="text-xl font-bold mb-4 relative z-10">Live Support</h3>
               <p className="text-cream/60 mb-8 text-sm leading-relaxed relative z-10">
                 Join our weekly live sessions for personalized guidance on your animal&apos;s healing.
               </p>
               <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md mb-8 relative z-10">
                  <p className="text-xs font-bold text-brand uppercase tracking-widest mb-1">Next Session</p>
                  <p className="text-sm font-medium">Thursday, March 27 · 10:00 AM PST</p>
               </div>
               <Button className="w-full relative z-10" variant="primary">Add to Calendar</Button>
            </div>

            <div className="p-8 rounded-[2.5rem] border border-brand-light bg-brand-light/10">
               <h3 className="text-lg font-bold mb-4 text-charcoal">Your Progress</h3>
               <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-tighter">
                      <span>Course Completion</span>
                      <span>12%</span>
                    </div>
                    <div className="h-2 bg-brand-light/30 rounded-full overflow-hidden">
                       <div className="h-full bg-brand w-[12%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-tighter">
                      <span>Technique Mastery</span>
                      <span>40%</span>
                    </div>
                    <div className="h-2 bg-brand-light/30 rounded-full overflow-hidden">
                       <div className="h-full bg-brand w-[40%]" />
                    </div>
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
