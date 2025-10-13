
export interface Artwork {
  id: number;
  title: string;
  medium: string;
  category: string;
  image: string;
  description: string;
  year: number;
}

export const artworks: Artwork[] = [
  {
     id: 1,
    title: 'Oil painting of krishna',
    medium: 'oil paint',
    category: 'painting',
    image: '/drawing/krishna.webp',
    description: 'A serene oil painting depicting the divine figure of Krishna, blending traditional Indian art styles with contemporary techniques,🎨✨ Captivated by the divine beauty of Krishna ✨🌿 Embracing the colors of spirituality in this oil painting. 🙏',
    year: 2024,
  },
  {
    id: 2,
    title: 'krishna painting',
    medium: 'Oil Paint',
    category: 'painting',
    image: '/drawing/krishna2.webp',
    description: 'A captivating oil painting of Krishna, showcasing intricate details and vibrant colors that bring the divine figure to life,Even gods need a moment to relax and recharge ✨',
    year: 2023,
  },
  {
    id: 3,
    title: 'horse drawing',
    medium:'Pencil',
    category: 'drawing',
    image: '/drawing/pencilhorse.webp',
    description: 'A detailed pencil drawing of a horse, capturing the grace and strength of the animal with intricate shading and lifelike textures.',
    year: 2024,
  },
  {
    id: 4,
    title: 'potrait study',
    medium: 'pencil',
    category: 'drawing',
    image: '/drawing/potrait.webp',
    description: 'A realistic pencil drawing study of a human face, focusing on light and shadow to create depth and emotion.',
    year: 2022,
  },
    {
    id: 5,
    title: 'Abstract ',
    medium: 'pencil',
    category: 'drawing',
    image: '/drawing/abstract.webp',
    description: 'An abstract representation of human emotions through bold colors and Abstract geometric composition,What lies beneath the surface? What masks do we wear to hide our true selves? What lies beneath the surface of your own personality? What masks do you wear to hide your true self from others or even from yourself,Answers might be defferent for everyone but its important for you to find your answers',
    year: 2022,
  },
    {
    id: 6,
    title: 'Oil painting ',
    medium: 'oil paint',
    category: 'painting',
    image: '/drawing/budha.webp',
    description: 'A vibrant oil painting capturing the essence of buddha with a modern twist, blending traditional techniques with modern aesthetics.',
    year: 2023,
  },
];
