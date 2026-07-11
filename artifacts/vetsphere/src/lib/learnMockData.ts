import { Subject, Chapter, Lesson, Flashcard, MCQQuestion, SubjectClinicalCase, VideoLesson, DownloadItem, SubjectNote, Bookmark } from '../types';

export type SubjectColorKey = 
  | 'blue' | 'emerald' | 'purple' | 'rose' | 'cyan'
  | 'amber' | 'sky' | 'green' | 'orange' | 'pink'
  | 'teal' | 'lime' | 'yellow' | 'indigo' | 'violet';

export const SUBJECT_COLORS: Record<SubjectColorKey, { from: string; to: string; text: string; badge: string }> = {
  blue:    { from: 'from-blue-500/20',    to: 'to-blue-900/5',    text: 'text-blue-400',    badge: 'bg-blue-500/15 text-blue-300' },
  emerald: { from: 'from-emerald-500/20', to: 'to-emerald-900/5', text: 'text-emerald-400', badge: 'bg-emerald-500/15 text-emerald-300' },
  purple:  { from: 'from-purple-500/20',  to: 'to-purple-900/5',  text: 'text-purple-400',  badge: 'bg-purple-500/15 text-purple-300' },
  rose:    { from: 'from-rose-500/20',    to: 'to-rose-900/5',    text: 'text-rose-400',    badge: 'bg-rose-500/15 text-rose-300' },
  cyan:    { from: 'from-cyan-500/20',    to: 'to-cyan-900/5',    text: 'text-cyan-400',    badge: 'bg-cyan-500/15 text-cyan-300' },
  amber:   { from: 'from-amber-500/20',   to: 'to-amber-900/5',   text: 'text-amber-400',   badge: 'bg-amber-500/15 text-amber-300' },
  sky:     { from: 'from-sky-500/20',     to: 'to-sky-900/5',     text: 'text-sky-400',     badge: 'bg-sky-500/15 text-sky-300' },
  green:   { from: 'from-green-500/20',   to: 'to-green-900/5',   text: 'text-green-400',   badge: 'bg-green-500/15 text-green-300' },
  orange:  { from: 'from-orange-500/20',  to: 'to-orange-900/5',  text: 'text-orange-400',  badge: 'bg-orange-500/15 text-orange-300' },
  pink:    { from: 'from-pink-500/20',    to: 'to-pink-900/5',    text: 'text-pink-400',    badge: 'bg-pink-500/15 text-pink-300' },
  teal:    { from: 'from-teal-500/20',    to: 'to-teal-900/5',    text: 'text-teal-400',    badge: 'bg-teal-500/15 text-teal-300' },
  lime:    { from: 'from-lime-500/20',    to: 'to-lime-900/5',    text: 'text-lime-400',    badge: 'bg-lime-500/15 text-lime-300' },
  yellow:  { from: 'from-yellow-500/20',  to: 'to-yellow-900/5',  text: 'text-yellow-400',  badge: 'bg-yellow-500/15 text-yellow-300' },
  indigo:  { from: 'from-indigo-500/20',  to: 'to-indigo-900/5',  text: 'text-indigo-400',  badge: 'bg-indigo-500/15 text-indigo-300' },
  violet:  { from: 'from-violet-500/20',  to: 'to-violet-900/5',  text: 'text-violet-400',  badge: 'bg-violet-500/15 text-violet-300' },
};

