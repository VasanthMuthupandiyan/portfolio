// Clinic Configuration Constants
// This file centralizes all clinic information for easy management

import { MEDICAL_IMAGES } from './medicalImages';

export const CLINIC_CONFIG = {
  doctor: {
    name: "Dr.K.Swetha(PT)",
    qualification: "BPT,MPT NEURO", 
    specialization: "Neurological Rehabilitation Specialist",
    title: "Qualified Male and Female Physiotherapists"
  },
  
  clinic: {
    name: "PHYSIO REHAB CLINIC",
    tagline: "YOUR BODY DESERVES THE RIGHT CARE",
    description: "HOME HEALTH CARE SERVICES FOR PHYSIOTHERAPY & Rehabilitation",
    motto: "Friendly, professional, and patient-focused care"
  },
  
  contact: {
    phones: {
      primary: "9790545684"
    },
    whatsapp: {
      primary: "9790545684"
    },
    email: "swethakumar611@gmail.com",
    operatingHours: "09:00am to 12:00pm"
  },
  
  location: {
    serviceAreas: ["Sholinganallur", "Tambaram", "Navalur", "Thoraipakkam", "Kelambakkam", "Medavakkam"],
    mainLocation: "Available across Chennai",
    features: ["Home visits available", "All over Chennai coverage"]
  },
  
  services: {
    basic: ["Shoulder Pain", "Stroke", "Post Operative", "Pediatric", "Neck Pain", "Knee Pain", "Back Pain"],
    specialized: [
      {
        title: "Neurological Conditions",
        description: "Stroke & Paralysis Rehabilitation with specialized neuro techniques",
        icon: "brain",
        image: MEDICAL_IMAGES.neurological
      },
      {
        title: "Pediatric Cases", 
        description: "Children's Developmental Therapy for growth milestones",
        icon: "baby",
        image: MEDICAL_IMAGES.pediatric
      },
      {
        title: "Orthopedic Cases",
        description: "Back Pain, Fractures, Joint Stiffness rehabilitation",
        icon: "bone",
        image: MEDICAL_IMAGES.orthopedic
      },
      {
        title: "Acute Pain Management",
        description: "Neck, Shoulder, Knee & Sports Injuries treatment", 
        icon: "activity",
        image: MEDICAL_IMAGES.painManagement
      }
    ],
    advanced: [
      {
        name: "Team-Based Advanced Therapy",
        description: "Comprehensive medical care with multidisciplinary approach",
        image: MEDICAL_IMAGES.painManagement
      },
      {
        name: "IFT (Interferential Therapy)",
        description: "For deep pain relief and muscle relaxation",
        image: MEDICAL_IMAGES.ift
      },
      {
        name: "US (Ultrasound Therapy)",
        description: "For faster tissue healing and pain reduction",
        image: MEDICAL_IMAGES.ultrasound
      }
    ]
  },
  
  offers: {
    freeConsultation: true,
    homeVisits: true,
    newPatientOffers: "Get free assessment",
    specialOffers: ["Free consultation for new patients", "Home visits available", "Same day appointments"]
  },
  
  features: [
    {
      title: "FREE CONSULTATION",
      description: "Get your initial assessment at no cost for new patients",
      highlight: true
    },
    {
      title: "Home visits available", 
      description: "Professional care in the comfort of your home across Chennai",
      highlight: true
    },
    {
      title: "Qualified Team",
      description: "Male and Female Physiotherapists with specialized training",
      highlight: false
    },
    {
      title: "Professional Care",
      description: "Friendly, professional, and patient-focused care",
      highlight: false
    }
  ],
  
  testimonials: [
    {
      name: "Priya Sharma",
      condition: "Post-Stroke Recovery", 
      text: "Dr. Swetha's neurological rehabilitation helped me regain mobility after my stroke. Her expertise in neuro physiotherapy is exceptional. The home visits made recovery so much easier.",
      rating: 5,
      location: "Sholinganallur"
    },
    {
      name: "Rajesh Kumar",
      condition: "Back Pain Relief", 
      text: "The interferential therapy sessions completely resolved my chronic back pain. Dr. Swetha's professional approach and home visits made treatment so convenient.",
      rating: 5,
      location: "Tambaram"
    },
    {
      name: "Meera Devi",
      condition: "Pediatric Therapy",
      text: "My child's developmental delays improved significantly with Dr. Swetha's pediatric physiotherapy. The free consultation helped us start the right treatment immediately.",
      rating: 5,
      location: "Navalur"
    }
  ]
};

// Phone number formatting utility
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\s/g, '');
};

// WhatsApp URL generator
export const getWhatsAppUrl = (phone: string, message = ""): string => {
  const cleanPhone = formatPhoneNumber(phone);
  const encodedMessage = encodeURIComponent(message || `Hello! I would like to book an appointment with ${CLINIC_CONFIG.doctor.name} at ${CLINIC_CONFIG.clinic.name}.`);
  return `https://wa.me/91${cleanPhone}?text=${encodedMessage}`;
};

// Call URL generator  
export const getCallUrl = (phone: string): string => {
  return `tel:+91${formatPhoneNumber(phone)}`;
};