import styles from "./button.module.css";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles.btn}>{children}</button>;
};
