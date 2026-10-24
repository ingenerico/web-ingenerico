import { renderCases } from "./components/Cases/Cases.ts";
import { renderCta } from "./components/Cta/Cta.ts";
import { renderFaq } from "./components/Faq/Faq.ts";
import { renderFooter } from "./components/Footer/Footer.ts";
import { renderHero } from "./components/Hero/Hero.ts";
import { renderProcess } from "./components/Process/Process.ts";
import { renderServices } from "./components/Services/Services.ts";
import { initReveal } from "./core/reveal.ts";
import "./styles/styles.css";

renderHero();
renderServices();
renderProcess();
renderCases();
renderFaq();
renderCta();
renderFooter();
initReveal();
