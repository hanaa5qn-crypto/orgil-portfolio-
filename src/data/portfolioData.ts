import { Project, StoryboardScene, CritiqueItem, ColorPreset, JournalArticle } from '../types';

export const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";
export const FEATURE_MOTION_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

export const FEATURE_STORYBOARD_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCYOcuVrrN8niKC3FugcEUOGWEpSJZ2QGxqD4leg1QCZVwIWBgr8q0ZAr9iK7s4B-tUR5fb4JXW_JnlGJzrKNHBH1-TYaZb4iTl5LDbUeCxeI4PQ3vMPLoC60kfEKQAeyiqqT4PuM8NqXhQtcdunmA1iR6inwQHDdlHMttWABs_cZoqVm-5h-QCPrmujIqiTnHONrGI3G0nwCx_PnRImISAlxqFFIlqVS06sPxVKMy3IDKuoBYg3MeR";

export const FEATURE_ANALYSIS_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCFMzMUz_sHjGJ-bWsA9QsSgj2YyD0qZ1f2KejLfLU4trggcSnBwiUA--2cysC9LWnSSnmzKPATD9uW3vJpoPgwGdqleOM-4OjUj5Tyn24zuwkttJyDdbpAZZJxW-X6VXz39WYEgYhLHu1p6Nr8hc531zOwDlNujtz8sfuJSbrWc8wHohizYyO4PwlS-wG3t_g-n7u-App18eLxlcCvdEbAg5QgfTRtAvawn2BDKMgbVIClP_HnOWYY";

export const FEATURE_CAPSULE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBx4Pq6mwTa9EhTtuSeC9kVfGrIxh1O8KRalQt0wKtmfWqcsNoh0J8j6B7Rbx0FsYMJeG2uxdHNXKezU2_9oBV21jW1t2VVBP-t-xp4goHJ_SMwitPKmT9PXvkv2Q44cb_dop-nbZhG3rG4we8xmAuFkB-bO1lwGXkydoOmUn8V3KdGywSQsPLkPZNa_mbBtgK640FnLwJsJ3_bKVfZtBIUpmPxGptbcAgTwC7ahVLmE6zmwpFwLrXb";

export const COLOR_PRESETS: ColorPreset[] = [
  {
    id: 'nordic-monolith',
    name: 'Nordic Monolith',
    description: 'Subdued saturation with warm highlight roll-offs and deep crushed shadows.',
    filterStyle: 'contrast(120%) saturate(85%) hue-rotate(-10deg) sepia(15%)',
    accentColor: '#dedbc8',
    contrast: 1.2,
    saturation: 0.85,
    temperature: -10,
  },
  {
    id: 'tokyo-neon-noir',
    name: 'Tokyo Neon Noir',
    description: 'Teal shadows balanced against magenta midtones for urban nighttime aesthetics.',
    filterStyle: 'contrast(130%) saturate(120%) hue-rotate(170deg) brightness(95%)',
    accentColor: '#53e3d3',
    contrast: 1.3,
    saturation: 1.2,
    temperature: -25,
  },
  {
    id: 'analog-kodak-500t',
    name: 'Kodak Vision3 500T',
    description: 'Authentic 35mm tungsten grain structure with rich organic skin tones.',
    filterStyle: 'contrast(110%) saturate(105%) sepia(25%) hue-rotate(-5deg)',
    accentColor: '#f7bd7f',
    contrast: 1.1,
    saturation: 1.05,
    temperature: 15,
  },
  {
    id: 'bleach-bypass',
    name: 'Bleach Bypass',
    description: 'Silver halide retention technique resulting in high contrast and desaturated palette.',
    filterStyle: 'contrast(145%) saturate(50%) brightness(105%)',
    accentColor: '#e0e0e0',
    contrast: 1.45,
    saturation: 0.5,
    temperature: 0,
  },
  {
    id: 'monochrome-zenith',
    name: 'Monochrome Zenith',
    description: 'Pure tonal scale emphasis inspired by mid-century black and white cinema.',
    filterStyle: 'grayscale(100%) contrast(135%) brightness(95%)',
    accentColor: '#ffffff',
    contrast: 1.35,
    saturation: 0,
    temperature: 0,
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'The Silent Monolith',
    category: 'Narrative',
    year: '2024',
    role: 'Director & Colorist',
    thumbnail: FEATURE_CAPSULE_IMG,
    videoUrl: FEATURE_MOTION_VIDEO,
    description: 'An architectural short film exploring human spatial perception inside brutalist structures.',
    specs: {
      camera: 'ARRI Alexa 35',
      lens: 'Cooke Anamorphic /i Full Frame',
      colorSpace: 'ARRI LogC4 to ACEScg',
      aspectRatio: '2.39:1 Anamorphic'
    },
    tags: ['Cinematic', 'Brutalism', 'Architecture', 'Color Grading']
  },
  {
    id: 'p2',
    title: 'Chronos Nocturne',
    category: 'Commercial',
    client: 'KRONOS Swiss Watches',
    year: '2024',
    role: 'Director',
    thumbnail: FEATURE_STORYBOARD_IMG,
    videoUrl: HERO_VIDEO,
    description: 'High-speed macro cinematography capturing mechanical precision against dark shadows.',
    specs: {
      camera: 'Phantom Flex 4K',
      lens: 'Leica Macron-R 100mm',
      colorSpace: 'DaVinci Wide Gamut',
      aspectRatio: '1.85:1'
    },
    tags: ['Macro', 'Commercial', 'High Speed', 'Luxury']
  },
  {
    id: 'p3',
    title: 'Echoes of Silence',
    category: 'Music Video',
    client: 'Solen Ambient',
    year: '2023',
    role: 'Director of Photography',
    thumbnail: FEATURE_ANALYSIS_IMG,
    videoUrl: FEATURE_MOTION_VIDEO,
    description: 'Minimalist performance film captured in Iceland under natural twilight conditions.',
    specs: {
      camera: 'RED V-Raptor 8K',
      lens: 'Zeiss Supreme Prime Radiance',
      colorSpace: 'REDWideGamutRGB',
      aspectRatio: '2.00:1'
    },
    tags: ['Music Video', 'Iceland', 'Twilight', 'Natural Light']
  },
  {
    id: 'p4',
    title: 'Substratum Color Reel',
    category: 'Color Grade',
    year: '2024',
    role: 'Senior Colorist',
    thumbnail: FEATURE_CAPSULE_IMG,
    videoUrl: HERO_VIDEO,
    description: 'Curated 2024 color grading showcase highlighting customized film emulation LUTs.',
    specs: {
      camera: 'Various Cinema Cameras',
      lens: 'Vintage Prime Lenses',
      colorSpace: 'ACES v1.3',
      aspectRatio: 'Multi-Format'
    },
    tags: ['Color Reel', 'Film Emulation', 'DaVinci Resolve', 'ACES']
  }
];

