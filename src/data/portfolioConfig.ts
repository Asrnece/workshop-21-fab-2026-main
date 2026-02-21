export const portfolioConfig = {
  personalInfo: {
    name: "Asrın Ece",
    title: "Endüstrimühendisliği Öğrencisi",
    bio: "Güzel, fonksiyonel ve kullanıcı odaklı dijital deneyimler yaratmayı seven tutkulu bir yazılımcıyım. React, Next.js ve modern web teknolojileri konusunda uzmanlaşıyorum.",
    profileImage:
      "https://media.licdn.com/dms/image/v2/D4D03AQHvX5fVV3cadQ/profile-displayphoto-scale_200_200/B4DZoV.ePOGwAY-/0/1761305290759?e=2147483647&v=beta&t=oDJx_aukoj0iiOTFjAZlDm4QfmiiVLh-a1AAYh9LUV0", // Örnek görsel
    email: "asrineceunlu@gmail.com",
    location: "İstanbul, Türkiye",
  },
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Asrnece", icon: "Github" },
    { name: "LinkedIn", url: "https://tr.linkedin.com/in/asr%C4%B1n-ece-%C3%BCnl%C3%BC-3b42902a0?trk=people-guest_people_search-card", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "X" },
  ],
  skills: [
    { name: "React", icon: "Zap" },
    { name: "Next.js", icon: "Layers" },
    { name: "Tailwind CSS", icon: "Palette" },
    { name: "TypeScript", icon: "Code" },
    { name: "Framer Motion", icon: "Move" },
    { name: "Node.js", icon: "Server" },
  ],
  projects: [
    {
      title: "EcoTrack",
      description:
        "Karbon ayak izinizi takip etmenizi ve azaltmanızı sağlayan oyunlaştırılmış bir mobil uygulama.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      tags: ["React Native", "Firebase", "Node.js"],
    },
    {
      title: "Zenith Dashboard",
      description:
        "Gerçek zamanlı işbirliği araçlarına sahip minimalist bir proje yönetim paneli.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "Nebula UI Kit",
      description:
        "Modern web uygulamaları için cam morfizmi (glassmorphism) temelli bir arayüz kiti.",
      image:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?w=500&auto=format&fit=crop&q=60",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      tags: ["React", "TypeScript", "CSS Modules"],
    },
  ],
  theme: {
    primaryColor: "#009aff", // Mavi
    fontFamily: "Inter, sans-serif",
  },
};

export type PortfolioConfig = typeof portfolioConfig;
