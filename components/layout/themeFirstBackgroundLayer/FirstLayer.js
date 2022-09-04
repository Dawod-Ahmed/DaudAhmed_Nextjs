import {
  TopRight,
  TopLeft,
  MidLeft,
  MidRight,
  BottomLeft,
  BottomRight,
} from "../../../assets";
import ShapeImgage from "./shapesImages";
import styles from "../../../styles/layout/index.module.scss"


const FirstLayer = () => {
  
  return (
    <>
      <div className={`${styles.theme_background_first_layer} position-fixed`}>
        <ShapeImgage
          className={`${styles.shape_TopRight} position-absolute`}
          image={TopRight.src}
        />
        <ShapeImgage
          className={`${styles.shape_TopLeft} position-absolute`}
          image={TopLeft.src}
        />
        <ShapeImgage
          className={`${styles.shape_MidRight} position-absolute`}
          image={MidRight.src}
        />
        <ShapeImgage
          className={`${styles.shape_MidLeft} position-absolute`}
          image={MidLeft.src}
        />
        <ShapeImgage
          className={`${styles.shape_BottomRight} position-absolute`}
          image={BottomRight.src}
        />
        <ShapeImgage
          className={`${styles.shape_BottomLeft} position-absolute`}
          image={BottomLeft.src}
        />
      </div>
    </>
  );
};

export default FirstLayer;