export const subjects: Subject[] = [
  { id: 'anatomy', title: 'Anatomy', icon: 'Bone', colorKey: 'blue', progress: 78, totalLessons: 52, completedLessons: 40, totalChapters: 8, description: 'Systematic study of animal body structures including musculoskeletal, nervous, and organ systems across major species.', isFavorited: true, category: 'Core', lastStudied: '2 hours ago' },
  { id: 'physiology', title: 'Physiology', icon: 'HeartPulse', colorKey: 'emerald', progress: 55, totalLessons: 48, completedLessons: 26, totalChapters: 9, description: 'Functional processes of animal organ systems including cardiovascular, respiratory, renal, and endocrine physiology.', isFavorited: false, category: 'Core', lastStudied: 'Yesterday' },
  { id: 'biochemistry', title: 'Biochemistry', icon: 'FlaskConical', colorKey: 'purple', progress: 40, totalLessons: 44, completedLessons: 17, totalChapters: 7, description: 'Molecular mechanisms of life including enzyme kinetics, metabolic pathways, and molecular biology fundamentals.', isFavorited: false, category: 'Core', lastStudied: '3 days ago' },
  { id: 'pathology', title: 'Pathology', icon: 'Microscope', colorKey: 'rose', progress: 62, totalLessons: 60, completedLessons: 37, totalChapters: 10, description: 'Study of disease mechanisms, lesion recognition, gross and histopathological diagnosis in domestic and exotic species.', isFavorited: true, category: 'Core', lastStudied: 'Today' },
  { id: 'microbiology', title: 'Microbiology', icon: 'Bug', colorKey: 'cyan', progress: 33, totalLessons: 38, completedLessons: 12, totalChapters: 6, description: 'Veterinary bacteriology, virology, mycology and immunology with emphasis on zoonotic disease and laboratory diagnostics.', isFavorited: false, category: 'Core' },
  { id: 'parasitology', title: 'Parasitology', icon: 'Zap', colorKey: 'amber', progress: 20, totalLessons: 36, completedLessons: 7, totalChapters: 6, description: 'Helminthology, protozoology and entomology covering lifecycle, pathogenesis, diagnosis and control of veterinary parasites.', isFavorited: false, category: 'Core' },
  { id: 'pharmacology', title: 'Pharmacology', icon: 'Pill', colorKey: 'sky', progress: 71, totalLessons: 50, completedLessons: 35, totalChapters: 9, description: 'Drug mechanisms, pharmacokinetics, pharmacodynamics, and therapeutic use of antimicrobials, analgesics and anaesthetics.', isFavorited: true, category: 'Core', lastStudied: '1 day ago' },
  { id: 'medicine', title: 'Medicine', icon: 'Stethoscope', colorKey: 'green', progress: 48, totalLessons: 72, completedLessons: 34, totalChapters: 12, description: 'Clinical diagnosis and management of diseases in small and large animals including internal medicine case work-ups.', isFavorited: false, category: 'Clinical', lastStudied: '4 days ago' },
  { id: 'surgery', title: 'Surgery', icon: 'Scissors', colorKey: 'orange', progress: 30, totalLessons: 56, completedLessons: 16, totalChapters: 10, description: 'Surgical principles, anaesthesia, soft tissue and orthopaedic procedures across canine, feline, equine and ruminant species.', isFavorited: true, category: 'Clinical', lastStudied: '1 week ago' },
  { id: 'gynecology', title: 'Gynecology', icon: 'Baby', colorKey: 'pink', progress: 15, totalLessons: 34, completedLessons: 5, totalChapters: 6, description: 'Reproductive physiology, breeding management, obstetrics, neonatology, and infertility diagnosis in domestic animals.', isFavorited: false, category: 'Clinical' },
  { id: 'vph', title: 'Veterinary Public Health', icon: 'ShieldCheck', colorKey: 'teal', progress: 25, totalLessons: 32, completedLessons: 8, totalChapters: 5, description: 'Zoonotic disease surveillance, food hygiene, meat inspection, One Health principles and epidemiological methods.', isFavorited: false, category: 'Professional' },
  { id: 'nutrition', title: 'Animal Nutrition', icon: 'Leaf', colorKey: 'lime', progress: 60, totalLessons: 30, completedLessons: 18, totalChapters: 5, description: 'Macro and micronutrient requirements, diet formulation, feed analysis, and nutritional disease management for livestock and pets.', isFavorited: false, category: 'Applied', lastStudied: '2 days ago' },
  { id: 'livestock', title: 'Livestock Production', icon: 'Beef', colorKey: 'yellow', progress: 45, totalLessons: 28, completedLessons: 12, totalChapters: 5, description: 'Principles of cattle, sheep, goat, pig and poultry production including husbandry systems, breeding and herd health programs.', isFavorited: false, category: 'Applied' },
  { id: 'extension', title: 'Extension Education', icon: 'GraduationCap', colorKey: 'indigo', progress: 10, totalLessons: 24, completedLessons: 2, totalChapters: 4, description: 'Veterinary extension methodologies, farmer communication strategies, rural advisory services and agri-entrepreneurship.', isFavorited: false, category: 'Professional' },
  { id: 'genetics', title: 'Genetics', icon: 'Dna', colorKey: 'violet', progress: 35, totalLessons: 40, completedLessons: 14, totalChapters: 7, description: 'Mendelian and quantitative genetics, population genetics, genetic disorders, marker-assisted selection and genomic tools in animal breeding.', isFavorited: false, category: 'Applied' },
];

export const chapters: Chapter[] = [
  // Anatomy
  { id: 'ana-1', subjectId: 'anatomy', title: 'Introduction to Osteology', lessonCount: 4, duration: '45 min', isCompleted: true, isLocked: false, order: 1 },
  { id: 'ana-2', subjectId: 'anatomy', title: 'Axial Skeleton', lessonCount: 5, duration: '1h 10m', isCompleted: true, isLocked: false, order: 2 },
  { id: 'ana-3', subjectId: 'anatomy', title: 'Appendicular Skeleton', lessonCount: 4, duration: '55 min', isCompleted: false, isLocked: false, order: 3 },
  { id: 'ana-4', subjectId: 'anatomy', title: 'Myology Basics', lessonCount: 6, duration: '1h 30m', isCompleted: false, isLocked: true, order: 4 },
  
  // Pharmacology
  { id: 'pha-1', subjectId: 'pharmacology', title: 'Pharmacokinetics', lessonCount: 5, duration: '1h 15m', isCompleted: true, isLocked: false, order: 1 },
  { id: 'pha-2', subjectId: 'pharmacology', title: 'Pharmacodynamics', lessonCount: 4, duration: '1h 5m', isCompleted: true, isLocked: false, order: 2 },
  { id: 'pha-3', subjectId: 'pharmacology', title: 'Antimicrobial Agents', lessonCount: 6, duration: '1h 45m', isCompleted: false, isLocked: false, order: 3 },
  { id: 'pha-4', subjectId: 'pharmacology', title: 'Analgesics & NSAIDs', lessonCount: 5, duration: '1h 20m', isCompleted: false, isLocked: true, order: 4 },
  
  // Pathology
  { id: 'pat-1', subjectId: 'pathology', title: 'Cellular Pathology', lessonCount: 4, duration: '50 min', isCompleted: true, isLocked: false, order: 1 },
  { id: 'pat-2', subjectId: 'pathology', title: 'Inflammation & Repair', lessonCount: 5, duration: '1h 10m', isCompleted: false, isLocked: false, order: 2 },
  { id: 'pat-3', subjectId: 'pathology', title: 'Neoplasia', lessonCount: 5, duration: '1h 25m', isCompleted: false, isLocked: true, order: 3 },
  { id: 'pat-4', subjectId: 'pathology', title: 'Cardiovascular Pathology', lessonCount: 6, duration: '1h 40m', isCompleted: false, isLocked: true, order: 4 },
];

