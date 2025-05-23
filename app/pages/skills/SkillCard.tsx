"use client";

import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, title } = skill;
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="100"
      className="skill__card"
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--bg-skill-hover)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--bg-skill)")
      }
    >
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="mx-auto"
      />
      <h1 className=" skill__text">{title}</h1>
    </div>
  );
};

export default SkillCard;
