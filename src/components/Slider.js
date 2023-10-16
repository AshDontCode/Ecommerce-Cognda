// import './slider.css'


export function Slider(){
    return <>  
<div id="carouselExampleDark" className="carousel carousel-dark slide rounded-circle" data-bs-ride="carousel">
<div className="carousel-indicators">
 <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
 <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
 <div className="carousel-item active" data-bs-interval="10000">
   <img src="https://marketplace.canva.com/EAE68lHLCOY/1/0/1600w/canva-fashion-sale-%28banner-%28landscape%29%29-cDph7nU_fFo.jpg" className="d-block w-100" alt="..."></img>
   <div className="carousel-caption d-none d-md-block">
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="2000">
   <img src="https://marketplace.canva.com/EAE_DFO7DGc/1/0/1600w/canva-fashion-sale-%28banner-%28landscape%29%29-uW78Xcvrsb0.jpg" className="d-block w-100" alt="..."></img>
   <div className="carousel-caption d-none d-md-block">
   </div>
 </div>
 <div className="carousel-item">
   <img src="https://marketplace.canva.com/EAFWt8Wq208/1/0/1600w/canva-grey-minimalist-special-offer-banner-landscape-tVz4E4KVLgk.jpg" className="d-block w-100" alt="..."></img>
   <div className="carousel-caption d-none d-md-block">
   </div>
 </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
 <span className="carousel-control-next-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Next</span>
</button>
</div>


     
     
     </>

}
