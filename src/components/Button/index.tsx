import IButtonProps from "@/interface/ButtonProps";
import styles from "./button.module.css";

export const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <button {...rest} className={styles.btn}>
      {children}
    </button>
  );
};
