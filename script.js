const firstAidGuides = [
  {
    title: "Severe bleeding",
    category: "FIRST AID",
    summary:
      "Use safety, direct pressure, and professional guidance as priorities.",
    steps: [
      "Make sure the area is safe.",
      "Call local emergency services when appropriate.",
      "Apply firm, direct pressure with a clean cloth or dressing.",
      "Continue pressure and follow responder instructions.",
    ],
    avoid: "Do not delay emergency assistance or remove an embedded object.",
  },
  {
    title: "Burns",
    category: "FIRST AID",
    summary: "Move away from the source and seek help for serious burns.",
    steps: [
      "Stop the burning process only when it is safe.",
      "Cool the burn with clean, cool running water when appropriate.",
      "Remove tight items near the injury if they are not stuck.",
      "Seek urgent help for extensive, deep, electrical, or chemical burns.",
    ],
    avoid: "Do not apply ice, butter, or creams to a serious burn.",
  },
  {
    title: "Fainting",
    category: "FIRST AID",
    summary: "Protect the person from injury and check whether they respond.",
    steps: [
      "Check that the area is safe.",
      "Check for responsiveness and normal breathing.",
      "Call emergency services if they do not recover promptly or seem seriously ill.",
      "Stay with them and follow professional instructions.",
    ],
    avoid: "Do not give food or drink to an unconscious person.",
  },
  {
    title: "Choking",
    category: "FIRST AID",
    summary:
      "A person who cannot breathe, speak, or cough effectively needs immediate help.",
    steps: [
      "Call for emergency help and follow dispatcher instructions.",
      "Encourage effective coughing if the person can cough.",
      "Use only first-aid actions you have been trained to perform.",
      "If they become unresponsive, follow dispatcher instructions.",
    ],
    avoid: "Do not blindly sweep inside the mouth or leave the person alone.",
  },
];
const emergencyGuides = [
  {
    title: "Fire or smoke",
    category: "EMERGENCY",
    summary: "Get away from danger, activate the alarm, and use a safe exit.",
    steps: [
      "Leave immediately if it is safe to do so.",
      "Use stairs and move to a designated safe location.",
      "Call emergency services from a safe place.",
      "Do not re-enter until professionals say it is safe.",
    ],
    avoid: "Do not use an elevator or hide from responders.",
  },
  {
    title: "Severe weather",
    category: "EMERGENCY",
    summary: "Move indoors and follow local or school emergency instructions.",
    steps: [
      "Check the official warning and follow the safety plan.",
      "Move away from windows and exposed areas.",
      "Bring essential medication only if it is safe to do so.",
      "Wait for the all-clear from trusted authorities.",
    ],
    avoid: "Do not rely on rumors or go outside to observe the storm.",
  },
  {
    title: "Unresponsive person",
    category: "EMERGENCY",
    summary:
      "Check safety and responsiveness, then call emergency services promptly.",
    steps: [
      "Check that the scene is safe.",
      "Check responsiveness and normal breathing.",
      "Call local emergency services and use speakerphone if possible.",
      "Follow dispatcher instructions until help arrives.",
    ],
    avoid: "Do not move the person unless there is immediate danger.",
  },
  {
    title: "Chemical or gas exposure",
    category: "EMERGENCY",
    summary:
      "Move away from the source and alert professionals without creating more exposure.",
    steps: [
      "Leave the area and get to fresh air if safe.",
      "Avoid touching or spreading the substance.",
      "Call local emergency services and describe what happened.",
      "Follow official instructions about decontamination or evacuation.",
    ],
    avoid:
      "Do not return to investigate or use electrical switches near a suspected gas leak.",
  },
];
const contacts = {
  philippines: [
    {
      service: "Emergency services",
      number: "911",
      description: "Police, fire, and medical response where applicable.",
      source:
        "Verify with official local emergency services before publication.",
    },
  ],
  unverified: [],
};
const checklistItems = [
  "I know my local emergency number",
  "I have a basic first-aid kit",
  "I know where my flashlight is",
  "I have emergency contacts saved",
  "My household has a meeting point",
  "I know my evacuation route",
];
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
];
const allGuides = [...firstAidGuides, ...emergencyGuides];
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );
const renderGuides = (guides, target) => {
  document.querySelector(target).innerHTML = guides
    .map(
      (guide) =>
        `<article class="guide-card"><span class="tag">${escapeHtml(guide.category)}</span><h3>${escapeHtml(guide.title)}</h3><p>${escapeHtml(guide.summary)}</p><details><summary>View steps</summary><ol>${guide.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol><p><strong>Avoid:</strong> ${escapeHtml(guide.avoid)}</p><p class="small-note">Educational information only. Contact local emergency services for serious or unclear situations.</p></details></article>`,
    )
    .join("");
};
renderGuides(firstAidGuides, "#first-aid-list");
renderGuides(emergencyGuides, "#emergency-list");
const checklist = document.querySelector("#checklist"),
  savedChecklist = JSON.parse(
    localStorage.getItem("golden-hour-checklist") || "[]",
  );
