import styles from "./avatar.module.css";
import Image from "next/image";

export const Avatar = ({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc: string;
}) => {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image
          src={imageSrc}
          alt={`Àvatar do(a) ${name}`}
          width={32}
          height={32}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
