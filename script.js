var tg = window.Telegram && window.Telegram.WebApp
  ? window.Telegram.WebApp
  : null;

if (tg) {
  tg.ready();
  tg.expand();

  try {
    tg.setHeaderColor("#c41e3a");
    tg.setBackgroundColor("#f5efe7");
  } catch (e) {}
}

/* =========================================================
   SPLASH SCREEN ANIMATSIYASI (VAQT 4 SONIYAGA UZAYTIRILDI)
   ========================================================= */
window.addEventListener('load', function() {
  setTimeout(function() {
    var splash = document.getElementById('splash-screen');
    if(splash) {
      splash.classList.add('fade-out');
      setTimeout(function() {
        splash.style.display = 'none';
      }, 600); // 0.6 soniya davomida yo'qoladi
    }
  }, 4000); // <-- 4000ms = 4 soniya davomida ekranda turadi
});


/* =========================================================
   40 TA MAHSULOT
   ========================================================= */

var products = [
  {
    id: "baland-navli",
    name: "MO'TABAR",
    image: "images/motabar1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli yuqori sifatli un",
    price: "295 000 som/50 kg",
    nav: "1-navli un",
    advantage: "Xamir tez va yaxshi ko'tariladi yumshoq va xushbo'y chiqadi",
    bestFor: "Non uchun ideal"
  },
  {
    id: "birinchi-nav",
    name: "MO'TABAR",
    image: "images/motabar3.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 2-navli un",
    price: "250 000 som/50 kg",
    nav: "2-navli un",
    advantage: "Mikroelementlar va tabiiy yog'larga boy",
    bestFor: "Sog'lom ovqatlar va kundalik non uchun"
  },
  {
    id: "ikkinchi-nav",
    name: "QADIMGI-NAV",
    image: "images/motabarq.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan qadimgi nav un",
    price: "130 000 som/50 kg",
    nav: "Qadimgi-Nav",
    advantage: "Oqsil va vitaminlarga boy, tabiiy va to'yimli",
    bestFor: "Maxsus parhez va sog'lom ovqatlanish uchun"
  },
  {
    id: "semolina",
    name: "ADMIRAL",
    image: "images/admiral1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "280 000 som/50 kg",
    nav: "1-navli un",
    advantage: "Yuqori sifat",
    bestFor: "Non"
  },
  {
    id: "kepak",
    name: "ADMIRAL",
    image: "images/admiral3.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan kepak",
    price: "230 000 som/50 kg",
    nav: "2-navli un",
    advantage: "Kaliy, temir va kaltsiyga boy",
    bestFor: "Sog'lom ovqatlanish va dietalar uchun"
  },
  {
    id: "mayda-kepak",
    name: "ADMIRAL",
    image: "images/admiralv.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan mayda kepak",
    price: "388 000 som/50 kg",
    nav: "Oliy-Nav",
    advantage: "Pishiriqlar yumshoq va Xushboy chiqadi",
    bestFor: "Non va Pishiriqlar"
  },
  {
    id: "elite-un",
    name: "CHESTER",
    image: "images/chester.jpg",
    desc: "O'zbekistonda ishlab chiqarilgan elita un",
    price: "270 000 som/50 kg",
    nav: "1-navli un",
    advantage: "Eng yuqori sifatli, xamir havodor va yumshoq",
    bestFor: "Tort va elita pishiriqlar uchun"
  },
  {
    id: "yumshoq-un",
    name: "CORNER",
    image: "images/corner.jpg",
    desc: "O'zbekistonda ishlab chiqarilgan 1-navli un",
    price: "225 000 som/50 kg",
    nav: "1-nav",
    advantage: "Yumshoq xamir",
    bestFor: "Yumshoq non va pishiriqlar uchun"
  },
  {
    id: "qattiq-un",
    name: "DANI-NAN",
    image: "images/daninan1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "150 000 som/25 kg",
    nav: "1-nav",
    advantage: "Mustahkam xamir va yaxshi saqlanish xususiyati",
    bestFor: "Manti, chuchvara va qattiq xamir uchun"
  },
  {
    id: "maxsus-non",
    name: "DANI-NAN",
    image: "images/daninan50v.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan premium un",
    price: "530 000 som/50 kg",
    nav: "Oliy-Navli un",
    advantage: "Yuqori sifatli",
    bestFor: "Maxsus non va pishiriq turlari uchun"
  },
  {
    id: "tez-pishir",
    name: "DANI-NAN",
    image: "images/daninan501.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "290 000 som/50 kg",
    nav: "1-nav",
    advantage: "Xamir tez kotariladi yumshoq va xushboy",
    bestFor: "Pishiriqlar va non uchun"
  },
  {
    id: "soglom-un",
    name: "DANI-NAN",
    image: "images/daninan503.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "250 000 som/50 kg",
    nav: "1-nav",
    advantage: "Vitamin va minerallarga boy",
    bestFor: "Sog'lom ovqatlar va dietalar uchun"
  },
  {
    id: "bolalar-un",
    name: "DANI-NAN",
    image: "images/daninanv.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan premium un",
    price: "270 000 som/25 kg",
    nav: "Oliy Navli un",
    advantage: "Yumshoq va sifatli",
    bestFor: "Bolalar pishiriqlari va yumshoq non uchun"
  },
  {
    id: "restoran-un",
    name: "ORDABASY",
    image: "images/darkhan1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan elita un",
    price: "300 000 som/50 kg",
    nav: "1-navli un",
    advantage: "Professional sifat",
    bestFor: "Restoran pishiriqlari va tortlar uchun"
  },
  {
    id: "universal-un",
    name: "ORDABASY",
    image: "images/darkhanv.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "390 000 som/50 kg",
    nav: "Oliy-nav",
    advantage: "Universal va ko'p turdagi pishiriqlarga mos",
    bestFor: "Hamma turdagi pishiriqlar uchun"
  },
  {
    id: "qora-non",
    name: "DIKHAN-BABA",
    image: "images/dikhanbaba1.jpg",
    desc: "O'zbekistonda ishlab chiqarilgan 1-navli un",
    price: "300 000 som/50 kg",
    nav: "1-nav",
    advantage: "Qora non uchun maxsus",
    bestFor: "Qora non va maxsus non turlari uchun"
  },
  {
    id: "oq-non",
    name: "DOBRIY MELNIK",
    image: "images/dobriy.jpg",
    desc: "O'zbekistonda ishlab chiqarilgan 1-navli un",
    price: "230 000 som/50 kg",
    nav: "1-nav",
    advantage: "Yengil va havodor",
    bestFor: "Oq non va bulka uchun"
  },
  {
    id: "patir-un",
    name: "KEREMET",
    image: "images/keremet1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan premium un",
    price: "280 000 som/50 kg",
    nav: "1-Navli un",
    advantage: "Qatlamli xamir uchun ideal, yumshoq va mayin",
    bestFor: "Patir non va qatlamli pishiriqlar uchun"
  },
  {
    id: "somsa-un",
    name: "ELIT KOSTANAY",
    image: "images/kostanay1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "250 000 som/50 kg",
    nav: "1-nav",
    advantage: "Mustahkam va elastik",
    bestFor: "Somsa va chuchvara uchun"
  },
  {
    id: "manti-un",
    name: "SALAMAT",
    image: "images/salamat1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan premium un",
    price: "300 000 som/50 kg",
    nav: "2-navli un",
    advantage: "Mustahkam xamir",
    bestFor: "Manti va xinkal uchun"
  },
  {
    id: "xamir-un",
    name: "SALAMAT",
    image: "images/salamatv.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "420 000 som/50 kg",
    nav: "Oliy-nav",
    advantage: "Universal xamir uchun mos",
    bestFor: "Hamma turdagi xamirlar uchun"
  },
  {
    id: "kruasan-un",
    name: "TROYKA",
    image: "images/troyka.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan premium un",
    price: "240 000 som/50 kg",
    nav: "1-Navli un",
    advantage: "Qatlamli pishiriqlar uchun ideal",
    bestFor: "Kruasan va qatlamli pishiriqlar uchun"
  },
  {
    id: "donar-un",
    name: "UNO",
    image: "images/uno1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "290 000 som/50 kg",
    nav: "1-nav",
    advantage: "Elastik va yumshoq",
    bestFor: "Donar va lavash uchun"
  },
  {
    id: "motabar-un",
    name: "MO'TABAR",
    image: "images/motabarv.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan premium un",
    price: "425 000 som/50 kg",
    nav: "Oliy-Nav",
    advantage: "Eng yuqori sifatli",
    bestFor: "Hamma turdagi pishiriqlar uchun"
  },
  {
    id: "bugdoy-un",
    name: "YARKO",
    image: "images/yarko1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "275 000 som/50 kg",
    nav: "1-nav",
    advantage: "Toza va sifatli",
    bestFor: "Hamma turdagi pishiriqlar uchun"
  },
  {
    id: "sary-un",
    name: "YARKO",
    image: "images/yarkov.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan premium un",
    price: "375 000 som/50 kg",
    nav: "Oliy-Nav",
    advantage: "O'ziga xos ta'm",
    bestFor: "Maxsus pishiriqlar va tortlar uchun"
  },
  {
    id: "quruq-un",
    name: "ZO'R",
    image: "images/zor1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "270 000 som/50 kg",
    nav: "1-nav",
    advantage: "Yaxshi saqlanadi",
    bestFor: "Non va quruq xamir mahsulotlari uchun"
  },
  {
    id: "yangi-un",
    name: "ZO'R",
    image: "images/zorv.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan 1-navli un",
    price: "370 000 som/50 kg",
    nav: "1-nav",
    advantage: "Yangi va xushbo'y",
    bestFor: "Hamma turdagi pishiriqlar va non uchun"
  },
  {
    id: "yangi1",
    name: "PREMIUM GOLD",
    image: "images/motabar1.jpg",
    desc: "Yuqori sifatli premium un",
    price: "450 000 som/50 kg",
    nav: "Oliy-Nav",
    advantage: "Eng sifatli, xamir mukammal ko'tariladi",
    bestFor: "Elita pishiriqlar va tortlar"
  },
  {
    id: "yangi2",
    name: "UN NAVI",
    image: "images/admiral1.jpg",
    desc: "Qozog'istonda ishlab chiqarilgan",
    price: "320 000 som/50 kg",
    nav: "1-nav",
    advantage: "Universal va sifatli",
    bestFor: "Barcha turdagi pishiriqlar"
  },
  {
    id: "yangi3",
    name: "SARVINOZ",
    image: "images/motabar3.jpg",
    desc: "Maxsus retsept bo'yicha tayyorlangan",
    price: "380 000 som/50 kg",
    nav: "Oliy-Nav",
    advantage: "Yumshoq va mayin xamir",
    bestFor: "Kruasan va qatlamli pishiriqlar"
  },
  {
    id: "yangi4",
    name: "NUR-UN",
    image: "images/motabarq.jpg",
    desc: "O'zbekistonda ishlab chiqarilgan",
    price: "290 000 som/50 kg",
    nav: "1-nav",
    advantage: "Yengil va havodor",
    bestFor: "Non va bulka uchun"
  },
  {
    id: "yangi5",
    name: "MAXSUS ELIT",
    image: "images/keremet1.jpg",
    desc: "Eng yuqori sifatli",
    price: "500 000 som/50 kg",
    nav: "Oliy-Nav",
    advantage: "Maxsus pishiriqlar uchun ideal",
    bestFor: "Tort va elita pishiriqlar"
  },
  {
    id: "bagdod",
    name: "BAGDOD",
    image: "images/bagdod.jpg",
    desc: "....",
    price: "....",
    nav: "Yangi",
    advantage: "....",
    bestFor: "...."
  },
  {
    id: "beshyulduz",
    name: "BESHYULDUZ",
    image: "images/beshyulduz.jpg",
    desc: "....",
    price: "....",
    nav: "Yangi",
    advantage: "....",
    bestFor: "...."
  },
  {
    id: "grandmill",
    name: "GRAND MILL",
    image: "images/grandmill.jpg",
    desc: "....",
    price: "....",
    nav: "Yangi",
    advantage: "....",
    bestFor: "...."
  },
  {
    id: "ihsan",
    name: "IHSAN",
    image: "images/ihsan.jpg",
    desc: "....",
    price: "....",
    nav: "Yangi",
    advantage: "....",
    bestFor: "...."
  },
  {
    id: "nonushta",
    name: "NONUSHTA",
    image: "images/nonushta.jpg",
    desc: "....",
    price: "....",
    nav: "Yangi",
    advantage: "....",
    bestFor: "...."
  },
  {
    id: "oltin",
    name: "OLTIN",
    image: "images/oltin.jpg",
    desc: "....",
    price: "....",
    nav: "Yangi",
    advantage: "....",
    bestFor: "...."
  },
  {
    id: "sulton",
    name: "SULTON",
    image: "images/sulton.jpg",
    desc: "....",
    price: "....",
    nav: "Yangi",
    advantage: "....",
    bestFor: "...."
  }
];