export const lessons: Lesson[] = [
  // Anatomy ana-1
  { id: 'ana-1-1', chapterId: 'ana-1', title: 'Bone Structure & Function', duration: '10 min', type: 'video', isCompleted: true },
  { id: 'ana-1-2', chapterId: 'ana-1', title: 'Types of Bones', duration: '15 min', type: 'reading', isCompleted: true },
  { id: 'ana-1-3', chapterId: 'ana-1', title: 'Bone Development and Growth', duration: '12 min', type: 'video', isCompleted: true },
  { id: 'ana-1-4', chapterId: 'ana-1', title: 'Osteology Quiz', duration: '8 min', type: 'quiz', isCompleted: true },
  
  // Pharmacology pha-3
  { id: 'pha-3-1', chapterId: 'pha-3', title: 'Beta-Lactam Antibiotics', duration: '18 min', type: 'video', isCompleted: true },
  { id: 'pha-3-2', chapterId: 'pha-3', title: 'Aminoglycosides & Macrolides', duration: '20 min', type: 'reading', isCompleted: false },
  { id: 'pha-3-3', chapterId: 'pha-3', title: 'Antimicrobial Resistance Mechanisms', duration: '15 min', type: 'video', isCompleted: false },
  { id: 'pha-3-4', chapterId: 'pha-3', title: 'Clinical Case: Canine Pyoderma', duration: '25 min', type: 'case', isCompleted: false },
  { id: 'pha-3-5', chapterId: 'pha-3', title: 'Antimicrobial Usage Guidelines', duration: '12 min', type: 'reading', isCompleted: false },
  
  // Pathology pat-2
  { id: 'pat-2-1', chapterId: 'pat-2', title: 'Acute Inflammation', duration: '14 min', type: 'video', isCompleted: true },
  { id: 'pat-2-2', chapterId: 'pat-2', title: 'Chronic Inflammation', duration: '16 min', type: 'video', isCompleted: true },
  { id: 'pat-2-3', chapterId: 'pat-2', title: 'Chemical Mediators', duration: '20 min', type: 'reading', isCompleted: false },
  { id: 'pat-2-4', chapterId: 'pat-2', title: 'Tissue Repair and Fibrosis', duration: '15 min', type: 'video', isCompleted: false },
  { id: 'pat-2-5', chapterId: 'pat-2', title: 'Inflammation Quiz', duration: '5 min', type: 'quiz', isCompleted: false },
];

export const flashcards: Flashcard[] = [
  // Anatomy
  { id: 'fc-a1', subjectId: 'anatomy', front: 'What is the largest bone in the canine appendicular skeleton?', back: 'Femur', tags: ['Osteology', 'Canine'], difficulty: 'easy' },
  { id: 'fc-a2', subjectId: 'anatomy', front: 'Name the vertebral formula for a horse.', back: 'C7 T18 L6 S5 Cd15-21', tags: ['Equine', 'Axial Skeleton'], difficulty: 'hard' },
  { id: 'fc-a3', subjectId: 'anatomy', front: 'Which bone articulates with the proximal end of the radius?', back: 'Humerus', tags: ['Osteology'], difficulty: 'easy' },
  { id: 'fc-a4', subjectId: 'anatomy', front: 'What is the function of the foramen magnum?', back: 'It allows the passage of the spinal cord from the brainstem to the vertebral canal.', tags: ['Skull', 'Neurology'], difficulty: 'medium' },
  { id: 'fc-a5', subjectId: 'anatomy', front: 'Which muscle is the primary extensor of the stifle joint?', back: 'Quadriceps femoris', tags: ['Myology', 'Hindlimb'], difficulty: 'medium' },
  { id: 'fc-a6', subjectId: 'anatomy', front: 'Name the three bones that fuse to form the os coxae.', back: 'Ilium, Ischium, Pubis', tags: ['Pelvis', 'Osteology'], difficulty: 'easy' },
  
  // Pharmacology
  { id: 'fc-ph1', subjectId: 'pharmacology', front: 'What is the primary mechanism of action of fluoroquinolones?', back: 'Inhibition of DNA gyrase (topoisomerase II) and topoisomerase IV', tags: ['Antimicrobials', 'MOA'], difficulty: 'medium' },
  { id: 'fc-ph2', subjectId: 'pharmacology', front: 'Which NSAID is extremely toxic to cats even at low doses?', back: 'Acetaminophen (Paracetamol) - causes methemoglobinemia and hepatotoxicity', tags: ['Toxicity', 'Feline', 'NSAIDs'], difficulty: 'easy' },
  { id: 'fc-ph3', subjectId: 'pharmacology', front: 'What is the reversal agent for xylazine in horses?', back: 'Yohimbine or Tolazoline (alpha-2 antagonists)', tags: ['Equine', 'Sedation', 'Antagonists'], difficulty: 'hard' },
  { id: 'fc-ph4', subjectId: 'pharmacology', front: 'How does maropitant (Cerenia) prevent emesis?', back: 'It acts as an NK-1 receptor antagonist, blocking substance P in the emetic center.', tags: ['Antiemetics', 'MOA'], difficulty: 'medium' },
  { id: 'fc-ph5', subjectId: 'pharmacology', front: 'What antibiotic class can cause cartilage defects in young, growing animals?', back: 'Fluoroquinolones (e.g., Enrofloxacin)', tags: ['Adverse Effects', 'Antimicrobials'], difficulty: 'medium' },
  { id: 'fc-ph6', subjectId: 'pharmacology', front: 'What is the drug of choice for treating canine hypothyroidism?', back: 'Levothyroxine', tags: ['Endocrinology'], difficulty: 'easy' },
  
  // Pathology
  { id: 'fc-pa1', subjectId: 'pathology', front: 'What are the four classic cardinal signs of acute inflammation?', back: 'Heat (calor), Redness (rubor), Swelling (tumor), Pain (dolor) - and Loss of Function (functio laesa)', tags: ['Inflammation'], difficulty: 'easy' },
  { id: 'fc-pa2', subjectId: 'pathology', front: 'What is the difference between apoptosis and necrosis?', back: 'Apoptosis is programmed cell death (no inflammation), necrosis is pathologic cell death (causes inflammation).', tags: ['Cellular Pathology'], difficulty: 'medium' },
  { id: 'fc-pa3', subjectId: 'pathology', front: 'Define a granuloma.', back: 'A focal accumulation of activated macrophages, often surrounded by lymphocytes and fibroblasts, typical of chronic inflammation.', tags: ['Chronic Inflammation'], difficulty: 'medium' },
  { id: 'fc-pa4', subjectId: 'pathology', front: 'What type of necrosis is commonly seen with Mycobacterium bovis infection?', back: 'Caseous necrosis (cheese-like appearance)', tags: ['Bovine', 'Necrosis'], difficulty: 'hard' },
  { id: 'fc-pa5', subjectId: 'pathology', front: 'What is the term for a benign tumor of glandular epithelium?', back: 'Adenoma', tags: ['Neoplasia'], difficulty: 'easy' },
  { id: 'fc-pa6', subjectId: 'pathology', front: 'What pathognomonic lesion is seen in dogs with Canine Distemper?', back: 'Intranuclear and intracytoplasmic eosinophilic inclusion bodies (often in epithelial cells).', tags: ['Viral', 'Canine'], difficulty: 'hard' }
];

