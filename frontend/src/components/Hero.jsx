import { useEffect, useState } from "react";

import {
  ArrowRight,
  GraduationCap,
  Rocket,
  Code2,
  Brain,
  BarChart3,
  Terminal,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import homeData from "../data/homeData.json";

import "../styles/home.css";


/* =========================================================
   DATA
========================================================= */

const {
  hero,
  stats,
  floatingCards,
  industryMessage,
  programs,
} = homeData;


/* =========================================================
   COUNTER
========================================================= */

function AnimatedCounter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const duration = 1500;
    const stepTime = 30;

    const increment =
      end / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return `${count}+`;
}


/* =========================================================
   ROBOT
========================================================= */

function HeroRobot() {
  return (
    <div className="ks-mini-robot">

      <div className="ks-mini-robot-aura" />

      <div className="ks-mini-antenna">
        <span />
      </div>

      <div className="ks-mini-head">

        <div className="ks-mini-face">

          <div className="ks-mini-eye">
            <span />
          </div>

          <div className="ks-mini-eye">
            <span />
          </div>

          <div className="ks-mini-mouth">
            <span />
          </div>

        </div>

      </div>

      <div className="ks-mini-neck" />

      <div className="ks-mini-body">

        <div className="ks-mini-core">
          <Sparkles size={11} />
        </div>

        <div className="ks-mini-body-lines">
          <span />
          <span />
          <span />
        </div>

      </div>

      <div className="ks-mini-arm ks-mini-arm-left">
        <div className="ks-mini-hand" />
      </div>

      <div className="ks-mini-arm ks-mini-arm-right">
        <div className="ks-mini-hand" />
      </div>

      <div className="ks-mini-base" />

    </div>
  );
}


/* =========================================================
   CODE EDITOR
========================================================= */

