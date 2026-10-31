import type { AyurvedaTreatment } from "./AyurvedaTreatmentCard";

export type Dosha = "Vata" | "Pitta" | "Kapha";

export const ayurvedaTreatmentsData: AyurvedaTreatment[] = [
  {
    id: 1,
    slug: "ayurvedic-treatment-for-neck-pain",
    title: "Ayurvedic Treatment for Neck Pain",
    therapies: "Abhyanga, Snehana, Swedana, Basti, Nasya",
    image: "/images/ayurveda/ayurvedic-treatment-for-neck-pain.png",
    category: "Pain & Joint Care",
    duration: "14 – 21 Days",
    doshaFocus: "Vata Pacification",
    overview:
      "Targeted Ayurvedic management for cervical spondylosis, chronic neck stiffness, and nerve compression using warm medicated oil pooling (Greeva Basti), herbal steam fomentation, and nasal detox therapy.",
    keyBenefits: [
      "Relieves cervical nerve root compression and stiffness",
      "Nourishes intervertebral discs with warm herbal oils",
      "Strengthens paraspinal and shoulder musculature",
      "Prevents recurrence through customized posture & Rasayana care",
    ],
  },
  {
    id: 2,
    slug: "ayurveda-treatment-for-paralysis",
    title: "Ayurveda Treatment for Paralysis",
    therapies: "Panchakarma, Abhyanga, Swedana, Nasya, Virechana & ShiroVasti",
    image: "/images/ayurveda/ayurveda-treatment-for-paralysis.png",
    category: "Neurological & Sleep",
    duration: "21 – 28 Days",
    doshaFocus: "Vata-Nadi Rehabilitation",
    overview:
      "Comprehensive neuro-muscular rehabilitation for post-stroke hemiplegia, facial palsy, and Pakshaghata. Combines deep medicated oil massages, cranial oil pooling, and neuromuscular stimulation.",
    keyBenefits: [
      "Enhances neuromuscular coordination and motor recovery",
      "Reduces spasticity and improves joint mobility",
      "Stimulates peripheral nerve regeneration naturally",
      "Integrated physiotherapy and personalized Sattvic diet",
    ],
  },
  {
    id: 3,
    slug: "ayurvedic-treatment-for-insomnia",
    title: "Ayurvedic Treatment for Insomnia (Sleeplessness)",
    therapies: "Medhya Rasayana, Samvahana, Abhyanga & Panchakarma",
    image: "/images/ayurveda/ayurvedic-treatment-for-insomnia.png",
    category: "Neurological & Sleep",
    duration: "7 – 14 Days",
    doshaFocus: "Vata & Pitta Calming",
    overview:
      "Restores natural circadian rhythm and deep restorative sleep (Anidra Chikitsa) through rhythmic forehead oil streaming (Shirodhara), nervine tonics (Medhya Rasayana), and full-body soothing therapies.",
    keyBenefits: [
      "Calms hyperactive nervous system and cortisol levels",
      "Promotes deep REM and non-habit-forming natural sleep",
      "Alleviates daytime fatigue, anxiety, and mental fog",
      "Includes guided Pranayama and Yoga Nidra sessions",
    ],
  },
  {
    id: 4,
    slug: "rejuvenation-therapy-in-ayurveda",
    title: "Rejuvenation Therapy in Ayurveda",
    therapies: "Rasayana Chikitsa",
    image: "/images/ayurveda/rejuvenation-therapy-in-ayurveda.png",
    category: "Detox & Rejuvenation",
    duration: "7 – 14 Days",
    doshaFocus: "Tridosha Harmony & Ojas",
    overview:
      "Classical Rasayana Chikitsa designed to replenish cellular vitality (Ojas), boost natural immunity, delay biological aging, and revitalize physical and mental stamina.",
    keyBenefits: [
      "Boosts systemic immunity and cellular regeneration",
      "Improves skin radiance, circulation, and metabolic vigor",
      "Enhances mental clarity, memory, and stress resilience",
      "Customized herbal elixirs and restorative oil baths",
    ],
  },
  {
    id: 5,
    slug: "diabetic-neuropathy-in-ayurveda",
    title: "Diabetic Neuropathy in Ayurveda",
    therapies: "Sirodhara, Ksheeradhoomam, Sirodhara, Pizhichil & Njavarakizhi",
    image: "/images/ayurveda/diabetic-neuropathy-in-ayurveda.png",
    category: "Lifestyle & Metabolic",
    duration: "14 – 21 Days",
    doshaFocus: "Vata-Pitta Nerve Care",
    overview:
      "Specialized Ayurvedic protocol for peripheral nerve tingling, burning sensations, and numbness associated with diabetes, utilizing medicated milk-rice boluses (Njavarakizhi) and warm oil baths (Pizhichil).",
    keyBenefits: [
      "Reduces burning sensation, numbness, and tingling in extremities",
      "Improves microvascular blood flow to peripheral nerves",
      "Supports glycemic balance alongside nerve nourishment",
      "Prevents diabetic foot complications with herbal lepas",
    ],
  },
  {
    id: 6,
    slug: "ayurvedic-treatment-for-parkinsons",
    title: "Ayurvedic Treatment for Parkinsons",
    therapies: "Panchakarma, Shirodhara & Shodhana",
    image: "/images/ayurveda/ayurvedic-treatment-for-parkinsons.png",
    category: "Neurological & Sleep",
    duration: "21 – 28 Days",
    doshaFocus: "Kampavata (Vata) Balance",
    overview:
      "Holistic management of Kampavata (Parkinson's disease) focusing on reducing tremors, bradykinesia, and rigidity using natural L-DOPA rich herbal formulations (Kapikacchu), Shirodhara, and Basti.",
    keyBenefits: [
      "Helps control resting tremors and muscular rigidity",
      "Supports endogenous dopamine pathways naturally",
      "Improves gait stability, speech, and daily independence",
      "Neuro-protective Rasayana herbs and gentle yoga therapy",
    ],
  },
  {
    id: 7,
    slug: "ayurvedic-treatment-for-osteoarthritis",
    title: "Ayurvedic Treatment for Osteoarthritis",
    therapies: "Virechana, Upanaha, Jalookavacharanam, Vasthi, Swedana, Abhyanga",
    image: "/images/ayurveda/ayurvedic-treatment-for-osteoarthritis.png",
    category: "Pain & Joint Care",
    duration: "14 – 21 Days",
    doshaFocus: "Sandhigata Vata Care",
    overview:
      "Non-surgical joint preservation program for Sandhigata Vata (Osteoarthritis) that reduces synovial inflammation, lubricates cartilage cushions, and restores pain-free weight-bearing mobility.",
    keyBenefits: [
      "Reduces joint swelling, crepitus, and morning stiffness",
      "Nourishes cartilage and synovial fluid naturally",
      "Helps delay or avoid invasive joint replacement surgery",
      "Medicated herbal poultices (Upanaha) and Janu Basti",
    ],
  },
  {
    id: 8,
    slug: "detoxification-of-the-body-and-the-mind",
    title: "Detoxification of The Body and The Mind",
    therapies: "Panchakarma Therapy in Ayurveda",
    image: "/images/ayurveda/detoxification-of-the-body-and-the-mind.png",
    category: "Detox & Rejuvenation",
    duration: "14 – 21 Days",
    doshaFocus: "Complete Ama Elimination",
    overview:
      "The gold-standard five-fold Ayurvedic bio-purification program (Panchakarma) to flush deep-seated metabolic toxins (Ama), reset digestive fire (Agni), and restore mind-body equilibrium.",
    keyBenefits: [
      "Deep cellular detoxification across all organ systems",
      "Resets gut microbiome and metabolic efficiency",
      "Restores emotional lightness, clarity, and vitality",
      "Supervised step-by-step Purvakarma, Pradhanakarma & Paschatkarma",
    ],
  },
  {
    id: 9,
    slug: "ayurvedic-treatment-for-migraine",
    title: "Ayurvedic Treatment for Migraine",
    therapies: "Panchakarma, Abhyanga, Swedana & Nasya",
    image: "/images/ayurveda/ayurvedic-treatment-for-migraine.png",
    category: "Neurological & Sleep",
    duration: "10 – 14 Days",
    doshaFocus: "Ardhavabhedaka (Pitta-Vata)",
    overview:
      "Root-cause healing for chronic migraines and tension headaches (Ardhavabhedaka) through nasal administration of medicated oils (Nasya), cooling Shirodhara, and Pitta-pacifying detoxification.",
    keyBenefits: [
      "Reduces frequency and intensity of migraine episodes",
      "Relieves photophobia, nausea, and sinus congestion",
      "Decreases dependency on synthetic painkillers",
      "Balances cranial vascular tone and nervous triggers",
    ],
  },
  {
    id: 10,
    slug: "ayurvedic-treatment-for-psoriasis",
    title: "Ayurvedic Treatment for Psoriasis",
    therapies: "Shodhana, Shamana & Rasayana",
    image: "/images/ayurveda/ayurvedic-treatment-for-psoriasis.png",
    category: "Skin & Respiratory",
    duration: "14 – 21 Days",
    doshaFocus: "Rakta & Tridosha Purification",
    overview:
      "Authentic immune-modulating and blood-purifying Ayurvedic care for plaque, scalp, and guttate psoriasis (Ekakushta), combining internal Shodhana detox with soothing herbal Takradhara and lepas.",
    keyBenefits: [
      "Clears scaly plaques, redness, and severe itching",
      "Purifies blood (Rakta Dhatu) and balances immune response",
      "Takradhara (medicated buttermilk therapy) calms stress flares",
      "100% steroid-free topical and internal herbal formulations",
    ],
  },
  {
    id: 11,
    slug: "back-pain-treatment-in-ayurveda",
    title: "Back Pain Treatment in Ayurveda",
    therapies: "Vasthi, Abhyanga & Agnikarma",
    image: "/images/ayurveda/back-pain-treatment-in-ayurveda.png",
    category: "Pain & Joint Care",
    duration: "14 – 21 Days",
    doshaFocus: "Kati Shoola & Sciatica Care",
    overview:
      "Intensive spine care for lumbar spondylosis, herniated discs, and sciatica (Gridhrasi) using Kati Basti (warm medicated oil retention over the lower back), therapeutic enemas (Vasthi), and herbal potli fomentation.",
    keyBenefits: [
      "Relieves sciatic nerve radiation and lower back spasms",
      "Rehydrates degenerated lumbar intervertebral discs",
      "Strengthens core spinal ligaments and musculature",
      "Effective non-surgical relief for slip disc & chronic lumbago",
    ],
  },
  {
    id: 12,
    slug: "ayurveda-treatment-for-weight-loss",
    title: "Ayurveda Treatment for Weight Loss (Obesity)",
    therapies: "Panchakarma, Abhyanga & Basti",
    image: "/images/ayurveda/ayurveda-treatment-for-weight-loss.png",
    category: "Lifestyle & Metabolic",
    duration: "14 – 21 Days",
    doshaFocus: "Medoroga (Kapha) Reduction",
    overview:
      "Metabolic fat-mobilization program (Sthaulya Chikitsa) featuring vigorous dry herbal powder massage (Udvarthanam), medicated steam baths, Lekhana Basti, and Kapha-balancing nutritional coaching.",
    keyBenefits: [
      "Breaks down stubborn subcutaneous cellulite and visceral fat",
      "Accelerates basal metabolic rate and lipid metabolism",
      "Tones skin elasticity and improves lymphatic drainage",
      "Sustainable weight management without crash dieting",
    ],
  },
  {
    id: 13,
    slug: "ayurvedic-treatment-for-frozen-shoulder",
    title: "Ayurvedic Treatment for Frozen Shoulder",
    therapies: "Snehana, Swedana, Basti & Nasya",
    image: "/images/ayurveda/ayurvedic-treatment-for-frozen-shoulder.png",
    category: "Pain & Joint Care",
    duration: "10 – 14 Days",
    doshaFocus: "Apabahuka (Vata-Kapha)",
    overview:
      "Restores full glenohumeral range of motion in adhesive capsulitis (Apabahuka) through localized oil oleation (Snehana), herbal bolus fomentation (Elakizhi), and Nasya therapy.",
    keyBenefits: [
      "Releases glenohumeral capsule adhesions and stiffness",
      "Eliminates night-time shoulder pain and restricted reach",
      "Lubricates rotator cuff tendons and joint capsule",
      "Includes gentle Ayurvedic marma mobilization",
    ],
  },
  {
    id: 14,
    slug: "ayurvedic-treatment-for-sinusitis",
    title: "Ayurvedic Treatment for Sinusitis",
    therapies: "Shirodhara, Nasya Karma & Pachakarma",
    image: "/images/ayurveda/ayurvedic-treatment-for-sinusitis.png",
    category: "Skin & Respiratory",
    duration: "7 – 14 Days",
    doshaFocus: "Dushta Pratishyaya (Kapha)",
    overview:
      "Clears chronic sinus congestion, post-nasal drip, and allergic rhinitis through specialized Nasya Karma (nasal instillation of herbal oils), facial steam (Dhoomapana), and Lepanam.",
    keyBenefits: [
      "Drains impacted mucus from paranasal sinus cavities",
      "Reduces mucosal inflammation and sinus pressure headaches",
      "Strengthens upper respiratory immunity against allergens",
      "Improves breathing quality and sense of smell",
    ],
  },
  {
    id: 15,
    slug: "ayurvedic-treatment-for-irritable-bowel-syndrome",
    title: "Ayurvedic Treatment for Irritable Bowel Syndrome",
    therapies: "IBS Pachakarma",
    image: "/images/ayurveda/ayurvedic-treatment-for-irritable-bowel-syndrome.png",
    category: "Lifestyle & Metabolic",
    duration: "14 Days",
    doshaFocus: "Grahani (Agni & Gut-Brain)",
    overview:
      "Addresses Grahani Roga (IBS, chronic bloating, alternating bowel habits) by rekindling digestive enzymes (Agni), healing intestinal mucosa, and calming the gut-brain axis via Takradhara and Basti.",
    keyBenefits: [
      "Normalizes bowel motility, cramping, and chronic bloating",
      "Heals gut lining and restores beneficial gut flora",
      "Calms stress-induced enteric nervous system triggers",
      "Personalized easily digestible Pathya diet plan",
    ],
  },
  {
    id: 16,
    slug: "ayurvedic-treatment-for-stress-relief",
    title: "Ayurvedic Treatment for Stress Relief",
    therapies: "Swedana, Abhyanga, Shirodhara, Pizhichil & Shiro Vasti",
    image: "/images/ayurveda/ayurvedic-treatment-for-stress-relief.png",
    category: "Detox & Rejuvenation",
    duration: "7 – 14 Days",
    doshaFocus: "Manasika Dosha Balance",
    overview:
      "Deeply tranquilizing mind-body sanctuary program combining continuous warm medicated oil stream over the third eye (Shirodhara), royal oil bath (Pizhichil), and synchronous Abhyanga.",
    keyBenefits: [
      "Dissolves chronic occupational burnout, stress, and anxiety",
      "Lowers sympathetic nervous overdrive and blood pressure",
      "Induces profound mental stillness and emotional balance",
      "Complemented by daily meditation and pranayama",
    ],
  },
  {
    id: 17,
    slug: "ayurvedic-treatment-for-pcos-pcod",
    title: "Ayurvedic Treatment for PCOS/PCOD",
    therapies: "Udvarthanam, Shodhana, Shamana",
    image: "/images/ayurveda/ayurvedic-treatment-for-pcos-pcod.png",
    category: "Lifestyle & Metabolic",
    duration: "14 – 21 Days",
    doshaFocus: "Artava Vaha Srotas & Kapha-Vata",
    overview:
      "Natural endocrine and reproductive wellness protocol that corrects insulin resistance, clears ovarian follicular cysts, and regulates menstrual cycles without synthetic hormone pills.",
    keyBenefits: [
      "Restores natural ovulatory cycles and hormonal balance",
      "Improves insulin sensitivity and aids healthy weight loss",
      "Reduces hormonal acne, hirsutism, and mood swings",
      "Includes Uttara Basti, Virechana, and fertility-supporting herbs",
    ],
  },
  {
    id: 18,
    slug: "ayurvedic-treatment-for-knee-pain",
    title: "Ayurvedic Treatment for Knee Pain",
    therapies: "Upanaha, Vasthi, Swedana, Virechana, Abhyanga",
    image: "/images/ayurveda/ayurvedic-treatment-for-knee-pain.png",
    category: "Pain & Joint Care",
    duration: "14 – 21 Days",
    doshaFocus: "Janu Sandhigata Vata",
    overview:
      "Focused knee joint rejuvenation featuring Janu Basti (warm medicated oil pooling around the knee cap), herbal leaf bundle massage (Patra Pinda Sweda), and anti-inflammatory herbal bandages (Upanaha).",
    keyBenefits: [
      "Alleviates knee pain during stair climbing and walking",
      "Reduces synovial effusion, swelling, and ligament strain",
      "Strengthens quadriceps and peri-articular support tissues",
      "Restores natural lubrication and flexibility in knee joints",
    ],
  },
  {
    id: 19,
    slug: "ayurvedic-treatment-for-diabetes",
    title: "Ayurvedic Treatment for Diabetes",
    therapies: "Panchakarma, Shodana & Shamana",
    image: "/images/ayurveda/ayurvedic-treatment-for-diabetes.png",
    category: "Lifestyle & Metabolic",
    duration: "14 – 21 Days",
    doshaFocus: "Madhumeha (Kapha-Meda) Care",
    overview:
      "Holistic Madhumeha management combining metabolic detoxification (Virechana & Basti), pancreatic-supportive botanicals (Gudmar, Vijaysar, Amalaki), and therapeutic yoga.",
    keyBenefits: [
      "Helps stabilize fasting and post-prandial blood glucose",
      "Improves cellular insulin sensitivity and lipid profile",
      "Protects kidneys, retina, and peripheral nerves from oxidative stress",
      "Tailored low-glycemic Ayurvedic culinary regimen",
    ],
  },
  {
    id: 20,
    slug: "ayurvedic-treatment-for-asthma",
    title: "Ayurvedic Treatment for Asthma",
    therapies: "Vamana, Virechana, Swedana",
    image: "/images/ayurveda/ayurvedic-treatment-for-asthma.png",
    category: "Skin & Respiratory",
    duration: "14 – 21 Days",
    doshaFocus: "Tamaka Shwasa (Kapha-Vata)",
    overview:
      "Respiratory cleansing protocol for bronchial asthma and chronic bronchitis (Tamaka Shwasa), using chest oleation (Uro Basti), herbal steam inhalation, Vamana, and Virechana to clear airway phlegm.",
    keyBenefits: [
      "Clears deep-seated bronchial mucus and airway constriction",
      "Reduces wheezing, shortness of breath, and night coughs",
      "Strengthens lung capacity (Pranavaha Srotas) and immunity",
      "Decreases sensitivity to seasonal and environmental triggers",
    ],
  },
];

/**
 * Derives which doshas a treatment primarily balances from its doshaFocus label.
 * Tridosha / unspecified protocols are treated as balancing all three doshas.
 */
export function getDoshas(treatment: AyurvedaTreatment): Dosha[] {
  const focus = treatment.doshaFocus.toLowerCase();
  const all: Dosha[] = ["Vata", "Pitta", "Kapha"];
  if (focus.includes("tridosha")) return all;
  const matched = all.filter((d) => focus.includes(d.toLowerCase()));
  return matched.length ? matched : all;
}
