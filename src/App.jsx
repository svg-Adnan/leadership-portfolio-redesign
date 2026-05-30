import { ThemeProvider } from './ThemeProvider';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import KeyContributions from './components/KeyContributions';
import CareerOutlook from './components/CareerOutlook';
import NextGrowthArea from './components/NextGrowthArea';
import AdditionalInsights from './components/AdditionalInsights';

function App() {
  const employeeData = {
    name: "Rajan Iyer",
    role: "Production Planning Lead",
    month: "October",
    currentLevel: "V2",
    projectedLevel: "V3",
    growthStatus: "Ahead of Plan",
    scoreImprovement: {
      current: 71,
      previous: 64
    },
    deliverablesCompleted: 16,
    originalContributions: 7,
    primaryGrowthGap: "Framework Application (52/60)",
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-muted/30 pb-12 font-sans selection:bg-primary/30">
        <Header employee={employeeData} />
        
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <HeroSection employee={employeeData} />
          
          <KeyContributions employee={employeeData} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CareerOutlook employee={employeeData} />
            <NextGrowthArea employee={employeeData} />
          </div>
          
          <div className="max-w-3xl mx-auto w-full">
            <AdditionalInsights />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
