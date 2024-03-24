function fact(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

function applique(f, tab) {
  return tab.map(f);
}

var msgs = [
  { "msg": "Hello World" },
  { "msg": "Blah Blah" },
  { "msg": "I love cats" },
]

function update() {
  fetch('https://d28cda53-cbc7-4b58-8952-ac3d871dc932-00-6d031vmwyvqe.janeway.replit.dev/msg/getAll')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      msgs = []
      for (let k = 0; k < data.length; k++) {
        msgs.push({ "msg": data[k] })
      }
      let msg = document.getElementById("msg1");;
      let i = 2;
      while (msg != null) {
        msg.remove()
        msg = document.getElementById("msg" + String(i));
        i += 1;
      }
      let list = document.getElementById("list");
      for (let j = 0; j < msgs.length; j++) {
        let newMsg = msgs[j]["msg"];
        let listElt = document.createElement("li");
        listElt.id = "msg" + String(j + 1);
        listElt.innerHTML = newMsg;
        list.appendChild(listElt);
      }
    });
}

function post() {
  var msg = document.getElementById("textarea").value;
  fetch('https://d28cda53-cbc7-4b58-8952-ac3d871dc932-00-6d031vmwyvqe.janeway.replit.dev/msg/post/' + msg)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

function del() {
  fetch('https://d28cda53-cbc7-4b58-8952-ac3d871dc932-00-6d031vmwyvqe.janeway.replit.dev/msg/delAll/')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

fetch('https://d28cda53-cbc7-4b58-8952-ac3d871dc932-00-6d031vmwyvqe.janeway.replit.dev/msg/getAll')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    msgs = []
    for (let k = 0; k < data.length; k++) {
      msgs.push({ "msg": data[k] })
    }
  });