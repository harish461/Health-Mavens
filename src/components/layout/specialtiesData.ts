export interface ProcedureItem {
  name: string;
  href: string;
}

export interface SpecialtyItem {
  id: string;
  name: string;
  iconName?: string;
  description: string;
  procedures: ProcedureItem[];
}

export const specialtiesMenuData: SpecialtyItem[] = [
  {
    id: "orthopedic-surgery",
    name: "Orthopedic Surgery",
    description: "Joint replacements, robotic knee arthroplasty, and complex sports injury trauma care.",
    procedures: [
      { name: "Robotic Total Knee Replacement", href: "/doctors?specialty=Orthopedic%20Surgery" },
      { name: "Total Hip Replacement Revision", href: "/doctors?specialty=Orthopedic%20Surgery" },
      { name: "Shoulder Arthroscopy & Rotator Cuff Repair", href: "/doctors?specialty=Orthopedic%20Surgery" },
      { name: "ACL / PCL Ligament Reconstruction", href: "/doctors?specialty=Orthopedic%20Surgery" },
      { name: "Cartilage Transplantation & Preservation", href: "/doctors?specialty=Orthopedic%20Surgery" },
      { name: "Ankle & Foot Reconstruction", href: "/doctors?specialty=Orthopedic%20Surgery" },
    ],
  },
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Interventional cardiac therapeutics, coronary angioplasty, and structural heart solutions.",
    procedures: [
      { name: "Coronary Angiography & Angioplasty (PTCA)", href: "/doctors?specialty=Cardiology" },
      { name: "Pacemaker & ICD Implantation", href: "/doctors?specialty=Cardiology" },
      { name: "TAVI / TAVR (Non-surgical Valve)", href: "/doctors?specialty=Cardiology" },
      { name: "Electrophysiology (EP) Study & RF Ablation", href: "/doctors?specialty=Cardiology" },
      { name: "Pediatric ASD / VSD Device Closure", href: "/doctors?specialty=Cardiology" },
      { name: "Peripheral Vascular Angioplasty", href: "/doctors?specialty=Cardiology" },
    ],
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Apex neurological diagnostics, epilepsy surgery, stroke thrombolysis, and DBS.",
    procedures: [
      { name: "Deep Brain Stimulation (DBS) for Parkinson's", href: "/doctors?specialty=Neurology" },
      { name: "Brain Tumor Microsurgery & Neuronavigation", href: "/doctors?specialty=Neurology" },
      { name: "Epilepsy Surgery & Vagus Nerve Stimulation (VNS)", href: "/doctors?specialty=Neurology" },
      { name: "Cerebral Aneurysm Coiling & Embolization", href: "/doctors?specialty=Neurology" },
      { name: "Stroke Thrombectomy & Neuro-Rehabilitation", href: "/doctors?specialty=Neurology" },
      { name: "Peripheral Nerve Repair & Neurolysis", href: "/doctors?specialty=Neurology" },
    ],
  },
  {
    id: "cardiac-surgery",
    name: "Cardiac Surgery",
    description: "Minimally invasive and beating-heart adult & pediatric cardiothoracic procedures.",
    procedures: [
      { name: "Beating Heart Off-Pump CABG Bypass", href: "/doctors?specialty=Cardiac%20Surgery" },
      { name: "Double / Single Heart Valve Replacement", href: "/doctors?specialty=Cardiac%20Surgery" },
      { name: "Aortic Root & Aneurysm Repair (Bentall)", href: "/doctors?specialty=Cardiac%20Surgery" },
      { name: "Minimally Invasive MICS CABG", href: "/doctors?specialty=Cardiac%20Surgery" },
      { name: "Pediatric Congenital Heart Surgery (TOF)", href: "/doctors?specialty=Cardiac%20Surgery" },
      { name: "LVAD & Heart Failure Device Implantation", href: "/doctors?specialty=Cardiac%20Surgery" },
    ],
  },
  {
    id: "neurology-and-spine",
    name: "Neurology and Spine",
    description: "Endoscopic spine decompression, deformity scoliosis surgery, and artificial disc replacement.",
    procedures: [
      { name: "Endoscopic Microdiscectomy (Slip Disc)", href: "/doctors?specialty=Neurology%20and%20Spine" },
      { name: "Cervical Spine ACDF & Artificial Disc (ADR)", href: "/doctors?specialty=Neurology%20and%20Spine" },
      { name: "Scoliosis & Kyphosis 3D Spine Correction", href: "/doctors?specialty=Neurology%20and%20Spine" },
      { name: "Minimally Invasive TLIF Spinal Fusion", href: "/doctors?specialty=Neurology%20and%20Spine" },
      { name: "Spinal Cord Tumor Microsurgery", href: "/doctors?specialty=Neurology%20and%20Spine" },
      { name: "Vertebroplasty & Kyphoplasty", href: "/doctors?specialty=Neurology%20and%20Spine" },
    ],
  },
  {
    id: "oncology",
    name: "Oncology",
    description: "Comprehensive medical, surgical, and radiation oncology with PET-CT and CyberKnife.",
    procedures: [
      { name: "CyberKnife Robotic Radiosurgery", href: "/doctors?specialty=Oncology" },
      { name: "Surgical Oncology & Organ Preservation", href: "/doctors?specialty=Oncology" },
      { name: "Targeted Chemotherapy & Immunotherapy", href: "/doctors?specialty=Oncology" },
      { name: "Bone Marrow Transplant (BMT) Autologous / Allogeneic", href: "/doctors?specialty=Oncology" },
      { name: "HIPEC for Advanced Abdominal Malignancies", href: "/doctors?specialty=Oncology" },
      { name: "Prostate & Gynecologic Cancer Surgery", href: "/doctors?specialty=Oncology" },
    ],
  },
  {
    id: "urology",
    name: "Urology",
    description: "Holmium laser stone removal, Da Vinci robotic prostatectomy, and reconstructive urology.",
    procedures: [
      { name: "RIRS & Mini-PCNL Laser Stone Removal", href: "/doctors?specialty=Urology" },
      { name: "Robotic Radical Prostatectomy (Da Vinci)", href: "/doctors?specialty=Urology" },
      { name: "Kidney Transplant (Living Donor & ABO-incompatible)", href: "/doctors?specialty=Urology" },
      { name: "Transurethral Resection of Prostate (TURP / HoLEP)", href: "/doctors?specialty=Urology" },
      { name: "Reconstructive Urethroplasty", href: "/doctors?specialty=Urology" },
      { name: "Bladder Tumor Resection (TURBT)", href: "/doctors?specialty=Urology" },
    ],
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    description: "Advanced GI endoscopy, liver transplantation, ERCP, and surgical gastroenterology.",
    procedures: [
      { name: "Living Donor Liver Transplantation", href: "/doctors?specialty=Gastroenterology" },
      { name: "Diagnostic & Therapeutic ERCP & EUS", href: "/doctors?specialty=Gastroenterology" },
      { name: "Laparoscopic Gallbladder & Hernia Surgery", href: "/doctors?specialty=Gastroenterology" },
      { name: "Colorectal & Whipple's Pancreatic Resection", href: "/doctors?specialty=Gastroenterology" },
      { name: "Bariatric Sleeve & Gastric Bypass Surgery", href: "/doctors?specialty=Gastroenterology" },
      { name: "Inflammatory Bowel Disease (IBD) Management", href: "/doctors?specialty=Gastroenterology" },
    ],
  },
  {
    id: "gynecology",
    name: "Gynecology",
    description: "Advanced IVF, high-risk obstetrics, robotic myomectomy, and pelvic floor repair.",
    procedures: [
      { name: "IVF, ICSI & Reproductive Medicine", href: "/doctors?specialty=Gynecology" },
      { name: "Robotic Laparoscopic Myomectomy (Fibroids)", href: "/doctors?specialty=Gynecology" },
      { name: "Total Laparoscopic Hysterectomy (TLH)", href: "/doctors?specialty=Gynecology" },
      { name: "Endometriosis Excision Surgery", href: "/doctors?specialty=Gynecology" },
      { name: "Pelvic Floor & Vaginal Reconstructive Surgery", href: "/doctors?specialty=Gynecology" },
      { name: "Ovarian Cystectomy & Preservation", href: "/doctors?specialty=Gynecology" },
    ],
  },
  {
    id: "cosmetic-surgery",
    name: "Cosmetic Surgery",
    description: "Aesthetic plastic surgery, rhinoplasty, liposuction, hair transplant, and reconstructions.",
    procedures: [
      { name: "High-Definition 360 Liposuction & Tummy Tuck", href: "/doctors?specialty=Cosmetic%20Surgery" },
      { name: "Rhinoplasty (Open / Closed Ultrasonic)", href: "/doctors?specialty=Cosmetic%20Surgery" },
      { name: "Breast Augmentation, Lift & Reduction", href: "/doctors?specialty=Cosmetic%20Surgery" },
      { name: "Bio-FUE Robotic Hair Transplantation", href: "/doctors?specialty=Cosmetic%20Surgery" },
      { name: "3D Craniofacial Reconstruction", href: "/doctors?specialty=Cosmetic%20Surgery" },
      { name: "Facelift, Blepharoplasty & Neck Lift", href: "/doctors?specialty=Cosmetic%20Surgery" },
    ],
  },
  {
    id: "dental-care",
    name: "Dental Care",
    description: "All-on-4 dental implants, full-mouth rehabilitation, cosmetic veneers, and maxillofacial care.",
    procedures: [
      { name: "All-on-4 & All-on-6 Immediate Dental Implants", href: "/doctors?specialty=Dental%20Care" },
      { name: "Full Mouth Dental Rehabilitation", href: "/doctors?specialty=Dental%20Care" },
      { name: "Porcelain & Zirconia Veneers / Smile Design", href: "/doctors?specialty=Dental%20Care" },
      { name: "Orthognathic Jaw Correction Surgery", href: "/doctors?specialty=Dental%20Care" },
      { name: "Single-Sitting Laser Root Canal Treatment", href: "/doctors?specialty=Dental%20Care" },
    ],
  },
  {
    id: "eye-surgery",
    name: "Eye Surgery",
    description: "Bladeless SMILE/LASIK, cataract phacoemulsification, retinal detachment, and corneal transplant.",
    procedures: [
      { name: "SMILE & Femto Contoura LASIK", href: "/doctors?specialty=Eye%20Surgery" },
      { name: "Robotic Cataract Surgery (Multifocal IOL)", href: "/doctors?specialty=Eye%20Surgery" },
      { name: "Vitreoretinal Surgery for Retinal Detachment", href: "/doctors?specialty=Eye%20Surgery" },
      { name: "Corneal Transplantation (DSEK / PK)", href: "/doctors?specialty=Eye%20Surgery" },
      { name: "Glaucoma Filtration & Valve Shunt Surgery", href: "/doctors?specialty=Eye%20Surgery" },
    ],
  },
  {
    id: "ent",
    name: "ENT",
    description: "Cochlear implants, endoscopic sinus surgery, acoustic neuroma excision, and voice clinics.",
    procedures: [
      { name: "Bilateral Cochlear Implant Surgery", href: "/doctors?specialty=ENT" },
      { name: "Functional Endoscopic Sinus Surgery (FESS)", href: "/doctors?specialty=ENT" },
      { name: "Tympanoplasty & Mastoidectomy", href: "/doctors?specialty=ENT" },
      { name: "Micro-Laryngeal Surgery for Vocal Cords", href: "/doctors?specialty=ENT" },
      { name: "Septorhinoplasty & Snoring Surgery (UPPP)", href: "/doctors?specialty=ENT" },
    ],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Pediatric cardiac, pediatric orthopedic surgery, congenital anomaly corrections.",
    procedures: [
      { name: "Pediatric Heart Defect Surgeries (ASD / VSD / TOF)", href: "/doctors?specialty=Pediatrics" },
      { name: "Pediatric Orthopedic & Clubfoot Deformity Care", href: "/doctors?specialty=Pediatrics" },
      { name: "Pediatric Urology (Hypospadias Repair)", href: "/doctors?specialty=Pediatrics" },
      { name: "Pediatric Liver & Bone Marrow Transplant", href: "/doctors?specialty=Pediatrics" },
    ],
  },
  {
    id: "transplant-surgeries",
    name: "Transplant Surgeries",
    description: "Multi-organ living and cadaveric transplant program with accredited surgical isolation wards.",
    procedures: [
      { name: "Living Donor Liver Transplantation", href: "/doctors?specialty=Transplant%20Surgeries" },
      { name: "Kidney Transplantation (Living / Swapped)", href: "/doctors?specialty=Transplant%20Surgeries" },
      { name: "Bone Marrow Transplant (BMT)", href: "/doctors?specialty=Transplant%20Surgeries" },
      { name: "Corneal & Tissue Transplantation", href: "/doctors?specialty=Transplant%20Surgeries" },
    ],
  },
  {
    id: "hematology",
    name: "Hematology",
    description: "Comprehensive benign and malignant hematology, thalassemia, and stem cell therapy.",
    procedures: [
      { name: "Stem Cell / Bone Marrow Transplant for Thalassemia", href: "/doctors?specialty=Hematology" },
      { name: "Leukemia & Lymphoma Protocols", href: "/doctors?specialty=Hematology" },
      { name: "Multiple Myeloma Autologous BMT", href: "/doctors?specialty=Hematology" },
      { name: "Aplastic Anemia Management", href: "/doctors?specialty=Hematology" },
    ],
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    description: "Interventional pulmonology, Bronchoscopy, EBUS, and chronic lung care.",
    procedures: [
      { name: "Rigid & Flexible Bronchoscopy with EBUS", href: "/doctors?specialty=Pulmonology" },
      { name: "Bronchial Thermoplasty for Severe Asthma", href: "/doctors?specialty=Pulmonology" },
      { name: "Sleep Apnea Diagnostics & CPAP Titration", href: "/doctors?specialty=Pulmonology" },
      { name: "Lung Biopsy & Pleural Effusion Management", href: "/doctors?specialty=Pulmonology" },
    ],
  },
  {
    id: "robotic-orthopedic",
    name: "Robotic Orthopedic",
    description: "Sub-millimeter Mako & Cuvis robotic surgical navigation for joint preservation.",
    procedures: [
      { name: "Mako Robotic Total Knee Arthroplasty", href: "/doctors?specialty=Robotic%20Orthopedic" },
      { name: "Mako Robotic Partial / Unicondylar Knee Replacement", href: "/doctors?specialty=Robotic%20Orthopedic" },
      { name: "Robotic-Assisted Direct Anterior Hip Replacement", href: "/doctors?specialty=Robotic%20Orthopedic" },
      { name: "Computer-Navigated Joint Realignment Osteotomy", href: "/doctors?specialty=Robotic%20Orthopedic" },
    ],
  },
  {
    id: "nephrology",
    name: "Nephrology",
    description: "Renal dialysis, chronic kidney disease (CKD) reversal, and pre-transplant care.",
    procedures: [
      { name: "Hemodialysis & Peritoneal Dialysis Access (AV Fistula)", href: "/doctors?specialty=Nephrology" },
      { name: "Glomerulonephritis & Renal Biopsy Protocols", href: "/doctors?specialty=Nephrology" },
      { name: "ABO-Incompatible Kidney Transplant Preparation", href: "/doctors?specialty=Nephrology" },
      { name: "Diabetic Nephropathy Protection Regimens", href: "/doctors?specialty=Nephrology" },
    ],
  },
  {
    id: "bariatric-surgery",
    name: "Bariatric Surgery",
    description: "Weight loss laparoscopic metabolic surgeries for long-term health restoration.",
    procedures: [
      { name: "Laparoscopic Sleeve Gastrectomy", href: "/doctors?specialty=Bariatric%20Surgery" },
      { name: "Roux-en-Y Gastric Bypass (RYGB)", href: "/doctors?specialty=Bariatric%20Surgery" },
      { name: "Mini Gastric Bypass (MGB / OAGB)", href: "/doctors?specialty=Bariatric%20Surgery" },
      { name: "Revision Bariatric Surgery", href: "/doctors?specialty=Bariatric%20Surgery" },
    ],
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "Advanced clinical dermatology, biologics for psoriasis, and laser skin treatments.",
    procedures: [
      { name: "Biologics Therapy for Severe Plaque Psoriasis", href: "/doctors?specialty=Dermatology" },
      { name: "Fractional CO2 Laser & Scar Revision", href: "/doctors?specialty=Dermatology" },
      { name: "Vitiligo Melanocyte Cell Suspension Grafting", href: "/doctors?specialty=Dermatology" },
      { name: "Mohs Micrographic Surgery for Skin Tumors", href: "/doctors?specialty=Dermatology" },
    ],
  },
  {
    id: "robotic-cardiac",
    name: "Robotic Cardiac",
    description: "Closed-chest robotic Da Vinci bypass and mitral valve reconstructions.",
    procedures: [
      { name: "Da Vinci Robotic Endoscopic Coronary Bypass", href: "/doctors?specialty=Robotic%20Cardiac" },
      { name: "Robotic Mitral Valve Repair / Replacement", href: "/doctors?specialty=Robotic%20Cardiac" },
      { name: "Robotic Cardiac Tumor Excision", href: "/doctors?specialty=Robotic%20Cardiac" },
      { name: "Robotic Atrial Septal Defect (ASD) Closure", href: "/doctors?specialty=Robotic%20Cardiac" },
    ],
  },
  {
    id: "vascular-surgery",
    name: "Vascular Surgery",
    description: "Carotid endarterectomy, diabetic foot limb salvage, EVLT for varicose veins.",
    procedures: [
      { name: "Endovenous Laser Therapy (EVLT) for Varicose Veins", href: "/doctors?specialty=Vascular%20Surgery" },
      { name: "Carotid Artery Stenting & Endarterectomy", href: "/doctors?specialty=Vascular%20Surgery" },
      { name: "Diabetic Foot Revascularization & Angioplasty", href: "/doctors?specialty=Vascular%20Surgery" },
      { name: "Aortic Aneurysm Stent Grafting (EVAR / TEVAR)", href: "/doctors?specialty=Vascular%20Surgery" },
    ],
  },
];
