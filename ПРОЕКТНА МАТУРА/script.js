let kupiSegaElements = document.querySelectorAll(".kupi");
let tableBody = document.querySelector(".offcanvas tbody");
kupiSegaElements.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("zdravo");
    let img = el.closest(".box").querySelector("img").src;
    let price = el.closest(".box").querySelector("span").textContent;
    let title = el.closest(".box").querySelector("h3").textContent;
    console.log(title);

    let html = ` <tr>
    <td data-th="Product">
      <div class="row">
        <div class="col-sm-2 hidden-xs">
          <img
            src="${img}"
            alt="..."
            class="img-responsive"
          />
        </div>
        <div class="col-sm-10">
          <h4 class="nomargin">${title}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </td>
    <td data-th="Price" class="price">${price}</td>
    <td data-th="Quantity">
      <input
        type="number"
        class="form-control text-center"
        value="1"
      />
    </td>
    <td data-th="Subtotal" class="subtotal text-center">$5.11</td>
    <td class="actions" data-th="">
      <button class="btn btn-info btn-sm">
        <i class="fa fa-refresh"></i>
      </button>
      <button class="btn btn-danger btn-sm">
        <i class="fa fa-trash-o"></i>
      </button>
    </td>
  </tr>`;
    tableBody.insertAdjacentHTML("afterbegin", html);

    let subtotalEl = tableBody.querySelector(".subtotal");
    subtotalEl.textContent = price;
    if (tableBody.innerHTML != "") {
      console.log("ok");
      let sum = 0;
      let priceNumberEl = tableBody.querySelectorAll(".price");

      priceNumberEl.forEach((price) => {
        let priceNum = Number(price.textContent.slice(1));
        sum += priceNum;
      });
      let totalEl = document.querySelector(".total");
      totalEl.textContent = sum;
    }
  });
});
const checkoutEl = document.querySelector(".checkout");
checkoutEl.addEventListener("click", (e) => {
  e.preventDefault();
  tableBody.innerHTML = "<h3>Кошницата е празна!</h3>";
});