/* =========================================================
   PRODUCT FUNCTIONS
   ========================================================= */

function findProduct(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return null;
}

function priceNumber(priceStr) {
  if (!priceStr || priceStr === "....") {
    return 0;
  }
  var head = priceStr.split("som")[0];
  var n = parseInt(head.replace(/[^\d]/g, ""), 10);
  return isNaN(n) ? 0 : n;
}

function formatSom(n) {
  return n.toLocaleString("ru-RU").replace(/,/g, " ") + " so'm";
}

/* =========================================================
   STATE
   ========================================================= */

var cart = {};
var favorites = {};
var currentPage = "home";
var searchTerm = "";
var activeCategory = "Barchasi";
var sheetProductId = null;
var sheetQtyVal = 1;

/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function loadState() {
  try {
    cart = JSON.parse(localStorage.getItem("motabar_cart") || "{}");
  } catch (e) {
    cart = {};
  }
  try {
    favorites = JSON.parse(localStorage.getItem("motabar_favs") || "{}");
  } catch (e) {
    favorites = {};
  }
}

function saveCart() {
  try {
    localStorage.setItem("motabar_cart", JSON.stringify(cart));
  } catch (e) {}
}

function saveFavs() {
  try {
    localStorage.setItem("motabar_favs", JSON.stringify(favorites));
  } catch (e) {}
}

