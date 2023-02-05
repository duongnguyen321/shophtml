var myFullpage = new fullpage("#main", {
    anchors: ['banner', 'categories', 'products', 'discount', 'best-sells', 'top-trending', 'download-app', 'benefits', 'infomation'],
    menu: "#header",
    continuousVertical: true,
    continuousHorizontal: true,
    navigation: true,
    navigationTooltips: ['Trang chủ', 'Danh mục', 'Sản phẩm', 'Giảm giá', 'Sản phẩm bán chạy', 'Sản phẩm xu hướng', 'Tải ứng dụng', 'Lợi ích', 'Thông tin'],
    showActiveTooltip: true,
    afterLoad: function (origin, destination, direction, trigger) {
        // console.log("afterLoad: destination:" + destination.index);
    },
    onLeave: function (origin, destination, direction, trigger) {
        // console.log("onLeave: destination:" + destination.index);
    },
});