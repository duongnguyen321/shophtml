var myFullpage = new fullpage("#main", {
    anchors: ['home', 'categories', 'products', 'promotions', 'hot-deals', 'top-products', 'benefits', 'infomation'],
    menu: "#navigation_list",
    continuousVertical: true,
    continuousHorizontal: true,
    navigation: true,
    navigationTooltips: ['Trang chủ', 'Danh mục', 'Sản phẩm', 'Khuyễn mại', 'Ưu đãi hấp dẫn', 'Sản phẩm hàng đầu', 'Lợi ích', 'Thông tin'],
    showActiveTooltip: true,
    afterLoad: function (origin, destination, direction, trigger) {
        // console.log("afterLoad: destination:" + destination.index);
    },
    onLeave: function (origin, destination, direction, trigger) {
        // console.log("onLeave: destination:" + destination.index);
    },
});