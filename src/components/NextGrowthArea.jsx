import { Target } from 'lucide-react';

export default function NextGrowthArea({ employee }) {
  const gap = employee.primaryGrowthGap;
  const match = gap.match(/(.*)\s\((\d+)\/(\d+)\)/);
  const gapName = match ? match[1] : gap;
  const current = match ? parseInt(match[2]) : 52;
  const required = match ? parseInt(match[3]) : 60;
  const percentage = Math.round((current / required) * 100);

  return (
    <section className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-destructive/10 rounded-lg text-destructive">
          <Target size={20} />
        </div>
        <h3 className="text-xl font-bold text-foreground">Next Growth Area</h3>
      </div>
      
      <div className="mt-2">
        <p className="text-sm font-medium text-muted-foreground mb-1">Primary Capability Gap</p>
        <p className="text-lg font-semibold text-foreground">{gapName}</p>
        
        <div className="mt-5 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-muted-foreground">Current: {current}</span>
            <span className="font-medium text-foreground">Goal: {required}</span>
          </div>
          <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-destructive rounded-full transition-all duration-1000" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-xs font-medium text-destructive mt-1">Needs +{required - current} points to reach {employee.projectedLevel} threshold.</p>
        </div>
        
        <div className="mt-6 p-4 bg-muted/30 border border-border rounded-lg">
          <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Recommended Focus</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Increase framework application through structured project reviews and cross-functional planning exercises.
          </p>
        </div>
      </div>
    </section>
  );
}
