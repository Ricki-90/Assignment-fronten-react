import React from 'react'
import imageLetsBe from "./../assets/images/lets-be-img.png";
import imagePamela from "./../assets/images/pamela-reifs-img.png";

const BannersSection: React.FC = () => {
  return (
    <section className="container d-flex gap-3 mb-5">
      <div>
        <img className="img-banner-left" src={imagePamela} alt="image-left" />
      </div>
      <div>
        <img className="img-banner-right" src={imageLetsBe} alt="image-right" />
      </div>
    </section>
  )
}

export default BannersSection