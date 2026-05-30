import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, Lightbulb, Trophy, ChevronUp, Check, Plus } from 'lucide-react';

export default function KeyContributions({ employee }) {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [showAll]);

  const contributions = [
    {
      title: "Deliverables Completed",
      value: employee.deliverablesCompleted,
      icon: <CheckCircle2 className="text-primary" size={24} />,
      bgColor: "bg-primary/10",
      description: "On-time delivery rate: 98%"
    },
    {
      title: "Original Contributions",
      value: employee.originalContributions,
      icon: <Lightbulb className="text-warning" size={24} />,
      bgColor: "bg-warning/10",
      description: "2 adopted by wider team"
    },
    {
      title: "Top Achievement",
      value: "Process Optimization",
      icon: <Trophy className="text-success" size={24} />,
      bgColor: "bg-success/10",
      description: "Saved 14hrs/week across team"
    }
  ];

  const portfolioItems = [
    "Process Validation Protocol",
    "Equipment Qualification Matrix",
    "Yield Optimization Report",
    "Deviation Investigation SOP",
    "Regulatory Review Tracker",
    "Production Planning Framework",
    "Capacity Utilization Dashboard",
  ];

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-end">
        <h3 className="text-xl font-bold text-foreground">Key Contributions & Impact</h3>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-sm font-medium text-primary hover:underline"
        >
          {showAll ? 'Collapse' : 'View All Contributions'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contributions.map((item, index) => (
          <div key={index} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-lg ${item.bgColor}`}>
                {item.icon}
              </div>
              <h4 className="font-semibold text-muted-foreground text-sm">{item.title}</h4>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Contribution Portfolio */}
      <div 
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: showAll ? `${contentHeight}px` : '0px', opacity: showAll ? 1 : 0 }}
      >
        <div ref={contentRef} className="bg-card border border-border rounded-xl p-6">
          <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Contribution Portfolio</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {portfolioItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                  <Check size={12} className="text-success" />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-border flex items-center gap-2 text-muted-foreground">
            <Plus size={14} />
            <span className="text-sm">9 Additional Deliverables</span>
          </div>
        </div>
      </div>
    </section>
  );
}