/* =========================================================
   CART
   ========================================================= */

function cartCount() {
  var c = 0;
  for (var k in cart) {
    c += cart[k];
  }
  return c;
}

function cartTotal() {
  var t = 0;
  for (var id in cart) {
    var p = findProduct(id);
    if (p) {
      t += priceNumber(p.price) * cart[id];
    }
  }
  return t;
}

function addToCart(id, qty) {
  cart[id] = (cart[id] || 0) + qty;
  saveCart();
  renderCartUI();
  pulseCartFab();
  haptic("light");
}

function setCartQty(id, qty) {
  if (qty <= 0) {
    delete cart[id];
  } else {
    cart[id] = qty;
  }
  saveCart();
  renderCartUI();
  haptic("light");
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  renderCartUI();
}

/* =========================================================
   TOAST
   ========================================================= */

function showToast(msg, type) {
  var container = document.getElementById("toast-container");
  if (!container) return;
  var el = document.createElement("div");
  el.className = "toast" + (type ? " " + type : "");
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(function () {
    el.classList.add("leaving");
    setTimeout(function () {
      el.remove();
    }, 300);
  }, 2600);
}

/* =========================================================
   TELEGRAM HAPTIC
   ========================================================= */

function haptic(style) {
  if (tg && tg.HapticFeedback) {
    try {
      tg.HapticFeedback.impactOccurred(style || "light");
    } catch (e) {}
  }
}

