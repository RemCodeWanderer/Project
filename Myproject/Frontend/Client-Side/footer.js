document.addEventListener("DOMContentLoaded",function() {
    //Create a variable to hold the footer

    const footerHTML =
   <footer>
        <p>&copy; 2025 My Website.All rights reserved.</p>
    </footer>
    ;

    //inserting footer in different page using id

    document.getElementById('footer').innerHTML = footerHTML;
});