export const mcqs: MCQQuestion[] = [
  // Anatomy
  { id: 'mcq-a1', subjectId: 'anatomy', question: 'Which species lacks a clavicle entirely, typically having only a clavicular intersection in the brachiocephalicus muscle?', options: ['Feline', 'Equine', 'Avian', 'Canine'], correctIndex: 1, explanation: 'Horses entirely lack a clavicle, which allows for a greater stride length. Dogs and cats have rudimentary clavicles.', difficulty: 'Medium', topic: 'Osteology' },
  { id: 'mcq-a2', subjectId: 'anatomy', question: 'In the dog, the dental formula for permanent teeth is:', options: ['2(I3/3, C1/1, P3/3, M2/3) = 38', '2(I3/3, C1/1, P4/4, M2/3) = 42', '2(I3/3, C1/1, P4/4, M3/3) = 44', '2(I3/3, C1/1, P3/2, M1/1) = 30'], correctIndex: 1, explanation: 'The normal permanent dental formula for a dog is 2 x (I3/3, C1/1, P4/4, M2/3) = 42 total teeth.', difficulty: 'Easy', topic: 'Dentition' },
  { id: 'mcq-a3', subjectId: 'anatomy', question: 'The common calcanean tendon (Achilles tendon) in the dog does NOT include the tendon of which muscle?', options: ['Gastrocnemius', 'Superficial digital flexor', 'Biceps femoris', 'Cranial tibial'], correctIndex: 3, explanation: 'The cranial tibial muscle is located on the craniolateral aspect of the crus and flexes the tarsus. It does not contribute to the common calcanean tendon.', difficulty: 'Hard', topic: 'Myology' },
  { id: 'mcq-a4', subjectId: 'anatomy', question: 'Which bone contains the cribriform plate?', options: ['Ethmoid', 'Sphenoid', 'Occipital', 'Temporal'], correctIndex: 0, explanation: 'The ethmoid bone forms the cribriform plate, through which the olfactory nerves pass to reach the brain.', difficulty: 'Medium', topic: 'Skull' },
  { id: 'mcq-a5', subjectId: 'anatomy', question: 'The largest paranasal sinus in the horse is the:', options: ['Frontal sinus', 'Sphenopalatine sinus', 'Maxillary sinus', 'Conchal sinus'], correctIndex: 2, explanation: 'The maxillary sinus is the largest in the horse and is divided into rostral and caudal compartments.', difficulty: 'Easy', topic: 'Respiratory Anatomy' },

  // Pharmacology
  { id: 'mcq-ph1', subjectId: 'pharmacology', question: 'Which of the following is a bactericidal antibiotic that inhibits cell wall synthesis?', options: ['Tetracycline', 'Erythromycin', 'Amoxicillin', 'Gentamicin'], correctIndex: 2, explanation: 'Amoxicillin is a beta-lactam antibiotic, which is bactericidal and works by inhibiting bacterial cell wall synthesis.', difficulty: 'Easy', topic: 'Antimicrobials' },
  { id: 'mcq-ph2', subjectId: 'pharmacology', question: 'What is a common adverse effect of using high doses of aminoglycosides like gentamicin?', options: ['Hepatotoxicity and seizures', 'Nephrotoxicity and ototoxicity', 'Cardiomyopathy', 'Gastric ulceration'], correctIndex: 1, explanation: 'Aminoglycosides are well-known to cause nephrotoxicity (usually reversible) and ototoxicity (often irreversible).', difficulty: 'Medium', topic: 'Toxicity' },
  { id: 'mcq-ph3', subjectId: 'pharmacology', question: 'Propofol is best described as:', options: ['A dissociative anesthetic', 'A barbiturate', 'An alpha-2 agonist', 'A short-acting non-barbiturate injectable anesthetic'], correctIndex: 3, explanation: 'Propofol is an alkylphenol derivative, characterized as a short-acting, non-barbiturate injectable anesthetic.', difficulty: 'Easy', topic: 'Anesthesia' },
  { id: 'mcq-ph4', subjectId: 'pharmacology', question: 'Which drug is used to treat organophosphate toxicity?', options: ['Atropine', 'Naloxone', 'Flumazenil', 'Vitamin K1'], correctIndex: 0, explanation: 'Organophosphates inhibit acetylcholinesterase, leading to a cholinergic crisis. Atropine acts as a competitive antagonist at muscarinic acetylcholine receptors.', difficulty: 'Medium', topic: 'Toxicology' },
  { id: 'mcq-ph5', subjectId: 'pharmacology', question: 'The primary indication for the use of Pimobendan in dogs is:', options: ['Renal failure', 'Congestive heart failure (e.g., MMVD)', 'Epilepsy', 'Hypoadrenocorticism'], correctIndex: 1, explanation: 'Pimobendan is an inodilator (positive inotrope and vasodilator) widely used to manage congestive heart failure in dogs, particularly from myxomatous mitral valve disease.', difficulty: 'Easy', topic: 'Cardiovascular' },

  // Pathology
  { id: 'mcq-pa1', subjectId: 'pathology', question: 'A characteristic feature of a malignant epithelial tumor (carcinoma) is:', options: ['Encapsulation', 'Slow growth', 'Invasion and metastasis', 'Uniform cell size'], correctIndex: 2, explanation: 'Malignant tumors typically show invasion into surrounding tissues and have the potential to metastasize. Carcinomas are malignant tumors of epithelial origin.', difficulty: 'Easy', topic: 'Neoplasia' },
  { id: 'mcq-pa2', subjectId: 'pathology', question: 'Which cellular adaptation is defined as the reversible replacement of one adult cell type by another adult cell type?', options: ['Hyperplasia', 'Metaplasia', 'Dysplasia', 'Hypertrophy'], correctIndex: 1, explanation: 'Metaplasia is the reversible change of one differentiated cell type to another, often as an adaptive response to chronic irritation.', difficulty: 'Medium', topic: 'Cellular Pathology' },
  { id: 'mcq-pa3', subjectId: 'pathology', question: 'Fibrinous exudate is most commonly associated with:', options: ['Mild injuries to serosal surfaces', 'Severe vascular injury allowing escape of large proteins', 'Bacterial infections with pus formation', 'Allergic reactions'], correctIndex: 1, explanation: 'Fibrinous exudate contains large amounts of fibrinogen, which polymerizes to fibrin. It indicates severe vascular injury that allows large plasma proteins to escape.', difficulty: 'Hard', topic: 'Inflammation' },
  { id: 'mcq-pa4', subjectId: 'pathology', question: 'Nutritional secondary hyperparathyroidism in reptiles or dogs is typically caused by a diet that is:', options: ['High in calcium, low in phosphorus', 'Low in calcium, high in phosphorus', 'Deficient in Vitamin C', 'Excessive in Vitamin D'], correctIndex: 1, explanation: 'Diets low in calcium and high in phosphorus (like all-meat diets in dogs or poor diets in reptiles) stimulate PTH release, leading to calcium mobilization from bones.', difficulty: 'Medium', topic: 'Metabolic Bone Disease' },
  { id: 'mcq-pa5', subjectId: 'pathology', question: 'Which virus is a major cause of cerebellar hypoplasia in kittens infected in utero?', options: ['Feline Leukemia Virus (FeLV)', 'Feline Immunodeficiency Virus (FIV)', 'Feline Panleukopenia Virus (FPV)', 'Feline Coronavirus (FCoV)'], correctIndex: 2, explanation: 'Infection of a pregnant queen with Feline Panleukopenia Virus can lead to destruction of dividing cells in the fetal cerebellum, causing hypoplasia.', difficulty: 'Easy', topic: 'Viral Pathology' }
];

