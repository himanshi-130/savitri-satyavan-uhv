function showMessage(value) {

    const message = document.getElementById("message");

    const messages = {

        love:
            "LOVE — Krishna and Sudama teach us that genuine affection does not depend on wealth, status or personal gain. True love seeks the well-being of the other person.",

        truth:
            "TRUTH — Their friendship remains authentic despite changing circumstances. Truth in a relationship means being genuine rather than pretending for social approval.",

        equality:
            "EQUALITY — Krishna does not allow Sudama's poverty to create distance between them. Their friendship reminds us that every human being deserves equal respect and dignity.",

        selflessness:
            "SELFLESSNESS — Sudama gives his humble offering with love, while Krishna helps him without making him feel inferior. True giving preserves the dignity of the receiver."
    };

    message.style.opacity = "0";

    setTimeout(() => {

        message.innerHTML = messages[value];

        message.style.opacity = "1";

    }, 200);

}