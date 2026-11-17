
var user = {
  name: "Tom",
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}

// 1. Anonymous wrapper function
var tomFormat = function(beginMsg, endMsg) {
  format.call(user, beginMsg, endMsg);
};

tomFormat("<<<", ">>>"); // "<<<Tom>>>"

// 2. Using bind()
var tomFormat = format.bind(user);

tomFormat("<<<", ">>>"); // "<<<Tom>>>"
