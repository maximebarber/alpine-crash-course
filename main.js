function talkieWalkie(content) {
  console.log(content)
}

function getLatestPost(posts) {
  console.log(posts.slice(-1).pop())
}

document.addEventListener("alpine:init", () => {
  Alpine.store("darkMode", {
    on: false,

    toggle() {
      this.on = !this.on
    }
  })
})