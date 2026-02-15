export const practiceData: Record<string, { title: string; description: string; details: string[]; image: string }> = {
  "corporate-law": {
    title: "Corporate Law",
    description: "Our corporate law practice provides comprehensive legal counsel to businesses at every stage of growth, from startup formation to multinational operations.",
    details: ["Business Formation & Structuring", "Mergers & Acquisitions", "Corporate Governance & Compliance", "Venture Capital & Private Equity", "Joint Ventures & Strategic Alliances", "Securities & Capital Markets", "Due Diligence & Risk Assessment"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
  },
  "criminal-defence": {
    title: "Criminal Defence",
    description: "We provide vigorous defence representation in all criminal matters, protecting the rights and freedom of our clients with determination and skill.",
    details: ["White-Collar Crime Defence", "Fraud & Financial Crimes", "Cyber Crime", "Bail Applications & Appeals", "Trial Advocacy", "Criminal Appellate Practice", "Anticipatory Bail"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
  },
  "civil-litigation": {
    title: "Civil Litigation",
    description: "Our litigation team handles complex disputes across commercial, contractual, and tortious matters with strategic precision.",
    details: ["Commercial Disputes", "Contract Enforcement", "Injunctions & Interim Relief", "Arbitration & Mediation", "Consumer Disputes", "Debt Recovery", "Tortious Claims"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80",
  },
  "family-law": {
    title: "Family Law",
    description: "We handle sensitive family matters with compassion and strategic expertise, always prioritizing the best interests of our clients.",
    details: ["Divorce & Separation", "Child Custody & Visitation", "Adoption", "Domestic Violence Protection", "Maintenance & Alimony", "Matrimonial Property Disputes", "Prenuptial Agreements"],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&auto=format&fit=crop&q=80",
  },
  "property-real-estate": {
    title: "Property & Real Estate",
    description: "Comprehensive real estate advisory from acquisition to dispute resolution, covering all aspects of property law.",
    details: ["Property Transactions & Due Diligence", "Title Verification & Transfer", "RERA Compliance", "Construction & Development", "Landlord-Tenant Disputes", "Land Acquisition", "Property Registration"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80",
  },
  "labour-employment": {
    title: "Labour & Employment",
    description: "We advise on all aspects of employment law, ensuring compliance and protecting the rights of both employers and employees.",
    details: ["Employment Contracts & Policies", "Workplace Dispute Resolution", "Labour Code Compliance", "Industrial Relations", "Employee Benefits Advisory", "Termination & Severance", "Occupational Safety"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80",
  },
  "intellectual-property": {
    title: "Intellectual Property",
    description: "We protect innovations and creative works through comprehensive IP strategies and vigorous enforcement.",
    details: ["Patent Registration & Protection", "Trademark Filing & Prosecution", "Copyright Registration", "Trade Secrets Protection", "IP Licensing & Agreements", "IP Litigation & Enforcement", "Domain Name Disputes"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&auto=format&fit=crop&q=80",
  },
};

export const articleData: Record<string, { title: string; date: string; category: string; image: string; content: string }> = {
  "supreme-court-corporate-governance": {
    title: "Supreme Court Landmark Ruling on Corporate Governance",
    date: "February 10, 2026",
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
    content: `The Supreme Court of India has delivered a landmark judgment that fundamentally reshapes corporate governance standards for listed companies. The ruling establishes new precedents for how boards of directors must approach their fiduciary duties, particularly in matters involving related-party transactions and minority shareholder protection.\n\nThe judgment, which arose from a dispute involving a major conglomerate, clarifies the scope of director liability and introduces stricter standards for board oversight. Companies must now demonstrate that their governance frameworks actively protect shareholder interests.\n\nKey takeaways include enhanced disclosure obligations, stricter conflict-of-interest protocols, and a new standard for assessing board member independence.\n\nOur corporate law team is advising clients on the implications of this ruling and helping them update their governance frameworks.`,
  },
  "labour-code-amendments": {
    title: "New Amendments to Labour Code: What Employers Must Know",
    date: "February 5, 2026",
    category: "Labour Law",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80",
    content: `The Government of India has introduced significant amendments to the consolidated Labour Codes that will impact employers across all industries. These changes, effective from April 2026, affect hiring practices, working hours, employee benefits, and dispute resolution mechanisms.\n\nAmong the most significant changes are revised overtime calculations, mandatory electronic record-keeping, and enhanced protections for gig and platform workers. Employers with more than 50 employees will also need to establish formal grievance redressal committees.\n\nThe amendments expand social security coverage to previously excluded categories of workers, representing a major shift in India's labour law landscape.\n\nOur labour and employment law practice is conducting detailed briefings for corporate clients to help them implement the required changes before the April deadline.`,
  },
};

export const practiceSlugs = Object.keys(practiceData);
export const articleSlugs = Object.keys(articleData);
