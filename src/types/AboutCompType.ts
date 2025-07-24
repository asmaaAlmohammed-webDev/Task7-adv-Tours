export interface CounterItem {
  number: string;
  description: string;
}

export interface AboutItem {
  subtitle: string;
  title: string;
  description: string;
  counters: CounterItem[];
}
export type AboutProps = AboutItem[];
