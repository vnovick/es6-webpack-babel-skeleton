module.exports = { 
  write: document.write.bind(document),
  node: document.querySelector.bind(document),
  nodes: document.querySelectorAll.bind(document)
}