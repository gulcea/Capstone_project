import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  Activity,
  Cpu,
  Satellite,
  AlertTriangle,
  MapPin,
  Linkedin,
  Github,
  FileText,
  Monitor,
  Video,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";


/* ───────────────────────────────
   Basic Info
──────────────────────────────── */
const GROUP_NAME = "Capstone Project 2025";
const PROJECT_TITLE = "SafeTalk";


const team = [
  {
    name: "Cihan Çatak",
    avatar:
      "https://api.dicebear.com/8.x/initials/svg?seed=C.%20Çatak&backgroundColor=bae6fd&textColor=0c4a6e&radius=50",
    linkedin: "https://www.linkedin.com/in/cihancatak06",
    github: "https://github.com/cihancatak",
  },
  {
    name: "Çağla Su Çelik",
    avatar:
      "https://api.dicebear.com/8.x/initials/svg?seed=Ç.%20Çelik&backgroundColor=fde68a&textColor=7c2d12&radius=50",
    linkedin: "https://www.linkedin.com/in/caglasucelik/",
    github: "https://github.com/caglasucelik",
  },
  {
    name: "Gülce Arabacı",
    avatar:
      "https://api.dicebear.com/8.x/initials/svg?seed=G.%20Arabacı&backgroundColor=c7d2fe&textColor=312e81&radius=50",
    linkedin: "https://www.linkedin.com/in/g%C3%BClcearabac%C4%B1/",
    github: "https://github.com/gulcea",
  },
  {
    name: "Şamil Altunışık",
    avatar:
      "https://api.dicebear.com/8.x/initials/svg?seed=Ş.%20Altunışık&backgroundColor=fbcfe8&textColor=831843&radius=50",
    linkedin: "https://www.linkedin.com/in/shamilalt/",
    github: "https://github.com/sham52",
  },
  {
    name: "Onur Gümüş",
    avatar:
      "https://api.dicebear.com/8.x/initials/svg?seed=O.%20Gümüş&backgroundColor=bbf7d0&textColor=064e3b&radius=50",
    linkedin: "https://www.linkedin.com/in/onur-g%C3%BCm%C3%BC%C5%9F-367813243/",
    github: "https://github.com/onrgmss",
  },
];

