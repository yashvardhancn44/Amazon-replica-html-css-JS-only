const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
  console.log(xhr.response);
}); // addEventListener is put on the top, because first we need to setup the eventListener and then trigger the event/send the request and wait for the response (similar to setting up listeners first and clicking button later. )

xhr.open("GET", "https://supersimplebackend.dev");
// xhr.open("GET", "https://supersimplebackend.dev/hello");
// xhr.open("GET", "https://supersimplebackend.dev/products/first");
// xhr.open("GET", "https://supersimplebackend.dev/not-supported");
// xhr.open("GET", "https://supersimplebackend.dev/documentation");
// xhr.open("GET", "https://supersimplebackend.dev/images/apple.jpg");
xhr.send();
