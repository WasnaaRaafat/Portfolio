export interface CardProps {
  title: string;
  image: string;
  github_url?: string;
  demo_url: string;
  text: string;
}
export interface ItemProps {
  item: CardProps;
}
