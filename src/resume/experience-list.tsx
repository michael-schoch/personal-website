import styled from "styled-components";
import { ExperienceTile } from "./experience-tile";

export const ExperienceList = () => {
  return (
    <Container>
      <ExperienceTile
        company="Pluralsight"
        dateRange="February 2022 - May 2023"
        jobTitle="Software Engineer - Tech Lead"
        content="My time at Pluralsight was cut short due to wide scale layoffs, but I am proud of the impact I was able to make while I was there. I developed our internal application that supported curriculum planning to support native data entry over importing from a spreadsheet. This massively increased ease of execution for our clients and ensured better data integrity throughout the content production pipeline. I also developed a component library for easier replication of standardized components in our application, championed drag and drop functionality for our users, and implemented bulk tagging to increase efficiency in planning. Beyond that, I was able to level up my skills in our dedicated learning time, becoming a more well rounded developer and expanding my knowledge of PostgreSQL, Typescript, Clean Architecture, and others. I also took time to help others grow their skillsets, both within my team and through a program called YearUp, which helps bring tech skills to underserved communities."
      />
      <ExperienceTile
        company="Aviture, Inc."
        dateRange="April 2015 – August 2020, January 2021 - February 2022"
        jobTitle="Software Engineer - UX/UI Designer"
        content="Throughout my time at Aviture I wore a lot of hats. I have been a UX/UI designer, a software developer, a hardware expert, and a copywriter to name a few. I have performed all of these different roles because of one of my most valuable traits, I step up where my team needs me. I have worked on Government projects with strict requirements where mission critical information needs to be realized quickly. I helped startups get over their hump by being a hardware expert who goes to the manufacturer to teach them how to build the product, in addition to addressing their design needs. Corporate clients who have no semblance of design systems have taken my advice and set digital standards across the entirety of their business. I’ve helped grow my team internally while juggling multiple projects. The skills I have gained while working here could fill this page, but most important of them all, I learned the value of flexibility. "
      />
      <ExperienceTile
        company="Stealthbits, Inc"
        dateRange="August 2020 - January 2021"
        jobTitle="UX/UI Lead - Software Developer"
        content="I went to Stealthbits looking for more leadership opportunities and a chance to grow a team from the ground up. I had a productive start down that path as I developed their Privileged Access Management System’s front-end, while also laying out plans and designs for the all-in-one security solution. Unfortunately, this company was going through some inner turmoil and when the company was sold in 2021, I did not see our futures aligning."
      />
      <ExperienceTile
        company="Gallup, Inc."
        dateRange="December 2013 – April 2015"
        jobTitle="UX/UI Designer"
        content="I started out at Gallup as a member of the flagship websites redesign team. Six months in, everyone on the UX team left for greener pastures, leaving me as the most senior member of this massive company’s UX responsibilities. I took it in stride and notched two major accomplishments: completing the Gallup.com redesign, a site which garners over 1.5 million views/month and creating GSS, a one stop portal for all of Gallup’s employee engagement and StrengthsFinder products. With the creation of GSS, I spearheaded an effort to define better branding and best practices across the company. In addition to this, I rebuilt the User Experience team from the ground up."
      />
      <ExperienceTile
        company="GeneXus USA"
        dateRange="February 2013 – May 2013"
        jobTitle="UX/UI Designer - Developer"
        content="In my time at GeneXus, I sharpened my budding skillset as I often switched projects at the blink of an eye, attacking needs with ferocity. I designed collateral for trade shows, created logos for new applications the company created, in addition to designing them. I also got my first taste of development here when I built a custom wordpress site. This taste gave me a passion I continue to cultivate learning new languages whenever I can."
      />
      <ExperienceTile
        company="Loyola Limited"
        dateRange="May 2012 – December 2012"
        jobTitle="Graphic Designer - Webmaster"
        content="Loyola Limited was an entirely undergraduate run parent company for a set of four distinct business. We managed a luxury guest house, a property management company, a pizza restaurant, and a bike rental and repair shop. This was one of my all time favorite jobs because as a student in college, I was able to enjoy real responsibility creating and managing websites for these 4 different companies as well as our company site. In addition to this, I was tasked with growing the marketing team. Hiring and training associates to take over for me when I graduated. I worked on strategy with our CEO, brainstormed ideas with our CMO, and created this companies first guide to brand strategy."
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
