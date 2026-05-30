import { ArrowUpRight } from 'lucide-react';

export default function CareerOutlook({ employee }) {
  return (
    <section className="bg-card border border-border rounded-xl p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground">Career Outlook</h3>
          <p className="text-sm text-muted-foreground mt-1">Promotion trajectory to {employee.projectedLevel}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-3 py-1 bg-accent/50 text-accent-foreground text-xs font-semibold rounded-full border border-accent">
            Projected Promotion: {employee.projectedPromotion || "February 2027"}
          </div>
          <span className="text-xs font-medium text-success">{employee.monthsAheadOfPlan || 3} Months Ahead of Plan</span>
        </div>
      </div>
      
      <div className="relative pt-8 pb-4">
        {/* Track */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-2 bg-muted rounded-full"></div>
        {/* Progress */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[75%] h-2 bg-primary rounded-full transition-all duration-1000"></div>
        
        {/* Nodes */}
        <div className="relative flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-primary border-4 border-card z-10 shadow-sm"></div>
            <span className="text-sm font-semibold mt-2 text-foreground">{employee.currentLevel}</span>
            <span className="text-xs text-muted-foreground">Current</span>
          </div>
          
          <div className="flex flex-col items-center absolute left-[75%] -translate-x-1/2">
            <div className="w-6 h-6 rounded-full bg-card border-4 border-primary z-10 shadow-md flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            </div>
            <span className="text-sm font-semibold mt-2 text-primary">Now</span>
            <span className="text-xs text-primary/80">75% Ready</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-muted border-4 border-card z-10 shadow-sm"></div>
            <span className="text-sm font-semibold mt-2 text-muted-foreground">{employee.projectedLevel}</span>
            <span className="text-xs text-muted-foreground">Next</span>
          </div>
        </div>
      </div>
    </section>
  );
}
