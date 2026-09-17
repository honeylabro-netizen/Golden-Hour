const reviewDate = "September 18, 2026";
const firstAidSource = {
  label: "American Red Cross First Aid Steps",
  url: "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps",
};
const emergencySources = {
  pagasa: { label: "DOST-PAGASA", url: "https://www.pagasa.dost.gov.ph/" },
  phivolcs: { label: "PHIVOLCS", url: "https://phivolcs.dost.gov.ph/" },
  ndrrmc: { label: "NDRRMC", url: "https://ndrrmc.gov.ph/" },
  fire: {
    label: "American Red Cross fire safety",
    url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire.html",
  },
};
const firstAidGuides = [
  {
    id: "severe-bleeding",
    title: "Severe bleeding",
    category: "BLEEDING & INJURY",
    level: "COMMON",
    summary:
      "Recognize life-threatening bleeding and prioritize safety, pressure, and emergency help.",
    keywords: "blood wound trauma injury",
    signs: "Bleeding that is heavy, continuous, or difficult to control.",
    actions: [
      "Check that the scene is safe and use a barrier if available.",
      "Call appropriate emergency services for severe or life-threatening bleeding.",
      "Apply firm, direct pressure with a clean cloth or dressing and continue following responder instructions.",
    ],
    avoid: "Do not delay emergency help or remove an embedded object.",
    help: "Seek emergency help for severe, uncontrolled, or life-threatening bleeding.",
    prevention:
      "Use appropriate protective equipment and follow safety procedures around tools and sharp objects.",
    source: firstAidSource,
  },
  {
    id: "minor-cuts-and-wounds",
    title: "Minor cuts and wounds",
    category: "BLEEDING & INJURY",
    level: "COMMON",
    summary:
      "Use a simple safety-first framework for a minor wound and watch for reasons to escalate.",
    keywords: "cut scrape wound skin",
    signs:
      "A small break in the skin without signs of a life-threatening injury.",
    actions: [
      "Check the scene and use clean protection where available.",
      "Apply gentle pressure for bleeding and keep the area protected.",
      "Seek professional advice when the wound is deep, contaminated, not improving, or otherwise concerning.",
    ],
    avoid: "Do not use unverified household substances on an open wound.",
    help: "Get professional help for severe bleeding, deep wounds, embedded objects, or signs of serious illness.",
    prevention:
      "Use safe handling practices and keep basic first-aid supplies available.",
    source: firstAidSource,
  },
  {
    id: "sprains-and-strains",
    title: "Sprains and strains",
    category: "BLEEDING & INJURY",
    level: "COMMON",
    summary:
      "Recognize a soft-tissue injury and avoid forcing painful movement.",
    keywords: "sports injury twist ankle muscle",
    signs:
      "Pain, swelling, bruising, or reduced movement after a twist or force.",
    actions: [
      "Stop the activity and protect the area from further injury.",
      "Use a comfortable position and seek advice when pain, swelling, or function is concerning.",
      "Follow professional guidance for assessment and recovery.",
    ],
    avoid:
      "Do not force movement or return to activity through significant pain.",
    help: "Seek assessment when an injury is severe, function is limited, or a fracture may be possible.",
    prevention:
      "Use appropriate equipment, warm-up practices, and safe activity rules.",
    source: firstAidSource,
  },
  {
    id: "suspected-fracture",
    title: "Suspected fracture",
    category: "BLEEDING & INJURY",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "Treat a possible broken bone as an injury needing professional assessment.",
    keywords: "broken bone fall deformity severe pain",
    signs:
      "Significant pain, swelling, deformity, or inability to use the area after injury.",
    actions: [
      "Check scene safety and keep the person as still and comfortable as possible.",
      "Call for professional help when the injury is severe or movement is unsafe.",
      "Follow dispatcher or responder instructions and avoid unnecessary movement.",
    ],
    avoid:
      "Do not try to straighten a deformed body part or test it repeatedly.",
    help: "Get emergency help for severe pain, deformity, loss of function, or associated serious injury.",
    prevention:
      "Use protective equipment and follow safety rules for sports, travel, and work.",
    source: firstAidSource,
  },
  {
    id: "nosebleed",
    title: "Nosebleed",
    category: "STUDENT / EVERYDAY CASES",
    level: "COMMON",
    summary:
      "Learn a calm response and recognize when a nosebleed needs professional care.",
    keywords: "nose blood school minor injury",
    signs:
      "Bleeding from the nose after irritation, impact, or another trigger.",
    actions: [
      "Have the person sit safely and remain calm.",
      "Use gentle first-aid measures within your training and monitor the person.",
      "Seek medical advice if bleeding is heavy, persistent, follows significant injury, or the person is unwell.",
    ],
    avoid:
      "Do not ignore heavy or persistent bleeding or a serious associated injury.",
    help: "Get professional help when bleeding does not settle, is heavy, or follows significant trauma.",
    prevention:
      "Follow local health guidance for recurring nosebleeds and reduce known irritation or injury risks.",
    source: firstAidSource,
  },
  {
    id: "burns",
    title: "Burns",
    category: "BURNS",
    level: "COMMON",
    summary:
      "Move away from the source and seek help for extensive, deep, electrical, or chemical burns.",
    keywords: "heat fire scald electrical chemical skin",
    signs:
      "Skin injury after heat, hot liquid, electricity, or a chemical substance.",
    actions: [
      "Stop the burning process only when it is safe.",
      "Cool a burn with clean, cool running water when appropriate.",
      "Remove tight items near the injury if they are not stuck and seek help for serious burns.",
    ],
    avoid:
      "Do not apply ice, butter, or creams to a serious burn, and do not remove stuck material.",
    help: "Seek urgent professional help for extensive, deep, electrical, chemical, or otherwise serious burns.",
    prevention:
      "Use caution with hot liquids, flames, electricity, and chemicals; follow safety instructions.",
    source: firstAidSource,
  },
  {
    id: "choking",
    title: "Choking",
    category: "BREATHING / RESPONSIVENESS",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "A person who cannot breathe, speak, or cough effectively needs immediate help.",
    keywords: "airway food breathing obstruction",
    signs: "Inability to breathe, speak, or cough effectively.",
    actions: [
      "Call for emergency help and follow dispatcher instructions.",
      "Encourage effective coughing if the person can cough.",
      "Use only first-aid actions you have been trained to perform; if the person becomes unresponsive, follow instructions.",
    ],
    avoid: "Do not blindly sweep inside the mouth or leave the person alone.",
    help: "Treat ineffective breathing or an unresponsive person as an emergency.",
    prevention:
      "Follow age-appropriate food and supervision guidance and learn formal choking first aid.",
    source: firstAidSource,
  },
  {
    id: "unresponsive-person",
    title: "Unresponsive person",
    category: "BREATHING / RESPONSIVENESS",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "Check safety and responsiveness, then contact emergency services promptly.",
    keywords: "unconscious breathing collapse CPR AED",
    signs: "The person does not respond normally or is not breathing normally.",
    actions: [
      "Check the scene, responsiveness, breathing, and obvious life-threatening conditions.",
      "Call emergency services and use speakerphone if possible.",
      "Give care only within your training and follow dispatcher instructions; trained responders may use CPR and an AED.",
    ],
    avoid:
      "Do not give food or drink to an unconscious person or delay emergency help.",
    help: "An unresponsive person or abnormal breathing requires emergency assistance.",
    prevention:
      "Learn CPR/AED through a recognized course rather than relying only on written instructions.",
    source: firstAidSource,
  },
  {
    id: "fainting",
    title: "Fainting",
    category: "MEDICAL EMERGENCIES",
    level: "COMMON",
    summary:
      "Protect the person from injury and check whether they recover and respond normally.",
    keywords: "collapse dizzy unconscious",
    signs: "A person becomes briefly unresponsive or collapses.",
    actions: [
      "Check that the area is safe and check responsiveness and normal breathing.",
      "Call emergency services if the person does not recover promptly or seems seriously ill.",
      "Stay with them and follow professional instructions.",
    ],
    avoid: "Do not give food or drink to an unconscious person.",
    help: "Seek urgent help for prolonged unresponsiveness, abnormal breathing, serious injury, or concerning symptoms.",
    prevention:
      "Follow medical advice for recurrent fainting and reduce known environmental risks.",
    source: firstAidSource,
  },
  {
    id: "seizure-awareness",
    title: "Seizure awareness",
    category: "LESS COMMON CASES",
    level: "LESS COMMON",
    summary:
      "Protect a person from nearby hazards and avoid unsafe restraint or objects in the mouth.",
    keywords: "seizure convulsion neurological",
    signs:
      "Uncontrolled movements, altered awareness, or unusual behavior may occur.",
    actions: [
      "Keep the area safe by moving nearby hazards when possible.",
      "Observe the episode and stay with the person.",
      "Call emergency services for a first seizure, prolonged or repeated seizures, injury, breathing difficulty, or other serious concerns.",
    ],
    avoid: "Do not restrain the person or put objects in their mouth.",
    help: "Use local emergency guidance for a first, prolonged, repeated, or dangerous seizure.",
    prevention:
      "For a person with a known condition, follow their established care plan.",
    source: firstAidSource,
  },
  {
    id: "heat-illness",
    title: "Heat-related illness",
    category: "ENVIRONMENTAL / SPECIAL CASES",
    level: "LESS COMMON",
    summary:
      "Recognize heat-related danger early and move the person to a safer environment.",
    keywords: "heat exhaustion heatstroke hot weather dehydration",
    signs:
      "Illness after heat exposure may include weakness, confusion, or other concerning changes.",
    actions: [
      "Move to a safer, cooler place if it is safe.",
      "Call professional help for severe symptoms, confusion, collapse, or worsening condition.",
      "Follow emergency instructions and do not leave a seriously ill person alone.",
    ],
    avoid:
      "Do not dismiss serious changes after heat exposure or delay emergency help.",
    help: "Severe symptoms, altered mental status, collapse, or worsening illness require urgent help.",
    prevention:
      "Plan activity around heat conditions and follow local public-health advice.",
    source: firstAidSource,
  },
  {
    id: "electric-shock",
    title: "Electric shock",
    category: "ENVIRONMENTAL / SPECIAL CASES",
    level: "LESS COMMON",
    summary:
      "Make the scene safe before approaching a person affected by electricity.",
    keywords: "electricity electrical injury power",
    signs: "A person may be injured after contact with an electrical source.",
    actions: [
      "Do not approach until the electrical source is made safe by an appropriate person or authority.",
      "Call emergency services for serious injury, burns, breathing problems, or unresponsiveness.",
      "Follow dispatcher instructions.",
    ],
    avoid:
      "Do not touch a person who may still be in contact with a live source.",
    help: "Treat serious electrical injury or abnormal breathing as an emergency.",
    prevention:
      "Use equipment correctly and keep away from damaged wiring or wet electrical sources.",
    source: firstAidSource,
  },
  {
    id: "eye-injury",
    title: "Eye injury or foreign object",
    category: "ENVIRONMENTAL / SPECIAL CASES",
    level: "LESS COMMON",
    summary:
      "Protect the eye and avoid making an injury worse while seeking appropriate advice.",
    keywords: "eye dust object chemical vision",
    signs: "Pain, irritation, changed vision, or an object affecting the eye.",
    actions: [
      "Avoid rubbing the eye and seek appropriate professional advice.",
      "For a chemical exposure, leave the source and follow emergency or poison-control instructions.",
      "Get urgent help for vision changes, penetrating injury, or severe pain.",
    ],
    avoid:
      "Do not force out an embedded object or delay help for vision-threatening injury.",
    help: "Urgent assessment is appropriate for penetrating injury, chemical exposure, severe pain, or changed vision.",
    prevention: "Use eye protection around tools, chemicals, and projectiles.",
    source: firstAidSource,
  },
];
const additionalFirstAidGuides = [
  {
    id: "drowning-accident",
    title: "Drowning accident",
    category: "BREATHING / ENVIRONMENTAL",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "Recognize a water emergency while protecting the rescuer from entering unsafe water.",
    keywords: "drowning water rescue submersion",
    signs:
      "A person in the water who cannot stay safe, respond, or breathe normally.",
    actions: [
      "Call for emergency help and alert trained rescuers.",
      "Do not enter dangerous water unless appropriately trained and equipped.",
      "Follow dispatcher instructions and provide care only when the person is in a safe place and it is within your training.",
    ],
    avoid:
      "Do not put yourself at risk by entering unsafe water or attempting an untrained rescue.",
    help: "Treat a person who is unresponsive or not breathing normally as an emergency.",
    prevention:
      "Use designated swimming areas, supervision, and local water-safety rules.",
    source: firstAidSource,
  },
  {
    id: "cardiac-arrest",
    title: "Cardiac arrest",
    category: "MEDICAL EMERGENCIES",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "Cardiac arrest is a sudden loss of effective heart activity and is different from a heart attack.",
    keywords: "cardiac arrest CPR AED unresponsive",
    signs:
      "A person is unresponsive and not breathing normally or is only gasping.",
    actions: [
      "Call 911 and get an AED if available.",
      "Start Hands-Only CPR for a suddenly collapsed teen or adult if you are not trained to provide full CPR.",
      "Follow dispatcher and AED prompts until help takes over.",
    ],
    avoid:
      "Do not delay emergency activation while trying to diagnose the cause.",
    help: "An unresponsive person who is not breathing normally needs immediate emergency help.",
    prevention: "Learn CPR/AED through recognized hands-on training.",
    source: {
      label: "American Heart Association CPR guidance",
      url: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines",
    },
  },
  {
    id: "heart-attack",
    title: "Heart attack",
    category: "MEDICAL EMERGENCIES",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "A heart attack occurs when blood flow to part of the heart is blocked; it is not the same as cardiac arrest.",
    keywords: "heart attack chest pain cardiac",
    signs:
      "Possible warning signs can include chest discomfort, shortness of breath, sweating, nausea, or discomfort in other areas.",
    actions: [
      "Call emergency services promptly and keep the person resting and monitored.",
      "Follow dispatcher instructions and do not drive the person yourself if emergency transport is available.",
      "Share relevant information with responders.",
    ],
    avoid: "Do not dismiss symptoms or wait to see whether they pass.",
    help: "Possible heart-attack symptoms require urgent professional assessment.",
    prevention:
      "Discuss personal risk factors and prevention with a qualified health professional.",
    source: {
      label: "American Heart Association heart attack information",
      url: "https://www.heart.org/en/health-topics/heart-attack",
    },
  },
  {
    id: "stroke",
    title: "Stroke",
    category: "MEDICAL EMERGENCIES",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "A stroke can affect brain function and requires urgent medical care.",
    keywords: "stroke FAST face arm speech",
    signs:
      "Sudden changes such as facial drooping, arm weakness, speech difficulty, vision change, or loss of balance.",
    actions: [
      "Call emergency services immediately and note when symptoms were first noticed.",
      "Keep the person safe and follow dispatcher instructions.",
      "Do not delay for food, drink, or home remedies.",
    ],
    avoid:
      "Do not wait for symptoms to improve or attempt to drive when emergency transport is available.",
    help: "Sudden stroke warning signs require immediate emergency assistance.",
    prevention:
      "Learn recognized stroke warning signs and discuss risk reduction with a health professional.",
    source: {
      label: "American Stroke Association stroke warning signs",
      url: "https://www.stroke.org/en/about-stroke/stroke-symptoms",
    },
  },
  {
    id: "heart-failure",
    title: "Heart failure awareness",
    category: "MEDICAL EMERGENCIES",
    level: "MEDICAL AWARENESS",
    summary:
      "Heart failure is a medical condition in which the heart cannot pump blood as well as it should; it differs from sudden cardiac arrest and heart attack.",
    keywords: "heart failure breathlessness swelling fatigue",
    signs:
      "Concerning symptoms can include worsening breathlessness, unusual fatigue, or swelling and should be assessed by a professional.",
    actions: [
      "Help the person follow their existing care plan and contact a qualified health professional.",
      "Seek emergency help for severe breathing difficulty, collapse, chest pain, or sudden worsening.",
      "Share known medical information with responders.",
    ],
    avoid:
      "Do not diagnose the condition or change prescribed treatment without professional advice.",
    help: "Sudden or severe symptoms require emergency care.",
    prevention:
      "Follow the person's established medical plan and attend appropriate follow-up care.",
    source: {
      label: "American Heart Association heart failure information",
      url: "https://www.heart.org/en/health-topics/heart-failure",
    },
  },
  {
    id: "poisoning-awareness",
    title: "Poisoning awareness",
    category: "POISONING",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "Reduce exposure and seek professional poison or emergency assistance rather than trying unsupported home remedies.",
    keywords: "poison chemical ingestion exposure",
    signs:
      "Possible poisoning after swallowing, inhaling, or contacting a harmful substance.",
    actions: [
      "Move away from the source and get fresh air when safe.",
      "Call emergency or poison professionals and keep the container or substance information available when safe.",
      "Follow the specific instructions provided by professionals.",
    ],
    avoid:
      "Do not induce vomiting or give a home remedy unless a qualified professional specifically instructs you.",
    help: "Call immediately for breathing problems, unconsciousness, seizures, severe symptoms, or suspected serious exposure.",
    prevention:
      "Store chemicals and medicines safely and keep original labels available.",
    source: {
      label: "World Health Organization poison prevention",
      url: "https://www.who.int/health-topics/poisons",
    },
  },
  {
    id: "animal-bite-scratch",
    title: "Animal bite or scratch",
    category: "ANIMAL-RELATED",
    level: "LESS COMMON",
    summary:
      "Protect the wound and seek medical and public-health advice after a bite or scratch, especially from an unfamiliar animal.",
    keywords: "animal bite scratch rabies dog cat",
    signs:
      "A bite or scratch that breaks the skin, or contact with an unfamiliar or potentially rabid animal.",
    actions: [
      "Move away from the animal safely and avoid handling an aggressive animal.",
      "Clean and protect the wound with basic first-aid measures within your training.",
      "Seek prompt medical advice about wound care and rabies exposure in the Philippines.",
    ],
    avoid: "Do not capture or approach an unsafe animal yourself.",
    help: "Seek professional assessment for any bite or scratch that breaks skin or may involve rabies exposure.",
    prevention:
      "Avoid unfamiliar animals and follow local vaccination and animal-control guidance.",
    source: {
      label: "WHO rabies information",
      url: "https://www.who.int/news-room/fact-sheets/detail/rabies",
    },
  },
  {
    id: "bone-dislocation",
    title: "Bone dislocation",
    category: "INJURIES",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "A dislocation can damage a joint and needs professional assessment.",
    keywords: "dislocated joint shoulder injury",
    signs:
      "Pain, swelling, deformity, or inability to move a joint after injury.",
    actions: [
      "Protect the injured area and keep it in a comfortable position.",
      "Seek professional medical care and follow responder instructions.",
      "Use support only as directed by trained responders.",
    ],
    avoid: "Do not force a joint back into place or repeatedly test it.",
    help: "Get urgent care for deformity, severe pain, numbness, or loss of function.",
    prevention:
      "Use appropriate safety equipment and follow sports and activity guidance.",
    source: firstAidSource,
  },
  {
    id: "asthma-attack",
    title: "Asthma attack",
    category: "BREATHING",
    level: "EMERGENCY / CALL FOR HELP",
    summary:
      "Help a person follow their prescribed asthma action plan and recognize severe breathing difficulty.",
    keywords: "asthma breathing inhaler wheeze",
    signs:
      "Worsening breathing difficulty, wheezing, coughing, or trouble speaking normally.",
    actions: [
      "Help the person use prescribed rescue medication according to their existing plan.",
      "Keep them calm and call emergency services for severe or worsening breathing difficulty.",
      "Follow dispatcher instructions and stay with them.",
    ],
    avoid: "Do not provide someone else's medicine or invent a dose.",
    help: "Call emergency services for severe breathing difficulty, inability to speak normally, collapse, or worsening symptoms.",
    prevention:
      "Follow the person's written asthma action plan and prescribed care.",
    source: {
      label: "American Lung Association asthma emergency guidance",
      url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma/asthma-101/asthma-emergency",
    },
  },
  {
    id: "epileptic-seizure",
    title: "Epileptic seizure",
    category: "MEDICAL EMERGENCIES",
    level: "LESS COMMON",
    summary:
      "Keep the person safe from nearby hazards, stay with them, and monitor the situation calmly.",
    keywords: "epilepsy seizure convulsion",
    signs: "A seizure may involve altered awareness or uncontrolled movements.",
    actions: [
      "Move nearby hazards away when possible and stay with the person.",
      "Monitor the situation and call emergency services for a first, prolonged, repeated, or dangerous seizure.",
      "Follow the person's established care plan if one is known.",
    ],
    avoid: "Do not restrain the person or put objects in their mouth.",
    help: "Call for first or prolonged seizures, breathing difficulty, injury, repeated seizures, or other serious concerns.",
    prevention:
      "Learn the person's care plan from them or their support network when appropriate.",
    source: firstAidSource,
  },
];
firstAidGuides.push(...additionalFirstAidGuides);
const emergencyGuides = [
  {
    id: "fire-and-smoke",
    title: "Fire and smoke",
    category: "FIRE / EVACUATION",
    level: "COMMON",
    summary:
      "Leave danger, alert others, use a safe exit, and contact responders from a safe place.",
    keywords: "fire smoke alarm building evacuation",
    signs: "Fire, smoke, alarms, heat, or a building safety threat.",
    actions: [
      "Leave immediately if safe and use a safe exit.",
      "Use stairs where appropriate, move to a designated safe location, and call responders from safety.",
      "Do not re-enter until professionals say it is safe.",
    ],
    avoid:
      "Do not use an elevator, hide from responders, or return to investigate.",
    help: "Contact emergency services for fire, smoke, or immediate danger.",
    prevention:
      "Know exits, alarms, meeting places, and local building procedures.",
    source: emergencySources.fire,
  },
  {
    id: "typhoon-and-severe-weather",
    title: "Typhoon and severe weather",
    category: "NATURAL HAZARDS",
    level: "COMMON",
    summary:
      "Monitor official warnings and follow local or school emergency instructions.",
    keywords: "typhoon storm wind rain warning PAGASA",
    signs:
      "Official severe-weather warnings, strong winds, heavy rain, flooding, or lightning.",
    actions: [
      "Check official PAGASA information and follow the local safety plan.",
      "Move indoors and away from exposed areas and windows when advised.",
      "Wait for official updates and the all-clear before returning to danger areas.",
    ],
    avoid: "Do not rely on rumors or go outside to observe hazardous weather.",
    help: "Call appropriate responders for immediate danger and follow local emergency instructions.",
    prevention:
      "Monitor official warnings and prepare routes, contacts, and supplies before severe weather.",
    source: emergencySources.pagasa,
  },
  {
    id: "earthquake",
    title: "Earthquake",
    category: "NATURAL HAZARDS",
    level: "COMMON",
    summary:
      "Use official earthquake-safety guidance and watch for continuing hazards after shaking.",
    keywords: "earthquake tremor PHIVOLCS shaking",
    signs:
      "Ground shaking, falling objects, structural damage, or official warnings.",
    actions: [
      "Protect yourself from falling hazards during shaking using locally taught safety guidance.",
      "After shaking, check for immediate danger, injuries, fire, and damaged utilities.",
      "Follow PHIVOLCS, NDRRMC, and local authority instructions.",
    ],
    avoid: "Do not return to damaged structures or spread unverified reports.",
    help: "Call responders for trapped, injured, fire, or immediate danger situations.",
    prevention:
      "Learn school and household procedures, routes, and assembly areas.",
    source: emergencySources.phivolcs,
  },
  {
    id: "flood",
    title: "Flood",
    category: "NATURAL HAZARDS",
    level: "COMMON",
    summary:
      "Move away from rising or moving water and follow official evacuation directions.",
    keywords: "flood rain water evacuation PAGASA",
    signs:
      "Rising water, flood warnings, blocked routes, or rapidly changing conditions.",
    actions: [
      "Move to safer ground or an official evacuation location when directed.",
      "Avoid entering moving or unknown water and follow local warnings.",
      "Contact responders from a safe place when someone is in immediate danger.",
    ],
    avoid:
      "Do not walk or drive into moving floodwater or ignore evacuation instructions.",
    help: "Call for help when people are trapped, injured, or in immediate danger.",
    prevention:
      "Know local flood-prone routes, warnings, and evacuation plans.",
    source: emergencySources.pagasa,
  },
  {
    id: "volcanic-activity",
    title: "Volcanic activity",
    category: "NATURAL HAZARDS",
    level: "LESS COMMON",
    summary:
      "Use current PHIVOLCS alerts and local evacuation instructions around volcanic hazards.",
    keywords: "volcano ash eruption PHIVOLCS evacuation",
    signs:
      "Official volcanic alerts, ashfall, unusual activity, or evacuation orders.",
    actions: [
      "Follow PHIVOLCS and local government instructions.",
      "Move away from restricted or hazardous areas when directed.",
      "Use safe routes and wait for official updates.",
    ],
    avoid: "Do not enter restricted areas or rely on unofficial observations.",
    help: "Follow official evacuation instructions and contact responders for immediate danger.",
    prevention: "Know local hazard zones, routes, and official alert channels.",
    source: emergencySources.phivolcs,
  },
  {
    id: "chemical-or-gas-exposure",
    title: "Chemical or gas exposure",
    category: "HOME / SCHOOL",
    level: "LESS COMMON",
    summary:
      "Move away from the source and alert professionals without creating more exposure.",
    keywords: "chemical gas leak fumes laboratory",
    signs:
      "Strong unusual odor, visible release, symptoms after exposure, or an official incident warning.",
    actions: [
      "Leave the area and get to fresh air if safe.",
      "Avoid touching or spreading the substance and alert responsible authorities.",
      "Follow official instructions about evacuation or decontamination.",
    ],
    avoid:
      "Do not return to investigate or create ignition sources near a suspected gas leak.",
    help: "Call emergency responders for immediate danger, serious symptoms, or an uncontrolled release.",
    prevention:
      "Follow laboratory, workplace, household, and school chemical-safety procedures.",
    source: emergencySources.ndrrmc,
  },
  {
    id: "power-outage",
    title: "Power outage",
    category: "HOME / SCHOOL",
    level: "COMMON",
    summary: "Use a calm backup plan and watch for hazards caused by outages.",
    keywords: "electricity blackout school home communication",
    signs:
      "Loss of electricity, failed systems, or official outage information.",
    actions: [
      "Check immediate safety and use safe lighting.",
      "Follow school, household, utility, or local instructions.",
      "Conserve communication and battery resources for important needs.",
    ],
    avoid:
      "Do not use damaged electrical equipment or improvise unsafe connections.",
    help: "Report hazards and contact responders for fires, medical emergencies, or dangerous infrastructure.",
    prevention:
      "Keep safe lighting, charged communication devices, and contact information available.",
    source: emergencySources.ndrrmc,
  },
  {
    id: "road-accident",
    title: "Road accident",
    category: "PUBLIC / COMMUNITY",
    level: "COMMON",
    summary:
      "Check scene safety first and summon professional responders without creating another hazard.",
    keywords: "traffic crash collision road injury",
    signs:
      "A collision, injured people, traffic danger, fire, or blocked road.",
    actions: [
      "Keep away from traffic and other immediate hazards.",
      "Call appropriate emergency services and provide the location and known dangers.",
      "Give only assistance within your training and follow dispatcher instructions.",
    ],
    avoid:
      "Do not enter unsafe traffic, move injured people unnecessarily, or create a second collision.",
    help: "Call responders for injuries, trapped people, fire, or immediate road danger.",
    prevention:
      "Use seatbelts, helmets, visible crossings, and local road-safety rules.",
    source: emergencySources.ndrrmc,
  },
];
const checklistGroups = {
  HOME: [
    "I know my local emergency number",
    "I have safe lighting and backup power",
    "I have a basic first-aid kit",
    "I know where important documents are",
  ],
  FAMILY: [
    "I have emergency contacts saved",
    "My household has a meeting point",
    "We discussed medication and accessibility needs",
    "We know how to contact one another",
  ],
  SCHOOL: [
    "I know my school evacuation route",
    "I know the assembly area",
    "I know where official school instructions are shared",
    "I understand the purpose of emergency drills",
  ],
  TRAVEL: [
    "I know the destination emergency contacts",
    "I have a route and communication backup",
    "I carry essential medication or needs safely",
    "I know what to do if separated from my group",
  ],
};
const checklistGroupSummaries = {
  HOME: "Make your living space easier to navigate and safer during a disruption.",
  FAMILY:
    "Agree on contacts, meeting points, and needs before people are separated.",
  SCHOOL:
    "Know the routes, assembly areas, and trusted instructions used at school.",
  TRAVEL:
    "Prepare for unfamiliar hazards, transport changes, and communication gaps.",
};
const scenarios = [
  {
    question: "You find someone who is not responding. What do you do first?",
    options: [
      "Move them immediately",
      "Check whether the scene is safe",
      "Give them food",
      "Leave the area",
    ],
    answer: 1,
    explanation:
      "Check the scene first so you do not become injured too. Then check responsiveness and breathing and call local emergency services.",
  },
  {
    question:
      "You see smoke coming from a room. What is the safest first action?",
    options: [
      "Go inside to investigate",
      "Leave the area and activate the alarm if safe",
      "Open every window",
      "Wait for someone else",
    ],
    answer: 1,
    explanation:
      "Move away from danger, alert others, and use a safe exit. Contact emergency services from a safe place.",
  },
  {
    question: "Which preparedness action is most useful before an emergency?",
    options: [
      "Wait until a warning is issued",
      "Learn local routes and meeting places",
      "Share an unverified rumor",
      "Hide important documents",
    ],
    answer: 1,
    explanation:
      "Preparedness works best when routes, contacts, and meeting places are discussed before an emergency.",
  },
];
const hotlineContacts = [
  {
    name: "Unified Emergency Hotline",
    category: "NATIONAL EMERGENCY",
    phone: "911",
    purpose: "National emergency assistance hotline.",
    availability:
      "For immediate emergencies requiring police, fire, medical, or other emergency assistance.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "National Disaster Risk Reduction and Management Council",
    category: "DISASTER",
    phone: "(02) 8911-5061 to 65 local 100",
    purpose: "Disaster risk reduction and emergency management assistance.",
    availability: "See the official directory for current contact routing.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Department of Social Welfare and Development",
    category: "SOCIAL SERVICES",
    phone: "0918-912-2813",
    purpose: "DSWD assistance and social welfare concerns.",
    availability:
      "Text hotline and agency contacts are listed in the official directory.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Philippine Red Cross",
    category: "MEDICAL / RESCUE",
    phone: "143",
    purpose: "Emergency assistance and Red Cross services.",
    availability:
      "See the official directory for additional Red Cross contacts.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Philippine National Police",
    category: "PUBLIC SAFETY",
    phone: "117",
    purpose: "Police emergency assistance and public safety concerns.",
    availability: "Emergency hotline.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Bureau of Fire Protection",
    category: "FIRE",
    phone: "(02) 8426-0219",
    purpose: "Fire and fire-safety emergency assistance.",
    availability:
      "See the official directory for additional BFP contact numbers.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Philippine Coast Guard",
    category: "MARITIME",
    phone: "(02) 8527-8481 to 89",
    purpose: "Maritime safety and emergency assistance.",
    availability:
      "See the official directory for additional Coast Guard contacts.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Metro Manila Development Authority",
    category: "TRANSPORTATION",
    phone: "136",
    purpose: "Metro Manila traffic and transportation-related assistance.",
    availability: "MMDA hotline.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Department of Transportation",
    category: "TRANSPORTATION",
    phone: "7890",
    purpose: "Transportation-related concerns and assistance.",
    availability: "DOTr Action Center Hotline.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Land Transportation Office",
    category: "TRANSPORTATION",
    phone: "LTOHELP to 2600",
    purpose: "Land transportation and LTO-related concerns.",
    availability: "Text LTOHELP to 2600 on supported networks.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Land Transportation Franchising and Regulatory Board",
    category: "TRANSPORTATION",
    phone: "1342",
    purpose: "Public transport and franchising-related concerns.",
    availability: "24/7 hotline according to the official directory.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "DOST-PAGASA",
    category: "WEATHER",
    phone: "(02) 8284-0800",
    purpose: "Official weather and climate information.",
    availability:
      "See PAGASA's official website for current weather information and agency services.",
    source: {
      label: "DOST-PAGASA official website",
      url: "https://www.pagasa.dost.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "PHIVOLCS",
    category: "EARTHQUAKE / VOLCANO",
    phone: "(02) 8426-1468 to 79",
    purpose: "Earthquake, volcano, and related geohazard information.",
    availability:
      "See PHIVOLCS official channels for current alerts and information.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Manila Water",
    category: "UTILITIES",
    phone: "1627",
    purpose: "Water utility-related concerns.",
    availability:
      "See the official directory and utility website for current service information.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Maynilad",
    category: "UTILITIES",
    phone: "1626",
    purpose: "Water utility-related concerns.",
    availability:
      "See the official directory and utility website for current service information.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "Violence Against Women and Children",
    category: "SOCIAL SERVICES",
    phone: "(02) 8931-8101 to 07",
    purpose: "Government assistance and reporting channels for VAWC concerns.",
    availability:
      "See the official directory for additional DSWD and PNP contacts.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
  {
    name: "National Center for Mental Health",
    category: "MENTAL HEALTH",
    phone: "0917-899-8727",
    purpose: "NCMH mental health crisis assistance and support.",
    availability: "NCMH USAP crisis hotline.",
    source: {
      label: "Official Philippine government hotline directory",
      url: "https://ehotlines.e.gov.ph/",
    },
    lastVerified: reviewDate,
  },
];
emergencyGuides.forEach((guide) => {
  guide.type =
    guide.category === "NATURAL HAZARDS"
      ? "QUICK READ"
      : guide.category === "PUBLIC / COMMUNITY"
        ? "SCENARIO"
        : "GUIDE";
  guide.filterTags =
    guide.category === "NATURAL HAZARDS"
      ? ["natural", "disaster"]
      : guide.category === "PUBLIC / COMMUNITY"
        ? ["community", "safety"]
        : ["safety"];
});
const allGuides = [...firstAidGuides, ...emergencyGuides];
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  );
const byId = (id) => document.getElementById(id);
const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
const sourceLink = (source) =>
  `<a href="${source.url}" rel="noreferrer">${escapeHtml(source.label)}</a>`;

const renderGuideCard = (guide, index, page) =>
  `<article class="guide-card archive-card tone-${index % 6}"><span class="guide-number">${String(index + 1).padStart(2, "0")}</span><span class="tag">${escapeHtml(guide.category)}</span><span class="guide-type">${escapeHtml(guide.type || "GUIDE")}</span><h3>${escapeHtml(guide.title)}</h3><p>${escapeHtml(guide.summary)}</p><span class="learning-level">${escapeHtml(guide.level)}</span><a class="read-guide" href="${page}.html?topic=${encodeURIComponent(guide.id)}">[ READ GUIDE ] <span aria-hidden="true">►</span></a></article>`;
const renderGuideLibrary = () => {
  const module = document.body.dataset.module;
  if (!module) return;
  const guides = module === "first-aid" ? firstAidGuides : emergencyGuides;
  const list = byId(
    module === "first-aid" ? "first-aid-list" : "emergency-list",
  );
  if (!list) return;
  let filter = "all";
  const render = () => {
    const query = (byId("guide-search")?.value || "").trim().toLowerCase();
    const filtered = guides.filter((guide) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "common" && guide.level === "COMMON") ||
        (filter === "less-common" && guide.level !== "COMMON") ||
        guide.category.toLowerCase().includes(filter) ||
        (guide.filterTags || []).includes(filter);
      return (
        matchesFilter &&
        `${guide.title} ${guide.category} ${guide.summary} ${guide.keywords} ${guide.signs} ${guide.actions.join(" ")} ${guide.avoid}`
          .toLowerCase()
          .includes(query)
      );
    });
    list.innerHTML = filtered
      .map((guide) => renderGuideCard(guide, guides.indexOf(guide), module))
      .join("");
    if (byId("guide-empty")) byId("guide-empty").hidden = filtered.length > 0;
  };
  byId("guide-search")?.addEventListener("input", render);
  document.querySelectorAll("[data-guide-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      filter = button.dataset.guideFilter;
      document
        .querySelectorAll("[data-guide-filter]")
        .forEach((item) => item.classList.toggle("active", item === button));
      render();
    }),
  );
  render();
};
const renderGuideReader = () => {
  const reader = byId("guide-reader");
  const module = document.body.dataset.module;
  if (!reader || !module) return;
  const guides = module === "first-aid" ? firstAidGuides : emergencyGuides;
  const topic = new URLSearchParams(location.search).get("topic");
  const guide = guides.find((item) => item.id === topic);
  if (!guide) return;
  byId("guide-library").hidden = true;
  document
    .querySelectorAll(".archive-section, .source-panel, .featured-learning")
    .forEach((section) => {
      section.hidden = true;
    });
  reader.hidden = false;
  reader.innerHTML = `<a class="back-module" href="${module}.html">&larr; BACK TO ${module === "first-aid" ? "FIRST AID" : "EMERGENCIES"}</a><p class="eyebrow">${escapeHtml(guide.category)} / ${escapeHtml(guide.level)}</p><h2>${escapeHtml(guide.title)}</h2><p class="reader-summary">${escapeHtml(guide.summary)}</p><div class="reader-grid"><section><h3>WHAT IS IT?</h3><p>${escapeHtml(guide.summary)}</p></section><section><h3>RECOGNIZE THE SIGNS</h3><p>${escapeHtml(guide.signs)}</p></section><section><h3>WHAT TO DO</h3><ol>${guide.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}</ol></section><section><h3>WHAT NOT TO DO</h3><p>${escapeHtml(guide.avoid)}</p></section><section><h3>WHEN TO GET EMERGENCY HELP</h3><p>${escapeHtml(guide.help)}</p></section><section><h3>PREVENTION / PREPAREDNESS</h3><p>${escapeHtml(guide.prevention)}</p></section></div><div class="quick-reference"><strong>QUICK REFERENCE</strong><span>Check safety &rarr; recognize danger &rarr; call appropriate help &rarr; follow qualified instructions.</span></div><p class="small-note"><strong>SOURCE:</strong> ${sourceLink(guide.source)}<br /><strong>LAST REVIEWED:</strong> ${reviewDate}</p>`;
};
renderGuideLibrary();
renderGuideReader();

