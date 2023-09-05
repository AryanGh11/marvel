export type InputType = {
  placeholder: string;
  value?: string;
  setValue?: (val: string) => void;
  id: string;
  type:
    | "button"
    | "text"
    | "email"
    | "password"
    | "number"
    | "search"
    | "submit";
};
