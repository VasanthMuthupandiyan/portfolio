// Image Configuration for PHYSIO REHAB CLINIC
// Centralized image management with soft coding approach

// Base image paths configuration
export const IMAGE_CONFIG = {
  // Base paths for different image sources
  paths: {
    assets: '/src/assets/',
    public: '/images/',
    cdn: 'https://images.unsplash.com/'
  },
  
  // Specialized Services Images
  services: {
    neurological: {
      local: 'Neurological case.jpeg',
      fallback: 'photo-1628348068343-c6a848d2d497?w=500&h=300&fit=crop&q=80',
      alt: 'Neurological examination and rehabilitation therapy'
    },
    pediatric: {
      local: 'Pediatric Cases.jpeg', 
      fallback: 'photo-1609902726285-00668009f004?w=500&h=300&fit=crop&q=80',
      alt: 'Pediatric physiotherapy and child development'
    },
    orthopedic: {
      local: 'Orthopaedic case.jpeg',
      fallback: 'photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&q=80', 
      alt: 'Orthopedic rehabilitation and joint therapy'
    },
    painManagement: {
      local: 'Acute pain.jpeg',
      fallback: 'photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop&q=80',
      alt: 'Acute pain management and sports injury treatment'
    }
  },
  
  // Advanced Therapies Images
  advanced: {
    teamTherapy: {
      local: 'Acute pain.jpeg',
      fallback: 'photo-1559757175-0eb30cd8ecfc?w=500&h=300&fit=crop&q=80',
      alt: 'Advanced therapy team providing comprehensive medical care'
    },
    ift: {
      local: 'Interferential Therapy.jpeg',
      fallback: 'photo-1559757175-0eb30cd8ecfc?w=500&h=300&fit=crop&q=80',
      alt: 'Interferential therapy equipment and treatment'
    },
    ultrasound: {
      local: 'Ultrasound Therapy.jpeg', 
      fallback: 'photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop&q=80',
      alt: 'Ultrasound therapy for tissue healing'
    }
  }
};

// Helper function to get image URL with fallback
export const getImageUrl = (imageConfig: any, useLocal: boolean = false) => {
  if (useLocal && imageConfig.local) {
    try {
      // For Vite, we need to import assets dynamically
      return new URL(`../assets/${imageConfig.local}`, import.meta.url).href;
    } catch (error) {
      console.warn(`Failed to load local image: ${imageConfig.local}, using fallback`);
      return `${IMAGE_CONFIG.paths.cdn}${imageConfig.fallback}`;
    }
  }
  return `${IMAGE_CONFIG.paths.cdn}${imageConfig.fallback}`;
};

// Environment-based image selection
export const USE_LOCAL_IMAGES = true; // Always use local images when available