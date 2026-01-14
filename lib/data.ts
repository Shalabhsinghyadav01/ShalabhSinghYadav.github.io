export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: "stakeholder" | "personal";
  highlights: string[];
  imageUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "University of Massachusetts Dartmouth",
    position: "Research Assistant – Reinforcement Learning & Agentic AI Systems",
    location: "North Dartmouth, MA",
    startDate: "Sep 2025",
    endDate: "Present",
    description: [
      "Designed and implemented a Gymnasium-compliant RL environment that models a real-world DevOps staged rollout problem, effectively separating environment dynamics from learning algorithms to enable modular and extensible system architecture. This design allows researchers to easily swap different RL algorithms without modifying the environment code, significantly improving the system's flexibility and maintainability",
      "Refactored a tightly coupled RL system into a plug-and-play architecture, supporting both custom and standard algorithms including Q-learning, deep RL, and Stable-Baselines3. This architectural improvement enhanced code reusability and experimentation flexibility, allowing for rapid prototyping and comparison of different RL approaches on the same problem domain",
      "Defined standardized state, action, reward, and termination interfaces that enable reproducible experimentation and fair algorithm comparison across different RL approaches. These interfaces ensure consistent evaluation metrics and experimental conditions, facilitating rigorous research and meaningful performance comparisons",
      "Built agent-agnostic interaction loops emphasizing autonomous decision-making and reward-driven optimization for agentic AI systems. These core building blocks can adapt to complex real-world scenarios, providing a foundation for developing intelligent systems that can make independent decisions and optimize their behavior based on environmental feedback",
    ],
    technologies: [
      "Python",
      "Reinforcement Learning",
      "Gymnasium",
      "Deep RL",
      "Stable-Baselines3",
      "Agentic AI",
    ],
  },
  {
    company: "University of Massachusetts Dartmouth",
    position: "Research Assistant – Data Science & Model Automation",
    location: "North Dartmouth, MA",
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    description: [
      "Built reproducible data and modeling pipelines in Python, transforming a GUI-based research tool into a scalable command-line workflow. This transformation significantly improved processing efficiency, enabled batch processing of large datasets, and eliminated manual intervention requirements, making the research process more robust and repeatable",
      "Enabled systematic experimentation across 7 statistical models and 40+ parameters using configuration-driven validation logic. This approach reduced manual configuration time by 80% and ensured consistent experimental conditions across all runs, enabling comprehensive model comparison and parameter sensitivity analysis",
      "Conducted controlled experiments to analyze model behavior, convergence, and sensitivity across different parameter configurations. Generated detailed insights that informed model selection and parameter tuning strategies, helping identify optimal configurations and understand model performance characteristics under various conditions",
      "Developed automated research reporting and visualization outputs to support interpretability and dissemination. Created standardized reports with consistent formatting and comprehensive visualizations that enhanced collaboration with research team members, streamlined the research workflow, and facilitated knowledge sharing across the research group",
    ],
    technologies: [
      "Python",
      "Statistical Modeling",
      "Data Pipelines",
      "Experiment Design",
      "Reproducible Research",
    ],
  },
  {
    company: "R.S. Traders",
    position: "Founder & Software Engineer – Data Analytics Systems (Project Demo)",
    location: "Indore, India",
    startDate: "Jan 2021",
    endDate: "Mar 2023",
    description: [
      "Founded and built an end-to-end data analytics platform from scratch, owning system design, data pipelines, and dashboards to replace manual, spreadsheet-driven operations. This comprehensive platform transformed the company's operational workflow, eliminating manual data entry and enabling automated, data-driven decision-making processes",
      "Designed automated data ingestion and validation workflows that converted fragmented operational data into reliable analytical datasets supporting repeatable analysis. These workflows ensured data quality and consistency, enabling stakeholders to trust and act upon the analytical insights generated from the platform",
      "Applied statistical and predictive modeling techniques to analyze demand and inventory behavior, improving planning decisions and operational visibility. These models provided actionable insights that directly influenced business strategy, leading to more efficient inventory management and better demand forecasting",
      "Balanced technical execution with business constraints by iterating directly with users, translating analytical insights into actionable workflows adopted in daily operations. This user-centric approach ensured the platform met real business needs and was successfully integrated into the organization's operational processes",
    ],
    technologies: [
      "Python",
      "SQL",
      "Statistical Modeling",
      "Predictive Analytics",
      "Data Visualization",
      "Data Pipelines",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Bellabeat: Analyzing User Behavior",
    description:
      "Analyzed fitness tracker data to uncover user activity patterns, providing strategic insights for product development and marketing initiatives.",
    longDescription:
      "This case study analyzed smart device data to uncover trends that can drive Bellabeat's growth in the wellness technology market. The primary focus was on the Bellabeat App, which collects and displays user data related to activity, sleep, stress, and mindfulness. Key findings included that active users demonstrate better sleep patterns, whereas sedentary users exhibit lower sleep efficiency and higher BMI levels. Users tend to be more active on weekdays, with sleep hours peaking on weekends.",
    technologies: ["R", "ggplot2", "Data Cleaning", "EDA", "Visualization"],
    githubUrl: "https://github.com/Shalabhsinghyadav01",
    liveUrl:
      "https://www.kaggle.com/code/shalabhsinghyadav/bellabeat-capstone-case-study",
    type: "stakeholder",
    highlights: [
      "Identified key user behavior patterns across activity levels",
      "Discovered correlation between activity and sleep quality",
      "Provided actionable insights for marketing strategy",
    ],
    imageUrl: "/images/bellabeat.png",
  },
  {
    title: "KPI-Driven Sales Report for Maven Toy Company",
    description:
      "Analyzed sales and inventory data using SQL and Tableau to identify key trends in sales, inventory management, and profitability, supporting strategic decision-making.",
    longDescription:
      "I analyzed Maven Toys' sales and inventory data using SQL and Tableau to identify key trends in sales, inventory management, and profitability. My objective was to generate data-driven insights that support strategic decision-making and improve overall business performance. The analysis focused on optimizing stock levels, reducing stockouts, and enhancing revenue performance.",
    technologies: ["Excel", "Python", "SQL", "Tableau", "Business Intelligence"],
    githubUrl: "https://github.com/Shalabhsinghyadav01/Maven_toy_KPI_analysis/tree/main#business-task",
    type: "stakeholder",
    highlights: [
      "Optimized inventory levels to reduce stockouts",
      "Identified profitable product categories and trends",
      "Created interactive dashboards for executive reporting",
    ],
    imageUrl: "/images/maven-toys.jpg",
  },
  {
    title: "COVID-19 Death Analysis",
    description:
      "Conducted comprehensive analysis of global COVID-19 data, focusing on death rates and vaccination progress across various countries using SQL and Tableau.",
    longDescription:
      "I conducted a comprehensive analysis of global COVID-19 data, focusing on death rates and vaccination progress across various countries. Utilizing SQL for data querying and Tableau for visualization, I examined datasets containing information on total cases, deaths, and vaccinations. This analysis aimed to uncover trends and insights to better understand the pandemic's global impact. An interactive Tableau dashboard was created to visualize key metrics and trends, facilitating data-driven decision-making. Found that countries with 70%+ vaccination rates experienced a 40% lower fatality rate compared to those with lower coverage.",
    technologies: ["Excel", "SQL", "Tableau", "Data Visualization"],
    githubUrl: "https://github.com/Shalabhsinghyadav01/Covid_Death_Analysis",
    type: "personal",
    highlights: [
      "Discovered 40% lower fatality rate in highly vaccinated countries",
      "Created interactive global dashboard for trend analysis",
      "Analyzed millions of data points across multiple countries",
    ],
    imageUrl: "/images/covid-analysis.jpg",
  },
  {
    title: "Bank Customer Churn Prediction",
    description:
      "Developed a predictive model to identify bank customers at risk of churning by analyzing attributes such as age, balance, product usage, and account activity.",
    longDescription:
      "I developed a predictive model to identify bank customers at risk of churning by analyzing attributes such as age, balance, product usage, and account activity. This model enables targeted retention strategies to enhance customer loyalty and reduce attrition. The model achieved 86.4% accuracy in predicting customer churn, providing actionable insights for targeted retention strategies. Three distinct customer segments were identified based on age, balance, and churn probability.",
    technologies: [
      "Excel",
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Machine Learning",
    ],
    githubUrl: "https://github.com/Shalabhsinghyadav01/Bank-Churn-Analysis",
    type: "personal",
    highlights: [
      "Achieved 86.4% accuracy in churn prediction",
      "Identified three distinct customer segments",
      "Enabled targeted retention strategies",
    ],
    imageUrl: "/images/bank-churn.jpg",
  },
  {
    title: "Interactive Tableau Dashboards",
    description:
      "Collection of dynamic and insightful dashboards designed to transform raw data into meaningful visual stories, driving informed decision-making.",
    longDescription:
      "This section showcases a collection of dynamic and insightful dashboards, each designed to transform raw data into meaningful visual stories. These projects highlight my ability to analyze complex datasets, uncover patterns, and present findings in a clear and engaging manner. Whether focused on business performance, market trends, or operational efficiency, each dashboard is built to drive informed decision-making. Projects include British Airways Reviews, King County House Sales, London Bike Rides, and Actual vs Target Sales analysis.",
    technologies: ["Tableau", "Data Visualization", "Business Intelligence"],
    liveUrl: "https://public.tableau.com/app/profile/shalabh.yadav/vizzes",
    type: "personal",
    highlights: [
      "Created multiple interactive dashboards for different industries",
      "Enabled real-time data exploration and analysis",
      "Improved stakeholder decision-making processes",
    ],
    imageUrl: "/images/ableau-dashboards.jpg",
  },
];