checklist.innerHTML = checklistItems
  .map(
    (item, index) =>
      `<label class="check-item"><input type="checkbox" data-check="${index}" ${savedChecklist.includes(index) ? "checked" : ""}><span>${escapeHtml(item)}</span></label>`,
  )
  .join("");
checklist.addEventListener("change", (event) => {
  if (!event.target.matches("[data-check]")) return;
  const checked = [...checklist.querySelectorAll("[data-check]:checked")].map(
    (input) => Number(input.dataset.check),
  );
  localStorage.setItem("golden-hour-checklist", JSON.stringify(checked));
});
const renderHotlines = (region) => {
  const list = document.querySelector("#hotline-list"),
    regionContacts = contacts[region];
  list.innerHTML = regionContacts.length
    ? regionContacts
        .map(
          (contact) =>
            `<article class="hotline-card"><span class="tag">${escapeHtml(region)}</span><h3>${escapeHtml(contact.service)}</h3><strong>${escapeHtml(contact.number)}</strong><p>${escapeHtml(contact.description)}</p><p class="small-note">${escapeHtml(contact.source)}</p>${region === "philippines" ? `<a class="call-button" href="tel:${contact.number}">Call ${escapeHtml(contact.number)}</a>` : ""}</article>`,
        )
        .join("")
    : `<div class="info-box"><strong>[ LOCATION REQUIRED ]</strong><p>Select a verified region or contact your local emergency service directly.</p></div>`;
};
renderHotlines("philippines");
document
  .querySelector("#location-select")
  .addEventListener("change", (event) => renderHotlines(event.target.value));
let scenarioIndex = 0;
const renderScenario = () => {
  const scenario = scenarios[scenarioIndex];
  document.querySelector("#scenario-title").textContent =
    `Scenario ${String(scenarioIndex + 1).padStart(2, "0")}`;
  document.querySelector("#scenario-question").textContent = scenario.question;
  document.querySelector("#scenario-options").innerHTML = scenario.options
    .map(
      (option, index) =>
        `<button type="button" data-answer="${index}">[${String.fromCharCode(65 + index)}] ${escapeHtml(option)}</button>`,
    )
    .join("");
  document.querySelector("#scenario-feedback").textContent = "";
  document.querySelector("#next-scenario").hidden = true;
};
renderScenario();
document
  .querySelector("#scenario-options")
  .addEventListener("click", (event) => {
    if (!event.target.matches("[data-answer]")) return;
    const scenario = scenarios[scenarioIndex],
      correct = Number(event.target.dataset.answer) === scenario.answer;
    document.querySelector("#scenario-feedback").textContent =
      `${correct ? "Correct. " : "Good try. The safer first step is to check the scene. "}${scenario.explanation}`;
    document.querySelector("#next-scenario").hidden = false;
  });
document.querySelector("#next-scenario").addEventListener("click", () => {
  scenarioIndex = (scenarioIndex + 1) % scenarios.length;
  renderScenario();
});
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase(),
    results = allGuides.filter((guide) =>
      `${guide.title} ${guide.category} ${guide.summary}`
        .toLowerCase()
        .includes(query),
    );
  document.querySelector("#search-results").innerHTML = query
    ? results.length
      ? results
          .map(
            (guide) =>
              `<div class="search-result"><b>${escapeHtml(guide.category)}</b> → ${escapeHtml(guide.title)}<br><span>${escapeHtml(guide.summary)}</span></div>`,
          )
          .join("")
      : `<div class="info-box">[ SYSTEM NOTICE ]<br>Guide not found. Try another emergency topic.</div>`
    : "";
});
const menuToggle = document.querySelector(".menu-toggle"),
  nav = document.querySelector(".site-nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }),
);