export const clinicalCases: SubjectClinicalCase[] = [
  // Anatomy
  { id: 'cc-a1', subjectId: 'anatomy', title: 'Cranial Cruciate Ligament Rupture', species: 'Canine', signalment: '5 yr, MN, Labrador Retriever', presentation: 'Presented with acute, severe weight-bearing lameness in the left hindlimb after chasing a ball.', difficulty: 'Medium', learningObjectives: ['Identify the structures of the stifle joint.', 'Explain the biomechanics of the CCL.', 'Understand the cranial drawer test anatomically.'] },
  { id: 'cc-a2', subjectId: 'anatomy', title: 'Gastric Dilatation-Volvulus (GDV)', species: 'Canine', signalment: '7 yr, MI, Great Dane', presentation: 'Non-productive retching, hypersalivation, and severe abdominal distension.', difficulty: 'Hard', learningObjectives: ['Describe the anatomical attachments of the stomach.', 'Explain the path of volvulus and impacted organs (spleen).', 'Identify relevant vasculature compromised during GDV.'] },
  { id: 'cc-a3', subjectId: 'anatomy', title: 'Brachycephalic Airway Syndrome', species: 'Canine', signalment: '3 yr, FI, French Bulldog', presentation: 'Stertorous breathing, exercise intolerance, and recent syncopal episode during hot weather.', difficulty: 'Easy', learningObjectives: ['Identify the components of the upper respiratory tract.', 'List the anatomical abnormalities in brachycephalic syndrome.', 'Understand the anatomy of the soft palate and larynx.'] },

  // Pharmacology
  { id: 'cc-ph1', subjectId: 'pharmacology', title: 'Phenobarbital Hepatotoxicity', species: 'Canine', signalment: '6 yr, FS, Golden Retriever', presentation: 'PU/PD, lethargy, and icterus. Patient has been on phenobarbital for idiopathic epilepsy for 3 years.', difficulty: 'Medium', learningObjectives: ['Understand the metabolism of phenobarbital.', 'Recognize clinical signs of hepatotoxicity.', 'Formulate an alternative anticonvulsant plan.'] },
  { id: 'cc-ph2', subjectId: 'pharmacology', title: 'Ibuprofen Toxicosis', species: 'Canine', signalment: '1 yr, MI, Mixed Breed', presentation: 'Vomiting (with hematemesis), melena, and lethargy after ingesting owner\'s ibuprofen 24 hours ago.', difficulty: 'Hard', learningObjectives: ['Explain the mechanism of NSAID toxicity.', 'Identify targeted organ systems (GI, renal).', 'Develop a treatment protocol for NSAID toxicosis.'] },
  { id: 'cc-ph3', subjectId: 'pharmacology', title: 'Feline Asthma Management', species: 'Feline', signalment: '4 yr, MN, DSH', presentation: 'Chronic cough, wheezing, and episodic open-mouth breathing.', difficulty: 'Easy', learningObjectives: ['Select appropriate bronchodilators and corticosteroids.', 'Understand the pharmacology of inhalant therapies.', 'Discuss emergency vs maintenance therapy.'] },

  // Pathology
  { id: 'cc-pa1', subjectId: 'pathology', title: 'Mast Cell Tumor', species: 'Canine', signalment: '8 yr, FS, Boxer', presentation: 'Solitary, alopecic, erythematous dermal mass on the lateral thorax that fluctuates in size.', difficulty: 'Medium', learningObjectives: ['Describe the cytologic appearance of mast cells.', 'Explain the paraneoplastic effects (histamine release).', 'Understand histological grading of MCTs.'] },
  { id: 'cc-pa2', subjectId: 'pathology', title: 'Feline Infectious Peritonitis (FIP)', species: 'Feline', signalment: '10 mo, MI, Ragdoll', presentation: 'Lethargy, anorexia, persistent fever, and marked ascites with viscous yellow fluid.', difficulty: 'Hard', learningObjectives: ['Understand the mutation of FCoV to FIPV.', 'Describe the pathogenesis of pyogranulomatous vasculitis.', 'Interpret fluid analysis typical of effusive FIP.'] },
  { id: 'cc-pa3', subjectId: 'pathology', title: 'Equine Squamous Cell Carcinoma', species: 'Equine', signalment: '12 yr, G, Appaloosa', presentation: 'Ulcerated, proliferating mass on the unpigmented third eyelid of the right eye.', difficulty: 'Easy', learningObjectives: ['Identify risk factors for ocular SCC in horses.', 'Describe the gross and microscopic features of SCC.', 'Discuss metastatic potential and routes.'] }
];

