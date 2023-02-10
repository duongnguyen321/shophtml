var myFullpage = new fullpage("#main", {
    anchors: ['home', 'categories', 'products', 'promotions', 'hot-deals', 'top-products', 'benefits', 'infomation'],
    menu: "#navigation_list",
    continuousVertical: true,
    continuousHorizontal: true,
    navigation: window.innerWidth >= 1680,
    navigationTooltips: ['Trang chủ', 'Danh mục', 'Sản phẩm', 'Khuyễn mại', 'Ưu đãi hấp dẫn', 'Sản phẩm hàng đầu', 'Lợi ích', 'Thông tin'],
    showActiveTooltip: true,
    slidesNavigation: true,
    paddingTop: "150px",
    fixedElements: "#header",
    recordHistory: false,
});
const form = document.querySelectorAll("form")
for (let i = 0; i < form.length; i++) {
    form[i].addEventListener("submit", function (e) {
        e.preventDefault()
    })
}