export const STORYBOARD_SCENES: StoryboardScene[] = [
  {
    id: 's1',
    sceneNumber: 'SCENE 01',
    title: 'The Entrance into Fog',
    description: 'Protagonist approaches the solitary structure as ambient light dissolves into heavy haze.',
    shotType: 'Wide Establishing Shot',
    cameraMovement: 'Slow Slow Push-In Tracking',
    imageUrl: FEATURE_STORYBOARD_IMG,
    duration: '00:08'
  },
  {
    id: 's2',
    sceneNumber: 'SCENE 02',
    title: 'Reflection on Chrome',
    description: 'Extreme macro close up of watch movement mechanism reflecting dramatic key light.',
    shotType: 'Extreme Close Up (ECU)',
    cameraMovement: 'Static Locked Frame',
    imageUrl: FEATURE_ANALYSIS_IMG,
    duration: '00:04'
  },
  {
    id: 's3',
    sceneNumber: 'SCENE 03',
    title: 'The Solitary Corridor',
    description: 'Silhouette silhouette frames walking down narrow brutalist hallway framed by light shafts.',
    shotType: 'Medium Full Shot',
    cameraMovement: 'Lateral Steadicam Dolly',
    imageUrl: FEATURE_CAPSULE_IMG,
    duration: '00:06'
  }
];

export const CRITIQUE_ITEMS: CritiqueItem[] = [
  {
    id: 'c1',
    title: 'Pacing & Frame Cadence',
    timestamp: '00:42',
    score: 96,
    type: 'Pacing',
    feedback: 'The 8-frame pause before the key light reveal enhances emotional tension naturally.',
    suggestion: 'Extend tail head by 3 frames to align with ambient sound crescendo.'
  },
  {
    id: 'c2',
    title: 'Color Temperature Separation',
    timestamp: '01:15',
    score: 92,
    type: 'Color Balance',
    feedback: 'Shadow warmth creates a subtle 2800K vs 5600K contrast with the background LED panel.',
    suggestion: 'Lower blue saturation in background rim light by 5%.'
  },
  {
    id: 'c3',
    title: 'Negative Space Balance',
    timestamp: '02:08',
    score: 98,
    type: 'Composition',
    feedback: 'Subject sits at lower left intersection line with 65% void framing. Flawless hierarchy.',
    suggestion: 'No adjustment needed. High intentionality achieved.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j1',
    title: 'The Weight of Silence in Frame',
    subtitle: 'Why minimalist composition creates deeper viewer resonance than visual overload.',
    date: 'AUGUST 2024',
    readTime: '5 MIN READ',
    content: [
      'The essence of cinematic minimalism lies not in what you remove, but in the intentionality of what remains.',
      'In modern digital cinema, the temptation to saturate the frame with motion, flares, and rapid editing often obscures the emotional core of the subject.',
      'When we reduce a frame to its prime elements—light, shadow, and negative space—every single pixels earns its right to exist. Silence ceases to be absence; it becomes context.'
    ],
    tags: ['Cinematography', 'Theory', 'Direction']
  },
  {
    id: 'j2',
    title: 'Crafting ACES-Native Film Emulation',
    subtitle: 'Building custom film transforms for DaVinci Resolve without clipping dynamic range.',
    date: 'JULY 2024',
    readTime: '8 MIN READ',
    content: [
      'True film print emulation requires understanding how halogen halide crystals react organically to highlight clipping.',
      'Rather than applying destructive static LUTs, we map logarithmic color curves in ACEScg space to preserve shoulder roll-off and shadow detail.',
      'The result is skin tones that hold natural luminance even under harsh 5600K key sources.'
    ],
    tags: ['Color Grading', 'DaVinci Resolve', 'ACES', 'Technical']
  }
];