/* =========================================================
   FEATURED PRODUCTS
   ========================================================= */

function renderFeatured() {
  var grid = document.getElementById("featured-grid");
  if (!grid) return;
  grid.innerHTML = "";
  for (var i = 0; i < 4; i++) {
    var p = products[i];
    var el = document.createElement("div");
    el.className = "product-card-mini";
    el.innerHTML = '<img src="' + p.image + '" alt="' + p.name + '" />' +
      '<div class="card-name">' + p.name + "</div>" +
      '<div class="card-price">' + p.price + "</div>";
    el.onclick = function () {
      goToPage("mahsulotlar");
    };
    grid.appendChild(el);
  }
}

/* =========================================================
   CATEGORY CHIPS
   ========================================================= */

function renderChips() {
  var row = document.getElementById("chip-row");
  if (!row) return;
  var cats = ["Barchasi"];
  for (var i = 0; i < products.length; i++) {
    if (cats.indexOf(products[i].nav) === -1) {
      cats.push(products[i].nav);
    }
  }
  row.innerHTML = "";
  cats.forEach(function (cat) {
    var chip = document.createElement("div");
    chip.className = "chip" + (cat === activeCategory ? " active" : "");
    chip.textContent = cat;
    chip.onclick = function () {
      activeCategory = cat;
      renderChips();
      renderProducts();
      haptic("light");
    };
    row.appendChild(chip);
  });
}

/* =========================================================
   SEARCH + FILTER
   ========================================================= */

function getFilteredProducts() {
  var term = searchTerm.trim().toLowerCase();
  return products.filter(function (p) {
    var matchesCat = activeCategory === "Barchasi" || p.nav === activeCategory;
    if (!matchesCat) {
      return false;
    }
    if (!term) {
      return true;
    }
    return (p.name + " " + p.desc + " " + p.nav).toLowerCase().indexOf(term) !== -1;
  });
}

