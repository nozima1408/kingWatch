import {watch} from './data.js';
const swiperWrapper = document.querySelector('.swiper-wrapper');




function render(data = watch) {

  swiperWrapper.innerHTML = "";

  data.map((watch) => {
    swiperWrapper.innerHTML += `
           <div class="swiper-slide ${watch.bgColor}">
            <nav class="flex justify-between items-center max-[1467px]:px-[100px] max-[637px]:pl-[50px] max-[602px]:pl-[30px] px-[155px] pt-[54px] text-[20px]">
               <div>
                 <img src="images/crown.png" alt="">
                <p class="font-extrabold">KING</p>
               </div>

                <div class="flex gap-16 items-center max-[836px]:hidden">
                    <p>Shop</p>
                    <p>Brands</p>
                    <p>Contact us</p>
                    <button class="bg-[#000] text-white py-[14px] px-[38px] rounded-[50px] cursor-pointer">Sign up</button>
                </div>
            </nav>

            <div class="flex max-[987px]:flex-col max-[987px]:mt-22 max-[515px]:mr-5 justify-center items-center gap-40 max-[1161px]:mt-10 max-[1161px]:gap-10">
               <div class="max-[1302px]:pl-22 max-[987px]:pl-[20px]">
                    <div class="text-white font-black">
                    <p class="text-[60px] max-[1302px]:text-[40px] max-[527px]:text-[28px]">Exquisite Watches</p>
                    <p class="text-[40px] max-[1302px]:text-[30px] max-[527px]:text-[25px]">Choose Luxury, <span class="text-black">Choose Us</span></p>
                </div>

                <div>
                    <p class="max-w-[540px] mt-[40px] max-[1302px]:text-[16px] max-[600px]:mt-[20px] text-[20px] text-[#1C1415CC] leading-[1.9] font-semibold">Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch</p>
                    <p class="text-[40px] max-[700px]:text-[35px] font-bold mt-6 text-white">$430.00</p>

                    <div class="flex gap-5 mt-10">
                        <p class="border-2 border-solid border-white rounded-full py-4 pt-4 px-6"><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f text-white max-[700px]:text-[20px] text-[25px]"></i></a></p>
                        <p class="border-2 border-solid border-white rounded-full p-4 px-5"><a href="https://x.com/"><i class="fa-brands fa-twitter max-[700px]:text-[20px] text-white text-[25px]"></i></a></p>
                        <p class="border-2 border-solid border-white rounded-full p-4 px-5"><a href="https://www.youtube.com/"><i class="fa-brands fa-youtube text-white max-[700px]:text-[20px] text-[25px]"></i></a></p>
                    </div>
                </div>
               </div>


                <div>
                  <img class="mt-5 max-[1275]:w-[200px]" src=${watch.img} />
                </div>
            </div>
      </div>
  `;
  });
}
render();


    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });