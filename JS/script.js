document.addEventListener("DOMContentLoaded", function(){
  let cards = document.querySelectorAll(".card")
  let total_price = document.querySelectorAll(".total")[0]

  Array.from(cards).forEach(card => {
    const unit_price = card.getElementsByClassName("unit-price")[0];
    let quantity = card.getElementsByClassName("quantity")[0];
    let plus = card.getElementsByClassName("fa-plus-circle")[0];
    let remove = card.getElementsByClassName("fa-minus-circle")[0];
    let trash = card.getElementsByClassName("fa-trash-alt")[0];
    let like = card.getElementsByClassName("fa-heart")[0];
  
// plus button
    plus.addEventListener("click", () => {
      quantity.textContent = parseInt(quantity.textContent)+1
      total_price.textContent = parseInt(total_price.textContent) + parseInt(unit_price.textContent)
    })

    plus.addEventListener("mousemove", ()=> {
      plus.style.color = "grey"
    })
    plus.addEventListener("mouseout", () => {
      plus.style.color = "black"
    })
  

    
// minus button
    remove.addEventListener("click", () => {
      quantity.textContent = parseInt(quantity.textContent)-1
      total_price.textContent = parseInt(total_price.textContent) - parseInt(unit_price.textContent)

  })

  remove.addEventListener("mousemove", ()=> {
    remove.style.color = "grey"
  })
  remove.addEventListener("mouseout", () => {
    remove.style.color = "black"
  })


//  trash button 
  trash.addEventListener("click", () => {
    card.remove()
    total_price.textContent = parseInt(total_price.textContent) - (parseInt(unit_price.textContent) * parseInt(quantity.textContent))
  })

  trash.addEventListener("mousemove", ()=> {
    trash.style.color = "grey"
  })
  trash.addEventListener("mouseout", () => {
    trash.style.color = "#de6b5c"
  })

// like button
  like.addEventListener("mousemove", ()=> {
    like.style.color = "grey"
  })
  like.addEventListener("mouseout", () => {
    like.style.color = "black"
  })

  like.addEventListener("click", () => {
    like.style.color = "red";
    } )
  })
  
  })
