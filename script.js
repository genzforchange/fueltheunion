// Email addresses
const emailAddresses = [
  "Gretchen.Whitmer@michigan.gov",
  "dugganm@detroitmi.gov",
  "councilmembersheffield@detroitmi.gov",
  "councilmembertate@detroitmi.gov",
  "CouncilmemberCalloway@detroitmi.gov",
  "BensonS@detroitmi.gov",
  "councilmemberjohnson@detroitmi.gov",
  "Councilmembergabriela@detroitmi.gov",
  "councilmemberdurhal@detroitmi.gov",
  "councilmemberwaters@detroitmi.gov",
  "coleman.young@detroitmi.gov",
  "publicinfo@nlrb.gov",
];

// Subject lines
const subjectLines = [
  "Urgent Safety Concern in Marathon’s Detroit Refinery",
  "Critical Safety Risks at Marathon’s Detroit Refinery",
  "Serious Safety Issue at Marathon Detroit Refinery",
  "Potential Safety Crisis at Marathon’s Detroit Refinery",
  "Immediate Attention Required for Detroit Refinery Safety",
  "Urgent: Safety Risks at Marathon’s Detroit Refinery Due to Unqualified Workers",
  "Immediate Action Required: Unlicensed Workers at Marathon Refinery Endangering Public Safety",
  "Critical Safety Issue: Temporary Workers at Marathon Refinery Lack Proper Licensing",
  "Detroit Refinery Safety Compromised: Unlicensed Workers on Site",
  "Marathon Refinery Crisis: Public Safety at Risk Due to Inadequate Training",
  "Safety Alert: Unqualified Temp Workers Operating at Marathon Refinery",
  "Governor Whitmer, Mayor Duggan: Urgent Safety Concerns at Detroit’s Marathon Refinery",
  "Protect Detroit: Address Safety Violations at Marathon Refinery Immediately",
  "Marathon Refinery Staffing Crisis: Endangering Workers and the Community",
];

// Synonyms
const greetings = ["Dear", "To", "Attention"];
const safetyConcernSynonyms = [
  "safety risks",
  "safety concerns",
  "hazardous conditions",
  "critical dangers",
  "threats to safety",
];
const licenseConcernSynonyms = [
  "lack of licenses",
  "absence of credentials",
  "missing qualifications",
  "improper licensing",
];
const urgencySynonyms = ["urgent", "immediate", "pressing", "important"];
const closingSynonyms = [
  "Sincerely",
  "Best regards",
  "Thank you",
  "Yours truly",
  "Best",
];

const swiftSynonyms = ["swift", "quick", "rapid", "prompt", "speedy"];

const experienceSynonyms = [
  "Workers with over two years of experience",
  "Workers with beyond two years of experience",
  "Workers with 2+ years of experience",
  "Workers with greater than two years of experience",
  "Workers with more than two years' experience",
];

const call2ActionSyn = [
  "I strongly encourage you to resolve these concerns without delay.",
  "I request that you take immediate action to address these concerns.",
  "I implore you to promptly attend to these issues.",
  "I advise you to handle these concerns as a matter of urgency.",
  "I ask that you address these matters right away.",
  "I insist that these concerns be dealt with immediately.",
  "I recommend that you take swift action to resolve these concerns.",
];

const thankYouSyn = [
  "I appreciate your prompt attention to this issue.",
  "Thank you for addressing this matter.",
  "I’m grateful for your time and consideration regarding this.",
  "I appreciate your focus on resolving this concern.",
  "Thank you for your careful consideration of this issue.",
  "I appreciate your efforts in handling this matter.",
  "Thank you for giving this matter your attention.",
];

const hiringIssueSyn = [
  "is employing temporary workers with insufficient training.",
  "is bringing on temporary staff with inadequate training.",
  "is hiring temporary employees who lack proper training.",
  "is recruiting temporary workers without the necessary training.",
  "is onboarding temporary staff with minimal training.",
  "is employing temporary workers who are severely undertrained.",
  "is engaging temporary staff with a substandard level of training.",
];

function generateRandomEmail() {
  // choosing random synonyms
  const subject = subjectLines[Math.floor(Math.random() * subjectLines.length)];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const safetyConcern =
    safetyConcernSynonyms[
      Math.floor(Math.random() * safetyConcernSynonyms.length)
    ];
  const licenseConcern =
    licenseConcernSynonyms[
      Math.floor(Math.random() * licenseConcernSynonyms.length)
    ];
  const urgency =
    urgencySynonyms[Math.floor(Math.random() * urgencySynonyms.length)];
  const closing =
    closingSynonyms[Math.floor(Math.random() * closingSynonyms.length)];
  const swift = swiftSynonyms[Math.floor(Math.random() * swiftSynonyms.length)];
  const experience =
    experienceSynonyms[Math.floor(Math.random() * experienceSynonyms.length)];
  const call2Action =
    call2ActionSyn[Math.floor(Math.random() * call2ActionSyn.length)];
  const thankYou = thankYouSyn[Math.floor(Math.random() * thankYouSyn.length)];
  const hiringIssue =
    hiringIssueSyn[Math.floor(Math.random() * hiringIssueSyn.length)];

  const emailBody = `${greeting} Governor Whitmer, Mayor Duggan, and Detroit City Council Members,

I am writing to raise ${urgency} ${safetyConcern} regarding Marathon’s Detroit Refinery. Workers affiliated with Teamsters Local 283 are on strike, and Marathon Petroleum ${hiringIssue} While first-class stationary engineers are on-site, these new workers lack the necessary Detroit licenses to operate safely.

Workers with more than two years of experience are required to hold high-pressure licenses. Although these temporary hires are working under licensed engineers, the absence of properly credentialed and trained staff creates serious safety risks. Workers on strike were trained for one year initially, and the vast majority hold high-pressure licenses. Now, almost everyone is working without a license, not just a few new hires.

The current ${licenseConcern} among these temporary workers violates local safety protocols and could endanger both the workforce and the surrounding community. Given the critical nature of this work, ${call2Action} ${thankYou} I look forward to your ${swift} action to ensure public safety.

${closing},
`;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(emailBody);
  const emailLink = `mailto:${emailAddresses.join(
    ","
  )}?subject=${encodedSubject}&body=${encodedBody}`;
  window.location.href = emailLink;



  fetch("https://tracking.fueltheunion.com/", {"method": "POST", body: JSON.stringify({"auth": "count"})})
  .then((response) => {
    // Log the content type    
    // If the response is JSON, parse it
    if (response.headers.get("content-type").includes("application/json")) {
      return "Email sent!";
    } else {
      // Otherwise, return the response as text to see what's coming back
      return "Email sent!";
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

}
document
  .getElementById("sendEmailButton")
  .addEventListener("click", generateRandomEmail);
