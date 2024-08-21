// featured products

let url = "https://fakestoreapi.com/products"
fetch(url)

.then(Response => Response.json())
.then((data)=>{
    console.log(data);
        for (let i = 0; i < 6; i++) {
          let title = data[i].title
          let titlewords = title.split(' ')
          let limitedtitile = titlewords.slice(0, 5).join(' ')
          let description = data[i].description;
          let words = description.split(' ');
          let limitedWords = words.slice(0, 18).join(' ');

          if (words.length > 18) {
              limitedWords += '...';
          }

          document.querySelector(".row-one").innerHTML +=
              `
              <div class="col col-lg-4 col-md-6 col-sm-6 mt-3 col-align">
                  <div class="card product-card">
                      <img src="${data[i].image}" class="card-img-top product-img" alt="Product image">
                      <div class="card-body">
                          <h4 class="card-title">${limitedtitile}</h4>
                          <p class="card-text">${limitedWords}</p>
                          <div class="price-btn">
                              <h5>$${data[i].price}</h5>
                              <button type="button" class="addtocart" onclick="cart()">Add to cart</button>
                          </div>
                      </div>
                  </div>
              </div>
              `;
        }




            let productsShown = false;  // Add a flag to check if products have already been shown

            document.getElementById("viewmore").addEventListener("click", () => {
            if (!productsShown) {  // Check if products have not been shown yet
              console.log('View More button clicked.'); // Debug log
            
              document.getElementById("viewmore").style.display = "none";
              document.getElementById("viewless").style.display = "block";
              document.querySelector(".row-two").style.display = "flex";
            
              if (!Array.isArray(data) || data.length < 12) {
                console.error('data array is not valid or does not have enough items.');
                return;
              }
            
              // Add the products to the container
              for (let i = 6; i < 12; i++) {
               
               let title = data[i].title
               let titlewords = title.split(' ')
               let limitedtitile = titlewords.slice(0, 5).join(' ')
               let description = data[i].description
               let descriptionwords = description.split(' ')
               let limiteddescription = descriptionwords.slice(0, 18).join(' ')


               if (descriptionwords.length > 18) {
                limiteddescription += '...';
            }

                if (!data[i]) {
                  console.error(`Product at index ${i} is not defined.`);
                  continue;
                }
            
                const productHTML = 
                `
                <div class="col col-lg-4 col-md-6 col-sm-6 mt-3 col-align">
                 <div class="card product-card">
                 <img src="${data[i].image}" class="card-img-top product-img" alt="Product imagessss...">
                <div class="card-body">
            <h4 class="card-title">${limitedtitile}</h4>
            <p class="card-text">${limiteddescription}</p>
            <div class="price-btn">
              <h5> $${data[i].price}</h5>
              <button class="addtocart" onclick="cart()">Add to cart</button>
              </div>
              </div>
             </div>
                </div>
            `
                ;
            
                document.querySelector(".row-two").innerHTML += productHTML;
              }
            
              productsShown = true;  // Set the flag to true after showing the products
            } else {
              document.querySelector(".row-two").style.display = "flex";
              document.getElementById("viewmore").style.display = "none";
              document.getElementById("viewless").style.display = "block";
            }
            });
            
})
.catch((error)=>{
    console.log("Error"+error)
})
// view less button products
document.getElementById("viewless").addEventListener("click", () => {
  document.getElementById("viewmore").style.display = "block";
  document.getElementById("viewless").style.display = "none";
  document.querySelector(".row-two").style.display = "none"
  })

// Categories

let url2 = "https://api.escuelajs.co/api/v1/products"
fetch(url2)

