import { useEffect, useRef, useState } from 'react';
import { Building2 } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
}

const timelineData: TimelineItem[] = [
  { year: '2021', title: 'Incorporated' },
  { year: '2023', title: 'Skylark' },
  { year: '2024', title: 'Vistaa' },
  { year: '2025', title: 'Essha vana' },
  { year: '2026', title: 'Araha' },
  { year: '2027', title: 'Merage Airport road' },
  { year: '2028', title: 'Dubai residences' },
  { year: '2029', title: 'A grade community Bangkok exp' },
  { year: '2030', title: 'Bharati meraki' },
];

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 h-full hidden md:block" />

      <div className="space-y-12">
        {timelineData.map((item, index) => {
          const isVisible = visibleItems.has(index);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`relative flex items-center ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                } transition-all duration-700 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-slate-100">
                  <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <span className="text-3xl font-bold text-slate-800">
                      {item.year}
                    </span>
                    <Building2 className="w-5 h-5 text-slate-600" />
                  </div>
                  <h3 className={`text-2xl font-semibold text-slate-700 ${isLeft ? 'text-right' : 'text-left'}`}>
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 hidden md:flex items-center justify-center z-10">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg transition-all duration-700 transform ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-slate-700" />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-5/12" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
