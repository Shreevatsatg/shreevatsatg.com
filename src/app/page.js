import HomePage from "./HomePage";

// Define metadata for this page
export const metadata = {
  title: 'Shreevatsa TG | Shreevatsatg | Shreevatsa | Developer & Artist Portfolio',
  description: 'Welcome to the portfolio of Shreevatsa TG (Shreevatsatg). A BCA student and web developer from Bangalore specializing in creative digital solutions and artwork.',
  keywords: ['Shreevatsa', 'Shreevatsatg', 'Shreevatsa TG', 'web developer', 'artist', 'BCA student', 'portfolio', 'Bangalore', 'India'],
  alternates: {
    canonical: 'https://www.shreevatsatg.com',
  },
  openGraph: {
    title: 'Shreevatsa TG | Shreevatsatg | Shreevatsa | Developer & Artist Portfolio',
    description: 'Welcome to the portfolio of Shreevatsa TG (Shreevatsatg). A BCA student and web developer from Bangalore specializing in creative digital solutions and artwork.',
  }
};

// Server Component that renders the client component
export default function Page() {
  return <HomePage />;
} 