"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "@/styles/CityPicture.scss";

interface CityPictureProps {
  source: string;
}

const CityPicture: React.FC<CityPictureProps> = ({ source }) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <TransitionGroup className="citypicture-container">
      {animation && (
        <CSSTransition key={source} timeout={700} classNames="picture">
          <div className="citypicture">
            <div className="citypicture__image">
              <Image src={source} alt="City Picture" width={500} height={350} />
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default CityPicture;
