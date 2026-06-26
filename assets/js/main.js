// AMORA Main Global Orchestrator & UX Helpers

document.addEventListener('DOMContentLoaded', () => {
  console.log("AMORA Engine initializing...");

  // 1. Global Click Listeners for UI dropdowns and close buttons
  document.addEventListener('click', (e) => {
    // Dropdown close checks
    const activeDropdowns = document.querySelectorAll('.dropdown-menu:not(.hidden)');
    activeDropdowns.forEach(dropdown => {
      const parent = dropdown.parentElement;
      if (parent && !parent.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  });

  // 2. Mobile Native viewport height bug fix (vibration check, window size calculations)
  adjustViewportHeight();
  window.addEventListener('resize', adjustViewportHeight);

  // 3. Touch Vibration simulator for micro-interactions
  window.triggerHapticFeedback = function() {
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(15); // short vibration on matches/likes
    }
  };

  // 4. Global transition classes helper (fade in etc.)
  setupGlobalCSSTransitions();
});

function adjustViewportHeight() {
  // We compute 1vh custom property to prevent address bar layout shifts on mobile browsers
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function setupGlobalCSSTransitions() {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fade-in {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fade-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    /* Scrollbar hide helper utility */
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `;
  document.head.appendChild(style);
}
