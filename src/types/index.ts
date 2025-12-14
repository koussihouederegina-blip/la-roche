export interface Page {
  id: string;
  title: string;
  component: React.ComponentType;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image?: string;
  details?: string[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
}

export interface Strength {
  id: string;
  title: string;
  description: string;
  icon: string;
}
