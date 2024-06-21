"use client";
import Image from "next/image";
import logo from "../Images/Logo.jpg";
import Link from "next/link";
import "@/styles/WelcomePage.scss";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";

export default function Welcome() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="welcome">
      <CSSTransition in={inProp} timeout={1500} classNames="fade">
        <div className="welcome__logo">
          <Image src={logo} alt="logo" />
        </div>
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} classNames="slide">
        <div className="welcome__text">Explore. Discover. Connect</div>
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} classNames="zoom">
        <Link href="/cities">
          <div className="welcome__link">Start Exploring</div>
        </Link>
      </CSSTransition>
    </div>
  );
}
