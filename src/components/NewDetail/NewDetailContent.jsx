import React from "react";

const NewDetailArray = [
  {
    id: 1,
    title: "Introduction",
    content:
      "Automotive technology has undergone a remarkable transformation since the early days of the automobile. From the classic cars of the early 20th century to today’s cutting-edge electric vehicles, the journey of automotive innovation reflects broader technological advancements and changing consumer expectations. This article explores the evolution of automotive technology, highlighting key developments that have shaped the industry.",
  },
  {
    id: 2,
    title: "The Birth of the Automobile",
    content:
      "The automobile's origins trace back to the late 19th century when pioneers like Karl Benz and Henry Ford introduced their groundbreaking designs. The Benz Patent-Motorwagen, often regarded as the first true automobile, was powered by an internal combustion engine and marked the beginning of a new era in transportation. Henry Ford’s introduction of assembly line production revolutionized manufacturing, making cars more affordable and accessible to the masses.",
  },
  {
    id: 3,
    title: "The Golden Age of Classic Cars",
    content:
      "The automobile's origins trace back to the late 19th century when pioneers like Karl Benz and Henry Ford introduced their groundbreaking designs. The Benz Patent-Motorwagen, often regarded as the first true automobile, was powered by an internal combustion engine and marked the beginning of a new era in transportation. Henry Ford’s introduction of assembly line production revolutionized manufacturing, making cars more affordable and accessible to the masses.",
  },
  {
    id: 4,
    tilte: "The Rise of Technology and Safety",
    content:
      "The automobile's origins trace back to the late 19th century when pioneers like Karl Benz and Henry Ford introduced their groundbreaking designs. The Benz Patent-Motorwagen, often regarded as the first true automobile, was powered by an internal combustion engine and marked the beginning of a new era in transportation. Henry Ford’s introduction of assembly line production revolutionized manufacturing, making cars more affordable and accessible to the masses.The automobile's origins trace back to the late 19th century when pioneers like Karl Benz and Henry Ford introduced their groundbreaking designs. The Benz Patent-Motorwagen, often regarded as the first true automobile, was powered by an internal combustion engine and marked the beginning of a new era in transportation. Henry Ford’s introduction of assembly line production revolutionized manufacturing, making cars more affordable and accessible to the masses.The automobile's origins trace back to the late 19th century when pioneers like Karl Benz and Henry Ford introduced their groundbreaking designs. The Benz Patent-Motorwagen, often regarded as the first true automobile, was powered by an internal combustion engine and marked the beginning of a new era in transportation. Henry Ford’s introduction of assembly line production revolutionized manufacturing, making cars more affordable and accessible to the masses.The automobile's origins trace back to the late 19th century when pioneers like Karl Benz and Henry Ford introduced their groundbreaking designs. The Benz Patent-Motorwagen, often regarded as the first true automobile, was powered by an internal combustion engine and marked the beginning of a new era in transportation. Henry Ford’s introduction of assembly line production revolutionized manufacturing, making cars more affordable and accessible to the masses.",
  },
];

function NewDetailContent() {
  return (
    <div className="container mx-auto mt-10 px-6">
      {NewDetailArray.map((newdetail) => (
        <div key={newdetail.id} className="mt-10">
          <p className="text-[32px] font-bold mt-5">{newdetail.title}</p>
          <p className="text-[20px] mt-5">{newdetail.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NewDetailContent;
