import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

export default function Header({ employee }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center py-6 px-8 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{employee.name}</h1>
        <div className="flex gap-3 text-sm text-muted-foreground mt-1 items-center">
          <span className="font-medium">{employee.role}</span>
          <span className="w-1 h-1 rounded-full bg-border"></span>
          <span>{employee.month} Portfolio</span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-right">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Current Level</p>
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary font-bold">
            {employee.currentLevel}
          </div>
        </div>
        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors text-foreground"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
