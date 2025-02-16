import { ThemeProvider } from '@/components/theme-provider';
import { Routes } from '@/routes';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <Routes />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;