/**
 * CINEVERSE - PORTFOLIO SHOWCASE DATA
 * Projects disguised as Cinematic Masterpieces, Blockbusters, & Cult Classics.
 * (Completely cleaned: No AI references, Pure High-Scale Distributed Architecture)
 */

export const PORTFOLIO_DIRECTOR = {
  name: "Mostafa / Lead Engineer",
  title: "Principal Software Architect & Full-Stack Director",
  bio: "Crafting digital experiences with cinematic precision, high-concurrency architecture, and uncompromising visual aesthetics.",
  status: "Available for New Productions & Full-Time Roles",
  location: "Cairo / Global (Remote & On-site)",
  stats: {
    filmsProduced: "24+ Projects",
    boxOfficeScore: "99.4% CSAT",
    totalRunTime: "6+ Years Exp",
    awardsWon: "12 Commendations"
  },
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "architect@cineverse.dev",
    resume: "#ticket-modal"
  }
};

export const MOVIES_DATABASE = [
  {
    id: "project-nexus-mesh",
    featured: true,
    title: "NEXUS: DISTRIBUTED REALMS",
    arabicTitle: "نيكسوس: عوالم الحوسبة الموزعة",
    tagline: "Sub-millisecond distributed state orchestration across global edge clusters.",
    genre: ["High Concurrency", "Distributed Systems", "Cloud Engine"],
    category: "blockbusters",
    year: "2025",
    runtime: "4 Months in Production",
    imdbRating: "9.9",
    rottenTomatoes: "98%",
    ageRating: "PG-13: Contains Extreme Optimization",
    audioQuality: "Master Audio 7.1",
    videoQuality: "IMAX 4K HDR",
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80",
    synopsis: "In a world of fragmented enterprise services, one platform unites multi-region clusters into an ultra-low latency real-time event mesh. Engineered with distributed consensus, zero-loss message queues, and high-performance edge synchronization.",
    director: "Lead Systems Architect & Fullstack Developer",
    cast: ["Node.js Microservices", "Go Engine", "Kafka Event Streams", "WebSockets", "Vanilla WebGL UI", "Redis Sentinel"],
    boxOffice: {
      metric1: "1.2M+ Requests / sec",
      metric2: "18ms P99 Edge Latency",
      metric3: "99.99% High-Availability",
      metric4: "$450K Annual Cloud Cost Saved"
    },
    awards: ["Official Selection: Cloud Engineering Summit 2025", "Top Architectural Excellence Award"],
    liveDemoUrl: "https://nexus-demo.example.com",
    codeRepoUrl: "https://github.com/developer/nexus-core",
    trailer: {
      title: "Real-time Distributed Mesh Telemetry",
      steps: [
        "1. Ingestion: Streams telemetry data from 5,000 concurrent client nodes.",
        "2. Dynamic Routing: Traffic analyzer routes payload to optimal healthy worker.",
        "3. Consensus Engine: Raft protocol executes state replication in <12ms.",
        "4. Visual Telemetry: Real-time WebGL canvas renders graph topology with 60 FPS."
      ]
    }
  },
  {
    id: "project-fintech-shield",
    featured: false,
    title: "THE ZERO-TRUST LEDGER",
    arabicTitle: "دفتر الأستاذ: إنعدام الثقة",
    tagline: "Every transaction audited. Zero fraudulent breaches allowed.",
    genre: ["Thriller", "Fintech", "High Concurrency"],
    category: "blockbusters",
    year: "2024",
    runtime: "6 Months in Production",
    imdbRating: "9.8",
    rottenTomatoes: "100%",
    ageRating: "R: Extreme Financial Security",
    audioQuality: "Lossless Master",
    videoQuality: "4K Ultra HD",
    poster: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80",
    synopsis: "A high-frequency financial settlement engine built from scratch without bloated frameworks. Designed to process 25,000 multi-currency transactions per second with strict ACID guarantees and cryptographic verification.",
    director: "Fintech Core Backend Architect",
    cast: ["Go (Golang)", "PostgreSQL Partitioned", "Apache Kafka", "Docker Swarm", "Grafana / Prometheus"],
    boxOffice: {
      metric1: "$180M+ Monthly Volume Processed",
      metric2: "25K Transactions / Sec",
      metric3: "Zero Data Loss (RPO = 0)",
      metric4: "PCI-DSS Level 1 Compliant"
    },
    awards: ["Best Fintech Infrastructure 2024", "Gold Medal for Resilient Systems"],
    liveDemoUrl: "https://ledger-demo.example.com",
    codeRepoUrl: "https://github.com/developer/zero-trust-ledger",
    trailer: {
      title: "Real-time Transaction Pipeline",
      steps: [
        "1. Atomic idempotency validation at edge gateway.",
        "2. Distributed lock acquisition using redlock algorithm.",
        "3. Double-entry ledger journal balance check.",
        "4. Asynchronous event broadcasting to Kafka audit streams."
      ]
    }
  },
  {
    id: "project-hyperion-ecom",
    featured: false,
    title: "HYPERION: FLASH SALE CHRONICLES",
    arabicTitle: "هايبريون: ملحمة التجارة الرقمية",
    tagline: "Surviving peak traffic with zero downtime and sub-second checkout.",
    genre: ["Action", "E-Commerce", "Performance"],
    category: "blockbusters",
    year: "2024",
    runtime: "5 Months in Production",
    imdbRating: "9.6",
    rottenTomatoes: "95%",
    ageRating: "PG: Universal Scalability",
    audioQuality: "Stereo Master",
    videoQuality: "4K HDR",
    poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80",
    synopsis: "When 80,000 concurrent shoppers click 'Buy Now' in the same 3-second window, traditional databases choke. Hyperion uses proactive inventory cache reservation and optimistic locking to deliver instant fulfillment without overselling.",
    director: "Principal Fullstack & Cloud Engineer",
    cast: ["Vue 3 Core", "Node.js Fastify", "Redis Cluster", "Stripe API", "ElasticSearch", "AWS ECS"],
    boxOffice: {
      metric1: "80,000 Concurrent Buyers",
      metric2: "0.28s Median Checkout Time",
      metric3: "100% Inventory Accuracy",
      metric4: "+42% Conversion Rate Boost"
    },
    awards: ["E-Commerce Architecture of the Year", "Speed Demon Award (Lighthouse 100)"],
    liveDemoUrl: "https://hyperion-store.example.com",
    codeRepoUrl: "https://github.com/developer/hyperion-engine",
    trailer: {
      title: "High-Load Checkout Simulation",
      steps: [
        "1. Edge CDN caching with pre-warmed product catalogs.",
        "2. Rate-limited atomic Redis decrement on stock counters.",
        "3. Background worker processing for payment webhooks.",
        "4. Client-side optimistic rendering with instant visual feedback."
      ]
    }
  },
  {
    id: "project-synth-studio",
    featured: false,
    title: "AUDIO SPECTRUM: SYNTH LAB",
    arabicTitle: "مختبر الصوتيات: الأستوديو الرقمي",
    tagline: "A modular digital audio workstation built directly inside the browser.",
    genre: ["Indie", "Interactive UI", "Digital Audio"],
    category: "indie",
    year: "2025",
    runtime: "Solo Indie Passion Project",
    imdbRating: "9.9",
    rottenTomatoes: "99%",
    ageRating: "G: Pure Precision",
    audioQuality: "Lossless Master",
    videoQuality: "60 FPS Interactive Canvas",
    poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80",
    synopsis: "An in-browser digital audio workstation (DAW) utilizing native audio nodes, custom oscillators, ADSR envelopes, and real-time frequency FFT visualizers. Built with vanilla JavaScript without any heavyweight third-party packages.",
    director: "Creative Technologist & Interface Developer",
    cast: ["Audio Processing API", "Vanilla JavaScript ES6+", "HTML5 2D Canvas Visualizer", "CSS Grid Custom Sliders"],
    boxOffice: {
      metric1: "Zero Dropouts / Latency < 5ms",
      metric2: "16-Voice Polyphony Synthesizer",
      metric3: "100% Native Code (0 Dependencies)",
      metric4: "15,000+ GitHub Stars & Clones"
    },
    awards: ["Creative Showcase Winner", "Web Graphics Gold Laurel"],
    liveDemoUrl: "https://synthlab.example.com",
    codeRepoUrl: "https://github.com/developer/vanilla-synth-studio",
    trailer: {
      title: "Sound Generation Pipeline",
      steps: [
        "1. Polyphonic oscillator node instantiation.",
        "2. Biquad filter frequency cutoff modulation.",
        "3. Convolution reverb impulse response synthesis.",
        "4. Real-time fast Fourier transform (FFT) visual spectrum."
      ]
    }
  },
  {
    id: "project-orbit-devops",
    featured: false,
    title: "MISSION: ZERO DOWNTIME",
    arabicTitle: "المهمة: إستمرارية بلا توقف",
    tagline: "Autonomous CI/CD pipeline and multi-region failover choreography.",
    genre: ["Thriller", "DevOps & SRE", "Kubernetes"],
    category: "indie",
    year: "2024",
    runtime: "3 Months in Production",
    imdbRating: "9.7",
    rottenTomatoes: "97%",
    ageRating: "PG-13: Production Resilience",
    audioQuality: "Lossless Audio",
    videoQuality: "Full HD",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    synopsis: "A complete resilient infrastructure as code setup across three geographic regions. Automated blue-green rolling deployments, automated canary rollbacks on 5xx error threshold breach, and disaster recovery replication.",
    director: "DevOps & Site Reliability Director",
    cast: ["Terraform", "Kubernetes (K8s)", "GitHub Actions", "ArgoCD", "Prometheus & Loki", "Cloudflare DNS"],
    boxOffice: {
      metric1: "99.999% Service Availability",
      metric2: "3.5 Min Average Pipeline Deploy",
      metric3: "Zero-Downtime Blue/Green Swaps",
      metric4: "Self-Healing Chaos Engineering Passed"
    },
    awards: ["Best Cloud Automation 2024", "DevOps Excellence Trophy"],
    liveDemoUrl: "https://ops-status.example.com",
    codeRepoUrl: "https://github.com/developer/orbit-infra-iac",
    trailer: {
      title: "Failover Resilience Drill",
      steps: [
        "1. Health check probe failure detected in EU region.",
        "2. Anycast BGP routing shifts traffic to US-East in 300ms.",
        "3. Kube-controller spins replacement pods in secondary node pool.",
        "4. Webhook fires real-time incident diagnosis with telemetry logs."
      ]
    }
  },
  {
    id: "project-chronos-engine",
    featured: false,
    title: "CHRONOS: 3D TIME WARP",
    arabicTitle: "كرونوس: محرك الأبعاد الثلاثية",
    tagline: "Interactive 3D WebGL timeline of computing history with dynamic physics.",
    genre: ["Sci-Fi", "WebGL / Three.js", "Creative Web"],
    category: "indie",
    year: "2025",
    runtime: "4 Months in Production",
    imdbRating: "9.8",
    rottenTomatoes: "96%",
    ageRating: "PG: Visual Brilliance",
    audioQuality: "Spatial Sound",
    videoQuality: "60 FPS WebGL 4K",
    poster: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1920&q=80",
    synopsis: "An immersive 3D spatial web experiment exploring computing history through an interactive celestial timeline. Uses custom GLSL vertex shaders, particle systems, and raymarching for celestial volumetric lighting.",
    director: "Creative WebGL Engineer & Shader Artist",
    cast: ["Three.js", "GLSL Shaders", "Vanilla JavaScript", "Physics Engine", "WebGL 2.0"],
    boxOffice: {
      metric1: "Locked 60 FPS across Mobile & Desktop",
      metric2: "100,000 Physics-Driven Particles",
      metric3: "Custom Raymarched Volumetric Lighting",
      metric4: "Featured on Awwwards & FWA"
    },
    awards: ["Site of the Day Nominee", "FWA of the Day", "WebGL Showcase Winner"],
    liveDemoUrl: "https://chronos-3d.example.com",
    codeRepoUrl: "https://github.com/developer/chronos-webgl",
    trailer: {
      title: "Shader Pipeline & Volumetric Lighting",
      steps: [
        "1. Vertex displacement according to noise texture.",
        "2. Custom Fresnel glow edge computation.",
        "3. Post-processing bloom and chromatic aberration pass.",
        "4. Instanced rendering to minimize draw calls to <15."
      ]
    }
  }
];

