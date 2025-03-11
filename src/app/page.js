import { Metadata } from "next";
import HomePage from "./HomePage";

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

export default function Page() {
  return <HomePage />;
} 