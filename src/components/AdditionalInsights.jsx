import { useState } from 'react';
import { ChevronDown, ChevronUp, BarChart3, AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function AdditionalInsights() {
  const [openSection, setOpenSection] = useState(null);
  const [showDetailedMetrics, setShowDetailedMetrics] = useState(false);
  const [showAllFeedback, setShowAllFeedback] = useState(false);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
      setShowDetailedMetrics(false);
      setShowAllFeedback(false);
    } else {
      setOpenSection(section);
      setShowDetailedMetrics(false);
      setShowAllFeedback(false);
    }
  };

  const kpiMetrics = [
    { name: "Schedule Adherence", value: "94%", target: "Target 90%", status: "exceeded", icon: <CheckCircle2 size={14} className="text-success" /> },
    { name: "Production Efficiency", value: "+8.4%", target: null, status: "exceeded", icon: <CheckCircle2 size={14} className="text-success" /> },
    { name: "Equipment Qualification", value: "10", target: "Target 8", status: "exceeded", icon: <CheckCircle2 size={14} className="text-success" /> },
    { name: "Batch Success Rate", value: "88%", target: "Target 92%", status: "below", icon: <AlertTriangle size={14} className="text-warning" /> },
    { name: "SOP Approvals", value: "7", target: "Target 5", status: "exceeded", icon: <CheckCircle2 size={14} className="text-success" /> },
  ];

  const challenges = [
    {
      title: "Challenge 1",
      issue: "Supply chain delays impacted planning during week 2.",
      action: "Implemented secondary supplier buffer strategy.",
      outcome: "Production remained stable for the remainder of the month."
    },
    {
      title: "Challenge 2",
      issue: "Framework application inconsistencies identified during project reviews.",
      action: "Enrolled in framework coaching sessions.",
      outcome: "Improvement plan created for next review cycle."
    }
  ];

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-bold text-foreground">Additional Insights</h3>
      
      {/* KPI Impact Summary */}
      <div className="bg-card border border-border rounded-xl transition-all">
        <button 
          onClick={() => toggleSection('kpi')}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors focus:outline-none rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <BarChart3 size={18} />
            </div>
            <span className="font-semibold text-foreground">KPI Impact Summary</span>
          </div>
          {openSection === 'kpi' ? <ChevronUp size={20} className="text-muted-foreground" /> : <ChevronDown size={20} className="text-muted-foreground" />}
        </button>
        
        {openSection === 'kpi' && (
          <div className="px-5 pb-5 pt-2 border-t border-border bg-muted/10 rounded-b-xl">
            <div className="mt-3 text-sm text-foreground leading-relaxed">
              <p className="font-semibold mb-2">KPI Performance Summary</p>
              <p className="text-muted-foreground">
                Rajan achieved 3 of 5 KPI targets this month. Schedule adherence exceeded expectations while production efficiency improved significantly. Remaining KPI gaps were largely influenced by operational constraints and are being actively addressed.
              </p>
            </div>
            <button 
              onClick={() => setShowDetailedMetrics(!showDetailedMetrics)}
              className="text-primary text-sm font-medium mt-4 hover:underline"
            >
              {showDetailedMetrics ? 'Hide Detailed Metrics' : 'View Detailed Metrics'}
            </button>

            {/* Expanded KPI Breakdown */}
            {showDetailedMetrics && (
              <div className="mt-4 space-y-2 animate-fadeSlideIn">
                <h5 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Detailed KPI Metrics</h5>
                {kpiMetrics.map((kpi, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      {kpi.icon}
                      <span className="text-sm font-medium text-foreground">{kpi.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-right">
                      <span className="text-sm font-bold text-foreground">{kpi.value}</span>
                      {kpi.target && (
                        <span className="text-xs text-muted-foreground">/ {kpi.target}</span>
                      )}
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        kpi.status === 'exceeded' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-warning/10 text-warning'
                      }`}>
                        {kpi.status === 'exceeded' ? '✓ Exceeded' : '⚠ Below Target'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Challenges & Learnings */}
      <div className="bg-card border border-border rounded-xl transition-all">
        <button 
          onClick={() => toggleSection('challenges')}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors focus:outline-none rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/10 rounded-lg text-warning">
              <AlertCircle size={18} />
            </div>
            <span className="font-semibold text-foreground">Challenges & Learnings</span>
          </div>
          {openSection === 'challenges' ? <ChevronUp size={20} className="text-muted-foreground" /> : <ChevronDown size={20} className="text-muted-foreground" />}
        </button>
        
        {openSection === 'challenges' && (
          <div className="px-5 pb-5 pt-2 border-t border-border bg-muted/10 rounded-b-xl">
            <p className="text-sm text-foreground mt-3 leading-relaxed">
              Encountered supply chain delays in week 2 which required rapid replanning. Learned to implement a secondary buffer strategy for high-risk components, which stabilized the production line for the remainder of the month.
            </p>
            <button 
              onClick={() => setShowAllFeedback(!showAllFeedback)}
              className="text-primary text-sm font-medium mt-4 hover:underline"
            >
              {showAllFeedback ? 'Hide Feedback' : 'View All Feedback'}
            </button>

            {/* Expanded Challenges Detail */}
            {showAllFeedback && (
              <div className="mt-4 space-y-4 animate-fadeSlideIn">
                {challenges.map((challenge, index) => (
                  <div key={index} className="p-4 bg-background rounded-lg border border-border space-y-3">
                    <h5 className="text-sm font-bold text-foreground">{challenge.title}</h5>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-muted-foreground">Issue: </span>
                        <span className="text-foreground">{challenge.issue}</span>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Action Taken: </span>
                        <span className="text-foreground">{challenge.action}</span>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Outcome: </span>
                        <span className="text-foreground">{challenge.outcome}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
