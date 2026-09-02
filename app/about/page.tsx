export const metadata = {
  title: "About | Anjali Patel",
};

const skillCategories = [
  {
    category: "Programming & Development",
    skills: ["Python", "C++", "SQL", "Git", "FastAPI", "Docker", "Linux"],
  },
  {
    category: "Machine Learning & Deep Learning",
    skills: ["PyTorch", "Scikit-learn", "Neural Networks", "CNNs", "Siamese Networks", "Model Evaluation"],
  },
  {
    category: "NLP & Generative AI",
    skills: [
      "Hugging Face Transformers",
      "FLAN-T5",
      "Llama",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "LangGraph",
      "SentenceTransformers",
      "ChromaDB",
      "FAISS",
    ],
  },
  {
    category: "Computer Vision & Speech AI",
    skills: [
      "OpenCV",
      "Feature Extraction",
      "Image Registration",
      "SIFT",
      "ORB",
      "LoFTR",
      "SuperPoint",
      "Whisper",
      "Voice Activity Detection (VAD)",
      "Speaker Diarization",
      "ECAPA-TDNN",
    ],
  },
  {
    category: "Remote Sensing & Geospatial Processing",
    skills: [
      "LiDAR Intensity Processing",
      "Digital Elevation Models (DEM)",
      "GeoTIFF",
      "Rasterio",
      "Terrain Analysis",
      "Geometric Alignment",
    ],
  },
  {
    category: "Model Optimization & Hardware-Aware AI",
    skills: [
      "Supervised Fine-Tuning",
      "Knowledge Distillation",
      "Magnitude Pruning",
      "INT8 Quantization",
      "Inference Optimization",
      "Fixed-Point Arithmetic Concepts",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">About</h1>
        <p className="page-subtitle">Background · Skills · Research Interests · Contact</p>
      </div>

      {/* ── Research Interests ── */}
      <section className="about-section">
        <div className="about-section-title">Research Interests</div>
        <ul className="interest-list">
          <li>
            <strong>Computer Vision &amp; Multimodal Learning:</strong> Image registration, feature matching, visual representation learning, and cross-modal data alignment.
          </li>
          <li>
            <strong>Natural Language Processing &amp; Generative AI:</strong> LLM fine-tuning, retrieval-augmented generation, domain adaptation, and knowledge distillation.
          </li>
          <li>
            <strong>Speech &amp; Audio Processing:</strong> Automatic speech recognition, speaker diarization, and speech processing pipelines.
          </li>
          <li>
            <strong>Efficient Machine Learning:</strong> Model compression, quantization, inference optimization, and hardware-aware implementation.
          </li>
        </ul>
      </section>

      {/* ── Technical Skills ── */}
      <section className="about-section">
        <div className="about-section-title">Technical Skills</div>
        <div className="skills-grid">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="skill-category-card">
              <div className="skill-group-label">{category}</div>
              <div className="skill-chips">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section className="about-section">
        <div className="about-section-title">Education</div>

        <div className="edu-entry">
          <div className="edu-degree">B.Tech, Computer Science Engineering (AI/ML)</div>
          <div className="edu-institution">
            NEW LJ Institute of Engineering and Technology (GTU) · 2022 - 2025
          </div>
        </div>

        <div className="edu-entry">
          <div className="edu-degree">Diploma, Information Technology</div>
          <div className="edu-institution">
            RC Technical Institute (GTU) · 2019 - 2022
          </div>
        </div>
      </section>

      {/* ── Personal Interests ── */}
      <section className="about-section">
        <div className="about-section-title">Personal Interests</div>

        <div className="interest-tag-row">
          <span>🎧 Playlist Curation &amp; New Music</span>
          <span>🔭 Stargazing &amp; Astronomy</span>
          <span>🏏 Cricket &amp; Match Analysis</span>
        </div>

        <p className="about-text" style={{ marginTop: "1rem" }}>
          Outside of research and engineering, I enjoy discovering new music and curating playlists for different moods,
          spending quiet evenings under clear skies stargazing, and following cricket matches, close finishes, and team strategy.
        </p>
      </section>

      {/* ── Contact ── */}
      <section className="about-section">
        <div className="about-section-title">Contact</div>
        <div className="contact-list">
          <div>
            <span className="contact-label">Resume</span>
            <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume (PDF)
            </a>
          </div>
          <div>
            <span className="contact-label">Email</span>
            <a href="mailto:anjalijpatel.45@gmail.com">anjalijpatel.45@gmail.com</a>
          </div>
          <div>
            <span className="contact-label">GitHub</span>
            <a href="https://github.com/Anjalii-Patel" target="_blank" rel="noopener noreferrer">
              github.com/Anjalii-Patel
            </a>
          </div>
          <div>
            <span className="contact-label">LinkedIn</span>
            <a href="https://linkedin.com/in/anjalipatel45" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/anjalipatel45
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
