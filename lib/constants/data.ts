import earPainImage from "@/public/conditions/ear-pain.png";
import insectBiteImage from "@/public/conditions/insect-bite.png";
import skinInfectionsImage from "@/public/conditions/skin-infections.png";
import shinglesImage from "@/public/conditions/shingles.jpg";
import sinusInfectionImage from "@/public/conditions/sinus-infection.png";
import soreThroatImage from "@/public/conditions/sore-throat.jpg";
import utiImage from "@/public/conditions/uti.jpg";
import fluVaccineImage from "@/public/services/flu-vaccine.jpeg";
import covidVaccineImage from "@/public/services/covid-vaccine.jpg";
import pressureCheckImage from "@/public/services/pressure-check.jpg";
import stopSmokingImage from "@/public/services/stop-smoking.jpg";
import emergencyContraceptionImage from "@/public/services/emergency-contraception.jpg";
import yomsterAImage from "@/public/testimonials/yomster.png";
import {
  Award as IconAward,
  Zap as IconBolt,
  Bug as IconBug,
  Droplet as IconDroplet,
  Ear as IconEar,
  Heart as IconHeart,
  Shield as IconShield,
  ShieldCheck as IconShieldCheck,
  TrendingUp as IconTrendingUp,
  User as IconUser,
  Users as IconUsers,
  Wind as IconWind,
} from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/constants/general";
import { TRACKING_EVENTS } from "./analytics";
import carolynWatkinsImage from "@/public/testimonials/carolynWatkins.png";
import mariaKEImage from "@/public/testimonials/mariaKE.png";
import danielleMarcroftImage from "@/public/testimonials/danielleMarcroft.png";
import lauraAndrusImage from "@/public/testimonials/lauraAndrus.png";
import callyMarleyImage from "@/public/testimonials/callyMarley.png";
import anonymousImage from "@/public/testimonials/anonymous.png";
import alisonGravesImage from "@/public/testimonials/alisonGraves.png";
import normaFergusonImage from "@/public/testimonials/normaFerguson.png";
import williamJohncockImage from "@/public/testimonials/williamJohncock.png";

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Yomster A",
    role: "Local Guide",
    image: yomsterAImage,
    content:
      "Very friendly and helpful staff with excellent customer service. The pharmacists give good advice on medication and prices are very reasonable.",
  },
  {
    id: 2,
    name: "Carolyn Watkins",
    role: "Customer",
    image: carolynWatkinsImage,
    content:
      "A brilliant local pharmacy, well run, polite and helpful, with a well-stocked shop.",
  },
  {
    id: 3,
    name: "Maria K-E",
    role: "Customer",
    image: mariaKEImage,
    content:
      "Exceptional service. Even though I’m not a local customer, they promptly helped me with a prescription I couldn’t find anywhere else.",
  },
  {
    id: 4,
    name: "Danielle Marcroft",
    role: "Customer",
    image: danielleMarcroftImage,
    content:
      "They always go above and beyond for their customers, keeping us informed and even sourcing items from other chemists when needed.",
  },
  {
    id: 5,
    name: "Laura Andrus",
    role: "Customer",
    image: lauraAndrusImage,
    content:
      "Wonderful, helpful staff. I’ve been using this pharmacy for over 20 years without any complaints.",
  },
  {
    id: 6,
    name: "Cally Marley",
    role: "Customer",
    image: callyMarleyImage,
    content:
      "I’ve never been treated so well in any pharmacy. Michael, the owner, is one of the kindest and most caring pharmacists I’ve ever met.",
  },
  {
    id: 7,
    name: "Anonymous Reviewer",
    role: "Customer",
    image: anonymousImage,
    content:
      "I’ve been using this pharmacy for years. Great customer service — they remember my name and give excellent medical advice.",
  },
  {
    id: 8,
    name: "Alison Graves",
    role: "Local Guide",
    image: alisonGravesImage,
    content:
      "The owner and team are incredibly caring, reassuring and encouraging. I couldn’t ask for better service.",
  },
  {
    id: 9,
    name: "Norma Ferguson",
    role: "Local Guide",
    image: normaFergusonImage,
    content:
      "The staff are always polite, helpful and professional. They genuinely care about my health and I’ve never been disappointed.",
  },
  {
    id: 10,
    name: "William Johncock",
    role: "Local Guide",
    image: williamJohncockImage,
    content:
      "Polite staff who were able to get medication my usual chemist could not.",
  },
];

