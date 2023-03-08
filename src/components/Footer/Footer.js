import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="main-footer" >
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="co1">
            <h4>2023 World Yurtdışı Eğitim</h4>
            <ul className="list-unstyled">
              <li>0232 437 5899</li>
              <li>Ankara,Çankaya</li>
              <li>Cumhuriyet mahallesi Başarı Sokak No:58</li>
            </ul>
          </div>

          {/* column3 */}
          <div className="co2">
            <h4>Well Another Column</h4>
            <ul className="list-unstyled">
              <li>
                © 2023 World Yurtdışı Eğitim sitesinin tüm hakları saklı olup, içerik ve
                görselleri izinsiz yayınlanamaz ve kopyalanamaz. 5846 sayılı
                Fikir ve Sanat Eserleri Yasasına göre suçtur.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} World Yurtdışı Eğitim | All Right
            Reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;