export const videos: VideoLesson[] = [
  // Anatomy
  { id: 'vid-a1', subjectId: 'anatomy', title: 'The Canine Stifle Joint in 3D', instructor: 'Dr. Helen Carter', duration: '18:42', thumbnail: 'from-blue-500/80 to-blue-900/80', views: 12450, topic: 'Osteology' },
  { id: 'vid-a2', subjectId: 'anatomy', title: 'Equine Distal Limb Anatomy', instructor: 'Dr. Marcus Thorne', duration: '24:15', thumbnail: 'from-indigo-500/80 to-blue-800/80', views: 8900, topic: 'Equine' },
  { id: 'vid-a3', subjectId: 'anatomy', title: 'Cranial Nerves Summary', instructor: 'Dr. Sarah Jenkins', duration: '15:30', thumbnail: 'from-cyan-500/80 to-blue-700/80', views: 15200, topic: 'Neurology' },
  { id: 'vid-a4', subjectId: 'anatomy', title: 'Avian Respiratory Anatomy', instructor: 'Dr. Alan Grant', duration: '21:10', thumbnail: 'from-sky-500/80 to-blue-600/80', views: 5400, topic: 'Exotics' },
  
  // Pharmacology
  { id: 'vid-ph1', subjectId: 'pharmacology', title: 'Understanding NSAID Selectivity (COX-1 vs COX-2)', instructor: 'Dr. Emily Chen', duration: '22:05', thumbnail: 'from-sky-500/80 to-cyan-800/80', views: 11200, topic: 'Analgesics' },
  { id: 'vid-ph2', subjectId: 'pharmacology', title: 'Constant Rate Infusions (CRI) Calculations', instructor: 'Dr. James Wilson', duration: '19:50', thumbnail: 'from-blue-500/80 to-sky-700/80', views: 18300, topic: 'Calculations' },
  { id: 'vid-ph3', subjectId: 'pharmacology', title: 'Antiepileptic Drugs Overview', instructor: 'Dr. Helen Carter', duration: '25:40', thumbnail: 'from-teal-500/80 to-cyan-900/80', views: 9500, topic: 'Neurology' },
  { id: 'vid-ph4', subjectId: 'pharmacology', title: 'Anaesthetic Protocols for Felines', instructor: 'Dr. Sophia Martinez', duration: '28:15', thumbnail: 'from-cyan-500/80 to-sky-900/80', views: 14100, topic: 'Anaesthesia' },

  // Pathology
  { id: 'vid-pa1', subjectId: 'pathology', title: 'Gross Pathology: Recognizing Neoplasia', instructor: 'Dr. Robert Blake', duration: '30:20', thumbnail: 'from-rose-500/80 to-purple-900/80', views: 22000, topic: 'Neoplasia' },
  { id: 'vid-pa2', subjectId: 'pathology', title: 'Interpreting Cytology Slides', instructor: 'Dr. Emily Chen', duration: '45:00', thumbnail: 'from-purple-500/80 to-fuchsia-900/80', views: 31000, topic: 'Clinical Pathology' },
  { id: 'vid-pa3', subjectId: 'pathology', title: 'Mechanism of Edema Formation', instructor: 'Dr. Marcus Thorne', duration: '16:45', thumbnail: 'from-fuchsia-500/80 to-rose-800/80', views: 10500, topic: 'Hemodynamics' },
  { id: 'vid-pa4', subjectId: 'pathology', title: 'Necropsy Technique: Ruminants', instructor: 'Dr. William Vance', duration: '35:10', thumbnail: 'from-pink-500/80 to-rose-900/80', views: 8700, topic: 'Diagnostics' }
];

