let body = document.querySelector("body");
body.style.margin = "0px";
body.style.backgroundColor = "rgb(236,236,236)";

document.body.style.margin = "0";


// Create a new header element
let header = document.createElement("header");
header.style.margin = "0px";
header.style.display = "flex";
header.style.padding = "20px";
header.style.backgroundColor = "rgb(255,255,255)";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

// Create a new h1 element for the header
let heading = document.createElement("h1");
heading.textContent = "AVVATA"; 
heading.style.color = "green";
heading.style.padding = "0";
heading.style.margin = "0px";
heading.style.margin = "0px";

// Create a navigation element
let nav = document.createElement("nav");
nav.style.marginRight = "10px";

// Create ul element
let ul = document.createElement("ul");
ul.style.display = "flex";
ul.style.margin = "0";
ul.style.padding = "0";
ul.style.listStyleType = "none";

// Array of navigation links
let navLinks = ["Home", "About", "Service", "Contact"];

// Loop through the array and create li and a elements for each link
navLinks.forEach(function(linkText, index) {
    let li = document.createElement("li");
    li.style.marginLeft = (index === 0) ? "0" : "20px";
    li.style.color = "green";

    let a = document.createElement("a");
    a.textContent = linkText;
    a.style.color = "green";
    a.style.textDecoration = "none";

    li.appendChild(a);
    ul.appendChild(li);
});

// Append the ul to the navigation element
nav.appendChild(ul);

// Append the heading and navigation to the header element
header.appendChild(heading);
header.appendChild(nav);

// Append the header to the body of the document
document.body.appendChild(header);

// Create the grid container
const gridContainer = document.createElement("div");
gridContainer.style.display = "grid";
gridContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(5, 1fr)";
gridContainer.style.gap = "10px";
gridContainer.style.boxSizing = "border-box";
gridContainer.style.margin = "0px";
gridContainer.style.padding = "15px";


// Loop to create 15 numbered products
for (let i = 1; i <= 15; i++) {
    const product = document.createElement("div");
    product.style.padding = "20px";
    product.style.backgroundColor = "rgb(255,255,255)";
    product.style.border = "1px solid rgb(221,221,221)";
    product.style.display = "block";
    product.style.boxSizing = "border-box";
    product.style.justifyContent = "center";
    product.style.textAlign = "center";
    product.style.color = "rgb(136,136,136)";
    product.style.borderRadius = "6px";
    product.style.transition = "transform 0.2s"; // إضافة تحول تدريجي للتحجيم

    // تعريف دالة onmouseenter لتغيير مظهر العنصر عند التركيز عليه
    product.onmouseenter = function() {
        this.style.backgroundColor = "rgb(200,200,200)";
        this.style.color = "rgb(0,0,0)";
        this.style.transform = "scale(1.1)"; // تكبير العنصر
    };

    // تعريف دالة onmouseleave لإعادة الحجم الأصلي عند خروج الماوس
    product.onmouseleave = function() {
        this.style.backgroundColor = "rgb(255,255,255)";
        this.style.color = "rgb(136,136,136)";
        this.style.transform = "scale(1)"; // إعادة العنصر لحجمه الأصلي
    };

    // Create span for the number
    const numSpan = document.createElement("span");
    numSpan.textContent = i;
    numSpan.style.fontSize = "40px";
    numSpan.style.color = "black";
    numSpan.style.fontWeight = "normal";
    numSpan.style.display = "block";
    numSpan.style.marginBottom = "10px";
    numSpan.style.marginTop = "10px";

    // Create span for the word "product"
    const productSpan = document.createElement("span");
    productSpan.textContent = "product";
    productSpan.style.fontSize = "16px";
    productSpan.style.color = "gray";
    productSpan.style.fontWeight = "normal";
    productSpan.style.display = "block";

    // Append both spans to the product
    product.appendChild(numSpan);
    product.appendChild(productSpan);

    gridContainer.appendChild(product);
}

//creat footer
let footer = document.createElement("footer");
footer.textContent = "GreenGeek 2024";
footer.style.backgroundColor = 'rgb(35,169,110)';
footer.style.fontSize = '26px';
footer.style.textAlign = 'center';
footer.style.padding = '20px';
footer.style.color = 'rgb(255,255,255)';




document.body.appendChild(gridContainer);
document.body.appendChild(footer);
