/** FAQ copy — verbatim from Part 5 of the Website & Legal Content Pack. */
import { PLACEHOLDERS } from "@/lib/constants";

/** FAQ copy — verbatim from Part 5 of the Website & Legal Content Pack. */
export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "What is Mediceen?",
    answer:
      "A mobile app for MECEE-BL-style MCQ practice, spaced review, flashcards, weekly timed mocks, and progress tracking.",
  },
  {
    question: "Who is it for?",
    answer: `Medical entrance aspirants in Nepal (phase 1). You should be at least ${PLACEHOLDERS.minimumAge} years old to create an account.`,
  },
  {
    question: "What is CEE, and how does it relate to MECEE-BL?",
    answer:
      "CEE is the name many students in Nepal still use for the bachelor-level medical entrance exam. That exam is now MECEE-BL. Mediceen is built for that same preparation.",
  },
  {
    question: "Is the Mediceen app a CEE preparation app?",
    answer:
      "Yes. The Mediceen app is a CEE preparation app and a MECEE-BL preparation app: MCQ practice, spaced review, flashcards, and weekly mocks on your phone. It is not a classroom course.",
  },
  {
    question: "Does Mediceen include a MECEE-BL mock test?",
    answer:
      "Yes. Each week there is a MECEE-BL mock test: a timed cohort paper, one scored attempt, and a leaderboard. Students who still call the exam CEE can use it as a CEE mock test. It is a weekly MECEE mock exam inside the app, not an official Medical Education Commission paper.",
  },
  {
    question: "Which subjects are in the question bank?",
    answer:
      "Phase 1 covers seven subjects. You can practice Anatomy MCQs for MECEE-BL, Physiology questions for CEE, Pharmacology MCQ practice for Nepal, Pathology MECEE-BL questions, Biochemistry MCQs for Nepal, Microbiology practice questions for MECEE-BL, and Immunology MCQs for CEE. Filter by subject in the app.",
  },
  {
    question: "Is Mediceen medical entrance coaching or CEE classes?",
    answer:
      "No. Mediceen is not medical entrance coaching and it does not run CEE classes in Nepal. It is a mobile app for self-paced MECEE-BL preparation, for students in Kathmandu and across Nepal.",
  },
  {
    question: "Does Mediceen help with the MBBS or BDS entrance exam in Nepal?",
    answer:
      "MECEE-BL is the bachelor-level medical entrance exam in Nepal for seats such as MBBS and BDS. The Mediceen app helps you prepare for that exam. It is not the official Medical Education Commission or NMC paper.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Register with your email (verification code), set a password and display name, then verify your mobile number with a one-time SMS code. You can also use Continue with Google on supported devices, or Sign in with Apple on Apple devices, then complete phone verification before using the app. Day-to-day login uses email/password, Google, or Apple (not SMS each time).",
  },
  {
    question: "Why do you need my phone number?",
    answer:
      "We require a verified mobile number once at signup to reduce fake accounts and protect the community. We do not use your number for marketing SMS. See our Privacy Policy.",
  },
  {
    question: "Is Mediceen free?",
    answer:
      "The app is free to use at launch. If paid features are added later, we will update our Terms and store listings.",
  },
  {
    question: "What is the Weekly test?",
    answer:
      "It is Mediceen's MECEE-style mock: a scheduled, timed paper shared with all students that week. You get one scored attempt, a countdown timer, results after submission, and a cohort leaderboard.",
  },
  {
    question: "Can I practice past weekly mocks again?",
    answer:
      "Yes, you can review answers and run an unscored \u201cpractice again\u201d session after your official attempt.",
  },
  {
    question: "How do streaks and review work?",
    answer:
      "Practice builds recall. Review (SM-2) resurfaces questions when you are likely to forget them. Flashcard ratings also feed your review schedule.",
  },
  {
    question: "Will others see my name?",
    answer:
      "Your display name may appear on leaderboards. Choose a name you are comfortable showing publicly.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Use Forgot password on the login screen. We email a reset link to your registered address.",
  },
  {
    question: "How do I delete my account?",
    answer: `See Delete account & data, email ${PLACEHOLDERS.privacyEmail} from your registered email, or use the optional form on that page. Google / Apple (including Hide My Email) requests go to ${PLACEHOLDERS.supportEmail} for ownership verification.`,
  },
  {
    question: "Does Mediceen give medical advice?",
    answer:
      "No. All content is for exam preparation only. Consult qualified professionals for health decisions.",
  },
  {
    question: "Is Mediceen official MECEE / NMC?",
    answer:
      "No. We are an independent prep platform unless Redis Digital publishes a formal partnership announcement.",
  },
  {
    question: "How do I get help?",
    answer: "Email support@mediceen.app or see the Support page for what to include in your message.",
  },
];