export const downloads: DownloadItem[] = [
  // Anatomy
  { id: 'dl-a1', subjectId: 'anatomy', title: 'Canine Skeleton Reference Poster', type: 'PDF', size: '4.2 MB', description: 'High-resolution diagram of the canine skeleton with major landmarks.', downloads: 4500 },
  { id: 'dl-a2', subjectId: 'anatomy', title: 'Equine Distal Limb Flashcards', type: 'ZIP', size: '12.5 MB', description: 'Printable flashcards for equine lower limb structures.', downloads: 3200 },
  { id: 'dl-a3', subjectId: 'anatomy', title: 'Muscle Origins and Insertions Table', type: 'DOCX', size: '1.1 MB', description: 'Comprehensive table for canine myology.', downloads: 5100 },
  { id: 'dl-a4', subjectId: 'anatomy', title: 'Neurology Lecture Slides', type: 'PPTX', size: '28.4 MB', description: 'Slides from Dr. Jenkins covering cranial nerves and spinal cord pathways.', downloads: 2800 },

  // Pharmacology
  { id: 'dl-ph1', subjectId: 'pharmacology', title: 'Common Antibiotic Dosages Quick Guide', type: 'PDF', size: '2.1 MB', description: 'Quick reference sheet for dog and cat antibiotic dosing.', downloads: 8900 },
  { id: 'dl-ph2', subjectId: 'pharmacology', title: 'CRI Calculator Spreadsheet', type: 'ZIP', size: '0.8 MB', description: 'Excel spreadsheet for calculating common CRIs (Fentanyl, Ketamine, Lidocaine).', downloads: 6700 },
  { id: 'dl-ph3', subjectId: 'pharmacology', title: 'Pharmacokinetics Summary Notes', type: 'DOCX', size: '1.5 MB', description: 'Detailed notes on drug absorption, distribution, metabolism, and excretion.', downloads: 4100 },
  { id: 'dl-ph4', subjectId: 'pharmacology', title: 'Anaesthesia Protocols Presentation', type: 'PPTX', size: '15.6 MB', description: 'Lecture slides on premedication, induction, and maintenance protocols.', downloads: 3500 },

  // Pathology
  { id: 'dl-pa1', subjectId: 'pathology', title: 'Cytology Interpretation Flowchart', type: 'PDF', size: '3.4 MB', description: 'Step-by-step guide to differentiating inflammation vs neoplasia on cytology.', downloads: 7200 },
  { id: 'dl-pa2', subjectId: 'pathology', title: 'Gross Pathology Description Guide', type: 'DOCX', size: '1.2 MB', description: 'Standardized terminology for describing gross lesions.', downloads: 3800 },
  { id: 'dl-pa3', subjectId: 'pathology', title: 'Neoplasia Grading Systems', type: 'PDF', size: '2.8 MB', description: 'Summary of common grading systems (MCTs, Mammary tumors, Soft tissue sarcomas).', downloads: 4900 },
  { id: 'dl-pa4', subjectId: 'pathology', title: 'General Pathology Image Bank', type: 'ZIP', size: '145 MB', description: 'Collection of high-quality histopathology images for study.', downloads: 5600 }
];

