const { Issues } = require("../models");

const issuedata = [
  {
    id: 130,
    name: "Abdominal hernia",
  },
  {
    id: 170,
    name: "Abortion",
  },
  {
    id: 456,
    name: "Abscess of the tonsils",
  },
  {
    id: 577,
    name: "Absence seizure",
  },
  {
    id: 584,
    name: "Accident injury",
    clients_id: 2,
  },
  {
    id: 515,
    name: "Accident-related bone fracture",
    client_id: 2,
  },
  {
    id: 509,
    name: "Accumulation of fluid in the scrotum",
  },
  {
    id: 171,
    name: "Achilles tendon tear",
  },
  {
    id: 27,
    name: "Acne",
  },
  {
    id: 113,
    name: "Acute inflammation of lung",
  },
  {
    id: 582,
    name: "Age-related issues",
  },
  {
    id: 580,
    name: "Alcohol consumption",
  },
  {
    id: 202,
    name: "Allergy to bee or wasp venom",
  },
  {
    id: 66,
    name: "Alzheimer type dementia",
  },
  {
    id: 519,
    name: "Anal abscess",
  },
  {
    id: 341,
    name: "Anal venous thrombosis",
  },
  {
    id: 182,
    name: "Aneurysm of the main artery",
  },
  {
    id: 134,
    name: "Ankle injury",
  },
  {
    id: 48,
    name: "Anorexia",
  },
  {
    id: 192,
    name: "Arthrosis",
  },
  {
    id: 454,
    name: "Auditory vertigo",
  },
  {
    id: 585,
    name: "Autoimmune disease",
  },
  {
    id: 102,
    name: "Back pain",
  },
  {
    id: 199,
    name: "Bacterial skin infection",
  },
  {
    id: 601,
    name: "Bad sleeping habits",
  },
  {
    id: 198,
    name: "Baker's cyst",
  },
  {
    id: 310,
    name: "Bekhterev's disease",
  },
  {
    id: 334,
    name: "Benign bone tumor",
  },
  {
    id: 541,
    name: "Benign muscle cramps",
  },
  {
    id: 524,
    name: "Benign muscle twitching",
  },
  {
    id: 152,
    name: "Benign proliferation of uterine lining tissue",
  },
  {
    id: 99,
    name: "Benign prostate enlargement",
  },
  {
    id: 553,
    name: "Benign skin tag",
  },
  {
    id: 346,
    name: "Benign tumor of the adrenal medulla",
  },
  {
    id: 297,
    name: "Black skin cancer",
  },
  {
    id: 204,
    name: "Bladder cancer",
  },
  {
    id: 277,
    name: "Bleeding disorder",
  },
  {
    id: 542,
    name: "Blistering disease",
  },
  {
    id: 495,
    name: "Bloated belly",
  },
  {
    id: 586,
    name: "Blood poisoning",
  },
  {
    id: 128,
    name: "Blood vessel expansion around anus",
  },
  {
    id: 523,
    name: "Bone pain",
  },
  {
    id: 397,
    name: "Bowel incontinence",
  },
  {
    id: 273,
    name: "Bowel obstruction",
  },
  {
    id: 483,
    name: "Brain damage caused by metabolic disorders",
  },
  {
    id: 264,
    name: "Brain tumor",
  },
  {
    id: 218,
    name: "Breakbone fever",
  },
  {
    id: 291,
    name: "Breast cancer",
  },
  {
    id: 562,
    name: "Broken rib",
  },
  {
    id: 255,
    name: "Bruise",
  },
  {
    id: 49,
    name: "Bulimia",
  },
  {
    id: 253,
    name: "Bunion",
  },
  {
    id: 415,
    name: "Burn",
  },
  {
    id: 596,
    name: "Caffeine withdrawal",
  },
  {
    id: 613,
    name: "Caries",
  },
  {
    id: 295,
    name: "Change in the mammary glands",
  },
  {
    id: 196,
    name: "Chemical eye burn",
  },
  {
    id: 549,
    name: "Chicken skin",
  },
  {
    id: 81,
    name: "Chickenpox",
  },
  {
    id: 657,
    name: "Chlamydia infection",
  },
  {
    id: 505,
    name: "Chlamydia infection",
  },
  {
    id: 212,
    name: "Chronic inflammatory bowel disease of colon",
  },
  {
    id: 243,
    name: "Chronic muscular pain disorder",
  },
  {
    id: 64,
    name: "Chronic obstructive lung disease",
  },
  {
    id: 492,
    name: "Chronic pain disorder",
  },
  {
    id: 211,
    name: "Chronic tiredness syndrome",
  },
  {
    id: 210,
    name: "Chronic vein insufficiency",
  },
  {
    id: 529,
    name: "Circular hair loss",
  },
  {
    id: 283,
    name: "Cirrhosis",
  },
  {
    id: 92,
    name: "Clot in a vein",
  },
  {
    id: 31,
    name: "Clouding of the eye lens",
  },
  {
    id: 147,
    name: "Cluster headache",
  },
  {
    id: 348,
    name: "Coccyx fistula",
  },
  {
    id: 80,
    name: "Cold",
    client_id: 1,
  },
  {
    id: 215,
    name: "Colon cancer",
  },
  {
    id: 149,
    name: "Concussion",
  },
  {
    id: 26,
    name: "Condition causing overproduction of skin cells",
  },
  {
    id: 579,
    name: "Confusional state",
  },
  {
    id: 558,
    name: "Congenital eyelid levator weakness",
  },
  {
    id: 174,
    name: "Contact eczema",
  },
  {
    id: 532,
    name: "Corneal distorsion",
  },
  {
    id: 86,
    name: "Coronary heart disease",
  },
  {
    id: 311,
    name: "Crohn's disease",
  },
  {
    id: 390,
    name: "Curvature of the spine",
  },
  {
    id: 559,
    name: "Damage to the eye muscle nerves",
  },
  {
    id: 536,
    name: "Deformity of the hip joint",
  },
  {
    id: 535,
    name: "Deformity of the knee joint",
  },
  {
    id: 47,
    name: "Depression",
  },
  {
    id: 228,
    name: "Dermatitis",
  },
  {
    id: 155,
    name: "Detached retina",
  },
  {
    id: 17,
    name: "Diabetes",
  },
  {
    id: 588,
    name: "Diabetic delayed gastric emptying",
  },
  {
    id: 261,
    name: "Diaphragmatic hernia",
  },
  {
    id: 478,
    name: "Difficult dentition",
  },
  {
    id: 438,
    name: "Diffuse hair loss",
  },
  {
    id: 176,
    name: "Disease of the motor neurons",
  },
  {
    id: 485,
    name: "Diseases of the heart valves",
  },
  {
    id: 340,
    name: "Dislocation of kneecap",
  },
  {
    id: 482,
    name: "Disorder causing imbalance of water in the body",
  },
  {
    id: 164,
    name: "Disorders of lipid metabolism",
  },
  {
    id: 183,
    name: "Dissection of the aorta",
  },
  {
    id: 316,
    name: "Disseminated sclerosis",
  },
  {
    id: 266,
    name: "Disturbed testicular descent",
  },
  {
    id: 223,
    name: "Diverticular disease",
  },
  {
    id: 431,
    name: "Drug side effect",
  },
  {
    id: 32,
    name: "Dry eye",
  },
  {
    id: 462,
    name: "Dry nasal mucosa",
  },
  {
    id: 100,
    name: "Dry skin",
  },
  {
    id: 224,
    name: "Dupuytren's contracture",
  },
  {
    id: 564,
    name: "Dysfunction of the esophagus",
  },
  {
    id: 330,
    name: "Ear injury with foreign body",
  },
  {
    id: 39,
    name: "Earwax blockage",
  },
  {
    id: 475,
    name: "Eating disorder",
  },
  {
    id: 91,
    name: "Enlarged and twisted veins",
  },
  {
    id: 287,
    name: "Enlarged lymph nodes",
  },
  {
    id: 477,
    name: "Enlarged veins of the esophagus",
  },
  {
    id: 236,
    name: "Epileptic seizures",
  },
  {
    id: 237,
    name: "Erection problems",
  },
  {
    id: 332,
    name: "Esophageal cancer",
  },
  {
    id: 333,
    name: "Esophageal corrosion",
  },
  {
    id: 227,
    name: "Eversion of the eyelid",
  },
  {
    id: 181,
    name: "Excessive feeling of fear",
  },
  {
    id: 608,
    name: "Excessive noise exposure",
  },
  {
    id: 97,
    name: "Excessive overweight",
  },
  {
    id: 557,
    name: "Extreme tendency to fall asleep",
  },
  {
    id: 581,
    name: "Eye allergy",
  },
  {
    id: 139,
    name: "Eyelid inflammation",
    client_id: 4,
  },
  {
    id: 148,
    name: "Facial neuralgia",
  },
  {
    id: 452,
    name: "Facial paralysis",
  },
  {
    id: 575,
    name: "Fainting",
  },
  {
    id: 440,
    name: "Fainting after standing up",
  },
  {
    id: 502,
    name: "Familial tremor",
  },
  {
    id: 143,
    name: "Far-sightedness",
  },
  {
    id: 308,
    name: "Fatigue fracture of the metatarsal",
  },
  {
    id: 165,
    name: "Fatty tumor",
  },
  {
    id: 132,
    name: "Femoral neck fracture",
  },
  {
    id: 11,
    name: "Flu",
    client_id: 1,
  },
  {
    id: 193,
    name: "Fluid accumulation in the abdomen",
  },
  {
    id: 349,
    name: "Fluid accumulation in the chest cavity",
  },
  {
    id: 217,
    name: "Fluid loss",
  },
  {
    id: 327,
    name: "Fluid-filled sacs in the kidney",
  },
  {
    id: 368,
    name: "Flu-related rhinitis",
  },
  {
    id: 320,
    name: "Food allergy",
  },
  {
    id: 321,
    name: "Food intolerance",
  },
  {
    id: 281,
    name: "Food poisoning",
    client_id: 3,
  },
  {
    id: 470,
    name: "Foreign object in the airways",
  },
  {
    id: 461,
    name: "Foreign object in the ear",
  },
  {
    id: 455,
    name: "Foreign object in the eye",
  },
  {
    id: 468,
    name: "Foreign object in the nose",
  },
  {
    id: 481,
    name: "Foreign object in the throat",
  },
  {
    id: 238,
    name: "Frostbite",
  },
  {
    id: 144,
    name: "Fungal infection",
  },
  {
    id: 441,
    name: "Gait disorder due to old age",
  },
  {
    id: 55,
    name: "Gall stones",
  },
  {
    id: 246,
    name: "Ganglion",
  },
  {
    id: 507,
    name: "Genital warts",
  },
  {
    id: 107,
    name: "German measles",
  },
  {
    id: 312,
    name: "Giant cell arteritis",
  },
  {
    id: 448,
    name: "Gilbert's disease",
  },
  {
    id: 473,
    name: "Gingivostomatitis",
  },
  {
    id: 52,
    name: "Gluten intolerance",
  },
  {
    id: 234,
    name: "Golfer's elbow",
  },
  {
    id: 63,
    name: "Gout",
  },
  {
    id: 30,
    name: "Green cataract",
  },
  {
    id: 612,
    name: "Grinding of teeth",
  },
  {
    id: 85,
    name: "Hardening of the walls of arteries",
  },
  {
    id: 367,
    name: "Hay fever",
  },
  {
    id: 104,
    name: "Headache",
  },
  {
    id: 555,
    name: "Hearing loss due to old age",
  },
  {
    id: 87,
    name: "Heart attack",
  },
  {
    id: 432,
    name: "Heart failure",
  },
  {
    id: 654,
    name: "Heart muscle disease",
  },
  {
    id: 434,
    name: "Heart racing",
  },
  {
    id: 82,
    name: "Herpes",
  },
  {
    id: 46,
    name: "Hiccup",
  },
  {
    id: 16,
    name: "High blood pressure",
  },
  {
    id: 271,
    name: "High blood pressure crisis",
  },
  {
    id: 269,
    name: "Hip dysplasia",
  },
  {
    id: 512,
    name: "Hip entrapment",
  },
  {
    id: 508,
    name: "Hirsuties coronae glandis",
  },
  {
    id: 112,
    name: "HIV",
  },
  {
    id: 145,
    name: "Hives",
  },
  {
    id: 280,
    name: "Hump",
  },
  {
    id: 209,
    name: "Huntington's disease",
  },
  {
    id: 213,
    name: "Hypercortisolism",
  },
  {
    id: 15,
    name: "Hypersensitivity reaction",
  },
  {
    id: 94,
    name: "Hyperventilation",
  },
  {
    id: 556,
    name: "Hypofunction of pituitary gland",
  },
  {
    id: 445,
    name: "Imbalance of body minerals",
  },
  {
    id: 563,
    name: "Inadequate closure of the aortic valve",
  },
  {
    id: 220,
    name: "Infection caused by corynebacterium diphtheriae",
  },
  {
    id: 361,
    name: "Infection of kidney pelvis",
  },
  {
    id: 460,
    name: "Infection of upper airways",
  },
  {
    id: 178,
    name: "Inflammation in the anal region",
  },
  {
    id: 494,
    name: "Inflammation of a diverticulum",
  },
  {
    id: 474,
    name: "Inflammation of gingiva",
  },
  {
    id: 547,
    name: "Inflammation of hair follicles",
  },
  {
    id: 436,
    name: "Inflammation of heart muscle",
  },
  {
    id: 530,
    name: "Inflammation of inner ear labyrinth",
  },
  {
    id: 517,
    name: "Inflammation of outer tissue layer around bone",
  },
  {
    id: 41,
    name: "Inflammation of paranasal sinuses",
  },
  {
    id: 518,
    name: "Inflammation of the anal glands",
  },
  {
    id: 126,
    name: "Inflammation of the appendix",
  },
  {
    id: 516,
    name: "Inflammation of the bone marrow",
  },
  {
    id: 83,
    name: "Inflammation of the brain covering membranes",
  },
  {
    id: 294,
    name: "Inflammation of the breast tissue",
  },
  {
    id: 153,
    name: "Inflammation of the bronchi",
  },
  {
    id: 208,
    name: "Inflammation of the bursae",
  },
  {
    id: 447,
    name: "Inflammation of the cornea",
  },
  {
    id: 229,
    name: "Inflammation of the endocardium",
  },
  {
    id: 235,
    name: "Inflammation of the epididymis",
  },
  {
    id: 38,
    name: "Inflammation of the external ear canal",
  },
  {
    id: 54,
    name: "Inflammation of the liver",
  },
  {
    id: 125,
    name: "Inflammation of the nail skin",
  },
  {
    id: 44,
    name: "Inflammation of the nose and throat",
  },
  {
    id: 119,
    name: "Inflammation of the pancreas",
  },
  {
    id: 106,
    name: "Inflammation of the parotid gland",
  },
  {
    id: 437,
    name: "Inflammation of the pericardium",
  },
  {
    id: 501,
    name: "Inflammation of the peritoneum",
  },
  {
    id: 350,
    name: "Inflammation of the pleura",
  },
  {
    id: 504,
    name: "Inflammation of the prostate",
  },
  {
    id: 114,
    name: "Inflammation of the stomach",
  },
  {
    id: 538,
    name: "Inflammation of the tendon",
  },
  {
    id: 331,
    name: "Inflammation of the testes",
  },
  {
    id: 136,
    name: "Inflammation of the tonsils",
  },
  {
    id: 120,
    name: "Inflammation of the urethra",
  },
  {
    id: 503,
    name: "Inflammation of vaginal mucosa",
  },
  {
    id: 122,
    name: "Inflammation of veins",
  },
  {
    id: 76,
    name: "Inflammation to the joints",
  },
  {
    id: 14,
    name: "Inflammatory disease of the airways",
  },
  {
    id: 410,
    name: "Ingrown nail",
  },
  {
    id: 197,
    name: "Injury of the eye",
  },
  {
    id: 216,
    name: "Intestinal polyp",
  },
  {
    id: 411,
    name: "Involuntary urination",
  },
  {
    id: 231,
    name: "Inward folding of eyelid",
  },
  {
    id: 226,
    name: "Iron deficiency",
  },
  {
    id: 544,
    name: "Iron storage disease",
  },
  {
    id: 12,
    name: "Irregular heart rhythm in atria",
  },
  {
    id: 490,
    name: "Irritation of the sciatic nerve",
  },
  {
    id: 545,
    name: "Itchy skin nodule",
  },
  {
    id: 479,
    name: "Jaw fracture",
  },
  {
    id: 131,
    name: "Joint infection",
  },
  {
    id: 552,
    name: "Keloidal scar",
  },
  {
    id: 121,
    name: "Kidney inflammation",
  },
  {
    id: 324,
    name: "Kidney stones",
  },
  {
    id: 109,
    name: "Kissing disease",
  },
  {
    id: 614,
    name: "Knee inflammation",
  },
  {
    id: 276,
    name: "Knee ligament injury",
  },
  {
    id: 93,
    name: "Lack of blood",
  },
  {
    id: 60,
    name: "Lack of supply of thyroid hormones",
  },
  {
    id: 540,
    name: "Lack of vitamin B12",
  },
  {
    id: 96,
    name: "Lack of vitamin D",
  },
  {
    id: 214,
    name: "Lacrimal gland inflammation",
  },
  {
    id: 95,
    name: "Lactase deficiency",
  },
  {
    id: 250,
    name: "Landry's paralysis",
  },
  {
    id: 546,
    name: "Lichenoid lesion",
  },
  {
    id: 166,
    name: "Listeria infection",
  },
  {
    id: 108,
    name: "Lockjaw",
  },
  {
    id: 101,
    name: "Long-sightedness due to old age",
  },
  {
    id: 51,
    name: "Loose watery stools",
  },
  {
    id: 487,
    name: "Low back pain",
  },
  {
    id: 572,
    name: "Low blood pressure",
  },
  {
    id: 554,
    name: "Low blood sugar",
  },
  {
    id: 649,
    name: "Lung bleeding",
  },
  {
    id: 285,
    name: "Lung cancer",
  },
  {
    id: 351,
    name: "Lung collapse",
  },
  {
    id: 439,
    name: "Lupus",
  },
  {
    id: 79,
    name: "Lyme disease",
  },
  {
    id: 268,
    name: "Lymph cancer",
  },
  {
    id: 655,
    name: "Lymphatic obstruction",
  },
  {
    id: 141,
    name: "Macular degeneration",
  },
  {
    id: 336,
    name: "Malignant bone tumor",
  },
  {
    id: 357,
    name: "Malignant prostate cancer",
  },
  {
    id: 290,
    name: "Marsh fever",
  },
  {
    id: 105,
    name: "Measles",
  },
  {
    id: 404,
    name: "Mediterranean anemia",
  },
  {
    id: 298,
    name: "Meningeal tumor",
  },
  {
    id: 50,
    name: "Menopause",
  },
  {
    id: 489,
    name: "Menstrual problems",
  },
  {
    id: 292,
    name: "Mental illness with euphoria and hyperactivity",
  },
  {
    id: 37,
    name: "Middle ear infection",
  },
  {
    id: 58,
    name: "Mitral regurgitation",
  },
  {
    id: 323,
    name: "Mole",
  },
  {
    id: 600,
    name: "Motion sickness",
  },
  {
    id: 520,
    name: "Muscle soreness",
  },
  {
    id: 534,
    name: "Muscular weakness",
  },
  {
    id: 318,
    name: "Myasthenia gravis",
  },
  {
    id: 528,
    name: "Nail growth disorder",
  },
  {
    id: 347,
    name: "Narrowing of foreskin",
  },
  {
    id: 486,
    name: "Narrowing of spinal canals of the thoracic or lumbar spine",
  },
  {
    id: 57,
    name: "Narrowing of the aortic valve",
  },
  {
    id: 465,
    name: "Narrowing of the spinal canal in the neck",
  },
  {
    id: 322,
    name: "Nasal polyp",
  },
  {
    id: 565,
    name: "Neoplasia of the upper digestive tract",
  },
  {
    id: 135,
    name: "Nerve compression in the wrist",
  },
  {
    id: 522,
    name: "Nerve pain",
  },
  {
    id: 467,
    name: "Nerve root irritation of the cervical spine",
  },
  {
    id: 568,
    name: "Nerve root irritation of the lumbar, spine",
  },
  {
    id: 506,
    name: "Nerve-related bladder dysfunction",
  },
  {
    id: 40,
    name: "Nosebleed",
  },
  {
    id: 561,
    name: "Obsessive-compulsive disorder",
  },
  {
    id: 167,
    name: "Obstruction of a pulmonary artery",
  },
  {
    id: 480,
    name: "Outpouching of the esophagus",
  },
  {
    id: 514,
    name: "Overactivity of the parathyroid glands",
  },
  {
    id: 61,
    name: "Overproduction of thyroid hormones",
  },
  {
    id: 602,
    name: "Pain",
  },
  {
    id: 498,
    name: "Pancreas insufficiency",
  },
  {
    id: 513,
    name: "Pelvic fracture",
  },
  {
    id: 189,
    name: "Peripheral artery disease",
  },
  {
    id: 140,
    name: "Pink eye",
  },
  {
    id: 302,
    name: "Pleural tumor",
  },
  {
    id: 443,
    name: "Poisoning",
  },
  {
    id: 138,
    name: "Positional vertigo",
  },
  {
    id: 446,
    name: "Pregnancy",
  },
  {
    id: 169,
    name: "Pregnancy loss",
  },
  {
    id: 603,
    name: "Pregnancy-related problems",
  },
  {
    id: 263,
    name: "Pressure on the brain",
  },
  {
    id: 53,
    name: "Problems with defecation",
  },
  {
    id: 599,
    name: "Psychogenic issues",
  },
  {
    id: 180,
    name: "Rapid swelling of the skin",
  },
  {
    id: 314,
    name: "Raynaud's disease",
  },
  {
    id: 146,
    name: "Recurring itchy inflammation of the skin",
  },
  {
    id: 551,
    name: "Redness causing skin condition",
  },
  {
    id: 381,
    name: "Reflex sympathetic dystrophy",
  },
  {
    id: 18,
    name: "Reflux disease",
  },
  {
    id: 511,
    name: "Renal failure",
  },
  {
    id: 364,
    name: "Restless limb syndrome",
  },
  {
    id: 365,
    name: "Rheumatic fever",
  },
  {
    id: 521,
    name: "Rheumatic pain in many muscles",
  },
  {
    id: 366,
    name: "Rheumatism",
  },
  {
    id: 36,
    name: "Ringing in the ears",
  },
  {
    id: 339,
    name: "Salivary gland inflammation",
  },
  {
    id: 388,
    name: "Salivary gland stone",
  },
  {
    id: 574,
    name: "Scalp infection",
  },
  {
    id: 376,
    name: "Scarlet fever",
  },
  {
    id: 315,
    name: "Scheuermann's disease",
  },
  {
    id: 543,
    name: "School sores",
  },
  {
    id: 194,
    name: "Sebaceous cyst",
  },
  {
    id: 386,
    name: "Seborrheic eczema",
  },
  {
    id: 168,
    name: "Senility",
  },
  {
    id: 604,
    name: "Sexually transmitted diseases",
  },
  {
    id: 68,
    name: "Shaking palsy",
  },
  {
    id: 656,
    name: "Shingles",
  },
  {
    id: 444,
    name: "Shock",
  },
  {
    id: 142,
    name: "Short-sightedness",
  },
  {
    id: 383,
    name: "Shoulder dislocation",
  },
  {
    id: 567,
    name: "Shoulder girdle compression syndrome",
  },
  {
    id: 67,
    name: "Sick headache",
  },
  {
    id: 150,
    name: "Simultaneous malfunction of peripheral nerves",
  },
  {
    id: 458,
    name: "Singer's nodules",
  },
  {
    id: 293,
    name: "Skin tags of anus",
  },
  {
    id: 65,
    name: "Sleep apnea",
  },
  {
    id: 379,
    name: "Sleeping disorder",
  },
  {
    id: 103,
    name: "Slipped disc",
  },
  {
    id: 43,
    name: "Small sore in mouth",
  },
  {
    id: 19,
    name: "Smoking",
  },
  {
    id: 20,
    name: "Spastic colon",
  },
  {
    id: 510,
    name: "Sperm cyst",
  },
  {
    id: 464,
    name: "Spondylosis of cervical spine",
  },
  {
    id: 537,
    name: "Sprained ankle",
  },
  {
    id: 395,
    name: "Squint",
  },
  {
    id: 606,
    name: "State of stress",
  },
  {
    id: 476,
    name: "Stomach bleeding",
  },
  {
    id: 289,
    name: "Stomach cancer",
  },
  {
    id: 84,
    name: "Stomach flu",
  },
  {
    id: 472,
    name: "Stomach irritation",
  },
  {
    id: 118,
    name: "Stomach ulcer",
  },
  {
    id: 488,
    name: "Strain of the back muscles",
  },
  {
    id: 463,
    name: "Strain of the neck muscles",
  },
  {
    id: 484,
    name: "Strain of the regional supporting tissue",
  },
  {
    id: 533,
    name: "Strain, sprain or weakness of the muscle tendon unit and ligaments",
  },
  {
    id: 353,
    name: "Stress disorder after trauma",
  },
  {
    id: 88,
    name: "Stroke",
  },
  {
    id: 450,
    name: "Stye",
  },
  {
    id: 272,
    name: "Subconjunctival bleeding",
  },
  {
    id: 137,
    name: "Sudden hearing loss",
  },
  {
    id: 175,
    name: "Sudden loss of vision",
  },
  {
    id: 391,
    name: "Sunburn",
  },
  {
    id: 550,
    name: "Sun-related keratosis",
  },
  {
    id: 124,
    name: "Superficial form of cellulitis",
  },
  {
    id: 29,
    name: "Suspicious change of skin",
  },
  {
    id: 396,
    name: "Swelling of the thyroid gland",
  },
  {
    id: 110,
    name: "Syphilis",
  },
  {
    id: 374,
    name: "Systemic disorder with granulomatous inflammation",
  },
  {
    id: 539,
    name: "Tarsal tunnel syndrome",
  },
  {
    id: 127,
    name: "Tear in the skin of anus",
  },
  {
    id: 203,
    name: "Tear of the biceps tendon",
  },
  {
    id: 469,
    name: "Temporomandibular joint dysfunction",
  },
  {
    id: 526,
    name: "Tendon sheath inflammation",
  },
  {
    id: 370,
    name: "Tendon tear in shoulder",
  },
  {
    id: 116,
    name: "Tennis elbow",
  },
  {
    id: 267,
    name: "Testicular cancer",
  },
  {
    id: 62,
    name: "Thinning bones",
  },
  {
    id: 230,
    name: "Thyroid eye disease",
  },
  {
    id: 78,
    name: "Tick-borne encephalitis",
  },
  {
    id: 449,
    name: "Tooth abscess",
  },
  {
    id: 151,
    name: "Torsion of testes",
  },
  {
    id: 531,
    name: "Tourette's syndrome",
  },
  {
    id: 407,
    name: "Toxoplasmosis infection",
  },
  {
    id: 403,
    name: "Trigger finger",
  },
  {
    id: 497,
    name: "Tubal and ovarian inflammation",
  },
  {
    id: 240,
    name: "Tubal pregnancy",
  },
  {
    id: 453,
    name: "Tuberculosis",
  },
  {
    id: 451,
    name: "Ulcer of the skin of the eyelid",
  },
  {
    id: 325,
    name: "Ulnar nerve entrapment",
  },
  {
    id: 59,
    name: "Urinary tract infection",
  },
  {
    id: 412,
    name: "Urinary tract stones",
  },
  {
    id: 433,
    name: "Vascular inflammation",
  },
  {
    id: 566,
    name: "Vertebral fracture",
  },
  {
    id: 326,
    name: "Vestibular failure",
  },
  {
    id: 457,
    name: "Vocal cord paralysis",
  },
  {
    id: 609,
    name: "Voice overuse",
  },
  {
    id: 286,
    name: "Water accumulation in the lungs",
  },
  {
    id: 329,
    name: "Water accumulation in the tissues",
  },
  {
    id: 466,
    name: "Whiplash",
  },
  {
    id: 200,
    name: "White skin cancer",
  },
  {
    id: 345,
    name: "Whooping cough",
  },
  {
    id: 587,
    name: "Yeast infection",
  },
  {
    id: 248,
    name: "Yellow plague",
  },
  {
    id: 548,
    name: "Yellow skin bumps",
  },
];

const seedIssues = () => Issues.bulkCreate(issuedata);

module.exports = seedIssues;
