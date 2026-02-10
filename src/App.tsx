import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Corporate from "./pages/Corporate";
import Programs from "./pages/Programs";
import Exercise from "./pages/Exercise";
import BodyComposition from "./pages/BodyComposition";
import Nutrition from "./pages/Nutrition";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/exercise" element={<Exercise />} />
              <Route path="/body-composition" element={<BodyComposition />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/booking" element={<Booking />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
