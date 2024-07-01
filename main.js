let url = "https://fakestoreapi.com/products"
fetch(url)

.then(Response => Response.json())
.then((data)=>{
    console.log(data);

        // for loop  
        for (let i = 0; i < 6; i++) {
            document.querySelector(".row-one").innerHTML +=
              `
                      <div class="col col-lg-4 col-md-6 col-sm-6 mt-3">
                       <div class="card">
                       <img src="${data[i].image}" class="card-img-top" alt="Product imagessss...">
                      <div class="card-body">
                  <h4 class="card-title">${data[i].title}</h4>
                  <p class="card-text">${data[i].description}</p>
                  <div class="price-btn">
                    <h5> $${data[i].price}</h5>
                    <button type="button" class="addtocart">Add to cart</button>
                    </div>
                    </div>
                   </div>
                      </div>
               `
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
                if (!data[i]) {
                  console.error(`Product at index ${i} is not defined.`);
                  continue;
                }
            
                const productHTML = 
                `
                <div class="col col-lg-4 col-md-6 col-sm-6 mt-3">
                 <div class="card">
                 <img src="${data[i].image}" class="card-img-top" alt="Product imagessss...">
                <div class="card-body">
            <h4 class="card-title">${data[i].title}</h4>
            <p class="card-text">${data[i].description}</p>
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


// view less button
document.getElementById("viewless").addEventListener("click", () => {
    document.getElementById("viewmore").style.display = "block";
    document.getElementById("viewless").style.display = "none";
    document.querySelector(".row-two").style.display = "none"
    })