.then(Response => Response.json())
.then((product)=>{
    console.log(product);
        for (let i = 0; i < 6; i++) {
          console.log(product[i]);
          let title = product[i].title
          let titlewords = title.split(' ')
          let limitedtitile = titlewords.slice(0, 5).join(' ')
          let description = product[i].description;
          let words = description.split(' ');
          let limitedWords = words.slice(0, 18).join(' ');

          if (words.length > 18) {
              limitedWords += '...';
          }

          document.querySelector(".row-three").innerHTML +=
              `
              <div class="col col-lg-4 col-md-6 col-sm-6 mt-3 col-align">
                  <div class="card product-card">
                      <img src="${product[i].images[0]}" class="card-img-top product-img" alt="Product image">
                      <div class="card-body">
                          <h4 class="card-title">${limitedtitile}</h4>
                          <p class="card-text">${limitedWords}</p>
                          <div class="price-btn">
                              <h5>$${product[i].price}</h5>
                              <button type="button" class="addtocart" onclick="cart()">Add to cart</button>
                          </div>
                      </div>
                  </div>
              </div>
              `;
        }
              //  view more 
              let productsShown = false;  // Add a flag to check if products have already been shown

              document.getElementById("viewmore-2").addEventListener("click", () => {
              if (!productsShown) {  // Check if products have not been shown yet
                console.log('View More button clicked.'); // Debug log
              
                document.getElementById("viewmore-2").style.display = "none";
                document.getElementById("viewless-2").style.display = "block";
                document.querySelector(".row-four").style.display = "flex";
              
                if (!Array.isArray(product) || product.length < 12) {
                  console.error('data array is not valid or does not have enough items.');
                  return;
                }
              
                // Add the products to the container
                for (let i = 6; i < 12; i++) {
                 
                 let title = product[i].title
                 let titlewords = title.split(' ')
                 let limitedtitile = titlewords.slice(0, 5).join(' ')
                 let description = product[i].description
                 let descriptionwords = description.split(' ')
                 let limiteddescription = descriptionwords.slice(0, 18).join(' ')
  
  
                 if (descriptionwords.length > 18) {
                  limiteddescription += '...';
              }
  
                  if (!product[i]) {
                    console.error(`Product at index ${i} is not defined.`);
                    continue;
                  }
              
                  const productHTML = 
                  `
                  <div class="col col-lg-4 col-md-6 col-sm-6 mt-3 col-align">
                   <div class="card product-card">
                   <img src="${product[i].images[0]}" class="card-img-top product-img" alt="Product imagessss...">
                  <div class="card-body">
              <h4 class="card-title">${limitedtitile}</h4>
              <p class="card-text">${limiteddescription}</p>
              <div class="price-btn">
                <h5> $${product[i].price}</h5>
                <button class="addtocart" onclick="cart()">Add to cart</button>
                </div>
                </div>
               </div>
                  </div>
              `
                  ;
              
                  document.querySelector(".row-four").innerHTML += productHTML;
                }
              
                productsShown = true;  // Set the flag to true after showing the products
              } else {
                document.querySelector(".row-four").style.display = "flex";
                document.getElementById("viewmore-2").style.display = "none";
                document.getElementById("viewless-2").style.display = "block";
              }
              });




      })
      .catch((error)=>{
        console.log("Error"+error)
    })


    // view less button products
document.getElementById("viewless-2").addEventListener("click", () => {
  document.getElementById("viewmore-2").style.display = "block";
  document.getElementById("viewless-2").style.display = "none";
  document.querySelector(".row-four").style.display = "none"
  })
 
    // nav bar scroll
    window.addEventListener("scroll", () => {
      let verticalScrollpx = window.scrollY || window.pageYOffset
      let nav = document.getElementById('navigation');
      let marquee = document.getElementById("marquee");
    
      if (verticalScrollpx < 500) {
          nav.style.backgroundColor = "rgba(0, 0, 0, 0.678)";
          marquee.style.backgroundColor = "rgba(0, 0, 0, 0.678)";
      }
    
    
     else if (verticalScrollpx < 1900 && verticalScrollpx > 500) {
        nav.style.backgroundColor = "black";
        marquee.style.backgroundColor ="black";
      }
    })

// add to cart
function cart(){
  let qty = document.getElementById("qty");
  qty.textContent++;
}




// loader
setTimeout(() => {
  document.querySelector(".loader-container").style.display = "none";
}, 3000);

// loader gsap
gsap.to('.box', {
  yoyo: true,
  repeat: -1,
  duration: 1,
  stagger: 0.2,
  scale: 0.7,
  ease: 'power2.inOut'
});



// advertisement
setTimeout(function () {
  document.getElementById('ad-bodyy').style.display = 'flex';
  document.getElementById('advertisement').style.display = 'block';
  document.getElementById('body').style.overflow = 'hidden';
}, 6000); 

document.getElementById('closeAd').addEventListener('click', function () {
  document.getElementById('ad-bodyy').style.display = 'none';
  document.getElementById('body').style.overflow = 'visible';
});



// review

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card-r").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
