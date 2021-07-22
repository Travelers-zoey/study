let qs = require("QS");
function ajax(options) {
  this.url = options.url;
  this.method = options.method;
  this.data = qs.stringify(options.data);
  this.headers = options.headers;
  this.success =
    options.success && typeof options.success === "function"
      ? options.success
      : function (response) {
          console.log(response, "请求成功");
        };
  this.error =
    options.error && typeof options.error === "function"
      ? options.error
      : function (error) {
          console.log(error, "请求失败");
        };
  const XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;
  let xhr = new XMLHttpRequest();
  xhr.open(this.method, this.url);
  let that = this;

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status < 304) {
        let _response = JSON.parse(xhr.responseText);
        if (
          _response &&
          typeof _response.ret !== undefined &&
          _response.ret === 0
        ) {
          that.success(xhr.responseText);
        } else {
          console.log(_response);
          if (_response.ret == "50001") {
            console.log("您未登录");
          } else {
            console.log(
              _response && _response.msg ? _response.msg : "数据请求错误！"
            );
          }
        }
      } else {
        that.error("请求失败");
      }
    }
  };
  if (this.method.toLowerCase() === "post") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }
  xhr.send(this.method.toLowerCase() === "post" ? this.data : null);
}
ajax({
  url: "http://psi.saas-test.dmallmax.com/basic/vender/list?owner_id=1&rn=15&pn=0",
  method: "post",
  data: {
    owner_id: 1,
    rn: 15,
    pn: 0,
  },
  success: function (res) {
    console.log(res, "res");
  },
});