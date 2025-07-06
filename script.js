    const mediaFiles = [
      '01.mp4','02.jpg','03.jpg','04.mp4','05.jpg','06.mp4',
      '07.jpg','08.mp4','09.jpg','10.jpg','11.mp4','12.jpg',
      '13.jpg','14.mp4','15.jpg','16.jpg','17.jpg','18.mp4',
      '19.jpg','20.jpg','21.mp4','22.png','23.jpg','24.jpg'
    ];

    const photoGrid = document.getElementById('photoGrid');
    const popup = document.getElementById('popup');
    let currentIndex = 0;

    function showBatch() {
      photoGrid.style.opacity = 0;
      setTimeout(() => {
        photoGrid.innerHTML = '';
        const batch = mediaFiles.slice(currentIndex, currentIndex + 12);
        batch.forEach((file, i) => {
          const ext = file.split('.').pop().toLowerCase();
          const path = `./post/${file}`;
          let element;

          if (ext === 'mp4') {
            element = document.createElement('video');
            element.src = path;
            element.autoplay = true;
            element.loop = true;
            element.muted = true;
            element.playsInline = true;
          } else {
            element = new Image();
            element.src = path;
            element.alt = "Memory";
          }

          element.style.setProperty('--delay', i);
          photoGrid.appendChild(element);
        });
        currentIndex = (currentIndex + 12) % mediaFiles.length;
        photoGrid.style.opacity = 1;
      }, 400);
    }

    showBatch();
    setInterval(showBatch, 10000);

    photoGrid.addEventListener('click', (e) => {
      if (['IMG', 'VIDEO'].includes(e.target.tagName)) {
        popup.innerHTML = '';
        const media = e.target.cloneNode(true);
        media.controls = true;
        media.autoplay = true;
        media.muted = false;
        popup.appendChild(media);
        popup.classList.add('active');
        try { new Audio('click.mp3').play(); } catch (e) {}
      }
    });

    popup.addEventListener('click', (e) => {
      if (e.target === popup) popup.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') popup.classList.remove('active');
    });

    // Icon dan heart animasi
    const icons = ['✨', '🎈', '💖', '⭐'];
    for (let i = 0; i < 70; i++) {
      const span = document.createElement('span');
      span.classList.add('falling');
      span.textContent = icons[Math.floor(Math.random() * icons.length)];
      span.style.left = `${Math.random() * 100}vw`;
      span.style.animationDuration = `${3 + Math.random() * 3}s`;
      span.style.fontSize = `${20 + Math.random() * 16}px`;
      document.body.appendChild(span);
    }

    for (let i = 0; i < 15; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh`;
      heart.style.animationDelay = `${Math.random() * 10}s`;
      document.body.appendChild(heart);
    }