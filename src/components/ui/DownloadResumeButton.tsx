import React from 'react';
import { jsPDF } from 'jspdf';

export function DownloadResumeButton() {

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    const name = "Siddharth Narayan Mishra";
    const contactInfo = "Jaipur, Rajasthan | +91-9122423090 | siddharthmishra810i@gmail.com\nlinkedin.com/in/siddharth-mishra-445877284";
    
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(name, pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const contactLines = doc.splitTextToSize(contactInfo, pageWidth - 40);
    doc.text(contactLines, pageWidth / 2, 28, { align: 'center' });
    
    let yPos = 45;

    const addSectionHeader = (title: string) => {
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(title, 20, yPos);
      doc.line(20, yPos + 2, pageWidth - 20, yPos + 2);
      yPos += 8;
    };

    const addText = (text: string, isBold: boolean = false, indent: number = 20) => {
      doc.setFontSize(10);
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      const lines = doc.splitTextToSize(text, pageWidth - indent - 20);
      doc.text(lines, indent, yPos);
      yPos += lines.length * 5;
    };

    const addBullet = (text: string) => {
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(text, pageWidth - 45);
      doc.text("•", 25, yPos);
      doc.text(lines, 30, yPos);
      yPos += lines.length * 5 + 1;
    };

    // Profile Summary
    addSectionHeader("PROFILE SUMMARY");
    addText("Results oriented Computer Science undergraduate specializing in Artificial Intelligence and Data Science with demonstrated experience in Business Analytics, Machine Learning fundamentals, and scalable problem solving. Proven ability to design data driven dashboards, build predictive models, and optimize algorithmic solutions. Strong foundation in analytics, system thinking, and performance optimization, with a focused goal of securing high impact internships and a pre placement offer by third year.");
    yPos += 4;

    // Education
    addSectionHeader("EDUCATION");
    doc.setFont("helvetica", "bold");
    doc.text("JECRC University", 20, yPos);
    doc.setFont("helvetica", "normal");
    doc.text("Jaipur, Rajasthan", pageWidth - 20, yPos, { align: "right" });
    yPos += 5;
    addText("B.Tech CSE (AI & DS), First Year");
    addText("CGPA: 9.35");
    yPos += 1;
    doc.setFont("helvetica", "bold");
    doc.text("Class XII", 25, yPos);
    doc.text("87.40%", pageWidth - 20, yPos, { align: "right" });
    yPos += 5;
    doc.text("Class X", 25, yPos);
    doc.text("89.60%", pageWidth - 20, yPos, { align: "right" });
    yPos += 8;

    // Certifications
    addSectionHeader("CERTIFICATIONS");
    addBullet("Gen AI - BCGX Client Engagement Job Simulation");
    addBullet("AI Fluency for Students - Anthropic");
    addBullet("Model Context Protocol: Advanced Topics - Anthropic");
    addBullet("Cloud Infrastructure and Data Science Professional - Oracle");
    addBullet("Data Analytics Job Simulation - Deloitte Forage");
    yPos += 4;

    // Volunteering & Leadership
    addSectionHeader("VOLUNTEERING & LEADERSHIP");
    const addVolunteer = (role: string, loc: string) => {
      doc.setFont("helvetica", "normal");
      doc.text("•", 25, yPos);
      doc.setFont("helvetica", "bold");
      const parts = role.split(" - ");
      const title = parts[0];
      const org = parts[1] ? " - " + parts[1] : "";
      
      let x = 30;
      doc.text(title, x, yPos);
      if (org) {
        x += doc.getTextWidth(title);
        doc.setFont("helvetica", "normal");
        doc.text(org, x, yPos);
      }
      doc.setFont("helvetica", "normal");
      doc.text(loc, pageWidth - 20, yPos, { align: "right" });
      yPos += 6;
    };
    addVolunteer("United Nations Campus Ambassador", "Jaipur, Rajasthan");
    addVolunteer("Mental Health Advocate - MPower", "Jaipur, Rajasthan");
    addVolunteer("Sports Captain - DAV Public School", "Ramgarh, Jharkhand");
    addVolunteer("Literary Critique - JU Literary Club", "Jaipur, Rajasthan");
    yPos += 4;

    // Skills
    addSectionHeader("SKILLS");
    doc.setFont("helvetica", "bold");
    doc.text("Soft Skills: ", 20, yPos);
    doc.setFont("helvetica", "normal");
    doc.text("Vibe Coding, General Knowledge, Public Speaking, Leadership, Teamwork", 20 + doc.getTextWidth("Soft Skills: "), yPos);
    yPos += 6;
    
    doc.setFont("helvetica", "bold");
    doc.text("Technical Skills:", 20, yPos);
    yPos += 5;
    
    const addSkill = (title: string, desc: string) => {
      doc.text("•", 25, yPos);
      doc.setFont("helvetica", "bold");
      doc.text(title + ": ", 30, yPos);
      let xOffset = 30 + doc.getTextWidth(title + ": ");
      doc.setFont("helvetica", "normal");
      
      const remainingWidth = pageWidth - xOffset - 20;
      const lines = doc.splitTextToSize(desc, remainingWidth);
      doc.text(lines[0], xOffset, yPos);
      if (lines.length > 1) {
        yPos += 5;
        for(let i=1; i<lines.length; i++) {
           doc.text(lines[i], 30, yPos);
           yPos += 5;
        }
      } else {
        yPos += 6;
      }
    };
    
    addSkill("Business Analytics & Data Tools", "Power BI (Interactive Dashboards), Microsoft Excel, SQL, Tableau");
    addSkill("Data Science & AI", "Pandas (Foundational), Machine Learning Fundamentals, Statistics & Probability, Data Preprocessing, Python (NumPy)");
    addSkill("Computer Science & DSA", "Solved 350+ Questions on LeetCode");

    doc.save("Siddharth_Narayan_Mishra_Resume.pdf");
  };

  return (
    <a
      href="#"
      onClick={handleDownload}
      className="inline-block text-center rounded-full border-2 border-transparent text-[#FFFFFF] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-[0px_4px_4px_rgba(1,150,181,0.25),_4px_4px_12px_#219ab1_inset]"
      style={{
        background: 'linear-gradient(123deg, #01141f 7%, #0060b6 37%, #217cb0 72%, #00be64 100%)',
      }}
    >
      Download Resume
    </a>
  );
}
