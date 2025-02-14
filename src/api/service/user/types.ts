export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface User {
  id: number;
  password: string;
}

export interface Portfolio {
  id: number;
  title: string;
  userId: number;
}

export interface Profile {
  portfolioId: number;
  username: string;
  phoneNumber?: string;
  profileImage?: string;
  bannerImage?: string;
  schoolName: string;
  blogUrl?: string;
  major: string;
  degree: string;
}

export interface Skill {
  portfolioId: number;
  skillName: string;
  skillGroup: string; 
  descriptions: string;
}

export interface Award {
  portfolioId: number;
  awardTitle: string;
  awardFrom: string;
  awardVal: string;
  awardDate: string;
}

export interface Experience {
  portfolioId: number;
  jobTitle: string;
  jobResponsibility: string;
  jobExperience: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  portfolioId: number;
  thumbnail: string;
  title: string;
  skills: string;
  responsibility: string;
  link?: string[];
  description: string;
  startDate: string;
  endDate: string;
}