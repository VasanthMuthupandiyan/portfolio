// Direct image imports for Vite
// This approach ensures proper bundling and loading

// Import actual medical images
import neurologicalCase from '../assets/Neurological case.jpeg';
import pediatricCases from '../assets/Pediatric Cases.jpeg';
import orthopaedicCase from '../assets/Orthopaedic case.jpeg';
import acutePain from '../assets/Acute pain.jpeg';
import interferentialTherapy from '../assets/Interferential Therapy.jpeg';
import ultrasoundTherapy from '../assets/Ultrasound Therapy.jpeg';

// Fallback URLs
const FALLBACK_IMAGES = {
  neurological: 'https://images.unsplash.com/photo-1628348068343-c6a848d2d497?w=500&h=300&fit=crop&q=80',
  pediatric: 'https://images.unsplash.com/photo-1609902726285-00668009f004?w=500&h=300&fit=crop&q=80',
  orthopedic: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&q=80',
  painManagement: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop&q=80',
  ift: 'https://images.unsplash.com/photo-1559757175-0eb30cd8ecfc?w=500&h=300&fit=crop&q=80',
  ultrasound: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop&q=80'
};

// Export configured images with fallbacks
export const MEDICAL_IMAGES = {
  neurological: neurologicalCase || FALLBACK_IMAGES.neurological,
  pediatric: pediatricCases || FALLBACK_IMAGES.pediatric,
  orthopedic: orthopaedicCase || FALLBACK_IMAGES.orthopedic,
  painManagement: acutePain || FALLBACK_IMAGES.painManagement,
  ift: interferentialTherapy || FALLBACK_IMAGES.ift,
  ultrasound: ultrasoundTherapy || FALLBACK_IMAGES.ultrasound
};