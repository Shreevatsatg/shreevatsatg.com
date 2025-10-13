
import { useSEO } from '../hooks/useSEO';

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  useSEO({ title, description });

  return null;
};

export default SEO;
