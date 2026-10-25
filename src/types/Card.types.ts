export interface Project {
  title: string;
  image?: string; // shows a placeholder when missing
  liveUrl?: string;
  repoUrl?: string;
  role?: string;
  stack?: string[];
  summary?: string; // one-line description for simple projects
  problem?: string;
  highlights?: string[];
  result?: string;
}

export interface ItemProps {
  item: Project;
}