export const PFP_CONDITIONS = [
  {
    title: "Ear Pains",
    image: earPainImage,
    description:
      "Treatment is suitable for children aged between 1 and 17 years. For those over 18, GP consultations are free at Lowfield Pharmacy. Our pharmacists are specially trained to diagnose and treat ear infections. We understand ear troubles can be frustrating, so our dedicated healthcare team is here to help.",
    serviceId: "ear-pain",
    badge: "Ages 1-17",
    color: "from-primary/20 to-primary/5",
    href: EXTERNAL_LINKS.services.earPain,
    tracking: TRACKING_EVENTS.earPainBookAppointment,
  },
  {
    title: "Infected Insect Bites",
    image: insectBiteImage,
    description:
      "For those dealing with complications from insect bites, Lowfield Pharmacy provides comprehensive care. Our skilled team is ready to assess and treat infected insect bite concerns, ensuring your swift and effective recovery with professional and compassionate care.",
    serviceId: "skin-infection",
    badge: "All Ages",
    color: "from-chart-3/20 to-chart-3/5",
    href: EXTERNAL_LINKS.services.infectedInsectBites,
    tracking: TRACKING_EVENTS.infectedInsectBitesBookAppointment,
  },
  {
    title: "Bacterial Skin Infection",
    image: skinInfectionsImage,
    description:
      "We provide assessment, treatment, and guidance for effective management of various skin infections, offering both NHS and private services. Our expert team will help diagnose your skin condition and recommend proper treatment, ensuring prompt and comfortable recovery.",
    serviceId: "skin-infection",
    badge: "Common",
    color: "from-chart-2/20 to-chart-2/5",
    href: EXTERNAL_LINKS.services.bacterialSkinInfection,
    tracking: TRACKING_EVENTS.bacterialSkinInfectionBookAppointment,
  },
  {
    title: "Shingles",
    image: shinglesImage,
    description:
      "If you are experiencing painful rashes, blisters, or itching, our healthcare team at Lowfield Pharmacy is here to help. We offer assessment, treatment, and support for effective shingles management, with compassionate, professional care to guide you through your recovery journey.",
    serviceId: "shingles",
    badge: "Urgent",
    color: "from-destructive/20 to-destructive/5",
    href: EXTERNAL_LINKS.services.shingles,
    tracking: TRACKING_EVENTS.shinglesBookAppointment,
  },
  {
    title: "Sinus Infection",
    image: sinusInfectionImage,
    description:
      "Lowfield Pharmacy offers treatment for sinusitis. If you are experiencing a stuffy nose, headache, or facial pain, we can help. Our services include assessment, treatment, and guidance for effective sinus infection management, with professional support for your journey to relief.",
    serviceId: "sinus-infection",
    badge: "Common",
    color: "from-primary/20 to-primary/5",
    href: EXTERNAL_LINKS.services.sinusInfection,
    tracking: TRACKING_EVENTS.sinusInfectionBookAppointment,
  },
  {
    title: "Sore Throat Consultations",
    image: soreThroatImage,
    description:
      "Discover prompt and effective care for sore throats at Lowfield Pharmacy. If a scratchy, irritated throat is slowing you down, we have the remedy to restore your comfort. Our accessible services provide quick assessment and treatment to help you feel better quickly.",
    serviceId: "sore-throat",
    badge: "Fast Relief",
    color: "from-chart-3/20 to-chart-3/5",
    href: EXTERNAL_LINKS.services.soreThroatConsultations,
    tracking: TRACKING_EVENTS.soreThroatBookAppointment,
  },
  {
    title: "Urinary Tract Infection in Women",
    description:
      "Expert care for women experiencing UTI symptoms like discomfort and frequent urination. We provide professional advice, assessment, and effective treatment with personalized attention.",
    image: utiImage,
    badge: "Women Only",
    color: "from-chart-2/20 to-chart-2/5",
    serviceId: "uti",
    href: EXTERNAL_LINKS.services.urinaryTractInfection,
    tracking: TRACKING_EVENTS.utiWomenBookAppointment,
  },
];

export const NHS_PHARMACY_FIRST_SERVICES = [
  {
    title: "Ear Pains",
    description: "Quick relief and treatment for ear infections and discomfort",
    icon: IconEar,
    color: "text-primary",
    bgColor: "bg-primary/10",
    href: EXTERNAL_LINKS.services.earPain,
    tracking: TRACKING_EVENTS.earPainBookAppointment,
  },
  {
    title: "Infected Insect Bites",
    description: "Expert care for insect bites showing signs of infection",
    icon: IconBug,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    href: EXTERNAL_LINKS.services.infectedInsectBites,
    tracking: TRACKING_EVENTS.infectedInsectBitesBookAppointment,
  },
  {
    title: "Sinus Infection",
    description: "Relief for sinusitis symptoms and sinus pressure",
    icon: IconWind,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    href: EXTERNAL_LINKS.services.sinusInfection,
    tracking: TRACKING_EVENTS.sinusInfectionBookAppointment,
  },
  {
    title: "Urinary Tract Infection",
    description: "Women's UTI treatment without GP appointment needed",
    icon: IconDroplet,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    badge: "Women",
    href: EXTERNAL_LINKS.services.urinaryTractInfection,
    tracking: TRACKING_EVENTS.utiWomenBookAppointment,
  },
];

