import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from '../pages/LandingPage';
import DashboardPage from '../pages/DashboardPage';
import LearnPage from '../pages/LearnPage';
import SubjectDetailPage from '../pages/SubjectDetailPage';
import PracticePage from '../pages/PracticePage';
import PracticeDetailPage from '../pages/PracticeDetailPage';
import ClinicPage from '../pages/ClinicPage';
import ClinicToolPage from '../pages/ClinicToolPage';
import AIPage from '../pages/AIPage';
import CommunityPage from '../pages/CommunityPage';
import CommunitySpacePage from '../pages/CommunitySpacePage';
import ResearchPage from '../pages/ResearchPage';
import WildlifePage from '../pages/WildlifePage';
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
        <Route path="/learn/:subjectId" element={<SubjectDetailPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/practice/:categorySlug" element={<PracticeDetailPage />} />
        <Route path="/clinic" element={<ClinicPage />} />
        <Route path="/clinic/:toolSlug" element={<ClinicToolPage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:spaceSlug" element={<CommunitySpacePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/wildlife" element={<WildlifePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
