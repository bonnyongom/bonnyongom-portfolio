const PDFDocument = require("pdfkit")
const fs = require("fs")
const path = require("path")

const TEAL = "#2dd4bf"
const DARK = "#1f2937"
const GRAY = "#4b5563"

const outDir = path.join(__dirname, "..", "public", "cv")
fs.mkdirSync(outDir, { recursive: true })

function buildCV({ file, lang }) {
  const doc = new PDFDocument({ size: "A4", margin: 50 })
  doc.pipe(fs.createWriteStream(path.join(outDir, file)))

  const t = (en, de) => (lang === "de" ? de : en)

  // Header
  doc.fillColor(DARK).fontSize(24).font("Helvetica-Bold").text("Bonny Ongom")
  doc.moveDown(0.1)
  doc.fillColor(TEAL).fontSize(12).font("Helvetica-Bold").text("Software Engineer")
  doc
    .fillColor(GRAY)
    .fontSize(9)
    .font("Helvetica")
    .text("Cologne, Germany  |  bonnyongom91@gmail.com  |  +49 1573 6792740  |  boshtech.site")
  doc.moveDown(0.8)

  const section = (title) => {
    doc.moveDown(0.5)
    doc.fillColor(TEAL).fontSize(11).font("Helvetica-Bold").text(title.toUpperCase())
    doc
      .strokeColor(TEAL)
      .lineWidth(1)
      .moveTo(doc.x, doc.y + 2)
      .lineTo(545, doc.y + 2)
      .stroke()
    doc.moveDown(0.5)
  }

  const para = (text) => doc.fillColor(GRAY).fontSize(9.5).font("Helvetica").text(text, { lineGap: 2 })
  const bullet = (text) => doc.fillColor(GRAY).fontSize(9.5).font("Helvetica").text("•  " + text, { indent: 6, lineGap: 2 })

  section(t("Profile", "Profil"))
  para(
    t(
      "Software Engineer based in Germany with a Bachelor's degree in Software Engineering and ongoing studies in Cyber Security. Delivered 10+ client projects across web applications, automation, SEO, and digital systems for businesses and organizations.",
      "Softwareentwickler in Deutschland mit einem Bachelor-Abschluss in Software Engineering und laufendem Studium in Cyber Security. Mehr als 10 Kundenprojekte in den Bereichen Webanwendungen, Automatisierung, SEO und digitale Systeme umgesetzt.",
    ),
  )

  section(t("Experience", "Berufserfahrung"))
  doc.fillColor(DARK).fontSize(10).font("Helvetica-Bold").text("Freelance Software Developer & IT Consultant — BOSH IT")
  doc.fillColor(GRAY).fontSize(8.5).font("Helvetica-Oblique").text("Aug 2025 – Present  |  Germany")
  doc.moveDown(0.2)
  bullet(t("Delivered 10+ client projects from architecture through deployment.", "Mehr als 10 Kundenprojekte von der Architektur bis zum Deployment umgesetzt."))
  bullet(t("Built full-stack web applications, REST APIs, and business systems.", "Full-Stack-Webanwendungen, REST-APIs und Geschäftssysteme entwickelt."))
  bullet(t("Developed browser automation workflows with Playwright.", "Browser-Automatisierungs-Workflows mit Playwright entwickelt."))
  doc.moveDown(0.4)
  doc.fillColor(DARK).fontSize(10).font("Helvetica-Bold").text("SEO Manager (Freelance) — SHOFCO Germany")
  doc.fillColor(GRAY).fontSize(8.5).font("Helvetica-Oblique").text("2025 – Present  |  Germany")
  doc.moveDown(0.2)
  bullet(t("Implemented technical SEO and improved search visibility.", "Technisches SEO implementiert und Sichtbarkeit verbessert."))
  bullet(t("Managed Google Search Console and monitored performance.", "Google Search Console verwaltet und Performance überwacht."))

  section(t("Selected Projects", "Ausgewählte Projekte"))
  const projs = [
    ["Future Talents Platform", "Full-stack talent platform — React, Node.js, PostgreSQL"],
    ["Opel Widget Monitor", "Browser automation & monitoring — Playwright, JavaScript"],
    ["Foerderkompass Plus", "AI-powered funding discovery — Python, AI, Chatbots"],
    ["SHOFCO Germany", "Website optimization & technical SEO — SEO, WordPress"],
  ]
  projs.forEach(([n, d]) => {
    doc.fillColor(DARK).fontSize(9.5).font("Helvetica-Bold").text(n, { continued: true })
    doc.fillColor(GRAY).font("Helvetica").text("  —  " + d)
  })

  section(t("Skills", "Kenntnisse"))
  para("JavaScript, Python, Java, React, Next.js, Node.js, Express.js, REST APIs, PostgreSQL, MySQL, Playwright, Workflow Automation, AI Systems, Technical SEO, Google Analytics, WordPress, Git, Figma")

  section(t("Education", "Ausbildung"))
  doc.fillColor(DARK).fontSize(9.5).font("Helvetica-Bold").text("B.Sc. Cyber Security", { continued: true })
  doc.fillColor(GRAY).font("Helvetica").text("  —  International University of Applied Sciences (Expected 2027)")
  doc.fillColor(DARK).fontSize(9.5).font("Helvetica-Bold").text("B.Sc. Software Engineering", { continued: true })
  doc.fillColor(GRAY).font("Helvetica").text("  —  Makerere University")

  section(t("Languages", "Sprachen"))
  para(t("English (Fluent), German (B1, Certified)", "Englisch (Fließend), Deutsch (B1, Zertifiziert)"))

  doc.end()
}

buildCV({ file: "Bonny-Ongom-CV-English.pdf", lang: "en" })
buildCV({ file: "Bonny-Ongom-Lebenslauf-Deutsch.pdf", lang: "de" })
console.log("CV PDFs generated")