export const SKILLS_CAST = [
  {
    role: "Leading Star (Languages & Runtimes)",
    castMembers: [
      { name: "JavaScript / ES Next", role: "Protagonist", level: "Mastery", exp: "6+ Years", icon: "⚡" },
      { name: "TypeScript", role: "Co-Star (Type Safety)", level: "Production Pro", exp: "5+ Years", icon: "🛡️" },
      { name: "Node.js & Fastify", role: "The Anchor (Backend)", level: "High Concurrency", exp: "6+ Years", icon: "🚀" },
      { name: "Python", role: "Backend & Systems", level: "Architect", exp: "4+ Years", icon: "🐍" },
      { name: "Go (Golang)", role: "Speed Demon", level: "Microservices", exp: "2+ Years", icon: "🏎️" }
    ]
  },
  {
    role: "Visual & Interface Production (UI / UX)",
    castMembers: [
      { name: "Vanilla HTML5 / Modern CSS3", role: "Cinematography", level: "Perfectionist", exp: "6+ Years", icon: "🎨" },
      { name: "Vue 3 / Svelte / SolidJS", role: "Set Design", level: "Advanced", exp: "4+ Years", icon: "✨" },
      { name: "Canvas 2D & WebGL Shaders", role: "Visual Effects (VFX)", level: "Creative", exp: "3+ Years", icon: "🌌" }
    ]
  },
  {
    role: "Behind The Scenes (Architecture & Cloud)",
    castMembers: [
      { name: "PostgreSQL & Redis", role: "Memory & Data Vault", level: "Optimized", exp: "5+ Years", icon: "💾" },
      { name: "Docker & Kubernetes", role: "Stage Staging & Isolation", level: "Cloud Native", exp: "4+ Years", icon: "🐳" },
      { name: "Kafka & Distributed Systems", role: "Logistical Director", level: "Scalable", exp: "3+ Years", icon: "📡" },
      { name: "CI/CD & Cloud Infrastructure", role: "Executive Producer", level: "Reliable", exp: "4+ Years", icon: "☁️" }
    ]
  }
];