/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {
  var list = document.getElementById("product-list");
  var empty = document.getElementById("empty-state");
  if (!list) return;
  var filtered = getFilteredProducts();
  list.innerHTML = "";

  if (filtered.length === 0) {
    if (empty) {
      empty.classList.add("show");
    }
  } else {
    if (empty) {
      empty.classList.remove("show");
    }
  }

  filtered.forEach(function (p) {
    var el = document.createElement("div");
    el.className = "product-card-full";
    var isFav = !!favorites[p.id];
    
    el.innerHTML = 
      '<button class="fav-toggle ' + (isFav ? "active" : "") + '" onclick="toggleFavorite(event,\'' + p.id + '\')">' +
        '<svg viewBox="0 0 24 24">' +
          '<path d="M12 21s-6.7-4.35-9.3-8.28C1.02 10.2 1.63 6.6 4.6 5.1c2.2-1.1 4.6-.3 5.9 1.5.4.55.8 1.1 1.5 1.1s1.1-.55 1.5-1.1c1.3-1.8 3.7-2.6 5.9-1.5 2.97 1.5 3.58 5.1 1.9 7.62C18.7 16.65 12 21 12 21z"/>' +
        "</svg>" +
      "</button>" +
      '<div class="product-card-top" onclick="openProductModal(\'' + p.id + '\')">' +
        '<div class="product-card-emoji">' +
          '<img src="' + p.image + '" alt="' + p.name + '" />' +
        "</div>" +
        '<div class="product-card-info">' +
          "<h3>" + p.name + "</h3>" +
          '<div class="price-tag">' + p.price + "</div>" +
          '<span class="nav-badge-tag">' + p.nav + "</span>" +
        "</div>" +
      "</div>" +
      '<div class="product-card-body">' +
        "<p>" + p.desc + "</p>" +
        '<div class="product-props">' +
          '<div class="product-prop">' +
            '<div class="dot">✓</div>' +
            "<span><strong>Afzalligi:</strong> " + p.advantage + "</span>" +
          "</div>" +
          '<div class="product-prop">' +
            '<div class="dot">✓</div>' +
            "<span><strong>Tavsiya:</strong> " + p.bestFor + "</span>" +
          "</div>" +
        "</div>" +
        '<div class="card-actions">' +
          '<button class="btn btn-add" onclick="quickAdd(\'' + p.id + '\')">Savatga qo\'shish</button>' +
        "</div>" +
      "</div>";

    list.appendChild(el);
  });

  var count = document.getElementById("product-count");
  if (count) {
    count.textContent = products.length;
  }
  initScrollReveal();
}

/* =========================================================
   QUICK ADD
   ========================================================= */

function quickAdd(id) {
  addToCart(id, 1);
  showToast("Savatga qo'shildi ✓", "success");
}

/* =========================================================
   FAVORITE
   ========================================================= */

function toggleFavorite(evt, id) {
  evt.stopPropagation();
  if (favorites[id]) {
    delete favorites[id];
  } else {
    favorites[id] = true;
  }
  saveFavs();
  renderProducts();
  haptic("light");
}

/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProductModal(id) {
  var p = findProduct(id);
  if (!p) return;
  sheetProductId = id;
  sheetQtyVal = 1;

  document.getElementById("sheet-img").src = p.image;
  document.getElementById("sheet-img").alt = p.name;
  document.getElementById("sheet-nav").textContent = p.nav;
  document.getElementById("sheet-name").textContent = p.name;
  document.getElementById("sheet-price").textContent = p.price;
  document.getElementById("sheet-desc").textContent = p.desc;
  document.getElementById("sheet-adv").textContent = p.advantage;
  document.getElementById("sheet-best").textContent = p.bestFor;
  document.getElementById("sheet-qty").textContent = sheetQtyVal;

  var favBtn = document.getElementById("sheet-fav");
  if (favBtn) {
    favBtn.classList.toggle("active", !!favorites[id]);
  }

  document.getElementById("modal-overlay").classList.add("show");
  document.body.style.overflow = "hidden";

  if (tg && tg.BackButton) {
    try {
      tg.BackButton.show();
      tg.BackButton.onClick(closeProductModal);
    } catch (e) {}
  }
}

/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeProductModal(evt) {
  if (evt && evt.target !== evt.currentTarget && evt.type === "click" && evt.currentTarget.id !== "modal-overlay") {
    return;
  }
  var overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.classList.remove("show");
  }
  document.body.style.overflow = "";
  sheetProductId = null;
  if (tg && tg.BackButton) {
    try {
      tg.BackButton.hide();
    } catch (e) {}
  }
}

/* =========================================================
   MODAL QUANTITY
   ========================================================= */

function sheetQty(delta) {
  sheetQtyVal = Math.max(1, sheetQtyVal + delta);
  document.getElementById("sheet-qty").textContent = sheetQtyVal;
  haptic("light");
}

/* =========================================================
   ADD FROM MODAL
   ========================================================= */

function addToCartFromSheet() {
  if (!sheetProductId) return;
  addToCart(sheetProductId, sheetQtyVal);
  showToast("Savatga qo'shildi ✓ (" + sheetQtyVal + " qop)", "success");
  closeProductModal();
}

/* =========================================================
   FAVORITE FROM MODAL
   ========================================================= */

