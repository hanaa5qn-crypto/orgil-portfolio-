export interface Project {
  id: string;
  title: string;
  category: 'Narrative' | 'Commercial' | 'Color Grade' | 'Music Video';
  year: string;
  client?: string;
  role: string;
  thumbnail: string;
  videoUrl?: string;
  description: string;
  specs: {
    camera: string;
    lens: string;
    colorSpace: string;
    aspectRatio: string;
  };
  tags: string[];
}

export interface StoryboardScene {
  id: string;
  sceneNumber: string;
  title: string;
  description: string;
  shotType: string;
  cameraMovement: string;
  imageUrl: string;
  duration: string;
}

export interface CritiqueItem {
  id: string;
  title: string;
  timestamp: string;
  score: number;
  type: 'Composition' | 'Pacing' | 'Color Balance' | 'Lighting';
  feedback: string;
  suggestion: string;
}

export interface ColorPreset {
  id: string;
  name: string;
  description: string;
  filterStyle: string;
  accentColor: string;
  contrast: number;
  saturation: number;
  temperature: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  content: string[];
  tags: string[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  budget: string;
  timeline: string;
  details: string;
}
