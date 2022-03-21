const app = document.gerElementByID("typewriter)
;
const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
})

typewriter
 .typestring("Tu propia WEB")
 .pauseFor(200)
.start();