function toggleFavoriteFromSheet() {
  if (!sheetProductId) return;
  if (favorites[sheetProductId]) {
    delete favorites[sheetProductId];
  } else {
    favorites[sheetProductId] = true;
  }
  saveFavs();
  var btn = document.getElementById("sheet-fav");
  if (btn) {
    btn.classList.toggle("active", !!favorites[sheetProductId]);
  }
  renderProducts();
  haptic("light");
}

/* =========================================================
   SEARCH
   ========================================================= */

function onSearchInput() {
  var input = document.getElementById("search-input");
  if (!input) return;
  searchTerm = input.value;
  var clear = document.getElementById("search-clear");
  if (clear) {
    clear.classList.toggle("show", searchTerm.length > 0);
  }
  renderProducts();
}

function clearSearch() {
  searchTerm = "";
  var input = document.getElementById("search-input");
  if (input) {
    input.value = "";
  }
  var clear = document.getElementById("search-clear");
  if (clear) {
    clear.classList.remove("show");
  }
  renderProducts();
}

/* =========================================================
   CART UI
   ========================================================= */

function renderCartUI() {
  var count = cartCount();
  var fab = document.getElementById("cart-fab");
  if (fab) {
    fab.classList.toggle("show", count > 0 && currentPage !== "zakaz");
  }
  var fabCount = document.getElementById("cart-fab-count");
  if (fabCount) {
    fabCount.textContent = count;
  }
  var badge = document.getElementById("nav-cart-badge");
  if (badge) {
    badge.textContent = count > 9 ? "9+" : count;
    badge.classList.toggle("show", count > 0);
  }
  var emptyState = document.getElementById("cart-empty-state");
  var section = document.getElementById("cart-section");

  if (count === 0) {
    if (emptyState) {
      emptyState.classList.add("show");
    }
    if (section) {
      section.classList.remove("show");
    }
  } else {
    if (emptyState) {
      emptyState.classList.remove("show");
    }
    if (section) {
      section.classList.add("show");
    }
    var itemCount = document.getElementById("cart-item-count");
    if (itemCount) {
      itemCount.textContent = "(" + count + ")";
    }
    var wrap = document.getElementById("cart-items");
    if (wrap) {
      wrap.innerHTML = "";
      Object.keys(cart).forEach(function (id) {
        var p = findProduct(id);
        if (!p) return;
        var qty = cart[id];
        var line = priceNumber(p.price) * qty;
        var row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML =
          '<img src="' + p.image + '" alt="' + p.name + '" />' +
          '<div class="cart-item-info">' +
            '<div class="name">' + p.name + " — " + p.nav + "</div>" +
            '<div class="unit-price">' + formatSom(line) + "</div>" +
          "</div>" +
          '<div class="cart-item-controls">' +
            '<div class="qty-stepper">' +
              '<button type="button" onclick="setCartQty(\'' + id + "'," + (qty - 1) + ')">−</button>' +
              "<span>" + qty + "</span>" +
              '<button type="button" onclick="setCartQty(\'' + id + "'," + (qty + 1) + ')">+</button>' +
            "</div>" +
            '<button class="cart-remove" onclick="removeFromCart(\'' + id + "')\">🗑</button>" +
          "</div>";
        wrap.appendChild(row);
      });
      var totalEl = document.getElementById("cart-total");
      if (totalEl) {
        totalEl.textContent = formatSom(cartTotal());
      }
    }
  }
  updateMainButton();
}

/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function goToPage(page) {
  document.querySelectorAll(".page").forEach(function (el) {
    el.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach(function (el) {
    el.classList.remove("active");
  });
  var pageEl = document.getElementById("page-" + page);
  if (pageEl) {
    pageEl.classList.add("active");
  }
  var navBtn = document.querySelector('.nav-item[data-page="' + page + '"]');
  if (navBtn) {
    navBtn.classList.add("active");
  }
  currentPage = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderCartUI();
  initScrollReveal();
}

/* =========================================================
   TELEGRAM MAIN BUTTON
   ========================================================= */

function updateMainButton() {
  if (!tg || !tg.MainButton) {
    return;
  }
  try {
    if (currentPage === "zakaz" && cartCount() > 0) {
      tg.MainButton.setText("Buyurtmani yuborish — " + formatSom(cartTotal()));
      tg.MainButton.show();
      tg.MainButton.offClick(handleMainButtonSubmit);
      tg.MainButton.onClick(handleMainButtonSubmit);
    } else {
      tg.MainButton.offClick(handleMainButtonSubmit);
      tg.MainButton.hide();
    }
  } catch (e) {}
}

function handleMainButtonSubmit() {
  submitOrder({ preventDefault: function () {} });
}

/* =========================================================
   LOCATION
   ========================================================= */

function getLocation() {
  var btn = document.getElementById("btn-location");
  if (!btn) return;
  btn.classList.add("loading");
  var done = function () {
    btn.classList.remove("loading");
  };
  if (tg && tg.requestLocation) {
    try {
      tg.requestLocation(function (success, data) {
        done();
        if (success && data) {
          applyLocation(data.latitude, data.longitude);
        } else {
          getLocationBrowser(done);
        }
      });
    } catch (e) {
      getLocationBrowser(done);
    }
  } else {
    getLocationBrowser(done);
  }
}

function getLocationBrowser(done) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        if (done) { done(); }
        applyLocation(position.coords.latitude, position.coords.longitude);
      },
      function () {
        if (done) { done(); }
        showToast("Lokatsiyani olish uchun ruxsat bering yoki manzilni qo'lda yozing.", "error");
      }
    );
  } else {
    if (done) { done(); }
    showToast("Brauzeringiz lokatsiyani qo'llab-quvvatlamaydi.", "error");
  }
}