export interface Certification {
  title: string;
  institution: string;
  date?: string;
  details?: string;
  link?: string;
}

export interface Research {
  title: string;
  description?: string;
  link: string;
  technologies?: string[];
}

export const certifications: Certification[] = [
  {
    title: "Master of Data Science (Applied ML & Research Analytics)",
    institution: "University of Massachusetts Dartmouth",
    date: "Aug 2023 – Dec 2025",
    details: "GPA: 3.7",
  },
  {
    title: "Google Data Analytics Certificate",
    institution: "Coursera",
    date: "",
    details: "",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/Z28EV2FI6L2M?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    title: "Bachelor of Computer Science",
    institution: "Acropolis Technical Campus",
    date: "Aug 2019 – May 2023",
    details: "GPA: 9.3/10",
  },
];

export const research: Research[] = [
  {
    title: "A Novel Neural Network Architecture for Enhanced Real-Time Image Classification",
    link: "https://www.researchgate.net/publication/388110312_A_Novel_Neural_Network_Architecture_for_Enhanced_Real-Time_Image_Classification",
  },
  {
    title: "Visualization Steering Machine Learning/Statistical Models using K-Means Clustering Methodology",
    link: "https://www.researchgate.net/publication/383342963_Visualization_Steering_Machine_LearningStatistical_Models_using_K-Means_Clustering_Methodology",
  },
  {
    title: "Parallel Image Processing for Edge detection and Filtering",
    link: "https://www.researchgate.net/publication/383945449_Parallel_Image_Processing_for_Edge_detection_and_Filtering",
  },
];

export const skills = {
  languages: [
    "Python",
    "R",
    "SQL",
    "Reinforcement Learning",
    "Agentic AI Systems",
    "Deep RL Concepts",
    "Supervised & Unsupervised Learning",
    "Statistical Modeling",
    "Optimization",
    "Experiment Design",
    "Model Evaluation",
    "Reproducible Pipelines",
    "Algorithm Benchmarking",
    "Hyperparameter Analysis",
    "Data Visualization",
    "Predictive Analytics",
  ],
  tools: [
    "Git",
    "CLI-based Workflows",
    "Tableau",
    "Power BI",
    "Excel",
    "Jupyter Notebooks",
    "PostgreSQL",
  ],
  frameworks: [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Gymnasium",
    "Stable-Baselines3",
  ],
};