export const notes: SubjectNote[] = [
  // Anatomy
  { id: 'sn-a1', subjectId: 'anatomy', chapterId: 'ana-1', chapterTitle: 'Introduction to Osteology', content: 'Long bones develop via endochondral ossification. Flat bones (skull, pelvis) develop via intramembranous ossification. The physis is the growth plate, crucial to remember for Salter-Harris fractures.', updatedAt: '2 days ago' },
  { id: 'sn-a2', subjectId: 'anatomy', chapterId: 'ana-2', chapterTitle: 'Axial Skeleton', content: 'Vertebral formulas to memorize:\nDog/Cat: C7 T13 L7 S3 Cd20-23\nHorse: C7 T18 L6 S5 Cd15-21\nCow: C7 T13 L6 S5 Cd18-20\nPig: C7 T14-15 L6-7 S4 Cd20-23', updatedAt: '1 week ago' },
  { id: 'sn-a3', subjectId: 'anatomy', chapterId: 'ana-4', chapterTitle: 'Myology Basics', content: 'Remember the muscles of the hamstring group (caudal thigh): Biceps femoris, Semitendinosus, Semimembranosus. They all extend the hip and flex the stifle, except when weight-bearing (then they extend the stifle).', updatedAt: '2 weeks ago' },

  // Pharmacology
  { id: 'sn-ph1', subjectId: 'pharmacology', chapterId: 'pha-1', chapterTitle: 'Pharmacokinetics', content: 'Bioavailability (F) = IV is 100%. First-pass effect in liver significantly reduces oral bioavailability of certain drugs (e.g., lidocaine, diazepam). Volume of distribution (Vd) determines loading dose.', updatedAt: '3 days ago' },
  { id: 'sn-ph2', subjectId: 'pharmacology', chapterId: 'pha-3', chapterTitle: 'Antimicrobial Agents', content: 'Time-dependent antibiotics: Beta-lactams (Penicillins, Cephalosporins). Need to keep concentration above MIC for as long as possible. Concentration-dependent: Aminoglycosides, Fluoroquinolones. High peak concentration is key.', updatedAt: '4 days ago' },
  { id: 'sn-ph3', subjectId: 'pharmacology', chapterId: 'pha-4', chapterTitle: 'Analgesics & NSAIDs', content: 'Cats have deficient glucuronyl transferase -> delayed metabolism of many drugs including NSAIDs and paracetamol. Paracetamol is strictly contraindicated in cats.', updatedAt: '5 days ago' },

  // Pathology
  { id: 'sn-pa1', subjectId: 'pathology', chapterId: 'pat-1', chapterTitle: 'Cellular Pathology', content: 'Coagulative necrosis: Architecture preserved (ischemia/infarct).\nLiquefactive necrosis: Architecture lost, liquid mass (bacterial/fungal in CNS).\nCaseous necrosis: Friable, cheese-like (Mycobacteria, Corynebacterium).', updatedAt: '1 day ago' },
  { id: 'sn-pa2', subjectId: 'pathology', chapterId: 'pat-2', chapterTitle: 'Inflammation & Repair', content: 'Neutrophils are the first responders in acute inflammation. Macrophages arrive later and are key for chronic inflammation and repair. Eosinophils suggest parasites or allergies.', updatedAt: '3 days ago' },
  { id: 'sn-pa3', subjectId: 'pathology', chapterId: 'pat-3', chapterTitle: 'Neoplasia', content: 'Benign vs Malignant nomenclature:\nMesenchymal: -oma vs -sarcoma (e.g., Fibroma vs Fibrosarcoma)\nEpithelial: -adenoma/papilloma vs -carcinoma/adenocarcinoma (e.g., Adenoma vs Adenocarcinoma)', updatedAt: '1 week ago' }
];

export const bookmarks: Bookmark[] = [
  // Anatomy
  { id: 'bm-a1', subjectId: 'anatomy', type: 'video', title: 'The Canine Stifle Joint in 3D', savedAt: '2 days ago', reference: 'Video Lesson' },
  { id: 'bm-a2', subjectId: 'anatomy', type: 'flashcard', title: 'Vertebral formula for a horse', savedAt: '1 week ago', reference: 'Flashcard #42' },
  { id: 'bm-a3', subjectId: 'anatomy', type: 'case', title: 'Cranial Cruciate Ligament Rupture', savedAt: '2 weeks ago', reference: 'Clinical Case' },
  { id: 'bm-a4', subjectId: 'anatomy', type: 'lesson', title: 'Axial Skeleton', savedAt: '1 month ago', reference: 'Chapter 2' },

  // Pharmacology
  { id: 'bm-ph1', subjectId: 'pharmacology', type: 'mcq', title: 'Phenobarbital Hepatotoxicity', savedAt: '3 days ago', reference: 'Practice Question' },
  { id: 'bm-ph2', subjectId: 'pharmacology', type: 'lesson', title: 'Antimicrobial Resistance Mechanisms', savedAt: '4 days ago', reference: 'Chapter 3' },
  { id: 'bm-ph3', subjectId: 'pharmacology', type: 'video', title: 'Constant Rate Infusions (CRI) Calculations', savedAt: '5 days ago', reference: 'Video Lesson' },
  { id: 'bm-ph4', subjectId: 'pharmacology', type: 'flashcard', title: 'Reversal agent for xylazine', savedAt: '1 week ago', reference: 'Flashcard #15' },

  // Pathology
  { id: 'bm-pa1', subjectId: 'pathology', type: 'lesson', title: 'Neoplasia', savedAt: '1 day ago', reference: 'Chapter 3' },
  { id: 'bm-pa2', subjectId: 'pathology', type: 'case', title: 'Feline Infectious Peritonitis (FIP)', savedAt: '3 days ago', reference: 'Clinical Case' },
  { id: 'bm-pa3', subjectId: 'pathology', type: 'video', title: 'Interpreting Cytology Slides', savedAt: '1 week ago', reference: 'Video Lesson' },
  { id: 'bm-pa4', subjectId: 'pathology', type: 'mcq', title: 'Fibrinous exudate', savedAt: '2 weeks ago', reference: 'Practice Question' }
];