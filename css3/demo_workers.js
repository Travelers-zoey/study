var i = 0;

function timedCount() {
  i = i + 1;
  // postMessage用于向 HTML 页面传回一段消息
  postMessage("我是data" + i);
  setTimeout("timedCount()", 500);
}

timedCount();