export const SERVICES_LIST = [
  {
    title: "Flu Vaccination",
    description:
      "Protect yourself against seasonal influenza with our convenient vaccination service.",
    category: "health",
    features: [
      "NHS & private options",
      "No appointment needed",
      "Quick and painless",
      "Professional administration",
    ],
    image: fluVaccineImage,
    link: EXTERNAL_LINKS.services.fluVaccinations,
    icon: IconShieldCheck,
    color: "from-chart-3/20 to-chart-3/5",
    borderColor: "border-chart-3/30",
    tracking: TRACKING_EVENTS.fluVaccinationBookAppointment,
  },
  {
    title: "COVID-19 Vaccination",
    description:
      "Stay protected against COVID-19 with our vaccination service.",
    category: "health",
    features: [
      "NHS service",
      "Booster doses available",
      "Safe environment",
      "Post-vaccination advice",
    ],
    image: covidVaccineImage,
    link: EXTERNAL_LINKS.services.covidVaccination,
    icon: IconShield,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    tracking: TRACKING_EVENTS.covidVaccinationBookAppointment,
  },
  {
    title: "Blood Pressure Check",
    description:
      "Regular monitoring of your blood pressure to help maintain good cardiovascular health.",
    category: "health",
    features: [
      "Quick and painless",
      "Immediate results",
      "Professional interpretation",
      "Follow-up advice",
    ],
    image: pressureCheckImage,
    link: EXTERNAL_LINKS.services.bloodPressureChecks,
    icon: IconTrendingUp,
    color: "from-chart-2/20 to-chart-2/5",
    borderColor: "border-chart-2/30",
    tracking: TRACKING_EVENTS.bloodPressureCheckBookAppointment,
  },
  {
    title: "Stop Smoking Service",
    description:
      "Professional support and products to help you quit smoking for good.",
    category: "specialized",
    features: [
      "One-to-one support",
      "Nicotine replacement therapy",
      "Regular check-ins",
      "Personalized quit plan",
    ],
    image: stopSmokingImage,
    link: EXTERNAL_LINKS.services.stopSmokingServices,
    icon: IconBolt,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    tracking: TRACKING_EVENTS.stopSmokingBookAppointment,
  },
  {
    title: "Emergency Contraception",
    description:
      "Confidential and non-judgmental emergency contraception service.",
    category: "health",
    features: [
      "Confidential consultation",
      "Same-day service",
      "Follow-up advice",
      "Future contraception planning",
    ],
    image: emergencyContraceptionImage,
    link: EXTERNAL_LINKS.services.emergencyContraception,
    icon: IconUser,
    color: "from-chart-2/20 to-chart-2/5",
    borderColor: "border-chart-2/30",
    tracking: TRACKING_EVENTS.emergencyContraceptionBookAppointment,
  },
  // {
  //   title: "Minor Ailment Service",
  //   description:
  //     "Treatment and advice for common minor health conditions without seeing a GP.",
  //   category: "health",
  //   features: [
  //     "No appointment needed",
  //     "NHS service",
  //     "Range of conditions covered",
  //     "Prescription if needed",
  //   ],
  //   image: minorAilmentImage,
  //   link: "/services/minor-ailments",
  //   icon: IconPill,
  //   color: "from-chart-3/20 to-chart-3/5",
  //   borderColor: "border-chart-3/30",
  // },
  // {
  //   title: "Prescription Dispensing",
  //   description:
  //     "Fast and accurate dispensing of NHS and private prescriptions with expert advice on medication use.",
  //   category: "pharmacy",
  //   features: [
  //     "NHS & private prescriptions",
  //     "Electronic prescription service",
  //     "Repeat prescription service",
  //     "Medication counseling",
  //   ],
  //   image: prescriptionDispensingImage,
  //   link: "/services/prescriptions",
  //   icon: IconPill,
  //   color: "from-primary/20 to-primary/5",
  //   borderColor: "border-primary/30",
  // },
  // {
  //   title: "Medication Review",
  //   description:
  //     "Comprehensive review of your medications to ensure they're working effectively for you.",
  //   category: "pharmacy",
  //   features: [
  //     "One-to-one consultation",
  //     "Side effect management",
  //     "Medication optimization",
  //     "Written summary provided",
  //   ],
  //   image: medicationReviewImage,
  //   link: "/services/medication-review",
  //   icon: IconHeart,
  //   color: "from-chart-2/20 to-chart-2/5",
  //   borderColor: "border-chart-2/30",
  // },
  // {
  //   title: "Weight Management",
  //   description:
  //     "Personalized advice and support to help you achieve and maintain a healthy weight.",
  //   category: "specialized",
  //   features: [
  //     "Nutritional advice",
  //     "Body composition analysis",
  //     "Goal setting",
  //     "Ongoing support",
  //   ],
  //   image: weightManagementImage,
  //   link: "/services/weight-management",
  //   icon: IconTrendingUp,
  //   color: "from-chart-2/20 to-chart-2/5",
  //   borderColor: "border-chart-2/30",
  // },
  // {
  //   title: "Travel Health Clinic",
  //   description:
  //     "Comprehensive travel health advice and vaccinations for your international trips.",
  //   category: "specialized",
  //   features: [
  //     "Destination-specific advice",
  //     "Travel vaccinations",
  //     "Malaria prevention",
  //     "Travel first aid kits",
  //   ],
  //   image: travelClinicImage,
  //   link: "/services/travel-health",
  //   icon: IconShield,
  //   color: "from-chart-3/20 to-chart-3/5",
  //   borderColor: "border-chart-3/30",
  // },
  // {
  //   title: "Cholesterol Testing",
  //   description:
  //     "Quick and accurate testing of your cholesterol levels with expert interpretation.",
  //   category: "preventive",
  //   features: [
  //     "Finger-prick test",
  //     "Full lipid profile",
  //     "Immediate results",
  //     "Lifestyle advice",
  //   ],
  //   image: cholesterolTestsImage,
  //   link: "/services/cholesterol-testing",
  //   icon: IconHeart,
  //   color: "from-primary/20 to-primary/5",
  //   borderColor: "border-primary/30",
  // },
  // {
  //   title: "Diabetes Screening",
  //   description:
  //     "Early detection of diabetes risk factors through our comprehensive screening service.",
  //   category: "preventive",
  //   features: [
  //     "Blood glucose testing",
  //     "Risk assessment",
  //     "Lifestyle advice",
  //     "Referral if needed",
  //   ],
  //   image: diabetesScreeningImage,
  //   link: "/services/diabetes-screening",
  //   icon: IconHeart,
  //   color: "from-chart-3/20 to-chart-3/5",
  //   borderColor: "border-chart-3/30",
  // },
];

