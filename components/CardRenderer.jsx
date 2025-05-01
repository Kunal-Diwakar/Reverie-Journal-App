"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, copy, index }) => {
  return (
    <div
      className="card sticky top-0 lg:top-[25%] pb-8"
      id={`card-${index + 1}`}
    >
      <div className="card-inner bg-green-800 text-white will-change-transform w-full h-full p-12 rounded-2xl flex flex-col md:flex-row gap-12">
        <div className="card-content flex-[2]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-10">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-medium">{copy}</p>
        </div>

        <div className="card-gif flex-[2] aspect-video rounded-2xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            src={`/card-${index + 1}.mp4`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const CardRenderer = () => {
  const cards = [
    {
      title: "Rich Text Editor",
      copy: "Create personalized journal entries with formatting options to customize text styles. Embrace creativity with fonts, colors, and layouts that let you express your thoughts exactly the way you envision.",
    },
    {
      title: "Mood Analytics",
      copy: "Analyze your mood patterns over time based on your entries. Gain insights into emotional trends, helping you understand yourself better and identify triggers or behaviors to enhance mental well-being.",
    },
    {
      title: "Secure & Private",
      copy: "Keep your thoughts safe with robust encryption and privacy settings. Reverie ensures your entries remain confidential, offering peace of mind for your personal reflections.",
    },
    {
      title: "Daily Inspiration",
      copy: "Receive motivational prompts and uplifting quotes daily. Spark creativity and find encouragement to stay consistent in your journaling journey with thought-provoking ideas tailored to you.",
    },
  ];

  const container = useRef();

  useGSAP(
    () => {
      gsap.utils.toArray(".card").forEach((card) => {
        gsap.to(card, {
          scale: 0.8,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "bottom 15%",
            scrub: true,
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <div className="cards flex flex-col items-center gap-8" ref={container}>
      {cards.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </div>
  );
};

export default CardRenderer;
