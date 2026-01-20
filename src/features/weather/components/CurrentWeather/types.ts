// Named exports for CurrentWeather related component props
export type SearchBoxProps = {
  valueOfField: string;
  changeValue: (value: string) => void;
};

export type RadioItemProps = {
  forLabel: string;
  forId: string;
  text: string;
  id: number;
  check: boolean;
  onChange: (id: number, value: string) => void;
};

export type RadioBoxProps = {
  info: Array<{
    id: number;
    text: string;
    forLabel: string;
    forId: string;
    check: boolean;
  }>;
  change: (id: number, value: string) => void;
};
