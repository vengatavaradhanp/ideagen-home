import React, { CSSProperties } from "react";
import "./css/app-layout.css";
import FadeLoader from "react-spinners/FadeLoader";

const override: CSSProperties = {
    
  };

export default function AppLoader(props: any) {
  return (
    <div>
      {/* <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div> */}
      <div style={{display: props.state ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', position: 'fixed', left: '0px', right: '0px', top: '0px', bottom: '0px', margin: 'auto', background: '#fff', zIndex: 1999}}>
      <FadeLoader
        color="#1b878f"
        loading={true}
        cssOverride={override}
        aria-label="Loading Spinner"
      />
      </div>
    </div>
  );
}
