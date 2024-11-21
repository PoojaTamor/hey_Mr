
var flip = document.querySelector('.book-content');
var uno = document.querySelectorAll('.book');
var contZindex = 2;
var customZindex = 1;

uno.forEach(function(book) {
    book.style.zIndex = customZindex;
    customZindex--;

    book.addEventListener('click', function(e) {
        var tgt = e.target;
        var currentBook = this;

        currentBook.style.zIndex = contZindex;
        contZindex++;

        if (tgt.closest('.face-front')) {
            currentBook.style.transform = 'rotateY(-180deg)';
        } else if (tgt.closest('.face-back')) {
            currentBook.style.transform = 'rotateY(0deg)';
        }

        if (tgt.getAttribute('id') == 'portada') {
            flip.classList.remove("trnsf-reset");
            flip.classList.add("trnsf");
        } else if (tgt.getAttribute('id') == 'trsf') {
            flip.classList.remove("trnsf");
            flip.classList.add("trnsf-reset");
        }
    });
});
