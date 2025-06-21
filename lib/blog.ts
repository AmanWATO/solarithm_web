export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  authorRole: string
  authorBio: string
  authorImage?: string
  category: string
  tags: string[]
  readTime: number
  coverImage?: string
  content: BlogContent[]
}

export interface BlogContent {
  type: "paragraph" | "heading" | "list" | "image" | "quote"
  content?: string
  items?: string[]
  src?: string
  alt?: string
  caption?: string
  author?: string
}

const blogPosts: BlogPost[] = [
  {
    slug: "why-smart-solar-needs-smarter-data",
    title: "Why Smart Solar Needs Smarter Data",
    excerpt:
      "The future of solar depends on intelligent data analysis and predictive modeling to maximize efficiency and ROI. Learn how data is transforming the solar industry.",
    date: "January 15, 2025",
    author: "Solar Data Analyst",
    authorRole: "Chief Data Scientist",
    authorBio:
      "Our data science team brings expertise in machine learning and geospatial analysis to revolutionize solar intelligence and help companies make data-driven decisions.",
    category: "Data Analysis",
    tags: ["data", "machine learning", "efficiency", "ROI", "solar intelligence"],
    readTime: 8,
    coverImage: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg",
    content: [
      {
        type: "paragraph",
        content:
          "The solar industry is experiencing unprecedented growth, with installations increasing year over year across residential, commercial, and utility sectors. Yet despite this growth, many solar companies still rely on outdated methods for site selection, system design, and performance forecasting. The result? Suboptimal installations, inaccurate energy production estimates, and missed opportunities for both installers and customers.",
      },
      {
        type: "paragraph",
        content:
          "The key to unlocking solar's full potential lies in leveraging intelligent data analysis. Modern solar companies are beginning to understand that success depends not just on the quality of their panels or inverters, but on their ability to collect, analyze, and act on vast amounts of data from multiple sources.",
      },
      {
        type: "heading",
        content: "The Data Revolution in Solar",
      },
      {
        type: "paragraph",
        content:
          "Today's solar installations generate massive amounts of data - from weather patterns and irradiance measurements to system performance metrics and energy consumption patterns. Advanced analytics can transform this raw data into actionable insights that drive better decision-making at every level.",
      },
      {
        type: "list",
        items: [
          "Site Assessment: Predictive models can analyze satellite imagery, weather data, and geographic information to identify optimal installation sites",
          "System Design: AI algorithms can optimize panel placement, inverter selection, and system configuration for maximum energy output",
          "Performance Monitoring: Real-time analytics can detect issues before they impact production and predict maintenance needs",
          "Market Analysis: Data science helps identify emerging markets and customer segments with the highest potential for solar adoption",
        ],
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        alt: "Solar panels with data visualization overlay",
        caption: "Modern solar installations generate vast amounts of data that can be transformed into actionable insights.",
      },
      {
        type: "heading",
        content: "Machine Learning for Solar Optimization",
      },
      {
        type: "paragraph",
        content:
          "Machine learning algorithms are particularly well-suited for solar applications because they can identify patterns and relationships in complex, multi-dimensional datasets that would be impossible for humans to process manually.",
      },
      {
        type: "quote",
        content:
          "The companies that will dominate the solar market in the next decade are those that can effectively harness the power of data to make smarter decisions faster than their competitors.",
        author: "Industry Research Report",
      },
      {
        type: "paragraph",
        content:
          "At Solarithm, we're building the next generation of solar intelligence tools that make this advanced analytics accessible to companies of all sizes. Our platform combines satellite data, weather modeling, and machine learning to provide unprecedented insights into solar market opportunities.",
      },
      {
        type: "paragraph",
        content:
          "The future of solar is bright, but it's also data-driven. Companies that embrace intelligent analytics today will be the ones leading the renewable energy revolution tomorrow.",
      },
    ],
  },
  {
    slug: "solar-mapping-beyond-basic-heatmaps",
    title: "Solar Mapping: Beyond Basic Heatmaps",
    excerpt:
      "Modern solar mapping technology goes far beyond simple irradiance visualization. Discover how advanced analytics are creating comprehensive solar opportunity maps.",
    date: "January 8, 2025",
    author: "GIS Specialist",
    authorRole: "Senior Geospatial Analyst",
    authorBio:
      "Our geospatial analysis team specializes in creating advanced mapping solutions that help solar companies identify and evaluate market opportunities with unprecedented precision.",
    category: "Technology",
    tags: ["mapping", "GIS", "heatmaps", "geospatial", "solar potential"],
    readTime: 6,
    coverImage: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg",
    content: [
      {
        type: "paragraph",
        content:
          "Solar mapping has come a long way from simple irradiance maps that show annual sunlight exposure. Today's advanced heatmaps incorporate dozens of data layers to provide a comprehensive view of solar potential across regions, neighborhoods, and even individual properties.",
      },
      {
        type: "paragraph",
        content:
          "These modern heatmaps combine physical factors like solar irradiance, shading, and available roof space with economic factors like electricity rates, incentives, and property values. The result is a nuanced visualization that highlights not just where solar is physically viable, but where it makes the most economic sense.",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        alt: "Advanced solar potential heatmap of an urban area",
        caption: "An advanced solar potential heatmap showing high-opportunity zones in an urban area.",
      },
      {
        type: "heading",
        content: "Key Data Layers in Modern Solar Heatmaps",
      },
      {
        type: "list",
        items: [
          "Solar Irradiance: The foundation of any solar map, showing how much sunlight an area receives throughout the year.",
          "Roof Characteristics: Slope, orientation, size, and structural capacity of rooftops in the area.",
          "Shading Analysis: Detailed modeling of shadows from trees, buildings, and topographical features.",
          "Economic Factors: Local electricity rates, available incentives, and financing options.",
          "Regulatory Environment: Permitting requirements, interconnection policies, and net metering rules.",
          "Market Saturation: Existing solar installations and remaining market potential.",
        ],
      },
      {
        type: "paragraph",
        content:
          "By layering these different data sources, modern solar maps can identify micro-markets with exceptional potential that might be overlooked by traditional analysis methods.",
      },
      {
        type: "heading",
        content: "The Power of Predictive Mapping",
      },
      {
        type: "paragraph",
        content:
          "The next frontier in solar mapping is predictive analytics. Instead of just showing current conditions, advanced platforms can model future scenarios based on policy changes, technology improvements, and market trends.",
      },
      {
        type: "quote",
        content:
          "The best solar maps don't just show you where the sun shines brightest - they show you where your business will shine brightest.",
        author: "Solar Industry Executive",
      },
      {
        type: "paragraph",
        content:
          "At Solarithm, our mapping platform goes beyond static heatmaps to provide dynamic, actionable intelligence that helps solar companies identify the most promising opportunities and develop targeted market strategies.",
      },
    ],
  },
  {
    slug: "the-future-of-decentralized-energy-markets",
    title: "The Future of Decentralized Energy Markets",
    excerpt:
      "How blockchain technology and peer-to-peer energy trading are reshaping the solar landscape and creating new opportunities for distributed energy systems.",
    date: "December 28, 2024",
    author: "Energy Market Researcher",
    authorRole: "Senior Market Analyst",
    authorBio:
      "Our market analysis team tracks emerging trends in renewable energy markets and helps companies understand the implications of new technologies and regulatory changes.",
    category: "Market Trends",
    tags: ["blockchain", "P2P trading", "decentralization", "energy markets", "distributed systems"],
    readTime: 10,
    coverImage: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg",
    content: [
      {
        type: "paragraph",
        content:
          "The traditional energy grid is undergoing a fundamental transformation. What was once a centralized system dominated by large utilities is evolving into a decentralized network where individual consumers can also be producers, and energy can be traded directly between peers.",
      },
      {
        type: "paragraph",
        content:
          "This shift is being driven by several converging trends: the decreasing cost of solar panels and battery storage, the development of smart grid technologies, and the emergence of blockchain-based platforms that enable secure, transparent peer-to-peer transactions.",
      },
      {
        type: "heading",
        content: "Blockchain's Role in Energy Trading",
      },
      {
        type: "paragraph",
        content:
          "Blockchain technology provides the foundation for decentralized energy trading by creating a secure, transparent ledger of energy transactions. Smart contracts can automatically execute trades when certain conditions are met, reducing the need for intermediaries and lowering transaction costs.",
      },
      {
        type: "list",
        items: [
          "Automated Trading: Smart contracts can buy and sell energy automatically based on supply, demand, and pricing algorithms",
          "Transparent Pricing: All market participants can see real-time pricing and trading activity",
          "Reduced Costs: Elimination of intermediaries reduces transaction fees and administrative overhead",
          "Grid Flexibility: Decentralized trading helps balance supply and demand across the grid",
        ],
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        alt: "Conceptual visualization of peer-to-peer energy trading network",
        caption: "A visualization of how peer-to-peer energy trading could work in a neighborhood with multiple solar installations.",
      },
      {
        type: "heading",
        content: "Implications for Solar Companies",
      },
      {
        type: "paragraph",
        content:
          "The emergence of decentralized energy markets creates both opportunities and challenges for solar companies. On one hand, it opens up new revenue streams and business models. On the other hand, it introduces new complexity and competition.",
      },
      {
        type: "quote",
        content:
          "Companies that understand and adapt to decentralized energy markets will have a significant competitive advantage in the coming decade.",
        author: "Renewable Energy Consultant",
      },
      {
        type: "paragraph",
        content:
          "Solar installers may need to become energy service providers, offering not just hardware installation but ongoing energy management and trading services. This shift requires new capabilities in data analytics, software development, and customer relationship management.",
      },
      {
        type: "paragraph",
        content:
          "At Solarithm, we're tracking these market developments and helping our clients understand how decentralized energy markets will impact their business strategies. The companies that prepare for this transition today will be best positioned to thrive in tomorrow's energy landscape.",
      },
    ],
  },
  {
    slug: "nasa-data-powers-solar-intelligence",
    title: "How NASA Data Powers Solar Intelligence",
    excerpt:
      "Discover how satellite data from NASA and other space agencies is revolutionizing solar site assessment and performance modeling for the renewable energy industry.",
    date: "December 20, 2024",
    author: "Satellite Data Analyst",
    authorRole: "Remote Sensing Specialist",
    authorBio:
      "Our remote sensing team specializes in processing and analyzing satellite data to extract valuable insights for solar energy applications and market intelligence.",
    category: "Technology",
    tags: ["NASA", "satellite data", "remote sensing", "solar assessment", "space technology"],
    readTime: 7,
    coverImage: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg",
    content: [
      {
        type: "paragraph",
        content:
          "When most people think of NASA, they imagine rockets and astronauts exploring distant planets. But the same satellite technology that helps us understand Mars is also revolutionizing how we harness solar energy here on Earth.",
      },
      {
        type: "paragraph",
        content:
          "NASA's fleet of Earth-observing satellites continuously monitors our planet's atmosphere, weather patterns, and surface conditions. This data provides an unprecedented view of solar resources and environmental factors that affect renewable energy systems.",
      },
      {
        type: "heading",
        content: "Key Satellite Data Sources",
      },
      {
        type: "list",
        items: [
          "MODIS (Moderate Resolution Imaging Spectroradiometer): Provides daily global coverage of atmospheric conditions and surface properties",
          "Landsat Program: Offers high-resolution imagery for detailed land use and infrastructure analysis",
          "GOES (Geostationary Operational Environmental Satellite): Delivers real-time weather and atmospheric data",
          "CERES (Clouds and the Earth's Radiant Energy System): Measures Earth's radiation budget and cloud properties",
        ],
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        alt: "Satellite view of Earth showing solar irradiance data",
        caption: "Satellite data provides a global view of solar resources and atmospheric conditions.",
      },
      {
        type: "heading",
        content: "Applications in Solar Energy",
      },
      {
        type: "paragraph",
        content:
          "Satellite data enables solar companies to perform detailed resource assessments without expensive ground-based measurement campaigns. This data can be used to evaluate potential sites, optimize system designs, and predict long-term performance.",
      },
      {
        type: "quote",
        content:
          "Satellite data has democratized access to high-quality solar resource information, enabling companies of all sizes to make informed decisions about where to invest in solar projects.",
        author: "Renewable Energy Research Institute",
      },
      {
        type: "paragraph",
        content:
          "The accuracy and coverage of satellite-based solar resource data has improved dramatically in recent years. Modern algorithms can now provide solar irradiance estimates with uncertainty levels comparable to ground-based measurements.",
      },
      {
        type: "paragraph",
        content:
          "At Solarithm, we're committed to making NASA data more accessible and valuable for solar applications. Through our platform, we're helping companies of all sizes leverage this powerful resource to make more informed decisions and gain competitive advantage in a rapidly evolving market.",
      },
      {
        type: "paragraph",
        content:
          "The next time you look up at the sky, remember that the same agency exploring distant planets is also collecting data that can help us harness the sun's energy more effectively right here on Earth. That's a connection worth celebrating - and more importantly, worth leveraging for the advancement of solar energy.",
      },
    ],
  },
]

// Function to get a blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Function to get related posts (excluding the current post)
export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  // Filter out the current post and get the specified number of related posts
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, count)
}

// Function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}