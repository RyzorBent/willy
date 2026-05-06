export type Programme = {
  slug: string;
  num: string;
  name: string;
  blurb: string;
  raised: number;
  goal: number;
  why: string;
  activities: string[];
  impact: { lhs: string; lhsCap: string; rhs: string; rhsCap: string };
};

export const PROGRAMMES: Programme[] = [
  {
    slug: "visually-impaired-assistance",
    num: "01",
    name: "Visually Impaired Assistance",
    blurb:
      "Equipping individuals with assistive technology, mobility training, and the dignity of independent daily life.",
    raised: 412000,
    goal: 800000,
    why: "In South Africa, an estimated 1.6 million people live with significant visual impairment. Less than 12% can afford the assistive technology that would let them work, study, or move freely. We close that gap one person at a time.",
    activities: [
      "Direct grants for screen-readers, magnifiers, and white canes",
      "Orientation and mobility training in partnership with the SA Guide-Dogs Association",
      "Quarterly workshops on workplace accommodation and skills",
    ],
    impact: { lhs: "47", lhsCap: "people equipped this year", rhs: "R 312k", rhsCap: "deployed in equipment" },
  },
  {
    slug: "npo-grants",
    num: "02",
    name: "NPO Partnership Grants",
    blurb:
      "Annual capital grants to vetted partner organisations doing the close-up work in their own communities.",
    raised: 285000,
    goal: 500000,
    why: "We don't believe one foundation can do this alone. The deepest expertise sits inside community NPOs already doing the work. We fund them, we don't replace them.",
    activities: [
      "Inaugural grantee: T-Shed Community Centre, Tembisa",
      "Annual open call for new partner NPOs (opens September)",
      "Two-year unrestricted operating grants of R150k–R350k",
    ],
    impact: { lhs: "1", lhsCap: "active partner NPO", rhs: "R 150k", rhsCap: "first grant disbursed" },
  },
  {
    slug: "glaucoma-research",
    num: "03",
    name: "Glaucoma Research & Awareness",
    blurb:
      "Research grants and public awareness campaigns. The disease robbed Bra Willy of his sight. We want to spare the next person.",
    raised: 96000,
    goal: 600000,
    why: "Glaucoma is the leading cause of irreversible blindness in South Africa, yet most cases are caught only after meaningful vision is gone. Early screening costs almost nothing. Awareness costs even less.",
    activities: [
      "Co-funded research grant with the University of Cape Town Department of Ophthalmology",
      "Free screening days in townships during the Activation Tour",
      "Public-facing awareness campaign in partnership with SAfm and Kaya 959",
    ],
    impact: { lhs: "1,240", lhsCap: "free screenings to date", rhs: "R 60k", rhsCap: "research co-funded" },
  },
  {
    slug: "motivation-mentorship",
    num: "04",
    name: "Motivation & Mentorship",
    blurb:
      "Bra Willy and the artists he raised, taking the message into schools, rehabilitation centres, and youth programmes.",
    raised: 178000,
    goal: 400000,
    why: "The hands that built South African music can build something else now. We pay our speakers fairly, we go where the audience cannot afford to come to us, and we never speak down.",
    activities: [
      "School visits across Gauteng, Limpopo, and the Eastern Cape",
      "Quarterly sessions at the Helen Joseph rehabilitation programme",
      "Annual youth mentorship intake — 20 young people per cohort",
    ],
    impact: { lhs: "32", lhsCap: "engagements this year", rhs: "4,800", rhsCap: "young people reached" },
  },
];

export const VOICES = [
  {
    q: "Bra Willy didn't sign me. He raised me. There's a difference, and the whole industry knows it.",
    who: "Lerato M.",
    role: "Vocalist, former label artist",
    initials: "LM",
  },
  {
    q: "He told me — your voice is not for selling, it's for telling. I still hear it on every session.",
    who: "Sipho D.",
    role: "Producer, Sweet Sounds Studios",
    initials: "SD",
  },
  {
    q: "Most days I'm not famous, I'm just teaching kids in Tembisa. Bra Willy is the reason I go back.",
    who: "Nnete K.",
    role: "Founder, T-Shed Community Centre",
    initials: "NK",
  },
  {
    q: "When I went blind, I thought my career was over. Bra Willy phoned me at six in the morning. He laughed at me.",
    who: "Themba R.",
    role: "Saxophonist, mentee 2008",
    initials: "TR",
  },
  {
    q: "He never asked for credit. The credit is the people. We are the credit.",
    who: "Mandisa N.",
    role: "Singer-songwriter",
    initials: "MN",
  },
];

export type NewsItem = {
  type: string;
  date: string;
  title: string;
  excerpt: string;
  img: string;
  ph: string;
};

