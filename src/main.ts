import { initReveal } from "./scripts/core/reveal.ts";
import { renderCases } from "./sections/Cases/Cases.ts";
import { renderCta } from "./sections/Cta/Cta.ts";
import { renderFaq } from "./sections/Faq/Faq.ts";
import { renderFooter } from "./sections/Footer/Footer.ts";
import { renderHero } from "./sections/Hero/Hero.ts";
import { renderProcess } from "./sections/Process/Process.ts";
import { renderServices } from "./sections/Services/Services.ts";
import "./styles/styles.css";

renderHero();
renderServices();
renderProcess();
renderCases();
renderFaq();
renderCta();
renderFooter();
initReveal();
