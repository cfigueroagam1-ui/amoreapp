// AMORA Card Swiping Mechanics (Touch & Mouse Gestures)

class SwipeCardStack {
  constructor(containerId, profiles, onSwipe) {
    this.container = document.getElementById(containerId);
    this.profiles = [...profiles];
    this.onSwipe = onSwipe; // Callback function { type, profile }
    this.cards = [];
    this.currentIndex = 0;
    this.threshold = 120; // Swipe threshold in pixels
    
    this.init();
  }

  init() {
    this.container.innerHTML = '';
    
    if (this.profiles.length === 0) {
      this.renderEmptyState();
      return;
    }

    // Render first 2 cards to create a stack effect
    this.loadNextCards();
  }

  loadNextCards() {
    const stackSize = 2; // Keep at most 2 cards rendered at once for performance
    
    // Check if we have run out of profiles
    if (this.currentIndex >= this.profiles.length) {
      if (this.cards.length === 0) {
        this.renderEmptyState();
      }
      return;
    }

    // Render cards up to stackSize
    while (this.cards.length < stackSize && this.currentIndex < this.profiles.length) {
      const profile = this.profiles[this.currentIndex];
      const cardEl = this.createCardElement(profile, this.cards.length === 0);
      
      // Insert bottom cards at the beginning so the first card is on top
      this.container.insertBefore(cardEl, this.container.firstChild);
      this.cards.push({ element: cardEl, profile: profile });
      this.currentIndex++;
    }

    this.updateStackPositions();
  }

  createCardElement(profile, isActive) {
    const card = document.createElement('div');
    card.className = 'swipe-card bg-white border border-gray-100 shadow-card flex flex-col justify-between';
    
    // We add absolute positioning inside the stack container
    card.innerHTML = `
      <!-- Card Image -->
      <div class="relative w-full h-[75%] bg-gray-50 flex items-center justify-center overflow-hidden">
        ${profile.image}
        
        <!-- Swipe overlay indicators -->
        <div class="swipe-indicator swipe-indicator-like">LIKE</div>
        <div class="swipe-indicator swipe-indicator-nope">NOPE</div>
        <div class="swipe-indicator swipe-indicator-super font-black">SUPER</div>
      </div>

      <!-- Info Area -->
      <div class="p-6 bg-white flex-grow flex flex-col justify-between">
        <div>
          <div class="flex items-baseline gap-2">
            <h3 class="text-2xl font-bold text-gray-800">${profile.name}</h3>
            <span class="text-xl text-gray-500 font-semibold">${profile.age}</span>
          </div>
          <p class="text-xs text-gray-400 font-medium flex items-center gap-1 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            ${profile.city}
          </p>
          <p class="text-sm text-gray-600 mt-3 line-clamp-2">${profile.description}</p>
        </div>
      </div>
    `;

    if (isActive) {
      this.bindGestures(card);
    } else {
      // Background card styling (slightly scaled down and translated down)
      card.style.transform = 'scale(0.95) translateY(12px)';
      card.style.opacity = '0.9';
      card.style.zIndex = '1';
      card.style.pointerEvents = 'none';
    }

    return card;
  }

  updateStackPositions() {
    this.cards.forEach((card, index) => {
      card.element.style.zIndex = (10 - index).toString();
      if (index === 0) {
        card.element.style.transform = 'scale(1) translateY(0)';
        card.element.style.opacity = '1';
        card.element.style.pointerEvents = 'auto';
        this.bindGestures(card.element);
      } else {
        card.element.style.transform = 'scale(0.95) translateY(12px)';
        card.element.style.opacity = '0.9';
        card.element.style.pointerEvents = 'none';
      }
    });
  }

