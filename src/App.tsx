import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import PromptEngineering from "./pages/PromptEngineering";
import ProofPack from "./pages/ProofPack";
import Story from "./pages/Story";
import CompassionEconomy from "./pages/CompassionEconomy";
import ComingSoon from "./pages/ComingSoon";
import Waitlist from "./pages/Waitlist";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import ChildSafety from "./pages/ChildSafety";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/prompt-engineering" element={<PromptEngineering />} />
          <Route path="/proof-pack" element={<ProofPack />} />
          <Route path="/story" element={<Story />} />
          <Route path="/compassion-economy" element={<CompassionEconomy />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/child-safety" element={<ChildSafety />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
