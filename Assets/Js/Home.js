var myFullpage = new fullpage("#main", {
    anchors: ['home', 'categories', 'products', 'promotions', 'hot-deals', 'top-products', 'benefits', 'infomation'],
    menu: "#navigation_list",
    continuousVertical: true,
    continuousHorizontal: true,
    navigation: window.innerWidth >= 1680,
    navigationTooltips: ['Trang chủ', 'Danh mục', 'Sản phẩm', 'Khuyễn mại', 'Ưu đãi hấp dẫn', 'Sản phẩm hàng đầu', 'Lợi ích', 'Thông tin'],
    showActiveTooltip: true,
    slidesNavigation: true,
    paddingTop: "158px",
    fixedElements: "#header",
    recordHistory: false,
});
const form = document.querySelectorAll("form")
for (let i = 0; i < form.length; i++) {
    form[i].addEventListener("submit", function (e) {
        e.preventDefault()
    })
}
const toggleClassItem = (item, classname) => {
    if (item !== null) {
        item.classList.toggle(classname);
    }
};
const addActiveMenu = (item, itemActive) => {
    item.forEach(element => {
        element.addEventListener("click", () => {
            itemActive.forEach(active => {
                if (active !== element) {
                    toggleClassItem(active, "active");
                }
            });
            toggleClassItem(element, "active");
            itemActive = [element];
        });
    });
};
addActiveMenu(
    document.querySelectorAll(".categories_list-item"),
    document.querySelectorAll(".categories_list-item.active")
);
addActiveMenu(
    document.querySelectorAll(".products_list-item"),
    document.querySelectorAll(".products_list-item.active")
);
addActiveMenu(
    document.querySelectorAll(".hot-deals_list-item"),
    document.querySelectorAll(".hot-deals_list-item.active")
);