/* =========================================================
   APPLY LOCATION
   ========================================================= */

function applyLocation(lat, lng) {
  var field = document.getElementById("inp-address");
  if (!field) return;
  field.value = "📍 " + lat + ", " + lng;
  haptic("medium");
  fetch("https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + lng + "&zoom=18&addressdetails=1")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data && data.display_name) {
        field.value = data.display_name;
      }
    })
    .catch(function () {});
}

/* =========================================================
   SUBMIT ORDER
   ========================================================= */

function submitOrder(e) {
  e.preventDefault();
  if (cartCount() === 0) {
    showToast("Avval mahsulot tanlang", "error");
    goToPage("mahsulotlar");
    return;
  }
  var name = document.getElementById("inp-name").value.trim();
  var phoneRaw = document.getElementById("inp-phone").value.trim();
  var address = document.getElementById("inp-address").value.trim();
  var valid = true;
  ["err-name", "err-phone", "err-address"].forEach(clearErr);
  if (name.length < 2) {
    showErr("err-name", "Ism-familiyani kiriting.");
    valid = false;
  }
  var phoneDigits = phoneRaw.replace(/[^0-9]/g, "");
  if (phoneDigits.length < 9) {
    showErr("err-phone", "Telefon raqamni to'liq kiriting (9 ta raqam)");
    valid = false;
  }
  if (address.length < 5) {
    showErr("err-address", "Manzilni aniq kiriting.");
    valid = false;
  }
  if (!valid) {
    haptic("light");
    return;
  }
  var lines = [];
  var total = 0;
  Object.keys(cart).forEach(function (id) {
    var p = findProduct(id);
    if (!p) return;
    var qty = cart[id];
    var lineTotal = priceNumber(p.price) * qty;
    total += lineTotal;
    lines.push("• " + p.name + " (" + p.nav + ") x" + qty + " — " + formatSom(lineTotal));
  });
  var message = "";
  message += "YANGI ZAKAZ - Mo'tabar Un Markazi\n";
  message += "-----------------------------\n";
  message += lines.join("\n") + "\n";
  message += "-----------------------------\n";
  message += "Jami: " + formatSom(total) + "\n";
  message += "Ism: " + name + "\n";
  message += "Telefon: " + phoneRaw + "\n";
  message += "Manzil: " + address + "\n";
  message += "-----------------------------\n";
  message += "Vaqt: " + new Date().toLocaleString("uz-UZ");
  var url = "https://t.me/unbaza_dostavka?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
  cart = {};
  saveCart();
  var form = document.getElementById("order-form");
  if (form) { form.reset(); }
  var phoneInput = document.getElementById("inp-phone");
  if (phoneInput) { phoneInput.value = "+998 "; }
  renderCartUI();
  showSuccess();
  showToast("Zakaz muvaffaqiyatli yuborildi!", "success");
  launchConfetti();
  haptic("medium");
}

/* =========================================================
   ERRORS
   ========================================================= */

function showErr(id, msg) {
  var el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
}

function clearErr(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.textContent = "";
  el.classList.remove("show");
}

/* =========================================================
   SUCCESS
   ========================================================= */

function showSuccess() {
  var msg = document.getElementById("success-message");
  if (msg) {
    msg.classList.add("show");
    setTimeout(function () {
      msg.classList.remove("show");
    }, 5000);
  }
}

/* =========================================================
   MAP
   ========================================================= */

function openMap() {
  window.open("https://www.google.com/maps?q=40.83012940337612,72.3528414804545", "_blank");
}

/* =========================================================
   TELEGRAM
   ========================================================= */

function openTelegram() {
  window.open("https://t.me/unbaza_dostavka", "_blank");
}

/* =========================================================
   ANIMATED STATS
   ========================================================= */

