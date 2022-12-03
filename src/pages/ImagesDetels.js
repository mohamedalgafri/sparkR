import React, { useEffect } from 'react'
import bgmeda from "../images/bgmeda.png"
import bgaboutmob from "../images/bgaboutmob.png"
import Rectangle331 from "../images/Rectangle 331.png"
import "../css/lightbox.min.css"

const ImagesDetels = () => {

    useEffect(() => {
        // require('../styles/sliderheader.js')
        require('../js/lightbox-plus-jquery.min')
    
      });
    
    

  return (
    <section class="container bodymedia">


    {/* <LightGallery
    onInit={onInit}
    speed={500}
    plugins={[lgThumbnail, lgZoom]}
     class="allcardmedia ">

        <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  >
        <Image width="310" height='350' class="cardn1" src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80" alt="" />
        </a>
        <a href="img/img1.jpg">
                    <img alt="img1" src="img/thumb1.jpg" />
                </a>

    </LightGallery> */}



    <div class="allcardmedia ">

        

<a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img width="310" height='350' class="cardn1" src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80" alt="" />
  </a>

  <a class="cardNews " href="https://images.unsplash.com/photo-1669492809737-a0f175ec183e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"  data-lightbox="image-1" data-title="My caption">
    <img width="3100" height='350'  class="cardn1" src="https://images.unsplash.com/photo-1669492809737-a0f175ec183e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
  </a>


  <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img class="cardn1" src={Rectangle331} alt="" />
  </a>

  <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img class="cardn1" src={Rectangle331} alt="" />
  </a>


  <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img class="cardn1" src={Rectangle331} alt="" />
  </a>


  <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img class="cardn1" src={Rectangle331} alt="" />
  </a>


  <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img class="cardn1" src={Rectangle331} alt="" />
  </a>


  <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img class="cardn1" src={Rectangle331} alt="" />
  </a>


  <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img class="cardn1" src={Rectangle331} alt="" />
  </a>


  <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img class="cardn1" src={Rectangle331} alt="" />
  </a>


  <a class="cardNews " href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"  data-lightbox="image-1" data-title="My caption">
    <img class="cardn1" src={Rectangle331} alt="" />
  </a>

    </div>



      <div class="navmedia">
        <nav aria-label="Page navigation  ">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <i class='bx bx-chevron-right'></i>
              </a>
            </li>
            <li class="page-item active" ><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <i class='bx bx-chevron-left' ></i>
              </a>
            </li>
          </ul>
        </nav>
  
      </div>




    </section>
  )
}

export default ImagesDetels
