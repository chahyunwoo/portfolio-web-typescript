interface CareerEntryType {
  projectTitle: string;
  projectDesc: string[];
}

export interface CareerDataType {
  name: string;
  duration: string;
  logo: string;
  description: string;
  project: CareerEntryType[];
}
