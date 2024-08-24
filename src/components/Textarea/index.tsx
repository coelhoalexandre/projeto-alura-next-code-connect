import style from "./textarea.module.css";

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  children?: React.ReactNode;
}

export const Textarea = ({ children, ...rest }: TextareaProps) => {
  return (
    <textarea className={style.textarea} {...rest}>
      {children}
    </textarea>
  );
};