/* ───────────────────────────────
   Component
──────────────────────────────── */
export default function SafeTalkLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<{ startX: number; startScrollLeft: number; dragging: boolean }>({ startX: 0, startScrollLeft: 0, dragging: false });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overviewItems = [
    {
      title: "Real-Time Voice Monitoring",
      icon: Activity,
      text: "SafeTalk actively listens during conversations — instantly recognizing risky or inappropriate speech patterns as they happen.",
    },
    {
      title: "Understands Every Word",
      icon: Cpu,
      text: "It converts speech into text in real time using AI, allowing the system to truly understand what’s being said — not just record sounds.",
    },
    {
      title: "Protects Personal Information",
      icon: AlertTriangle,
      text: "If someone asks for private details like your name, address, or school, SafeTalk instantly identifies it and prevents sharing.",
    },
    {
      title: "Instant Protective Actions",
      icon: MapPin,
      text: "When harmful or suspicious speech is detected, the system reacts immediately — muting audio or alerting guardians in real time.",
    },
    {
      title: "Emotion & Manipulation Detection",
      icon: Satellite,
      text: "SafeTalk reads tone and emotion to sense anger, stress, or manipulation — detecting bullying or grooming before it escalates.",
    },
    {
      title: "Parental Dashboard & Alerts",
      icon: FileText,
      text: "Parents receive instant notifications with short summaries of unsafe interactions, helping them stay aware and take action quickly.",
    },
    {
      title: "Privacy-First Architecture",
      icon: Monitor,
      text: "All analysis happens securely on the device. No voices are stored or shared — ensuring complete data privacy for every user.",
    },
    {
      title: "Adaptive AI Learning",
      icon: Cpu,
      text: "SafeTalk’s AI constantly learns from new patterns and phrases — evolving to recognize modern slang and emerging digital threats.",
    },
  ];


  const deliverablesItems = [
    {
      title: "Project Proposal",
      description:
        "Introduces the purpose, team, and concept of the project with a concise overview.",
      icon: <FileText className="h-9 w-9 text-sky-600 mb-4" />,
      pdf: "/pdfs/SafeTalk_Proposal.pdf",
    },
    {
      title: "Specifications Report",
      description:
        "Defines system requirements, constraints, and ethical considerations clearly.",
      icon: <Cpu className="h-9 w-9 text-sky-600 mb-4" />,
      pdf: "/pdfs/SafeTalk_Specifications.pdf",
    },
    {
      title: "Analysis Report",
      description:
        "Presents detailed analysis, use cases, and system interaction models.",
      icon: <Monitor className="h-9 w-9 text-sky-600 mb-4" />,
      pdf: "/pdfs/SafeTalk_Analysis.pdf",
    },
    {
      title: "High-Level Design",
      description:
        "Outlines subsystems, UML diagrams, and software architecture structure.",
      icon: <Video className="h-9 w-9 text-sky-600 mb-4" />,
      pdf: "/pdfs/SafeTalk_Design.pdf",
    },
    {
      title: "Final Presentation",
      description:
        "Showcases final product and team contributions in a recorded 25-minute session.",
      icon: <FileText className="h-9 w-9 text-sky-600 mb-4" />,
      pdf: "/pdfs/SafeTalk_Presentation.pdf",
    },
  ];

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const firstItem = container.firstElementChild as HTMLElement | null;
    const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : 300;
    const styles = window.getComputedStyle(container);
    const gap = parseFloat((styles as any).columnGap || styles.gap || "0") || 0;
    const step = itemWidth + gap;
    container.scrollTo({ left: index * step, behavior: "smooth" });
    setCurrentIndex(index);
  };

  // Enable touch drag + snap
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getStep = () => {
      const firstItem = container.firstElementChild as HTMLElement | null;
      const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : 300;
      const styles = window.getComputedStyle(container);
      const gap = parseFloat((styles as any).columnGap || styles.gap || "0") || 0;
      return itemWidth + gap;
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      dragStateRef.current = { startX: t.clientX, startScrollLeft: container.scrollLeft, dragging: true };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragStateRef.current.dragging) return;
      const t = e.touches[0];
      const dx = t.clientX - dragStateRef.current.startX;
      container.scrollLeft = dragStateRef.current.startScrollLeft - dx;
    };

    const onTouchEnd = () => {
      if (!dragStateRef.current.dragging) return;
      dragStateRef.current.dragging = false;
      const step = getStep();
      const snapped = Math.round(container.scrollLeft / step);
      const maxIndex = Math.max(0, (container.children.length || 1) - 1);
      const clamped = Math.max(0, Math.min(snapped, maxIndex));
      scrollToIndex(clamped);
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    container.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", onTouchStart as any);
      container.removeEventListener("touchmove", onTouchMove as any);
      container.removeEventListener("touchend", onTouchEnd as any);
      container.removeEventListener("touchcancel", onTouchEnd as any);
    };
  }, []);

  const next = () => {
    if (currentIndex < overviewItems.length - 1) scrollToIndex(currentIndex + 1);
  };
  const prev = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  return (
    <div className="font-[Inter] text-slate-800 selection:bg-sky-200 selection:text-sky-900">
      {/* ───── Navbar ───── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-40 backdrop-blur-lg border-b ${scrolled
          ? "bg-white/80 shadow-lg border-sky-200"
          : "bg-white/60 border-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-3">
          <a href="#top" className="flex items-center gap-2 font-semibold text-sky-600 tracking-tight">
            <Activity className="w-5 h-5 text-sky-500" />
            {GROUP_NAME}
          </a>
          <nav className="hidden md:flex gap-8 text-[15px] text-slate-600 font-medium">
            <a href="#overview" className="hover:text-sky-600 transition">Overview</a>
            <a href="#deliverables" className="hover:text-sky-600 transition">Deliverables</a>
            <a href="#team" className="hover:text-sky-600 transition">Team</a>
            <a href="#contact" className="hover:text-sky-600 transition">Contact</a>
          </nav>
        </div>
      </motion.header>

      {/* ───── Hero ───── */}
      <section id="top" className="text-center py-32 overflow-hidden relative">
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-tr from-sky-100 via-pink-100 to-white -z-10"
        />

        <motion.h1
          initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent tracking-tight mb-4 drop-shadow-[0_4px_20px_rgba(56,189,248,0.45)]"
        >
          SAFETALK
        </motion.h1>

        <p className="text-xl md:text-2xl font-medium text-sky-700 mb-4">
          AI Voice Protection System
        </p>

        <BlurText
          text="Detects, analyzes, and filters harmful or sensitive speech in real time — using AI to protect children and promote safer digital communication."
          delay={120}
          animateBy="words"
          direction="bottom"
          className="max-w-3xl mx-auto text-[18px] md:text-lg text-slate-600 font-light leading-relaxed px-4 "
          onAnimationComplete={() => console.log('Hero subtitle animation completed!')}
        />

      </section>

      {/* ───── Overview ───── */}
      <section id="overview" className="py-16 px-6 bg-gradient-to-b from-white to-sky-50">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-2 tracking-tight">
            How SafeTalk Works
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-medium leading-relaxed">
            Every module plays a unique role in real-time speech detection and protection.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto flex items-center justify-center overflow-visible">

          <button onClick={prev} className="absolute left-[-24px] md:left-[-40px] top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-sky-100 rounded-full p-2 md:p-3 shadow-md hover:bg-sky-50 transition">
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />
          </button>

          <div
            ref={containerRef}
            className="flex gap-8 overflow-x-hidden overflow-y-visible px-8 scroll-smooth pb-6 select-none touch-pan-y"
          >

            {overviewItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                  className="relative z-0 flex-shrink-0 w-[300px] bg-white border border-sky-100 rounded-3xl p-8 shadow-md hover:shadow-[0_10px_25px_rgba(56,189,248,0.25)] transition-all text-center"
                >
                  <Icon className="w-10 h-10 text-sky-500 mb-3 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-snug font-medium">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <button onClick={next} className="absolute right-[-24px] md:right-[-40px] top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-sky-100 rounded-full p-2 md:p-3 shadow-md hover:bg-sky-50 transition">
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />
          </button>
        </div>
      </section>

      {/* ───── Deliverables ───── */}
      <section
        id="deliverables"
        className="pt-12 pb-16 bg-gradient-to-b from-sky-50 via-white to-pink-50"
      >
        <div className="hidden md:block text-center mb-4 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-1 tracking-tight">
            Project Deliverables
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-medium leading-snug">
            Key milestones and reports documenting our development journey.
          </p>
        </div>

        <div className="hidden md:block">
          <ScrollStack
            className="max-w-3xl mx-auto mt-8"
            itemDistance={100}
            itemScale={0.05}
            itemStackDistance={30}
            stackPosition="25%"
            scaleEndPosition="10%"
            baseScale={0.85}
            rotationAmount={1}
            blurAmount={2}
            useWindowScroll
          >
            {deliverablesItems.map((d, i) => (
              <ScrollStackItem
                key={i}
                itemClassName="bg-white border border-sky-100 rounded-[32px] p-9 text-center shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center">
                  {d.icon}
                  <h3 className="text-xl font-semibold text-sky-700 mt-2 tracking-tight">
                    {d.title}
                  </h3>
                  <p className="text-slate-600 mt-3 text-sm max-w-sm mx-auto leading-snug font-medium">
                    {d.description}
                  </p>
                </div>
                <Button
                  asChild
                  className="mt-5 bg-sky-600 hover:bg-sky-700 text-white shadow-md hover:shadow-lg transition text-sm px-5 py-2 rounded-full"
                >
                  <a
                    href={d.pdf || "#"}
                    target={d.pdf ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    View PDF
                  </a>
                </Button>


              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
        {/* 📱 Mobile (grid cards) */}
        <div className="block md:hidden mt-10 px-6">
          <div className="grid grid-cols-2 gap-6 items-stretch">
            {deliverablesItems.map((d, i) => (
              <div
                key={i}
                className={
                  "group bg-white border border-sky-100 rounded-3xl p-6 shadow-sm md:hover:shadow-md transition flex flex-col items-center text-center h-full" +
                  (deliverablesItems.length % 2 !== 0 && i === deliverablesItems.length - 1
                    ? " col-span-2 justify-self-center"
                    : "")
                }
              >
                <div className="mb-4">{d.icon}</div>
                <h3 className="text-sm font-semibold text-slate-700 leading-snug">
                  {d.title}
                </h3>
                <a href={d.pdf} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4">
                  <Button className="bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow-md transition text-xs px-4 py-2 rounded-full">
                    View PDF
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Team ───── */}
      <section id="team" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-extrabold text-sky-700 mb-16">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-sky-100 rounded-3xl shadow-sm hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] p-6 transition-all"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="w-24 h-24 rounded-full ring-2 ring-sky-300 mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-sky-700 text-lg">{m.name}</h3>
              <div className="flex justify-center gap-4 mt-3">
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 text-sky-500 hover:text-sky-600 transition" />
                  </a>
                )}
                {m.github && (
                  <a href={m.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 text-sky-500 hover:text-sky-600 transition" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Contact ───── */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center py-20 bg-gradient-to-r from-sky-100 to-pink-100"
      >
        <h2 className="text-3xl font-bold text-sky-700 mb-3">Contact Us</h2>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          Interested in our project or research? Let’s connect and make online spaces safer together.
        </p>
        <Button className="bg-sky-600 hover:bg-sky-700 text-white shadow-md hover:shadow-lg transition">
          <a href="mailto:ABC.com">Send Email</a>
        </Button>
      </motion.section>

      {/* ───── Footer ───── */}
      <footer className="border-t border-sky-200 py-6 text-center text-xs text-slate-500 bg-white">
        {new Date().getFullYear()} © SafeTalk Team — AI for Safer Online Communication
      </footer>
    </div>
  );
}