const getSavedChecklist = () => {
  try {
    const saved = JSON.parse(
      localStorage.getItem("golden-hour-checklist-v2") || "{}",
    );
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
};
const renderChecklist = () => {
  const container = byId("checklist");
  if (!container) return;
  const saved = getSavedChecklist();
  container.innerHTML = Object.entries(checklistGroups)
    .map(
      ([group, items]) =>
        `<section class="checklist-group"><span class="checklist-number">${String(Object.keys(checklistGroups).indexOf(group) + 1).padStart(2, "0")}</span><h3>${group}</h3><p class="checklist-summary">${escapeHtml(checklistGroupSummaries[group])}</p>${items
          .map((item, index) => {
            const key = `${group}-${index}`;
            return `<label class="check-item"><input type="checkbox" data-check="${key}" ${saved[key] ? "checked" : ""}><span>${escapeHtml(item)}</span></label>`;
          })
          .join("")}</section>`,
    )
    .join("");
  const update = () => {
    const inputs = [...container.querySelectorAll("[data-check]")];
    const checked = inputs.filter((input) => input.checked);
    const percentage = Math.round((checked.length / inputs.length) * 100);
    byId("checklist-progress").value = percentage;
    byId("checklist-progress-text").textContent = `${percentage}% complete`;
    byId("checklist-count").textContent =
      `${checked.length} / ${inputs.length} COMPLETE`;
  };
  container.addEventListener("change", (event) => {
    if (!event.target.matches("[data-check]")) return;
    const values = getSavedChecklist();
    values[event.target.dataset.check] = event.target.checked;
    localStorage.setItem("golden-hour-checklist-v2", JSON.stringify(values));
    update();
  });
  update();
};
renderChecklist();
byId("reset-checklist")?.addEventListener("click", () => {
  localStorage.removeItem("golden-hour-checklist-v2");
  renderChecklist();
});

const renderHotlines = () => {
  const list = byId("hotline-list");
  if (!list) return;
  const query = (byId("hotline-search")?.value || "").trim().toLowerCase();
  const category = byId("hotline-category")?.value || "all";
  const matches = hotlineContacts.filter(
    (item) =>
      (category === "all" || item.category === category) &&
      `${item.name} ${item.category} ${item.purpose}`
        .toLowerCase()
        .includes(query),
  );
  list.innerHTML = matches.length
    ? matches
        .map(
          (item) =>
            `<article class="hotline-card"><span class="tag">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.name)}</h3><strong>${escapeHtml(item.phone)}</strong><p><b>PURPOSE:</b> ${escapeHtml(item.purpose)}</p><p><b>AVAILABILITY:</b> ${escapeHtml(item.availability)}</p><p class="small-note"><b>SOURCE:</b> ${sourceLink(item.source)}<br /><b>LAST VERIFIED:</b> ${escapeHtml(item.lastVerified)}</p><a class="call-button" href="tel:${encodeURIComponent(item.phone)}">CALL ${escapeHtml(item.phone)}</a></article>`,
        )
        .join("")
    : `<div class="info-box"><strong>NO MATCH FOUND</strong><p>Try another service or category. Only contacts with an identifiable official source are listed.</p></div>`;
};
renderHotlines();
byId("hotline-category")?.addEventListener("change", renderHotlines);
byId("hotline-search")?.addEventListener("input", renderHotlines);

let scenarioIndex = 0;
const renderScenario = () => {
  const question = byId("scenario-question");
  if (!question) return;
  const scenario = scenarios[scenarioIndex];
  byId("scenario-title").textContent =
    `Scenario ${String(scenarioIndex + 1).padStart(2, "0")}`;
  question.textContent = scenario.question;
  byId("scenario-options").innerHTML = scenario.options
    .map(
      (option, index) =>
        `<button type="button" data-answer="${index}">[${String.fromCharCode(65 + index)}] ${escapeHtml(option)}</button>`,
    )
    .join("");
  byId("scenario-feedback").textContent = "";
  byId("next-scenario").hidden = true;
};
renderScenario();
byId("scenario-options")?.addEventListener("click", (event) => {
  if (!event.target.matches("[data-answer]")) return;
  const scenario = scenarios[scenarioIndex];
  const correct = Number(event.target.dataset.answer) === scenario.answer;
  byId("scenario-feedback").textContent =
    `${correct ? "CORRECT. " : "REVIEW THIS. "}${scenario.explanation}`;
  byId("next-scenario").hidden = false;
});
byId("next-scenario")?.addEventListener("click", () => {
  scenarioIndex = (scenarioIndex + 1) % scenarios.length;
  renderScenario();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const closeMenu = () => {
  nav?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
};
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav
  ?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
document.addEventListener("click", (event) => {
  if (
    nav?.classList.contains("open") &&
    !nav.contains(event.target) &&
    event.target !== menuToggle
  )
    closeMenu();
});
const page = document.body.dataset.page;
document
  .querySelector(`[data-nav="${page}"]`)
  ?.setAttribute("aria-current", "page");
if ("serviceWorker" in navigator)
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("service-worker.js").catch(() => {}),
  );
const offlineBanner = byId("offline-banner");
const updateOfflineBanner = () => {
  if (offlineBanner) offlineBanner.hidden = navigator.onLine;
};
window.addEventListener("online", updateOfflineBanner);
window.addEventListener("offline", updateOfflineBanner);
updateOfflineBanner();
