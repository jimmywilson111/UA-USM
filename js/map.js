(function () {
    var setting = {
        "width": 1920,
        "zoom": 17,
        "queryString": "OOO «ТД УКРСПЕЦМАШ» - запчасти для спецтехники, погрузчиков, бульдозеров, экскаваторов, Kyiv, Ukraine",
        "place_id": "ChIJK89kiZHN1EARo5HLSi97zco",
        "satellite": false,
        "centerCoord": [50.49556677038944, 30.46384195740968],
        "cid": "0xcacd7b2f4acb91a3",
        "lang": "en",
        "cityUrl": "/ukraine/kiev",
        "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
        "embed_id": "282934"
    };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=282934';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();