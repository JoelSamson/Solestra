import { LucideIcon } from 'lucide-react';

export enum ServiceCategory {
  WEB_DEV = 'Development',
  MARKETING = 'Marketing',
  ADMIN = 'Management',
  CONTENT = 'Creation'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: ServiceCategory;
  details: string[];
}

export interface GeneratedIdea {
  headline: string;
  strategy: string;
  tags: string[];
}
