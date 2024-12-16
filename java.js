function toggleShape() {
    const shape = document.getElementById('shape');
    
    if (shape.classList.contains('square')) {
        shape.classList.remove('square');
        shape.classList.add('circle');
    } else {
        shape.classList.remove('circle');
        shape.classList.add('square');
    }
}

// Add event listener to the button
document.getElementById('toggleButton').addEventListener('click', toggleShape);