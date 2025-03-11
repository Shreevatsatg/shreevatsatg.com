import HomePage from "./HomePage";

// Define metadata for this page
export const metadata = {
  title: 'Shreevatsa TG | Developer & Artist Portfolio',
  description: 'Welcome to the portfolio of Shreevatsa TG, a BCA student and web developer specializing in creative digital solutions and artwork.',
  alternates: {
    canonical: 'https://www.shreevatsatg.com',
  },
  openGraph: {
    title: 'Shreevatsa TG | Developer & Artist Portfolio',
    description: 'Welcome to the portfolio of Shreevatsa TG, a BCA student and web developer specializing in creative digital solutions and artwork.',
  }
};

// Server Component that renders the client component
export default function Page() {
  return <HomePage />;
} 