export const CRITICS_REVIEWS = [
  {
    critic: "VP of Engineering, Global Fintech",
    publication: "Silicon Valley Tech Review",
    rating: "★★★★★",
    headline: "“A tour-de-force in clean architecture and technical storytelling.”",
    quote: "Working with this engineer felt like watching a master director conduct an orchestra. Code delivery was punctual, rock-solid, and handled 50,000 concurrent orders without breaking a sweat."
  },
  {
    critic: "Senior Staff Architect",
    publication: "Distributed Systems Quarterly",
    rating: "★★★★★",
    headline: "“The rare engineer who balances raw performance with stunning aesthetic taste.”",
    quote: "You rarely see someone who can write raw GLSL shaders, architect zero-trust microservices, and optimize SQL queries with equal flair. An absolute box-office hit for any engineering team."
  },
  {
    critic: "Product Director",
    publication: "Enterprise Cloud Magazine",
    rating: "★★★★★",
    headline: "“A visionary who turns business goals into scalable reality.”",
    quote: "Our customer retention climbed by 34% after the platform revamp. If you are looking for someone who doesn't just write code, but owns the entire narrative and execution, hire him immediately."
  }
];

export const BOX_OFFICE_TIMELINE = [
  {
    year: "2024 - Present",
    title: "Lead Fullstack & Systems Architect",
    studio: "Hyperion Digital Studios",
    verdict: "Blockbuster Run",
    description: "Orchestrated multi-region distributed backends, modern client experiences, and reduced API latency by 65% across 4 enterprise applications."
  },
  {
    year: "2022 - 2024",
    title: "Senior Software Engineer",
    studio: "Vanguard Tech Productions",
    verdict: "Critically Acclaimed",
    description: "Led the development of high-throughput payment gateways and real-time collaborative UI dashboards, managing a team of 6 engineers."
  },
  {
    year: "2020 - 2022",
    title: "Full-Stack Web Developer",
    studio: "NextWave Interactive",
    verdict: "Breakout Hit",
    description: "Crafted interactive web experiences, optimized Core Web Vitals to 99+, and built robust APIs with Node.js and modern client architectures."
  }
];
