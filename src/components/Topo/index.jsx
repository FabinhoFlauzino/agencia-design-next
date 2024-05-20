import Image from "next/image";
import styles from "./Topo.module.css";
import Logo from "../../../public/assets/logo.png";
import Moon from "../../../public/assets/moon.png";

export const Topo = () => {
  return (
    <header className={`${styles.container}`}>
      <div className={styles.container_content}>
        <Image src={Logo} className={styles.logo} />
        <button className={styles.btn_header}>
          <Image src={Moon} />
        </button>
      </div>
    </header>
  );
};

export default Topo;