function animateStats() {
  document.querySelectorAll(".stat-num").forEach(function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var current = 0;
    var duration = 900;
    var startTime = null;
    function step(ts) {
      if (!startTime) { startTime = ts; }
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(step);
  });
}

/* =========================================================
   GRAIN ANIMATION
   ========================================================= */

function initGrainField() {
  var field = document.getElementById("grain-field");
  if (!field) return;
  var count = 12;
  for (var i = 0; i < count; i++) {
    var dot = document.createElement("div");
    dot.className = "grain-dot";
    var size = 3 + Math.random() * 5;
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.setProperty("--drift", Math.random() * 40 - 20 + "px");
    dot.style.animationDuration = 6 + Math.random() * 5 + "s";
    dot.style.animationDelay = Math.random() * 8 + "s";
    field.appendChild(dot);
  }
}

/* =========================================================
   RIPPLE EFFECT
   ========================================================= */

function initRipple() {
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".btn") : null;
    if (!btn) return;
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height) * 1.4;
    var span = document.createElement("span");
    span.className = "ripple";
    span.style.width = span.style.height = size + "px";
    span.style.left = e.clientX - rect.left - size / 2 + "px";
    span.style.top = e.clientY - rect.top - size / 2 + "px";
    btn.appendChild(span);
    setTimeout(function () {
      span.remove();
    }, 620);
  });
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

var revealObserver = null;

function initScrollReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in-view");
    });
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  }
  document.querySelectorAll(".reveal:not(.in-view)").forEach(function (el) {
    revealObserver.observe(el);
  });
}

/* =========================================================
   CONFETTI
   ========================================================= */

function launchConfetti() {
  var colors = ["#c41e3a", "#c99a3d", "#8b1538", "#f5efe7", "#2f7d4f"];
  var count = 30;
  for (var i = 0; i < count; i++) {
    var piece = document.createElement("div");
    piece.className = "confetti-piece";
    var size = 6 + Math.random() * 6;
    piece.style.width = size + "px";
    piece.style.height = size * 0.5 + "px";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--fall", window.innerHeight * (0.7 + Math.random() * 0.5) + "px");
    piece.style.setProperty("--spin", Math.random() * 720 - 360 + "deg");
    var duration = 1.4 + Math.random() * 1.1;
    piece.style.animationDuration = duration + "s";
    piece.style.animationDelay = Math.random() * 0.25 + "s";
    document.body.appendChild(piece);
    (function (p, d) {
      setTimeout(function () {
        p.remove();
      }, (d + 0.3) * 1000);
    })(piece, duration);
  }
}

/* =========================================================
   CART FAB ANIMATION
   ========================================================= */

function pulseCartFab() {
  var fab = document.getElementById("cart-fab");
  var count = document.getElementById("cart-fab-count");
  if (!fab) return;
  fab.classList.remove("pulse");
  if (count) { count.classList.remove("bump"); }
  void fab.offsetWidth;
  fab.classList.add("pulse");
  if (count) { count.classList.add("bump"); }
}

/* =========================================================
   APP START
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  loadState();
  renderFeatured();
  renderChips();
  renderProducts();
  renderCartUI();
  animateStats();
  initGrainField();
  initRipple();
  initScrollReveal();

  /* ==========================
     PHONE INPUT
     ========================== */
  var phoneInput = document.getElementById("inp-phone");
  if (phoneInput) {
    phoneInput.value = "+998 ";
    phoneInput.addEventListener("focus", function () {
      if (this.value === "+998 ") {
        this.setSelectionRange(this.value.length, this.value.length);
      }
    });
    phoneInput.addEventListener("input", function () {
      if (!this.value.startsWith("+998 ")) {
        this.value = "+998 " + this.value.replace(/[^0-9]/g, "");
      }
      var numbers = this.value.replace("+998 ", "").replace(/[^0-9]/g, "");
      if (numbers.length > 9) {
        numbers = numbers.slice(0, 9);
      }
      var formatted = "";
      for (var i = 0; i < numbers.length; i++) {
        if (i === 2 || i === 5 || i === 7) {
          formatted += " ";
        }
        formatted += numbers[i];
      }
      this.value = "+998 " + formatted;
    });
  }

  /* ==========================
     KEYBOARD
     ========================== */
  document.querySelectorAll("input, textarea, select").forEach(function (input) {
    input.addEventListener("focus", function () {
      document.body.classList.add("keyboard-open");
      var self = this;
      setTimeout(function () {
        self.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    });
    input.addEventListener("blur", function () {
      document.body.classList.remove("keyboard-open");
    });
  });

  console.log("Mo'tabar Un Markazi — 40 ta mahsulot bilan ishga tushdi!");
});
