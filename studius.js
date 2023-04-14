document.body.style.border = "5px solid red";
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
    console.log('Start');
    await delay(5000); // Wait for 5 seconds (2000 milliseconds)
    let container = document.getElementsByClassName("container mx-auto flex h-full max-w-7xl flex-col p-4 md:px-16")
    console.log(container)
    let array = Array.from(container)
    console.log(array)
    container.item(0).style.border = "5px solid yellow"
    console.log('Execution resumes after 2 seconds');
})();




