const text = document.getElementById('colorText');
    let isDark = true;

    setInterval(() => {
      if (isDark) {
        text.style.backgroundColor = 'white';
        text.style.color = 'black';
      } else {
        text.style.backgroundColor = 'black';
        text.style.color = 'white';
      }
      isDark = !isDark;
    }, 500);