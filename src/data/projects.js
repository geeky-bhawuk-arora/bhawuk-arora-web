export const featuredProjects = [
  {
    id: 1,
    title: "FloatChat: AI-Powered Ocean Data Discovery",
    description: "Architected and deployed a scalable AI platform for ocean data analysis using Databricks Delta Lakehouse and Azure Event Hubs. Improved data retrieval efficiency by 35% through dynamic querying.", // Summarized description from resume [cite: 29, 30]
    tech: ["Azure Databricks", "Delta Lakehouse", "Azure Event Hubs", "FastAPI", "NL-to-SQL (Azure Synapse)", "Vector DB"], // Technologies extracted from resume [cite: 29, 30]
    gradient: "from-blue-600 to-indigo-700", // Custom gradient to represent 'Ocean/Data' theme
    featured: true,
    stats: { efficiency_gain: "35%", platform: "Scalable AI" },
    githubUrl: "https://github.com/geeky-bhawuk-arora/FloatChat", // Assuming link based on GitHub URL format and project name
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Aqua Vision: AI Underwater Image Enhancement",
    description: "Developed a FastAPI backend to process and return underwater images for real-time enhancement. Trained and deployed a Convolutional Neural Network (CNN) to correct distortions, color loss, and scattering.", // Summarized description from resume [cite: 32, 33]
    tech: ["FastAPI", "Convolutional Neural Network (CNN)", "Python", "Data Augmentation"], // Technologies extracted from resume [cite: 32, 33, 34]
    gradient: "from-teal-500 to-green-600", // Custom gradient to represent 'Aqua/Vision' theme
    featured: true,
    stats: { deployment: "Real-Time", model: "CNN" },
    githubUrl: "https://github.com/geeky-bhawuk-arora/Aqua-Vision", // Assuming link based on GitHub URL format and project name
    liveUrl: "#"
  }
];