export const TEAM_MEMBERS = [
  {
    name: "Michael Tweneboah-Koduah",
    role: "Superintendent",
    bio: "Mr. Michael has over 15 years of experience in pharmacy care and specializes in medication management for chronic conditions.",
    image: "/team/sarah-johnson.jpg",
    experience: "15 years",
  },
];

export const LOWFIELD_VALUES = [
  {
    icon: IconHeart,
    title: "Compassion",
    description:
      "We treat every patient with kindness, empathy, and respect, recognizing that each person's healthcare journey is unique.",
    color: "from-rose-100 to-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: IconShield,
    title: "Trust",
    description:
      "We build lasting relationships based on honesty, reliability, and a commitment to always acting in our patients' best interests.",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: IconUsers,
    title: "Community",
    description:
      "We're proud to be part of the Lowfield community and are dedicated to improving the health and wellbeing of our neighbors.",
    color: "from-emerald-100 to-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: IconAward,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from the quality of our services to the expertise of our staff.",
    color: "from-[#FFF9E6] to-[#FFF3CC]",
    iconColor: "text-[#F9A825]",
  },
];

export const FAQS_CONTACTS_PAGE = [
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday from 9am to 6:30pm, and Saturday from 9am to 2pm. We are closed on Sundays and Bank Holidays.",
    value: "item-1",
  },
  {
    question: "Do I need to make an appointment for Pharmacy First services?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to minimize waiting times and ensure our pharmacist is available to assist you.",
    value: "item-2",
  },
  {
    question: "Are your Pharmacy First services free?",
    answer:
      "Yes, NHS Pharmacy First services are free for patients who are eligible for free NHS prescriptions. Others may need to pay the standard NHS prescription charge.",
    value: "item-3",
  },
  {
    question: "How do I order a repeat prescription?",
    answer:
      "You can order repeat prescriptions through our website, mobile app, by phone, or in person at the pharmacy. We also offer a prescription delivery service.",
    value: "item-4",
  },
  {
    question: "Do you offer medication reviews?",
    answer:
      "Yes, we offer free medication reviews to help ensure you're getting the most from your medicines and to address any concerns or side effects you may be experiencing.",
    value: "item-5",
  },
  {
    question: "Can I get vaccinations at your pharmacy?",
    answer:
      "Yes, we offer various vaccinations including flu, COVID-19, travel vaccines, and more. Some are available on the NHS while others are private services.",
    value: "item-6",
  },
];
