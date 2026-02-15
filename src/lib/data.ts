export const practiceData: Record<string, { title: string; description: string; details: string[]; image: string }> = {
  "supreme-court-litigation": {
    title: "Supreme Court Practice",
    description: "Satyarup Law Firm regularly handles matters before the Supreme Court of India. As an Advocate-on-Record practice, the firm provides complete procedural and litigation support, including drafting, filing, and representation.",
    details: ["Special Leave Petitions", "Civil Appeals", "Criminal Appeals", "Constitutional Matters", "Arbitration-related Litigation", "Writ Petitions", "Review & Curative Petitions"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
  },
  "high-court-litigation": {
    title: "High Court Litigation",
    description: "The firm appears before several High Courts across India, handling original and appellate matters across civil, criminal, and commercial law.",
    details: ["Delhi High Court", "Bombay High Court", "Punjab & Haryana High Court", "Madhya Pradesh High Court", "Patna High Court", "Tripura High Court", "Original & Appellate Jurisdiction"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
  },
  "arbitration-dispute-resolution": {
    title: "Arbitration & Dispute Resolution",
    description: "The firm has extensive experience in arbitration matters involving government departments, institutions, and commercial entities. Dr. Ashwani Bhardwaj has served as an arbitrator on the panel of the Delhi International Arbitration Centre.",
    details: ["Arbitration Proceedings", "Arbitration-related Court Proceedings", "Enforcement of Awards", "Contractual Dispute Resolution", "Commercial Arbitration", "Institutional Arbitration", "Ad-hoc Arbitration"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80",
  },
  "banking-financial-litigation": {
    title: "Banking & Financial Litigation",
    description: "The firm represents major financial institutions in litigation matters before courts and tribunals. These matters often involve recovery proceedings, commercial disputes, and regulatory issues.",
    details: ["Bank of Baroda", "Punjab National Bank", "Central Bank of India", "Indian Overseas Bank", "Recovery Proceedings", "Commercial Disputes", "Regulatory Issues"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80",
  },
  "government-regulatory-matters": {
    title: "Government & Public Sector Representation",
    description: "The firm has represented the Union of India and various public sector entities. Such matters frequently involve complex statutory interpretation, policy issues, and administrative law.",
    details: ["Union of India", "Ministry of Railways", "Western Coalfields Limited", "Shipping Corporation of India", "Association of Indian Universities", "Statutory Interpretation", "Administrative Law"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&auto=format&fit=crop&q=80",
  },
  "environmental-tribunal-litigation": {
    title: "Environmental & Tribunal Matters",
    description: "The firm handles matters before the National Green Tribunal, Consumer Dispute Redressal Commissions, and various arbitration forums, including environmental litigation, regulatory disputes, and public law matters.",
    details: ["National Green Tribunal", "Consumer Dispute Redressal Commissions", "Environmental Litigation", "Regulatory Disputes", "Public Law Matters", "Tribunal Representation", "Compliance Advisory"],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&auto=format&fit=crop&q=80",
  },
};

export const articleData: Record<string, { title: string; date: string; category: string; image: string; content: string }> = {
  "supreme-court-corporate-governance": {
    title: "Supreme Court Landmark Ruling on Corporate Governance",
    date: "February 10, 2026",
    category: "Constitutional Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
    content: `The Supreme Court of India has delivered a landmark judgment that fundamentally reshapes corporate governance standards for listed companies. The ruling establishes new precedents for how boards of directors must approach their fiduciary duties, particularly in matters involving related-party transactions and minority shareholder protection.\n\nThe judgment, which arose from a dispute involving a major conglomerate, clarifies the scope of director liability and introduces stricter standards for board oversight. Companies must now demonstrate that their governance frameworks actively protect shareholder interests.\n\nKey takeaways include enhanced disclosure obligations, stricter conflict-of-interest protocols, and a new standard for assessing board member independence.\n\nSatyarup Law Firm continues to advise clients on the implications of this ruling and assist in updating governance frameworks to ensure compliance.`,
  },
  "labour-code-amendments": {
    title: "New Amendments to Labour Code: What Employers Must Know",
    date: "February 5, 2026",
    category: "Regulatory Law",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80",
    content: `The Government of India has introduced significant amendments to the consolidated Labour Codes that will impact employers across all industries. These changes, effective from April 2026, affect hiring practices, working hours, employee benefits, and dispute resolution mechanisms.\n\nAmong the most significant changes are revised overtime calculations, mandatory electronic record-keeping, and enhanced protections for gig and platform workers. Employers with more than 50 employees will also need to establish formal grievance redressal committees.\n\nThe amendments expand social security coverage to previously excluded categories of workers, representing a major shift in India's labour law landscape.\n\nSatyarup Law Firm is conducting detailed advisory sessions for institutional and corporate clients to help them implement the required changes before the April deadline.`,
  },
};

export const practiceSlugs = Object.keys(practiceData);
export const articleSlugs = Object.keys(articleData);
