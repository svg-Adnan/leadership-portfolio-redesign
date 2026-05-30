import { useState, useRef, useEffect } from 'react';
import { TrendingUp, ArrowRight, ChevronUp } from 'lucide-react';

export default function HeroSection({ employee }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expanded]);

  return (
    <div className="space-y-0">
      <section className="bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 rounded-2xl p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold">
                <TrendingUp size={16} />
                <span>{employee.growthStatus}</span>
              </div>
              <div className="text-xs font-medium text-muted-foreground px-3 py-1 rounded-full bg-muted/50 border border-border">
                Current Level: {employee.currentLevel} <span className="mx-1 text-border">|</span> Projected: {employee.projectedLevel}
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground">Strongest Month Since Joining</h2>
            
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Rajan delivered his strongest month since joining, completing {employee.deliverablesCompleted} deliverables and contributing {employee.originalContributions} original improvements while moving ahead of the planned {employee.projectedLevel} trajectory. His consistent execution and process ownership helped accelerate team outcomes. Framework application remains the primary focus area for continued growth.
            </p>
            
            <button 
              onClick={() => setExpanded(!expanded)}
              className="group/btn inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors mt-2 text-sm"
            >
              {expanded ? 'Collapse Narrative' : 'Read Full Narrative'}
              {expanded 
                ? <ChevronUp size={16} className="transition-transform" /> 
                : <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              }
            </button>
          </div>
          
          <div className="flex-shrink-0 bg-card border border-border rounded-2xl p-6 text-center shadow-sm">
            <p className="text-sm font-medium text-muted-foreground mb-2">Score Improvement</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-extrabold text-foreground">{employee.scoreImprovement.current}</span>
              <span className="text-lg font-medium text-success">+{employee.scoreImprovement.current - employee.scoreImprovement.previous}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">From {employee.scoreImprovement.previous} last month</p>
          </div>
        </div>
      </section>

      {/* Expanded Monthly Reflection */}
      <div 
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: expanded ? `${contentHeight}px` : '0px', opacity: expanded ? 1 : 0 }}
      >
        <div ref={contentRef} className="mx-4 bg-card border border-t-0 border-primary/10 rounded-b-2xl p-6 space-y-4">
          <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Monthly Reflection</h4>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              This month represented Rajan's strongest performance since joining the organization.
            </p>
            <p>
              Key achievements included completing 16 deliverables, contributing 7 original improvements, and leading process optimization initiatives that reduced planning delays across the team.
            </p>
            <p>
              His consistent execution has placed him ahead of the planned V3 promotion trajectory.
            </p>
            <p>
              Primary development focus remains framework application, where additional growth is required to meet V3 readiness standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
