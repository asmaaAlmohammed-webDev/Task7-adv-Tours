export interface IconWithText {
  icon: string;
  text: string;
}

export interface PopularPackagesCardType {
  id?: number;
  image: string;
  title: string;
  price: string;
  buttonText: string;
  iconWithTxt: IconWithText[];
}