  bindGestures(cardEl) {
    let startX = 0;
    let startY = 0;
    let deltaX = 0;
    let deltaY = 0;
    let isDragging = false;

    const likeIndicator = cardEl.querySelector('.swipe-indicator-like');
    const nopeIndicator = cardEl.querySelector('.swipe-indicator-nope');
    const superIndicator = cardEl.querySelector('.swipe-indicator-super');

    const handleDragStart = (e) => {
      isDragging = true;
      cardEl.classList.add('card-dragging');
      
      const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
      
      startX = clientX;
      startY = clientY;
    };

    const handleDragMove = (e) => {
      if (!isDragging) return;

      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

      deltaX = clientX - startX;
      deltaY = clientY - startY;

      // Calculate rotation based on drag distance
      const rotate = deltaX / 15;
      
      // Update element transform
      cardEl.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotate}deg)`;

      // Realtime Feedback Indicators opacity
      if (deltaX > 20) {
        likeIndicator.style.opacity = Math.min(deltaX / 100, 1);
        nopeIndicator.style.opacity = 0;
        superIndicator.style.opacity = 0;
      } else if (deltaX < -20) {
        nopeIndicator.style.opacity = Math.min(Math.abs(deltaX) / 100, 1);
        likeIndicator.style.opacity = 0;
        superIndicator.style.opacity = 0;
      } else if (deltaY < -20 && Math.abs(deltaY) > Math.abs(deltaX) * 1.5) {
        superIndicator.style.opacity = Math.min(Math.abs(deltaY) / 100, 1);
        likeIndicator.style.opacity = 0;
        nopeIndicator.style.opacity = 0;
      } else {
        likeIndicator.style.opacity = 0;
        nopeIndicator.style.opacity = 0;
        superIndicator.style.opacity = 0;
      }
    };

    const handleDragEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      cardEl.classList.remove('card-dragging');

      // Clear indicators opacity
      likeIndicator.style.opacity = 0;
      nopeIndicator.style.opacity = 0;
      superIndicator.style.opacity = 0;

      // Determine action based on thresholds
      if (deltaX > this.threshold) {
        this.swipeRight(cardEl);
      } else if (deltaX < -this.threshold) {
        this.swipeLeft(cardEl);
      } else if (deltaY < -this.threshold && Math.abs(deltaY) > Math.abs(deltaX) * 1.5) {
        this.swipeUp(cardEl);
      } else {
        // Reset card to original position
        cardEl.style.transform = 'translate(0px, 0px) rotate(0deg)';
      }

      deltaX = 0;
      deltaY = 0;
    };

    // Touch events
    cardEl.addEventListener('touchstart', handleDragStart, { passive: true });
    cardEl.addEventListener('touchmove', handleDragMove, { passive: true });
    cardEl.addEventListener('touchend', handleDragEnd);

    // Mouse events
    cardEl.addEventListener('mousedown', handleDragStart);
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  }

  // SWIPE RIGHT (LIKE)
  swipeRight(cardEl) {
    cardEl.classList.add('card-fly-right');
    const swiped = this.cards.shift();
    
    setTimeout(() => {
      swiped.element.remove();
      this.loadNextCards();
      if (this.onSwipe) this.onSwipe('like', swiped.profile);
    }, 300);
  }

  // SWIPE LEFT (DISLIKE)
  swipeLeft(cardEl) {
    cardEl.classList.add('card-fly-left');
    const swiped = this.cards.shift();
    
    setTimeout(() => {
      swiped.element.remove();
      this.loadNextCards();
      if (this.onSwipe) this.onSwipe('dislike', swiped.profile);
    }, 300);
  }

  // SWIPE UP (FAVORITE / SUPER LIKE)
  swipeUp(cardEl) {
    cardEl.classList.add('card-fly-up');
    const swiped = this.cards.shift();
    
    setTimeout(() => {
      swiped.element.remove();
      this.loadNextCards();
      if (this.onSwipe) this.onSwipe('super', swiped.profile);
    }, 300);
  }

  // PROGRAMMATIC BUTTON ACTIONS
  triggerSwipeRight() {
    if (this.cards.length === 0) return;
    const active = this.cards[0];
    this.swipeRight(active.element);
  }

  triggerSwipeLeft() {
    if (this.cards.length === 0) return;
    const active = this.cards[0];
    this.swipeLeft(active.element);
  }

  triggerSwipeUp() {
    if (this.cards.length === 0) return;
    const active = this.cards[0];
    this.swipeUp(active.element);
  }

  renderEmptyState() {
    this.container.innerHTML = `
      <div class="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
        <div class="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center text-amora-primary animate-pulse mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-current" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800">¡Vaya! No quedan perfiles</h3>
        <p class="text-sm text-gray-400 mt-2 max-w-[240px] mx-auto">Prueba a ampliar tus filtros o recarga para ver a los candidatos de nuevo.</p>
        <button id="reload-profiles-btn" class="mt-6 bg-amora-grad text-white px-6 py-3 rounded-2xl font-bold shadow-premium hover:brightness-105 active:scale-95 transition-all text-sm">
          Recargar Perfiles
        </button>
      </div>
    `;

    // Bind Reload button
    const btn = document.getElementById('reload-profiles-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        this.currentIndex = 0;
        this.init();
        window.showToast("Buscando perfiles cercanos...", "info");
      });
    }
  }
}

window.SwipeCardStack = SwipeCardStack;
