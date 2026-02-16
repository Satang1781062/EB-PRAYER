import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";
import flipSound from "./sounds/flip.m4a";

// ฟังก์ชันสำหรับ filter รูปที่ไม่ต้องการแสดงบนมือถือ
const allImages = [
  require("./imageleContent/pok1.png"),
  require("./image2/หลังปก1.png"),
  require("./image2/หลังปก2.png"),
  require("./imageleContent/บทนำ1-4x.png"),
  require("./imageleContent/บทนำ2-4x.png"),
  require("./imageleContent/บทนำ3-4x.png"),
  require("./imageleContent/บทนำ4-4x.png"),
  require("./imageleContent/อานิสงส์ภาวนา1-4x.png"),
  require("./imageleContent/อานิสงส์ภาวนา2-4x.png"),
  require("./imageleContent/อานิสงส์ภาวนา3-4x.png"),
  require("./imageleContent/อานิสงส์ภาวนา4-4x.jpg"),
  require("./imageleContent/อานิสงส์ภาวนา5-4x.jpg"),
  require("./imageleContent/อานิสงส์ภาวนา6-4x.jpg"),
  require("./imageleContent/บุญเราไม่เคยสร้าง-4x.png"),
  require("./imageleContent/พิมพ์เผยแพร์-4x.png"),
  require("./imageleContent/อนิสงส์ของการแจกหนังสือ-4x.png"),
  require("./imageleContent/คาถาบูชาพระพิมเนศ-4x.png"),
  require("./imageleContent/อนุโมทนา-4x.png"),
  require("./imageleContent/1234-4x.png"),
  require("./imageleContent/อนิสงส์ของการสวด1-4x.jpg"),
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
  require("./imageNew/บทกราบพระ6ครั้ง.jpg"),
  require("./imageNew/S__62341126.jpg"),
  require("./imageNew/S__62341127.jpg"),
  require("./imageNew/S__62341128.jpg"),

  require("./imageNew/S__62341131.jpg"),
  require("./imageNew/S__62341140.jpg"),
  require("./imageNew/S__62341141.jpg"),
  require("./imageNew/S__62341142.jpg"),
  require("./imageNew/S__62341146_0.jpg"),
  require("./imageNew/S__62341147_0.jpg"),

  require("./image2/บูชาพระรัตนตรัย 1@4x.png"),
  // require("./image2/บูชาพระรัตนตรัย2@4x.png"),
  require("./imageNew/ไตรสรณคมน์4x.png"),

  // require("./imageleContent/นมัสการพระรัตนตรัย-4x.png"),
  require("./imageleContent/ถวายพรพระ-4x.png"),
  require("./imageNew/บทสวดพุทธานุสสติ@4x_0.png"),
  require("./imageNew/พระพุทธคุณทำนองสรภัญญะ@4x_0.png"),
  require("./imageNew/บทสวดธัมมานุสสติ@4x_0.png"),
  require("./imageNew/พระธรรมคุณทำนองสรภัญญะ@4x_0.png"),
  require("./imageNew/บทสวดสังฆานุสสติ@4x_0.png"),
  require("./imageNew/พระสังฆคุณทำนองสรภัญญะ@4x_0.png"),


  // require("./imageNew/ไตรสรณคมน์.jpg"),
  require("./image2/อาราธนาศีล 5@4x.png"),
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

  require("./image2/พระคาถาชินบัญชร 1@4x.png"),
  require("./image2/พระคาถาชินบัญชร 2@4x.png"),
  require("./image2/พระคาถาชินบัญชร 3@4x.png"),
  require("./image2/พระคาถาชินบัญชร 4@4x.png"),
  require("./image2/พระคาถาชินบัญชร 5@4x.png"),
  require("./image2/คำแปลพระคาถาชินบัญชร 1@4x.png"),
  require("./image2/คำแปลพระคาถาชินบัญชร 2@4x.png"),
  require("./image2/คำแปลพระคาถาชินบัญชร 3@4x.png"),

  require("./image2/บทนมัสการพระพุทธคุณ 1@4x.png"),
  require("./image2/บทนมัสการพระพุทธคุณ 2@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 1@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 2@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 3@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 4@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 5@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 6@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 7@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 8@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 9@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 10@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 11@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 12@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 13@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 14@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 15@4x.png"),
  require("./image2/ยอดพระกัณฑ์ไตรปิฎก 16@4x.png"),
  require("./image2/คำกรวดน้ำยอดพระกัณ 1@4x.png"),
  require("./image2/คำกรวดน้ำยอดพระกัณ 2@4x.png"),
  require("./image2/คำกรวดน้ำยอดพระกัณ 3@4x.png"),
  require("./image2/บทแผ่เมตตาแก่ตนเอง@4x.png"),
  require("./image2/บทแผ่เมตตา@4x.png"),
  require("./image2/บทแผ่ส่วนกุศล 1@4x.png"),
  require("./image2/บทแผ่ส่วนกุศล 2@4x.png"),
  require("./image2/บทแผ่ส่วนกุศล 3@4x.png"),
  require("./image2/อาราธนาพระปริตร@4x.png"),
  require("./image2/คำถวายสังฆทาน4x.png"),

  //**** */
  require("./image2/คาถาเงินล้าน 1@4x.png"),
  require("./image2/คาถาเงินล้าน 2@4x.png"),

  require("./image2/คาถามหาลาภ_1@4x.png"),
  require("./image2/คาถาพระเจ้าชนะมาร_1@4x.png"),
  require("./image2/บทสรรเสริญพระคุณนำโมกวนสี่อิมผู่สัก 1@4x.png"),
  require("./image2/บทสรรเสริญพระคุณนำโมกวนสี่อิมผู่สัก 2@4x.png"),
  //**** */
  // require("./image2/คาถาเงินล้าน 2_1@4x.png"),
  // require("./image2/คาถาเงินล้าน 2@4x.png"),

  // require("./image2/คาถามหาลาภ_1@4x.png"),
  // require("./image2/คาถามหาลาภ@4x.png"),

  // require("./image2/คาถาพระเจ้าชนะมาร_1@4x.png"),

  require("./image2/บทสวดพระพุทธคุณ 1@4x.png"),
  require("./image2/บทสวดพระพุทธคุณ 2@4x.png"),
  require("./image2/บทสวดพระธรรมคุณ 1@4x.png"),
  require("./image2/บทสวดพระธรรมคุณ 2@4x.png"),

  require("./image2/บทสวดพระสังฆคุณ 1@4x.png"),
  require("./image2/บทสวดพระสังฆคุณ 2@4x.png"),
  require("./image2/รายนามผู้ร่วมจัดพิมพ์1.png"),
  require("./image2/รายนามผู้ร่วมจัดพิมพ์2.png"),
  require("./image2/รายนามผู้ร่วมจัดพิมพ์3.png"),
  require("./image2/รายนามผู้ร่วมจัดพิมพ์4.png"),
  require("./imageleContent/pok2.png"),
];

// ฟังก์ชัน filter รูปตาม index ที่ไม่ต้องการแสดงบนมือถือ
function getImagesForDevice(hiddenIndexes = []) {
  const isMobile = window.innerWidth < 768;
  if (!isMobile) return allImages;
  return allImages.filter((_, idx) => !hiddenIndexes.includes(idx));
}

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

  // ระบุ index ของรูปที่ไม่ต้องการแสดงบนมือถือ เช่น [0, 2, 5]
  // ตัวอย่าง: ซ่อนรูปแรก, รูปที่สาม, รูปที่หก (index เริ่มที่ 0)
  const hiddenMobileIndexes = [1];
  const images = getImagesForDevice(hiddenMobileIndexes);

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
          {/* ✅ แสดงเลขหน้า */}
          
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
      <div
            style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}
          >
            {/* 📖 Index ปัจจุบัน: {currentPage}
            <br /> */}
            📄 หน้า {currentPage + 1} จาก {allImages.length}
          </div>
      <div>Current Index: {currentPage}</div>
    </div>
  );
};

export default App;
