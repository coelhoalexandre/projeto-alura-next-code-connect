import IButtonProps from "@/interface/ButtonProps";
import styles from "./iconbutton.module.css";

export const IconButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <button {...rest} className={styles.btn}>
      {children}
    </button>
  );
};
