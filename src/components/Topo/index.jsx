import Image from "next/image";
import styles from "./Topo.module.css";
import Logo from "../../../public/assets/logo.png";
import Moon from "../../../public/assets/moon.png";
import Sun from "../../../public/assets/sun.png";
import { useState } from "react";

export const Topo = ({tipoTema, setState}) => {
  const alterarState = () => {
    tipoTema === "light-mode" ? setState("light-mode") : setState("dark-mode");
  };

  return (
    <header className={`${styles.container} ${tipoTema ? styles.dark_mode : styles.light_mode}`}>
      <div className={styles.container_content}>
        <Image src={Logo} className={styles.logo} alt="Logo"/>
        <button className={styles.btn_header}>
          <Image src={tipoTema ? Sun : Moon} alt="Imagem botão" onClick={alterarState}/>
        </button>
      </div>
    </header>
  );
};

export default Topo;
