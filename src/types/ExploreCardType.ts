export interface IconWithTextProps {
  imagePath: string;
  text: string;
  textClassName?: string;
}

export interface ExploreCard {
  id?: number;
  image: string;
  title: string;
  description: string;
  price: string;
  iconWithText: IconWithTextProps[];
}
