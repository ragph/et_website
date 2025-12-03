import { lazy, Suspense } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { FullLayout, BlankLayout } from '../layouts';
import { Box, CircularProgress } from '@mui/material';
import { ROUTES } from '../utils/constants';

// Lazy load components
const LandingPage = lazy(() => import('../views/landing/LandingPage'));
const Home = lazy(() => import('../views/pages/Home'));
const Dashboard = lazy(() => import('../views/dashboards/DefaultDashboard'));
const Login = lazy(() => import('../views/authentication/Login'));
const Register = lazy(() => import('../views/authentication/Register'));
const ForgotPassword = lazy(() => import('../views/authentication/ForgotPassword'));
const Profile = lazy(() => import('../views/pages/Profile'));
const Settings = lazy(() => import('../views/pages/Settings'));
const UsersTable = lazy(() => import('../views/tables/UsersTable'));
const AnalyticsChart = lazy(() => import('../views/charts/AnalyticsChart'));
const ButtonsDemo = lazy(() => import('../views/ui-components/ButtonsDemo'));
const Map = lazy(() => import('../views/pages/map/Map'));
const TouristSpotDetails = lazy(() => import('../views/pages/map/TouristSpotDetails'));
const FAQs = lazy(() => import('../views/pages/FAQs'));
const TermsOfService = lazy(() => import('../views/pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('../views/pages/PrivacyPolicy'));

// Loading component
const Loader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
);

// Wrap lazy components with Suspense
const SuspenseWrapper = ({ children }: { children: React.ReactElement }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export const routes: RouteObject[] = [
  // Public landing page (no layout wrapper)
  {
    path: '/',
    element: (
      <SuspenseWrapper>
        <LandingPage />
      </SuspenseWrapper>
    ),
  },
  // Public routes with BlankLayout
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: (
          <SuspenseWrapper>
            <Login />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.REGISTER,
        element: (
          <SuspenseWrapper>
            <Register />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        element: (
          <SuspenseWrapper>
            <ForgotPassword />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.MAP,
        element: (
          <SuspenseWrapper>
            <Map />
          </SuspenseWrapper>
        ),
      },
      {
        path: '/details/:regionName/:province/:spotName',
        element: (
          <SuspenseWrapper>
            <TouristSpotDetails />
          </SuspenseWrapper>
        ),
      },
      {
        path: '/faqs',
        element: (
          <SuspenseWrapper>
            <FAQs />
          </SuspenseWrapper>
        ),
      },
      {
        path: '/terms-of-service',
        element: (
          <SuspenseWrapper>
            <TermsOfService />
          </SuspenseWrapper>
        ),
      },
      {
        path: '/privacy-policy',
        element: (
          <SuspenseWrapper>
            <PrivacyPolicy />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  // Protected routes with FullLayout (moved to /app prefix)
  {
    path: '/app',
    element: (
      <ProtectedRoute>
        <FullLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Navigate to="/app/dashboard" replace />,
      },
      {
        path: 'home',
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <SuspenseWrapper>
            <Dashboard />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'profile',
        element: (
          <SuspenseWrapper>
            <Profile />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'settings',
        element: (
          <SuspenseWrapper>
            <Settings />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'tables/users',
        element: (
          <SuspenseWrapper>
            <UsersTable />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'charts/analytics',
        element: (
          <SuspenseWrapper>
            <AnalyticsChart />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'ui-components/buttons',
        element: (
          <SuspenseWrapper>
            <ButtonsDemo />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  // Catch all - redirect to landing page
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];