export const NEWS: NewsItem[] = [
  {
    type: "Documentary",
    date: "12 Apr 2026",
    title: "Episode 1 — The Tembisa Stop",
    excerpt:
      "We follow the first activation tour stop, where Bra Willy walks through T-Shed for the first time since funding cleared.",
    img: "gold",
    ph: "TOWNSHIP TOUR — TEMBISA",
  },
  {
    type: "Article",
    date: "04 Apr 2026",
    title: "Why we publish our books in public",
    excerpt:
      "A note from the trustees on why every quarterly statement will be live, downloadable, and signed off before it lands.",
    img: "",
    ph: "EDITORIAL — TRUSTEES",
  },
  {
    type: "Press",
    date: "28 Mar 2026",
    title: 'Mail & Guardian: "The Foundation that won\'t fundraise quietly"',
    excerpt: "Our launch coverage in the Mail & Guardian, framing the Foundation's approach to transparent giving.",
    img: "sage",
    ph: "PRESS CLIPPING",
  },
  {
    type: "Programme",
    date: "21 Mar 2026",
    title: "First T-Shed grant disbursed",
    excerpt:
      "R150,000 cleared into the T-Shed Community Centre operating account this week. Here is exactly what it pays for.",
    img: "",
    ph: "PROGRAMME UPDATE",
  },
  {
    type: "Documentary",
    date: "07 Mar 2026",
    title: "Bra Willy on the gala year",
    excerpt: "Six months into the build, Bra Willy sits down for thirty minutes on what's working and what is not.",
    img: "gold",
    ph: "INTERVIEW — STUDIO",
  },
  {
    type: "Article",
    date: "01 Mar 2026",
    title: "What R500 actually buys this quarter",
    excerpt: "We've updated our giving examples for Q2 with the real prices our beneficiaries are paying.",
    img: "",
    ph: "DONOR LETTER",
  },
];

export const TRUSTEES = [
  {
    initials: "WM",
    name: "Bra Willy Mabusela",
    role: "Founder & Patron",
    bio: "Music industry veteran of forty years. Founder of Sweet Sounds Records. Visually impaired since 2018. The mandate of this Foundation is his.",
  },
  {
    initials: "NN",
    name: "Nnete Nkosi",
    role: "Trustee, Programmes",
    bio: "Founder of T-Shed Community Centre, Tembisa. Twenty years working in township youth programmes. Holds the Foundation's beneficiary voice.",
  },
  {
    initials: "TM",
    name: "Tumi Mokoena",
    role: "Trustee, Governance",
    bio: "Chartered accountant. Former audit partner at Mazars. Chairs the Audit & Risk subcommittee. Signs off every disbursement.",
  },
  {
    initials: "RD",
    name: "Ryzor Dlamini",
    role: "Trustee, Operations",
    bio: "Codegarden SA. Information Officer for POPIA purposes. Operations and digital lead. Builds and maintains this site.",
  },
  {
    initials: "AS",
    name: "Dr. Asanda Sithole",
    role: "Trustee, Medical",
    bio: "Ophthalmologist, University of Cape Town. Co-leads the glaucoma research programme. Two decades of clinical practice.",
  },
  {
    initials: "PM",
    name: "Pulane Mthembu",
    role: "Trustee, Communications",
    bio: "Independent communications consultant. Former editor at City Press. Owns the Foundation's voice and editorial standards.",
  },
];

export type Disbursement = {
  date: string;
  to: string;
  programme: string;
  amount: string;
  tag: "burgundy" | "sage" | "gold";
};

export const DISBURSEMENTS: Disbursement[] = [
  { date: "21 Mar 2026", to: "T-Shed Community Centre", programme: "NPO Grants", amount: "R 150,000", tag: "burgundy" },
  {
    date: "14 Mar 2026",
    to: "UCT Dept. Ophthalmology — research stipend",
    programme: "Glaucoma Research",
    amount: "R 60,000",
    tag: "sage",
  },
  {
    date: "02 Mar 2026",
    to: "12 individual assistive-tech grants",
    programme: "Visually Impaired",
    amount: "R 96,400",
    tag: "gold",
  },
  {
    date: "18 Feb 2026",
    to: "School visit programme — Eastern Cape",
    programme: "Motivation",
    amount: "R 42,800",
    tag: "burgundy",
  },
  {
    date: "07 Feb 2026",
    to: "8 individual assistive-tech grants",
    programme: "Visually Impaired",
    amount: "R 64,200",
    tag: "gold",
  },
  {
    date: "29 Jan 2026",
    to: "Tembisa free screening day",
    programme: "Glaucoma Research",
    amount: "R 18,500",
    tag: "sage",
  },
];

export const FAQS = [
  {
    q: "How much of my donation goes to programmes?",
    a: "Our target operating cost ratio is under 12% of total funds raised. The remaining 88%+ goes directly to programmes. Our quarterly statements show the actual ratio every three months.",
  },
  {
    q: "Will I get a Section 18A tax certificate?",
    a: "Yes — once the Foundation NPC's Section 18A status is finalised (expected May 2026), every donation will receive an automatic tax-deductible receipt by email. Donations made before that date will be back-issued.",
  },
  {
    q: "Can I direct my gift to a specific programme?",
    a: "Yes. On the donate page you can choose one of the four programme areas, or leave it undirected to support all four equally.",
  },
  {
    q: "Who decides which NPOs get partnership grants?",
    a: "The Programmes subcommittee runs an annual open call. Applications are reviewed by Nnete Nkosi and an external review panel. The Audit & Risk subcommittee signs off final amounts.",
  },
  {
    q: "How is the Foundation governed?",
    a: "We are a registered NPC with five-plus trustees. Audited financials are published annually. Quarterly management accounts are published within 30 days of each quarter-end. Our governance documents are on the Trust page.",
  },
  {
    q: "Can I volunteer instead of donating?",
    a: "Yes — we have ambassador and volunteer routes via the Get Involved page. Skill-based volunteering is especially welcome on legal, accounting, and ophthalmology.",
  },
];
