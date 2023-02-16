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
const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);
$$("form").forEach((form) => form.addEventListener("submit", (e) => e.preventDefault()));
const toggleClass = (element, classname) => element?.classList.toggle(classname);
const addActiveMenu = (items, activeItems) => {
    items.forEach((item) => item.addEventListener("click", () => {
        activeItems.forEach((activeItem) => activeItem !== item && toggleClass(activeItem, "active"));
        toggleClass(item, "active");
        activeItems = [item];
    }));
};
const getSoldRatio = (itemSold) => {
    const [sold, total] = itemSold.textContent.split(": ")[1].split("/");
    return (sold / total) * 100;
};
addActiveMenu($$(".categories_list-item"), $$(".categories_list-item.active"));
addActiveMenu($$(".products_list-item"), $$(".products_list-item.active"));
addActiveMenu($$(".hot-deals_list-item"), $$(".hot-deals_list-item.active"));
$$(".hot-deals_item-sold").forEach((itemSold, index) => {
    $$(".hot-deals_item-range-value")[index].style.width = `${getSoldRatio(itemSold)}%`;
});