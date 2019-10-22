import React, { memo, useEffect } from "react";
import { TWITR_WIDGET } from 'src/constants';

const CONFIG = {
  CLASSNAME: "twitter-timeline",
  HEIGHT: 600,
  WIDTH: 350,
  THEME: 'dark',
  LANG: "en",
};

const TwitterContainer = ({ twtrUser, twtrHandle, display, handleError }) => {
  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.src = TWITR_WIDGET;
      script.charset = "utf-8";
      document.getElementsByClassName(CONFIG.CLASSNAME)[0].appendChild(script);
    } catch (error) {
      handleError(error);
    }
  }, []);

  return (
    <section style={{ display: display ? 'flex' : 'none' }}>
      <div className={`twitter-embed-${twtrUser}`}>
        <a
          className={CONFIG.CLASSNAME}
          href={twtrHandle}
          data-lang={CONFIG.LANG}
          data-width={CONFIG.WIDTH}
          data-height={CONFIG.HEIGHT}
          data-theme={CONFIG.THEME}
        >
          Loading...
        </a>
      </div>
    </section>
  );
};

export default memo(TwitterContainer);