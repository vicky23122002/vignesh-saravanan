export const caseStudyData: Record<string, any> = {
  lumis: {
    title: 'LUMIS Automobile App',
    description: 'Complete design thinking process for a modern automobile mobile experience',
    category: 'Mobile App • Design Thinking',
    year: '2024',
    color: 'bg-blue-50',
    role: 'Lead UI/UX Designer',
    timeline: '3 weeks',
    platform: 'iOS & Android',
    tools: 'Figma, FigJam',
    problem:
      'Modern car buyers struggle to find comprehensive information about vehicles, compare models effectively, and connect with dealerships in a streamlined way. Existing automobile apps lack intuitive navigation and fail to provide personalized recommendations.',
    research: [
      'Conducted user interviews with 15 potential car buyers across different age groups and income levels to understand pain points in the car buying journey.',
      'Analyzed competitor apps including CarDekho, Cars24, and manufacturer-specific apps to identify gaps in user experience.',
      'Created user journey maps highlighting friction points in vehicle discovery, comparison, and purchase decision-making.',
    ],
    personas: [
      {
        name: 'Priya, 28',
        role: 'First-time buyer',
        description:
          'Young professional looking to buy her first car. Needs guidance on specifications, financing options, and wants to compare multiple models easily.',
      },
      {
        name: 'Rajesh, 42',
        role: 'Upgrading buyer',
        description:
          'Experienced car owner looking to upgrade. Values detailed technical specifications, test drive scheduling, and trade-in options.',
      },
    ],
    designProcess: [
      {
        title: 'Wireframes',
        description:
          'Created low-fidelity wireframes focusing on information architecture and user flow. Emphasized clear navigation between vehicle browsing, comparison, and dealer connection features.',
        icon: '📐',
      },
      {
        title: 'High-Fidelity UI',
        description:
          'Developed a clean, modern interface with card-based layouts for vehicle listings. Used a premium color palette with deep blues and metallic accents to convey trust and quality.',
        icon: '🎨',
      },
      {
        title: 'Interactive Prototype',
        description:
          'Built fully interactive prototype in Figma demonstrating core user flows including vehicle search, 360° view, comparison tool, and test drive booking.',
        icon: '⚡',
      },
    ],
    features: [
      {
        title: 'Smart Search & Filters',
        description:
          'Intelligent search with filters for price range, fuel type, brand, and features. Results update in real-time with visual previews.',
      },
      {
        title: '360° Vehicle View',
        description:
          'Interactive 360-degree interior and exterior views with hotspots highlighting key features and specifications.',
      },
      {
        title: 'Comparison Tool',
        description:
          'Side-by-side comparison of up to 3 vehicles with detailed specifications, pricing, and feature breakdowns.',
      },
      {
        title: 'Test Drive Booking',
        description:
          'Seamless test drive scheduling with dealership availability, location mapping, and calendar integration.',
      },
    ],
    outcome: [
      'Successfully completed entire design thinking process from research to high-fidelity prototype in 3 weeks.',
      'Received positive feedback from stakeholders on intuitive navigation and clean visual design.',
      'Learned the importance of balancing information density with visual simplicity, especially for complex products like automobiles.',
      'Improved skills in creating interactive prototypes that effectively communicate design intent to developers.',
    ],
  },
  coin: {
    title: 'COIN Community Mobile App',
    description: 'Social community platform connecting users through shared interests',
    category: 'Mobile App • Social',
    year: '2024',
    color: 'bg-purple-50',
    role: 'UI/UX Designer',
    timeline: '4 weeks',
    platform: 'iOS & Android',
    tools: 'Figma, Adobe XD',
    problem:
      'Users struggle to find and engage with like-minded individuals in their local communities. Existing social platforms are either too broad or lack features for organizing local events and activities.',
    research: [
      'Surveyed 50+ users about their community engagement preferences and pain points in existing social apps.',
      'Mapped user journeys for community discovery, event creation, and member interaction.',
      'Studied successful community platforms like Meetup, Discord, and Nextdoor to identify best practices.',
    ],
    personas: [
      {
        name: 'Ananya, 25',
        role: 'Community Organizer',
        description:
          'Passionate about bringing people together. Wants tools to easily create events, manage RSVPs, and communicate with members.',
      },
      {
        name: 'Karthik, 31',
        role: 'Active Participant',
        description:
          'Enjoys joining local activities and meeting new people. Needs personalized recommendations and easy event discovery.',
      },
    ],
    designProcess: [
      {
        title: 'Information Architecture',
        description:
          'Designed a clear structure with three main sections: Discover (communities), Events (upcoming activities), and Profile (personal hub).',
        icon: '🏗️',
      },
      {
        title: 'UI Design',
        description:
          'Created vibrant, friendly interface with custom illustrations and a warm color palette to encourage social interaction.',
        icon: '🎨',
      },
      {
        title: 'Prototyping',
        description:
          'Built interactive flows for community joining, event creation, and in-app messaging with smooth transitions.',
        icon: '✨',
      },
    ],
    features: [
      {
        title: 'Community Discovery',
        description:
          'Personalized feed showing relevant communities based on interests, location, and activity preferences.',
      },
      {
        title: 'Event Management',
        description:
          'Create, manage, and RSVP to local events with integrated calendar, reminders, and attendee lists.',
      },
      {
        title: 'In-App Messaging',
        description:
          'Direct messaging and group chats for community members with rich media support.',
      },
      {
        title: 'Activity Feed',
        description:
          'Engaging feed showing community updates, event photos, and member achievements.',
      },
    ],
    outcome: [
      'Designed a comprehensive social community app with focus on local engagement and event organization.',
      'Created a design system with reusable components ensuring consistency across 40+ screens.',
      'Learned effective strategies for designing social features that encourage genuine user interaction.',
      'Improved understanding of notification systems and their impact on user engagement.',
    ],
  },
  texxas: {
    title: 'TEXXAS Internal Community',
    description: 'Enterprise web application for internal team collaboration',
    category: 'Web App • Enterprise',
    year: '2024',
    color: 'bg-green-50',
    role: 'UI/UX Designer',
    timeline: '6 weeks',
    platform: 'Web (Desktop)',
    tools: 'Figma, Angular',
    problem:
      'TCS employees lacked a centralized platform for internal knowledge sharing, project collaboration, and team networking. Existing tools were fragmented across multiple platforms causing inefficiency.',
    research: [
      'Conducted stakeholder interviews with team leads, project managers, and employees across departments.',
      'Analyzed internal communication patterns and identified most common collaboration pain points.',
      'Studied enterprise collaboration tools like Microsoft Teams, Slack, and Workplace by Facebook.',
    ],
    personas: [
      {
        name: 'Meera, 35',
        role: 'Project Manager',
        description:
          'Manages multiple teams and projects. Needs a unified view of team activities, resource allocation, and project updates.',
      },
      {
        name: 'Arjun, 26',
        role: 'Software Developer',
        description:
          'Collaborates with cross-functional teams. Wants easy access to documentation, code snippets, and colleague expertise.',
      },
    ],
    designProcess: [
      {
        title: 'User Flow Mapping',
        description:
          'Mapped complex enterprise workflows including onboarding, project creation, team collaboration, and knowledge management.',
        icon: '🗺️',
      },
      {
        title: 'Dashboard Design',
        description:
          'Created role-based dashboards with customizable widgets, activity feeds, and quick access to frequently used tools.',
        icon: '📊',
      },
      {
        title: 'Design System',
        description:
          'Built comprehensive design system aligned with TCS brand guidelines, ensuring scalability and consistency.',
        icon: '🎯',
      },
    ],
    features: [
      {
        title: 'Unified Dashboard',
        description:
          'Personalized dashboard with project status, team updates, notifications, and quick actions.',
      },
      {
        title: 'Knowledge Hub',
        description:
          'Centralized repository for documentation, best practices, and searchable resources.',
      },
      {
        title: 'Team Directory',
        description:
          'Searchable employee directory with skills, expertise, and availability status for easy collaboration.',
      },
      {
        title: 'Project Spaces',
        description:
          'Dedicated workspaces for projects with file sharing, discussions, and milestone tracking.',
      },
    ],
    outcome: [
      'Delivered enterprise-grade web application improving internal collaboration and knowledge sharing.',
      'Collaborated closely with Angular developers to ensure design implementation accuracy.',
      'Learned to balance feature-rich enterprise requirements with clean, usable interface design.',
      'Gained experience in creating scalable design systems for large organizations.',
    ],
  },
  'research-spark': {
    title: 'Research Spark',
    description: 'Research management platform for academic and professional teams',
    category: 'Web App • Productivity',
    year: '2024',
    color: 'bg-orange-50',
    role: 'UI/UX Designer',
    timeline: '5 weeks',
    platform: 'Web (Desktop & Tablet)',
    tools: 'Figma, Miro',
    problem:
      'Research teams struggle with organizing literature, managing citations, collaborating on papers, and tracking project progress. Existing tools like Zotero and Mendeley focus primarily on citation management but lack robust collaboration features.',
    research: [
      'Interviewed 12 researchers, PhD students, and professors about their research workflow challenges.',
      'Analyzed popular research tools and identified gaps in collaboration and project management.',
      'Created journey maps for typical research projects from ideation to publication.',
    ],
    personas: [
      {
        name: 'Dr. Lakshmi, 38',
        role: 'Research Professor',
        description:
          'Leads research teams and multiple projects. Needs oversight of team progress, literature organization, and publication tracking.',
      },
      {
        name: 'Siddharth, 24',
        role: 'PhD Candidate',
        description:
          'Working on dissertation research. Needs efficient literature review tools, note-taking, and collaboration with advisor.',
      },
    ],
    designProcess: [
      {
        title: 'Feature Prioritization',
        description:
          'Used MoSCoW method to prioritize features based on user needs: literature management, collaboration, and project tracking.',
        icon: '📋',
      },
      {
        title: 'Interface Design',
        description:
          'Designed clean, distraction-free interface focusing on content and productivity with sidebar navigation and multi-pane layouts.',
        icon: '💻',
      },
      {
        title: 'Collaboration Features',
        description:
          'Designed real-time collaboration tools including shared annotations, comments, and version control.',
        icon: '🤝',
      },
    ],
    features: [
      {
        title: 'Smart Literature Library',
        description:
          'Organize papers with tags, folders, and AI-powered recommendations. Automatic citation extraction and PDF annotation.',
      },
      {
        title: 'Collaborative Workspace',
        description:
          'Shared project spaces where teams can collaborate on literature reviews, outlines, and manuscripts.',
      },
      {
        title: 'Research Timeline',
        description:
          'Visual project timeline with milestones, deadlines, and task assignments for team accountability.',
      },
      {
        title: 'Citation Manager',
        description:
          'Integrated citation management with support for multiple formats (APA, MLA, Chicago) and export options.',
      },
    ],
    outcome: [
      'Created comprehensive research management platform addressing gaps in existing tools.',
      'Designed intuitive interfaces for complex academic workflows while maintaining professional aesthetic.',
      'Learned to design for specialized user groups with specific domain expertise and workflows.',
      'Improved skills in designing collaboration features and real-time synchronization interfaces.',
    ],
  },
  flydel: {
    title: 'Flydel Delivery App',
    description: 'Fast delivery service app designed during internship',
    category: 'Mobile App • Logistics',
    year: '2023',
    color: 'bg-pink-50',
    role: 'UI/UX Design Intern',
    timeline: '3 weeks',
    platform: 'iOS & Android',
    tools: 'Figma, Illustrator',
    problem:
      'Quick commerce delivery services needed a fast, intuitive app for users to order essential items with 10-30 minute delivery windows. The challenge was creating a streamlined ordering experience that minimizes steps while maintaining clarity.',
    research: [
      'Analyzed leading delivery apps like Swiggy Instamart, Blinkit, and Zepto for UX patterns and user flows.',
      'Studied user behavior in quick commerce focusing on order speed and item discovery.',
      'Created task analysis for typical user scenarios: quick reorder, category browsing, and address management.',
    ],
    personas: [
      {
        name: 'Neha, 29',
        role: 'Working Professional',
        description:
          'Orders frequently during work breaks. Values speed, reliability, and easy reordering of favorite items.',
      },
      {
        name: 'Ramesh, 45',
        role: 'Family Shopper',
        description:
          'Orders groceries for family. Needs clear product information, bulk ordering options, and delivery scheduling.',
      },
    ],
    designProcess: [
      {
        title: 'Rapid Prototyping',
        description:
          'Created quick wireframes and iterated based on mentor feedback, focusing on reducing checkout friction.',
        icon: '⚡',
      },
      {
        title: 'Visual Design',
        description:
          'Developed energetic visual identity with bright colors and custom illustrations conveying speed and reliability.',
        icon: '🎨',
      },
      {
        title: 'Micro-interactions',
        description:
          'Designed delightful micro-interactions for adding items to cart, tracking delivery, and successful order completion.',
        icon: '✨',
      },
    ],
    features: [
      {
        title: 'Quick Search',
        description:
          'Prominent search with predictive suggestions and voice input for fast item discovery.',
      },
      {
        title: 'Smart Categories',
        description:
          'Intuitive category browsing with visual icons and trending items for easy product discovery.',
      },
      {
        title: 'Live Tracking',
        description:
          'Real-time delivery tracking with map view, ETA updates, and delivery partner contact.',
      },
      {
        title: 'Express Checkout',
        description:
          'Streamlined checkout with saved addresses, payment methods, and one-tap reordering.',
      },
    ],
    outcome: [
      'Successfully designed complete delivery app during 3-week internship period.',
      'Received positive feedback from mentors on clean interface and user-friendly flows.',
      'Gained foundational experience in end-to-end app design from wireframes to high-fidelity mockups.',
      'Learned importance of speed and simplicity in designing for time-sensitive user tasks.',
    ],
  },
};
