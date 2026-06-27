import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Port must be 3000 as configured by AI Studio routing
const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Grounding portfolio data defining inline to keep server fully self-contained
  const portfolioData = {
    personalInfo: {
      name: "Abhinav Parihar",
      college: "NITRA Technical Campus",
      batch: "2024-2028",
      email: "abhinavtparihar@gmail.com"
    }
  };

  // Set up system instructions for Abhinav's AI Assistant
  const systemInstruction = `
You are the interactive AI Portfolio Assistant for Abhinav Parihar, a highly skilled Software Engineer, Full Stack Web Developer, and Mobile App Developer.
Your goal is to answer questions from recruiters, hiring managers, and prospective clients in a professional, courteous, and tech-savvy manner.
Always write in the first person ("I" representing Abhinav) or as Abhinav's personal assistant representing him, but prefer responding directly as Abhinav Parihar (e.g., "I built...", "I am studying...", "My email is...").
Keep your responses relatively concise, exciting, professional, and well-structured.

Here are the accurate details about me:
- **Full Name**: Abhinav Parihar
- **Bio**: B.Tech CSE student at NITRA Technical Campus. Passionate about Full Stack Web Development, Mobile App development, and AI integrations. Love solving real-world problems.
- **Tagline**: "Turning Ideas Into Powerful Digital Experiences."
- **Batch**: 2024-2028 (Undergrad)
- **Education**: NITRA Technical Campus, Bachelor of Technology in Computer Science & Engineering.
- **Skills**:
  - Frontend: React.js, JavaScript, TypeScript, HTML5/CSS3, Tailwind CSS.
  - Backend: Node.js, Express.js, REST APIs, Next.js.
  - Languages: C, C++, Java, Kotlin, Python, SQL, JavaScript.
  - Databases: MySQL, Firebase, SQLite, PostgreSQL.
  - Tools: Git & GitHub, Android Studio, VS Code, Postman, Figma.
- **Projects**:
  1. **AetherChat AI**: Secure real-time encrypted messaging app using WebSockets, Node.js, Express, Firebase, and Gemini API on the backend for translations and summaries.
  2. **NovaCloud Analytics Dashboard**: Modern cloud status viewer with live SVG charts via Recharts/D3.js.
  3. **FitQuest Mobile**: Kotlin-based Android app gamifying workouts with Firestore and SQLite.
  4. **Sentiscan API**: Blazing fast Express/PostgreSQL sentiment analysis API.
- **Certificates**:
  1. Google Cloud Certified: Associate Cloud Engineer (GCP, GKE, Cloud Run)
  2. Meta Front-End Developer Professional Certificate (React, JS, CSS, UX)
  3. Android App Development with Kotlin (Google Developer Program)
- **Awards & Achievements**:
  1. 1st Place - Smart India Hackathon (SIH) 2025 (Agri monitoring system with cloud and IoT)
  2. Best Innovation Award - NITRA Tech Fest (IoT Home Automation via BLE)
  3. Dean's List for Academic Excellence (top 5% of B.Tech CSE department)
- **Socials & Contacts**:
  - Email: abhinavtparihar@gmail.com
  - Phone: +91 82995 44871
  - GitHub: https://github.com/AbhinavParihar
  - LinkedIn: https://linkedin.com/in/abhinavparihar
  - WhatsApp: https://wa.me/918299544871
  - Location: Ghaziabad, Uttar Pradesh, India (NITRA Technical Campus)

If anyone asks how to contact me, direct them to my email (abhinavtparihar@gmail.com), my LinkedIn, or the Contact Form at the bottom of the page.
If they ask about resume, explain that they can view or download it directly from the "Resume" section of the website.
Do not make up any other credentials or experiences. Be polite and confident!
`;

  // Safe initialize GoogleGenAI client
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  
  if (apiKey && apiKey !== "MY_GEMINI_API_KEY" && !apiKey.startsWith("MY_GEMINI_")) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("GEMINI_API_KEY is not configured or is a placeholder. Chatbot will run in offline simulation mode.");
  }

  // AI Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // If API client is not configured, fall back to an elegant simulated smart response
      if (!ai) {
        const lower = message.toLowerCase();
        let reply = "I would be happy to tell you more about myself! I am Abhinav Parihar, currently studying Computer Science and Engineering at NITRA Technical Campus. Feel free to explore my Skills, Projects, and Certificates sections, or drop me an email at abhinavtparihar@gmail.com!";
        
        if (lower.includes("project") || lower.includes("build") || lower.includes("work")) {
          reply = "I've built several notable projects including **AetherChat AI** (a real-time translation messenger using the Gemini API), **NovaCloud Analytics** (a DevOps monitoring dashboard), **FitQuest Mobile** (a native Kotlin tracking app), and **Sentiscan** (an NLP sentiment REST API). You can review details of each under the Projects section!";
        } else if (lower.includes("skill") || lower.includes("language") || lower.includes("tech") || lower.includes("stack")) {
          reply = "My primary engineering stack includes **React.js, JavaScript/TypeScript, Node.js, Express, and Tailwind CSS** for web development, and **Kotlin/Java & Android Studio** for mobile apps. I also write **C/C++, Python, and SQL** regularly!";
        } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("hire")) {
          reply = "You can contact me directly at **abhinavtparihar@gmail.com** or call me at **+91 82995 44871**. You can also connect with me on LinkedIn at https://linkedin.com/in/abhinavparihar or send a message via the form at the bottom of this page!";
        } else if (lower.includes("education") || lower.includes("college") || lower.includes("degree") || lower.includes("nitra")) {
          reply = "I am pursuing my **Bachelor of Technology (B.Tech) in Computer Science & Engineering** at **NITRA Technical Campus** (2024–2028 batch). I am currently focused on cloud technologies, algorithms, and full-stack software development.";
        } else if (lower.includes("certificate") || lower.includes("award") || lower.includes("win")) {
          reply = "I hold prestigious credentials like the **Google Cloud Associate Cloud Engineer** certificate and the **Meta Front-End Developer** professional certificate. I also won **1st Place at the Smart India Hackathon (SIH) 2025** and the **Best Innovation Award** at NITRA Tech Fest!";
        } else if (lower.includes("resume") || lower.includes("cv")) {
          reply = "You can preview or download my full professional resume directly from the 'Resume' section of this portfolio. Let me know if you would like me to discuss any specific experiences!";
        } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
          reply = "Hello there! Welcome to my portfolio. I am Abhinav Parihar. How can I assist you today? You can ask me about my skills, projects, college studies, or how to hire me!";
        }
        
        // Add artificial delay for organic feel
        await new Promise(resolve => setTimeout(resolve, 800));
        return res.json({ text: reply });
      }

      // Use the actual Gemini API
      // Prepare contents with optional simple history injection
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: message,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      return res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.status(500).json({ error: "Failed to communicate with AI Assistant", details: error.message });
    }
  });

  // Mock Contact form submission endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    console.log(`Contact message received from ${name} (${email}): ${message}`);
    return res.json({ success: true, message: "Thank you for reaching out! Abhinav will get back to you shortly." });
  });

  // Vite Dev vs Prod static middleware serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
