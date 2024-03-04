function make_Shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("You ordered a ".concat(size, " size shirt which has text \"").concat(message, "\""));
}
make_Shirt();
make_Shirt("Medium");
make_Shirt("Small", "Gucci");
