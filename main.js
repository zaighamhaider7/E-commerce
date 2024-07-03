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
          let limitedWords = words.slice(0, 20).join(' ');

          if (words.length > 20) {
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
                              <button type="button" class="addtocart" id="add">Add to cart</button>
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


               if (descriptionwords.length > 20) {
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
              <button class="addtocart">Add to cart</button>
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
          let limitedWords = words.slice(0, 20).join(' ');

          if (words.length > 20) {
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
                              <button type="button" class="addtocart">Add to cart</button>
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
  
  
                 if (descriptionwords.length > 20) {
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
                <button class="addtocart">Add to cart</button>
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
      let arrow = document.getElementById('navigation');
    
      if (verticalScrollpx < 500) {
          arrow.style.backgroundColor = "rgba(0, 0, 0, 0.678)";
      }
    
    
     else if (verticalScrollpx < 1600 && verticalScrollpx > 500) {
        arrow.style.backgroundColor = "black";
      }
    })