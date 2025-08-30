import React, { useEffect, useState, useMemo } from "react";
import "../styles/Story.css";

const Story = () => {
  const [storyData, setStoryData] = useState([]);

  useEffect(() => {
    const data = [
      {
        title: "The Problem Begins",
        content: `Years ago, in the town of Debremarkos, health professionals at the Comprehensive Specialized Hospital started noticing a heartbreaking pattern. Newborn babies were being abandoned in unsafe and horrific places—streets, garbage areas, and empty buildings.

These children had no one to care for them. Police would search for families, but when no one came forward, the babies were brought to the hospital. Nurses and doctors tried to help, but they already had full workloads. It was not a safe or permanent solution.`,
      },
      {
        title: "A Heartfelt Response",
        content: `Seeing the suffering of these abandoned children deeply moved the hospital staff. Along with staff from Debremarkos University, they came together and said:

“If no one is there for these children, we will be.”

On October 30, 2018, they officially founded a community-based organization:
Enat Debremarkos Children Village – “Enat” meaning mother in Amharic, representing love, care, and protection.`,
      },
      {
        title: "A Small Beginning",
        content: `The organization began with just 3 abandoned children. Staff contributed money from their own salaries to rent a house, hire nannies, and provide food and care. It was a small step — but it made a big difference.`,
      },
      {
        title: " Growing Support",
        content: `As the number of children grew, so did the support. The Debremarkos City Administration donated 9,400 square meters of land and two housing blocks. This helped the organization move from a rented house to a permanent home — the beginning of the Children’s Village.

In March 2021, construction began on a new two-story building. The dream of building a full children’s home was starting to come true.`,
      },
      {
        title: "Where We Are Today",
        content: `Enat Debremarkos Children Village has achieved the following:

- 50 children (ages 1 month to 8 years) currently under full-time care  
- 101 children placed in legal domestic adoption 
- 5 children have sadly passed away
- 215 children received in total since the organization was founded

Children stay until they’re strong and independent. Even after leaving, they continue to see the village as their family and often return to support others.
Immediate Challenge
One of the greatest challenges we face is that abandoned children often arrive with urgent health problems due to lack of protection, care, and nutrition. Many quickly develop respiratory infections, fever, and various skin conditions. Unfortunately, as a result of these health challenges, we have lost 5 children.  

Since our founding, we have welcomed 215 children. While we could not raise all of them within the village, 101 have been placed into legal domestic adoption, and sadly 5 passed away shortly after arrival due to severe infections.  
`,
      },
    ];

    setStoryData(data);
  }, []);

  const renderedStory = useMemo(() => {
    return storyData.map((section, index) => (
      <div className="step-flow" key={index}>
        <div className="step-header">
          <div className="step-number">{index + 1}</div>
          <h2 className="step-title">{section.title}</h2>
        </div>
        <div className="step-content">
          {section.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {index !== storyData.length - 1 && <div className="step-arrow">▼</div>}
      </div>
    ));
  }, [storyData]);

  return (
    <div className="story-container">
      <h1 className="main-heading">
        How Enat Debremarkos Children Village Was Born – Our Journey
      </h1>
      <div className="step-flow-container">{renderedStory}</div>
    </div>
  );
};

export default Story;
