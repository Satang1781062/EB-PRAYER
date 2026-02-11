import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";
import flipSound from "./sounds/flip.m4a";

const images = [
  require("./imageleContent/บทนำ1-4x.png"),
  require("./imageleContent/บทนำ2-4x.png"),
  require("./imageleContent/บทนำ3-4x.png"),
  require("./imageleContent/บทนำ4-4x.png"),
  require("./imageleContent/อานิสงส์ภาวนา1-4x.png"),
  require("./imageleContent/อานิสงส์ภาวนา2-4x.png"),
  require("./imageleContent/อานิสงส์ภาวนา3-4x.png"),
  require("./imageleContent/อานิสงส์ภาวนา4-4x.png"),
  require("./imageleContent/อานิสงส์ภาวนา5-4x.png"),
  require("./imageleContent/บุญเราไม่เคยสร้าง-4x.png"),
  require("./imageleContent/พิมพ์เผยแพร์-4x.png"),
  require("./imageleContent/อนิสงส์ของการแจกหนังสือ-4x.png"),
  require("./imageleContent/คาถาบูชาพระพิมเนศ-4x.png"),
  require("./imageleContent/อนุโมทนา-4x.png"),
  require("./imageleContent/1234-4x.png"),
  require("./imageleContent/อนิสงส์ของการสวด1-4x.png"),
  require("./imageleContent/อนิสงส์ของการสวด2-4x.png"),
  require("./imageleContent/อนิสงส์ของการสวด3-4x.png"),
  require("./imageleContent/อนิสงส์ของการสวด4-4x.png"),
  require("./imageleContent/อนิสงส์ของการสวด5-4x.png"),
  require("./imageleContent/อนิสงส์ของการสวด6-4x.png"),
  require("./imageleContent/เมื่ออาตมาได้พบ1-4x.png"),
  require("./imageleContent/เมื่ออาตมาได้พบ2-4x.png"),
  require("./imageleContent/เมื่ออาตมาได้พบ3-4x.png"),
  require("./imageleContent/เมื่ออาตมาได้พบ4-4x.png"),
  require("./imageleContent/เมื่ออาตมาได้พบ5-4x.png"),
  require("./imageleContent/เมื่ออาตมาได้พบ6-4x.png"),
  require("./imageleContent/วิธีสวดพระพุทธคุณ-บทกราบพระ-4x.png"),
  require("./imageleContent/นมัสการพระรัตนตรัย-4x.png"),
  require("./imageleContent/ถวายพรพระ-4x.png"),
  require("./imageleContent/พาหุง1-4x.png"),
  require("./imageleContent/พาหุง2-4x.png"),
  require("./imageleContent/พาหุง3-4x.png"),
  require("./imageleContent/พาหุง4-4x.png"),
  require("./imageleContent/พาหุง5-4x.png"),
  require("./imageleContent/คำแปลคาถาพาหุง1-4x.png"),
  require("./imageleContent/คำแปลคาถาพาหุง2-4x.png"),
  require("./imageleContent/คำแปลคาถาพาหุง3-4x.png"),
  require("./imageleContent/คำแปลมหากาลุณิโกนาโถ1-4x.png"),
  require("./imageleContent/คำแปลมหากาลุณิโกนาโถ2-4x.png"),
  require("./imageleContent/อิปิติโสเท่าอายุ-4x.png"),
  
  

  
  
];

function App() {
  

  return (
    <div className="App">
      
      <EbookSlider />
    </div>
  );
}

const EbookSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const flipAudio = useRef(new Audio(flipSound));

  
  flipAudio.current.volume = 0.2; 

  const progressPercentage = ((currentPage + 1) / images.length) * 100;

  const handleFlip = (e) => {
    flipAudio.current.play();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 d-flex justify-content-center">
          <HTMLFlipBook
            width={window.innerWidth < 768 ? 380 : 588}
            height={window.innerWidth < 768 ? 550 : 850}
            maxShadowOpacity={0.5}
            showCover={true}
            onChangeState={handleFlip}
            onFlip={(e) => setCurrentPage(e.data)}
            className="flipbook"
            flipSound={flipAudio}
          >
            {images.map((image, index) => (
              <img
                src={image}
                key={index}
                alt={`Page ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            ))}
          </HTMLFlipBook>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8">
          <div className="progress-bar-container">
            <div className="progress-bar-background">
              <div
                className="progress-bar"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
