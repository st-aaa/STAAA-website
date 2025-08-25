import { ReactNode } from "react";

import {
  Calculator,
  HeartPulse,
  FileText,
  ClipboardList,
  Percent,
  Award,
  Truck,
  Code,
  BarChart,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  details: string;
  link: string;
  icon: ReactNode;
  cta: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    id: "bookkeeping",
    title: "Bookkeeping & Accounting",
    description:
      "Professional record keeping, tax preparation, payroll services, and financial reporting.",
    details:
      "Our bookkeeping and accounting services help businesses maintain accurate financial records, manage payroll, prepare taxes, and generate reports for better decision-making. Services include monthly bookkeeping, accounts payable/receivable, payroll processing, tax filing, and financial statement preparation.",
    link: "/service/bookkeeping",
    icon: <Calculator className="w-10 h-10" />,
    cta: "LEARN MORE",
    benefits: [
      "Accurate financial record keeping",
      "Tax preparation and filing",
      "Payroll management",
      "Custom financial reports",
    ],
  },
  {
    id: "insurance",
    title: "Health & Life Insurance",
    description:
      "Comprehensive insurance plans for businesses and individuals.",
    details:
      "We provide tailored health and life insurance solutions to protect you, your family, and your employees. Our team helps you choose the best policies, from individual life coverage to group health insurance plans for businesses, including claims assistance and renewals.",
    link: "/service/insurance",
    icon: <HeartPulse className="w-10 h-10" />,
    cta: "GET COVERAGE",
    benefits: [
      "Custom insurance solutions",
      "Group & individual plans",
      "Claims support",
      "Peace of mind for employees",
    ],
  },
  {
    id: "registration",
    title: "Business Registration",
    description:
      "Complete registration services for LLCs, corporations, partnerships, and sole proprietorships.",
    details:
      "Starting a business begins with proper registration. We assist entrepreneurs in registering LLCs, corporations, partnerships, or sole proprietorships. Our experts simplify the paperwork, explain legal requirements, and ensure your business is compliant from day one. \n\nWe also provide assistance with:\n- Entity Formation: Expert guidance in choosing and forming the optimal business structure.\n- Federal EIN Acquisition: Quick and efficient filing to obtain your Employer Identification Number.",
    link: "/service/registration",
    icon: <FileText className="w-10 h-10" />,
    cta: "GET STARTED",
    benefits: [
      "Complete business registration",
      "Entity formation guidance",
      "EIN application assistance",
      "Legal compliance ensured",
      "Fast and reliable process",
    ],
  },
  {
    id: "tax-permits",
    title: "Tax Permits & Certificates",
    description:
      "Sales & Use Tax Permits, Resale Certificates, and other essential tax documentation.",
    details:
      "We help businesses obtain Sales & Use Tax Permits, Resale Certificates, and other tax documentation required for compliance. Our experts simplify the filing process and ensure you meet all state and federal tax requirements.",
    link: "/service/tax-permits",
    icon: <Percent className="w-10 h-10" />,
    cta: "OBTAIN PERMITS",
    benefits: [
      "Sales & Use Tax Permits",
      "Resale Certificates",
      "Essential tax compliance",
      "Simplified filing process",
    ],
  },
  {
    id: "licenses",
    title: "Licenses & Permits",
    description:
      "Specialized assistance with all necessary business licenses and permits for your industry.",
    details:
      "Our licensing experts help businesses navigate the complexities of acquiring the required licenses and permits to legally operate. We ensure your business is compliant with local, state, and federal regulations.",
    link: "/service/licenses",
    icon: <ClipboardList className="w-10 h-10" />,
    cta: "APPLY NOW",
    benefits: [
      "Industry-specific licenses",
      "Permit application support",
      "Regulatory compliance",
      "Ongoing assistance",
    ],
  },
  {
    id: "tabc",
    title: "TABC Certificates",
    description:
      "Expert guidance through the Texas Alcoholic Beverage Commission certification process.",
    details:
      "We guide businesses through the Texas Alcoholic Beverage Commission (TABC) certification process, ensuring you meet all state requirements to sell or serve alcohol legally and efficiently.",
    link: "/service/tabc",
    icon: <Award className="w-10 h-10" />,
    cta: "GET CERTIFIED",
    benefits: [
      "Step-by-step guidance",
      "Simplified application process",
      "Compliance with TABC regulations",
      "Fast certification support",
    ],
  },
  {
    id: "usdot",
    title: "USDOT Number Services",
    description:
      "Registration and compliance services for commercial vehicle operators and carriers.",
    details:
      "We provide assistance with USDOT registration, ensuring your business meets federal transportation regulations. Our experts handle compliance updates, renewals, and monitoring so your operations run smoothly.",
    link: "/service/usdot",
    icon: <Truck className="w-10 h-10" />,
    cta: "REGISTER NOW",
    benefits: [
      "USDOT registration",
      "Compliance monitoring",
      "Renewal assistance",
      "Hassle-free process",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Custom web and mobile applications built to scale your business efficiently.",
    details:
      "Our software development team builds scalable, secure, and user-friendly web and mobile applications. From concept to deployment, we collaborate with you to create technology that supports your business goals.",
    link: "/service/software",
    icon: <Code className="w-10 h-10" />,
    cta: "BUILD WITH US",
    benefits: [
      "Custom web & mobile apps",
      "Secure and scalable solutions",
      "Full-stack development",
      "Continuous support and updates",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "SEO, social media, content strategy, and online advertising to grow your brand.",
    details:
      "Our digital marketing services help businesses build strong online visibility and attract more customers. We offer SEO optimization, pay-per-click advertising, social media management, email campaigns, and content marketing strategies.",
    link: "/service/digital-marketing",
    icon: <BarChart className="w-10 h-10" />,
    cta: "LAUNCH CAMPAIGN",
    benefits: [
      "SEO optimization",
      "Social media management",
      "Content & email marketing",
      "Data-driven campaigns",
    ],
  },
];
