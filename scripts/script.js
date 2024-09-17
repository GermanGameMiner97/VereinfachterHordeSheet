document.getElementById('image-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('character-image-display').src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});
document.getElementById('int-base').addEventListener('input', calculateTotal);
document.getElementById('int-bonus').addEventListener('input', calculateTotal);

function calculateTotal() {
  let base = parseInt(document.getElementById('int-base').value) || 0;
  let bonus = parseInt(document.getElementById('int-bonus').value) || 0;
  let total = base + bonus;
  document.getElementById('int-total').textContent = total;
}