function AdvancedCodeEditor() {

  const [programIndex, setProgramIndex] =
    useState(0);

  const [typedCode, setTypedCode] =
    useState("");

  const [phase, setPhase] =
    useState("typing");

  const [outputText, setOutputText] =
    useState("");

  const [showOutput, setShowOutput] =
    useState(false);

  const program =
    programs[programIndex];


  useEffect(() => {

    let character = 0;

    let typingTimer;
    let runTimer;
    let outputTimer;
    let outputTypingTimer;
    let nextProgramTimer;


    /* TYPE CODE */

    typingTimer = setInterval(() => {

      if (character === 0) {
        setTypedCode("");
        setOutputText("");
        setShowOutput(false);
        setPhase("typing");
      }

      character++;

      setTypedCode(
        program.code.slice(
          0,
          character
        )
      );


      if (
        character >=
        program.code.length
      ) {

        clearInterval(
          typingTimer
        );


        /* RUN */

        runTimer = setTimeout(() => {

          setPhase("running");


          /* OUTPUT */

          outputTimer = setTimeout(() => {

            setPhase("output");

            setShowOutput(true);

            let outputCharacter = 0;


            outputTypingTimer =
              setInterval(() => {

                outputCharacter++;

                setOutputText(
                  program.output.slice(
                    0,
                    outputCharacter
                  )
                );


                if (
                  outputCharacter >=
                  program.output.length
                ) {

                  clearInterval(
                    outputTypingTimer
                  );


                  /* NEXT JSON DATA */

                  nextProgramTimer =
                    setTimeout(() => {

                      setPhase(
                        "transition"
                      );


                      setTimeout(() => {

                        setProgramIndex(
                          (prev) =>
                            (prev + 1) %
                            programs.length
                        );

                      }, 400);

                    }, 2200);

                }

              }, 25);

          }, 700);

        }, 600);

      }

    }, 18);


    return () => {

      clearInterval(
        typingTimer
      );

      clearInterval(
        outputTypingTimer
      );

      clearTimeout(
        runTimer
      );

      clearTimeout(
        outputTimer
      );

      clearTimeout(
        nextProgramTimer
      );

    };

  }, [programIndex, program]);


  return (
    <div
      className={`ks-code-window ${
        phase === "transition"
          ? "ks-program-transition"
          : ""
      }`}
    >

      {/* ROBOT BACKGROUND */}

      <div className="ks-code-robot-background">

        <HeroRobot />

      </div>


      {/* HEADER */}

      <div className="ks-code-header">

        <div className="ks-code-dots">

          <span className="ks-dot ks-red" />
          <span className="ks-dot ks-yellow" />
          <span className="ks-dot ks-green" />

        </div>


        <div className="ks-editor-title">

          <Terminal size={12} />

          <span>
            {program.name}
          </span>

        </div>


        <span className="ks-code-url">
          ksquaresofttech.dev
        </span>

      </div>


      {/* PROGRAM */}

      <div className="ks-program-info">

        <div className="ks-program-language">

          <Code2 size={13} />

          <span>
            {program.language}
          </span>

        </div>


        <div className="ks-program-status">

          {phase === "typing" && (
            <>
              <span className="status-dot typing" />
              Writing...
            </>
          )}

          {phase === "running" && (
            <>
              <span className="status-dot running" />
              Running...
            </>
          )}

          {phase === "output" && (
            <>
              <span className="status-dot success" />
              Completed
            </>
          )}

        </div>

      </div>


      {/* MESSAGE */}

      <div className="ks-industry-message">

        <span className="industry-dot" />

        <span>
          {industryMessage}
        </span>

      </div>


      {/* CODE */}

      <div className="ks-code-content">

        <div className="ks-line-numbers">

          {Array.from(
            {
              length: Math.max(
                8,
                typedCode.split("\n").length
              ),
            },
            (_, index) => (
              <span key={index}>
                {index + 1}
              </span>
            )
          )}

        </div>


        <div className="ks-code-area">

          <pre className="ks-code-text">

            {typedCode}

            {phase === "typing" && (
              <span className="typing-cursor">
                ▌
              </span>
            )}

          </pre>

        </div>

      </div>


      {/* TERMINAL */}

      <div
        className={`ks-terminal ${
          showOutput
            ? "terminal-visible"
            : ""
        }`}
      >

        <div className="ks-terminal-header">

          <div className="ks-terminal-title">

            <Terminal size={12} />

            <span>
              Terminal
            </span>

          </div>

          <span className="terminal-label">
            OUTPUT
          </span>

        </div>


        <div className="ks-terminal-body">

          {phase === "running" && (

            <div className="terminal-running">

              <span className="terminal-spinner" />

              <span>
                Executing real-world workflow...
              </span>

            </div>

          )}


          {showOutput &&
            phase === "output" && (

              <div className="terminal-success">

                <CheckCircle2 size={14} />

                <span>

                  {outputText}

                  <span className="output-cursor">
                    ▌
                  </span>

                </span>

              </div>

            )}

        </div>

      </div>


      {/* FOOTER */}

      <div className="ks-code-footer">

        <div className="ks-code-status">

          <span />

          <small>

            {phase === "typing"
              ? "Writing Code"
              : phase === "running"
              ? "Running Program"
              : "Ready to Build"}

          </small>

        </div>


        <div className="ks-editor-language">

          {program.language}

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   HERO
========================================================= */

function Hero() {

  const [wordIndex, setWordIndex] =
    useState(0);

  const [isChanging, setIsChanging] =
    useState(false);


  /* AUTO CHANGE TEXT */

  useEffect(() => {

    const timer =
      setInterval(() => {

        setIsChanging(true);


        setTimeout(() => {

          setWordIndex(
            (prev) =>
              (prev + 1) %
              hero.words.length
          );

          setIsChanging(false);

        }, 400);

      }, 2800);


    return () =>
      clearInterval(timer);

  }, []);


  return (
    <section className="ks-hero">


      {/* =================================================
          SVG BACKGROUND
      ================================================= */}

      <div className="ks-svg-background">

        <svg
          className="ks-bg-svg"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >

          <defs>

            <pattern
              id="ksDotPattern"
              width="34"
              height="34"
              patternUnits="userSpaceOnUse"
            >

              <circle
                cx="2"
                cy="2"
                r="1.4"
                fill="#2563EB"
                opacity="0.12"
              />

            </pattern>


            <pattern
              id="ksGridPattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >

              <path
                d="M80 0H0V80"
                stroke="#2563EB"
                strokeWidth="0.7"
                opacity="0.06"
              />

            </pattern>


            <linearGradient
              id="ksLineGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >

              <stop
                offset="0%"
                stopColor="#2563EB"
                stopOpacity="0"
              />

              <stop
                offset="50%"
                stopColor="#2563EB"
                stopOpacity="0.22"
              />

              <stop
                offset="100%"
                stopColor="#06B6D4"
                stopOpacity="0"
              />

            </linearGradient>


            <radialGradient id="ksBlueGlow">

              <stop
                offset="0%"
                stopColor="#3B82F6"
                stopOpacity="0.13"
              />

              <stop
                offset="100%"
                stopColor="#3B82F6"
                stopOpacity="0"
              />

            </radialGradient>

          </defs>


          <rect
            width="1440"
            height="900"
            fill="url(#ksGridPattern)"
          />


          <rect
            x="720"
            width="720"
            height="900"
            fill="url(#ksDotPattern)"
          />


          <circle
            cx="1250"
            cy="170"
            r="400"
            fill="url(#ksBlueGlow)"
          />


          <circle
            cx="1110"
            cy="450"
            r="310"
            stroke="#2563EB"
            strokeWidth="1"
            strokeDasharray="8 14"
            opacity="0.10"
          />


          <circle
            cx="1110"
            cy="450"
            r="250"
            stroke="#06B6D4"
            strokeWidth="1"
            opacity="0.09"
          />


          <path
            d="M760 190 C850 130 910 240 990 190 C1080 130 1150 220 1240 165 C1310 125 1360 150 1440 110"
            stroke="url(#ksLineGradient)"
            strokeWidth="1.3"
          />


          <path
            d="M700 690 C800 620 900 750 1000 680 C1090 620 1180 720 1270 650 C1340 600 1390 630 1440 590"
            stroke="url(#ksLineGradient)"
            strokeWidth="1.2"
          />

        </svg>

      </div>


      <div className="ks-hero-glow ks-glow-left" />

      <div className="ks-hero-glow ks-glow-right" />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="container">

        <div className="row align-items-center">


          {/* LEFT */}

          <div className="col-12 col-lg-6">

            <div className="ks-hero-content">


              {/* BADGE */}

              <div className="ks-hero-badge">

                <span className="ks-badge-dot" />

                <span>
                  {hero.badge}
                </span>

              </div>


              {/* TITLE */}

              <h1 className="ks-hero-title">

                <span className="ks-title-fixed">
                  {hero.title}
                </span>

                <span
                  className={`ks-gradient-word ${
                    isChanging
                      ? "ks-word-changing"
                      : ""
                  }`}
                >

                  {hero.words[wordIndex]}

                </span>

              </h1>


              {/* DESCRIPTION */}

              <p className="ks-hero-description">

                {hero.description}

              </p>


              {/* BUTTONS */}

              <div className="ks-hero-buttons">

                <a
                  href="#courses"
                  className="ks-hero-btn ks-btn-primary"
                >

                  <span>
                    {hero.buttons.primary}
                  </span>

                  <ArrowRight size={17} />

                </a>


                <a
                  href="#services"
                  className="ks-hero-btn ks-btn-secondary"
                >

                  {hero.buttons.secondary}

                </a>

              </div>


              {/* STATS */}

              <div className="ks-hero-stats">

                {stats.map((stat) => (

                  <div
                    className="ks-hero-stat"
                    key={stat.label}
                  >

                    <h3>

                      <AnimatedCounter
                        end={stat.value}
                      />

                    </h3>

                    <p>
                      {stat.label}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* RIGHT */}

          <div className="col-12 col-lg-6">

            <div className="ks-hero-visual">


              <AdvancedCodeEditor />


              {/* LEARNING */}

              <div className="ks-floating-card ks-card-left">

                <div className="ks-floating-icon">

                  <GraduationCap size={20} />

                </div>

                <div>

                  <small>
                    {floatingCards.learning.title}
                  </small>

                  <strong>
                    {floatingCards.learning.text}
                  </strong>

                </div>

              </div>


              {/* BUILDING */}

              <div className="ks-floating-card ks-card-right">

                <div className="ks-floating-icon">

                  <Rocket size={20} />

                </div>

                <div>

                  <small>
                    {floatingCards.building.title}
                  </small>

                  <strong>
                    {floatingCards.building.text}
                  </strong>

                </div>

              </div>


              <div className="ks-floating-small ks-floating-brain">

                <Brain size={21} />

              </div>


              <div className="ks-floating-small ks-floating-data">

                <BarChart3 size={21} />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


export default Hero;