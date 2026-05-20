"use client";

import TerminalExperience from '@/components/TerminalExperience';
import { getCVData } from '@/data/cv-data';

export default function Home() {
  const cvData = getCVData();

  return (
    <TerminalExperience cvData={cvData} />
  );
}
