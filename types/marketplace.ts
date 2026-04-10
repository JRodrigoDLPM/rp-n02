export type ProfessionalStatus = "online" | "busy" | "offline";

export interface Review {
  id: string;
  author: string;
  date: string;
  text: string;
  rating: number;
}

export interface Professional {
  id: string;
  name: string;
  title: string;
  category: string;
  categorySlug: string;
  bio: string;
  bioShort: string;
  rating: number;
  reviewCount: number;
  priceChat: number;
  priceVoice: number;
  priceVideo: number;
  image: string;
  status: ProfessionalStatus;
  videoAvailable: boolean;
  servicesCount: number;
  likes: number;
  repeatClients: number;
  queueCount: number;
  tagline: string;
  aboutServices: string;
  aboutMe: string;
  specialties: { label: string; icon: string }[];
  featuredReview: string;
  reviews: Review[];
}

export interface Category {
  slug: string;
  label: string;
  description: string;
  color: string;
}
