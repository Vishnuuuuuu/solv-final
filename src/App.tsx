import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { DisclaimerProvider } from "./components/DisclaimerManager";
import { DisclaimerPopup } from "./components/DisclaimerPopup";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AboutUs } from "./pages/AboutUs";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Disclaimer } from "./pages/Disclaimer";
import { LandingPage } from "./pages/LandingPage";
import { Services } from "./pages/Services";
import { AdminBlogs } from "./pages/admin/AdminBlogs";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminJobs } from "./pages/admin/AdminJobs";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { CreateBlog } from "./pages/admin/CreateBlog";
import { CreateJob } from "./pages/admin/CreateJob";
import { EditBlog } from "./pages/admin/EditBlog";
import { EditJob } from "./pages/admin/EditJob";
import { TagManagement } from "./pages/admin/TagManagement";
import { UserManagement } from "./pages/admin/UserManagement";
import { PreLitigationAdvisory } from "./pages/services/PreLitigationAdvisory";
import { RealEstateServices } from "./pages/services/RealEstateServices";
import { TaxComplianceServices } from "./pages/services/TaxComplianceServices";
import { PersonalFamilyServices } from "./pages/services/PersonalFamilyServices";
import { DisputeResolutionServices } from "./pages/services/DisputeResolutionServices";
import { CorporateCommercialServices } from "./pages/services/CorporateCommercialServices";
import { IntellectualPropertyServices } from "./pages/services/IntellectualPropertyServices";
import { QuickLegalServices } from "./pages/services/QuickLegalServices";
import { LegalConsultation } from "./pages/services/quick/LegalConsultation";
import { LegalNotice } from "./pages/services/quick/LegalNotice";
import { LegalOpinion } from "./pages/services/quick/LegalOpinion";
import { ContractDrafting } from "./pages/services/quick/ContractDrafting";
import { PropertyPurchaseAgreement } from "./pages/services/realestate/PropertyPurchaseAgreement";
import { PropertySaleAgreement } from "./pages/services/realestate/PropertySaleAgreement";
import { GSTRegistration } from "./pages/services/tax/GSTRegistration";
import { IncomeTaxFiling } from "./pages/services/tax/IncomeTaxFiling";
import { TDSReturnFiling } from "./pages/services/tax/TDSReturnFiling";
import { CorporateTaxAdvisory } from "./pages/services/tax/CorporateTaxAdvisory";

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// WhatsApp Button Component
const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/919880012694"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-16 right-6 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition z-[9999] flex items-center justify-center"
    style={{ fontSize: "2rem" }}
    aria-label="Chat on WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5l-1.4 5.1 5.23-1.37c1.46.8 3.1 1.22 4.83 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.93 14.25c-.25.7-1.23 1.3-2.02 1.48-.54.11-1.23.2-3.57-.77-3-1.24-4.9-4.27-5.05-4.47-.15-.2-1.2-1.6-1.2-3.05s.75-2.17 1.02-2.47c.25-.3.55-.38.75-.38s.37 0 .53.01c.17.01.4-.07.63.48.25.6.86 2.08.93 2.23.08.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.46.51-.15.15-.3.32-.13.62.17.3.75 1.23 1.6 1.99 1.1.98 2.03 1.29 2.33 1.44.3.15.48.13.65-.07.2-.25.75-.87.95-1.17.2-.3.4-.25.68-.15.3.1 1.77.83 2.07.98.3.15.5.22.58.35.08.15.08.73-.17 1.43z" />
    </svg>
  </a>
);

// Component to conditionally render Navigation and Footer
const ConditionalLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
};
function App() {
  return (
    <DisclaimerProvider>
      <Router>
        <ScrollToTop />
        <DisclaimerPopup />
        <div className="min-h-screen bg-slate-50">
          <ConditionalLayout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/quick-legal-services"
                element={<QuickLegalServices />}
              />
              <Route
                path="/services/quick-legal-services/consultation"
                element={<LegalConsultation />}
              />
              <Route
                path="/services/quick-legal-services/legal-notice"
                element={<LegalNotice />}
              />
              <Route
                path="/services/quick-legal-services/legal-opinion"
                element={<LegalOpinion />}
              />
              <Route
                path="/services/quick-legal-services/contract-drafting"
                element={<ContractDrafting />}
              />
              <Route
                path="/services/tax-compliance"
                element={<TaxComplianceServices />}
              />
              <Route
                path="/services/personal-family"
                element={<PersonalFamilyServices />}
              />
              <Route
                path="/services/dispute-resolution"
                element={<DisputeResolutionServices />}
              />
              <Route
                path="/services/corporate-commercial"
                element={<CorporateCommercialServices />}
              />
              <Route
                path="/services/intellectual-property"
                element={<IntellectualPropertyServices />}
              />
              <Route
                path="/services/real-estate"
                element={<RealEstateServices />}
              />
              <Route
                path="/services/dispute-resolution/pre-litigation-advisory"
                element={<PreLitigationAdvisory />}
              />
              {/* Tax Service Detail Pages */}
              <Route
                path="/services/tax-compliance/gst-registration"
                element={<GSTRegistration />}
              />
              <Route
                path="/services/tax-compliance/income-tax-filing"
                element={<IncomeTaxFiling />}
              />
              <Route
                path="/services/tax-compliance/tds-return-filing"
                element={<TDSReturnFiling />}
              />
              <Route
                path="/services/tax-compliance/corporate-tax-advisory"
                element={<CorporateTaxAdvisory />}
              />
              {/* Real Estate Service Detail Pages */}
              <Route
                path="/services/real-estate/property-sale-agreement"
                element={<PropertySaleAgreement />}
              />
              <Route
                path="/services/real-estate/property-purchase-agreement"
                element={<PropertyPurchaseAgreement />}
              />
              <Route path="/blog" element={<Blog />} />
              {/* Redirect old research route to blog */}
              <Route
                path="/research"
                element={<Navigate to="/blog" replace />}
              />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Admin Login Routes - NOT PROTECTED */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/login" element={<AdminLogin />} />

              {/* Protected Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blogs"
                element={
                  <ProtectedRoute>
                    <AdminBlogs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blogs/create"
                element={
                  <ProtectedRoute>
                    <CreateBlog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blogs/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditBlog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/jobs"
                element={
                  <ProtectedRoute>
                    <AdminJobs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/jobs/create"
                element={
                  <ProtectedRoute>
                    <CreateJob />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/jobs/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditJob />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <ProtectedRoute>
                    <UserManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/tags"
                element={
                  <ProtectedRoute>
                    <TagManagement />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </ConditionalLayout>
        </div>
      </Router>
    </DisclaimerProvider>
  );
}

export default App;
