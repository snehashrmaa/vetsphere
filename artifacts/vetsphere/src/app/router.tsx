import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from '../pages/LandingPage';
import DashboardPage from '../pages/DashboardPage';
import LearnPage from '../pages/LearnPage';
import PracticePage from '../pages/PracticePage';
import ClinicPage from '../pages/ClinicPage';
import AIPage from '../pages/AIPage';
import CommunityPage from '../pages/CommunityPage';
import ResearchPage from '../pages/ResearchPage';
import WildlifePage from '../pages/WildlifePage';
import CareerPage from '../pages/CareerPage';
import ProfilePage from '../pages/ProfilePage';
import SettingsPage from '../pages/SettingsPage';
import NotFoundPage from '../pages/not-found';

// Layouts
import LandingLayout from '../layouts/LandingLayout';
import DashboardLayout from '../layouts/DashboardLayout';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/clinic" element={<ClinicPage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/wildlife" element={<WildlifePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
