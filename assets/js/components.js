// AMORA Reusable Components & UI Utilities

// 1. Toast Notification Manager
window.showToast = function(message, type = 'success') {
  let toastContainer = document.getElementById('global-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'global-toast-container';
    toastContainer.className = 'absolute top-4 left-4 right-4 z-[9999] pointer-events-none space-y-2';
    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
      appContainer.appendChild(toastContainer);
    } else {
      document.body.appendChild(toastContainer);
    }
  }

  const toast = document.createElement('div');
  const colors = type === 'success' 
    ? 'bg-emerald-500 text-white shadow-emerald-200' 
    : type === 'error'
    ? 'bg-rose-500 text-white shadow-rose-200'
    : 'bg-blue-500 text-white shadow-blue-200';
    
  toast.className = `p-4 rounded-2xl flex items-center justify-between shadow-lg transform translate-y-[-20px] opacity-0 transition-all duration-300 pointer-events-auto ${colors}`;
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      ${type === 'success' ? `
        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
      ` : type === 'error' ? `
        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
      ` : `
        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2-3a1 1 0 00-1-1H5a1 1 0 000 2h10a1 1 0 001-1zm-2 4a1 1 0 00-1-1H7a1 1 0 000 2h6a1 1 0 001-1zm-5 4a1 1 0 00-1-1H9a1 1 0 000 2h1a1 1 0 001-1z" clip-rule="evenodd"/>
        </svg>
      `}
      <span class="text-sm font-semibold">${message}</span>
    </div>
  `;
  
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('translate-y-[-20px]', 'opacity-0');
  }, 10);
  
  setTimeout(() => {
    toast.classList.add('translate-y-[-20px]', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// 2. Navigation Injector
window.initNavigation = function() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Inject Header (Navbar)
  const headerContainer = document.getElementById('global-header');
  if (headerContainer) {
    // Get notifications count from mockData
    const notifications = window.AMORA_DATA ? window.AMORA_DATA.notifications : [];
    const unreadNotifications = notifications.filter(n => !n.read).length;
    const badgeHtml = unreadNotifications > 0 
      ? `<span class="absolute -top-1 -right-1 bg-amora-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white">${unreadNotifications}</span>`
      : '';

    headerContainer.className = "sticky top-0 z-40 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm";
    headerContainer.innerHTML = `
      <div class="flex items-center gap-2">
        <img src="assets/img/logo.svg" alt="AMORA Logo" class="w-8 h-8">
        <h1 class="text-xl font-bold tracking-wider text-amora-primary uppercase font-extrabold">AMORA</h1>
      </div>
      <div class="flex items-center gap-3">
        <!-- Notifications Bell -->
        <a href="notifications.html" class="relative p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition text-gray-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          ${badgeHtml}
        </a>
        <!-- Settings Gear -->
        <a href="settings.html" class="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition text-gray-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>
      </div>
    `;
  }

  // Inject Footer (Bottom Nav)
  const footerContainer = document.getElementById('global-footer');
  if (footerContainer) {
    const chats = window.AMORA_DATA ? window.AMORA_DATA.chats : [];
    const unreadChats = chats.filter(c => c.unread).length;
    const chatBadgeHtml = unreadChats > 0 
      ? `<span class="absolute top-0 right-3 bg-amora-primary text-white text-[9px] w-4.5 h-4.5 px-1 rounded-full flex items-center justify-center font-bold border-2 border-white">${unreadChats}</span>`
      : '';

    footerContainer.className = "sticky bottom-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-100 px-4 py-2 flex items-center justify-around shadow-lg rounded-t-[24px]";
    footerContainer.innerHTML = `
      <!-- Dashboard Tab -->
      <a href="dashboard.html" class="flex flex-col items-center gap-1 py-1 px-3 text-gray-400 hover:text-amora-primary transition duration-200 ${currentPath === 'dashboard.html' ? 'bottom-nav-active' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
        </svg>
        <span class="text-[10px] font-bold tracking-wide">Inicio</span>
      </a>

      <!-- Explore Tab -->
      <a href="explore.html" class="flex flex-col items-center gap-1 py-1 px-3 text-gray-400 hover:text-amora-primary transition duration-200 ${currentPath === 'explore.html' ? 'bottom-nav-active' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span class="text-[10px] font-bold tracking-wide">Explorar</span>
      </a>

      <!-- Messages Tab -->
      <a href="messages.html" class="relative flex flex-col items-center gap-1 py-1 px-3 text-gray-400 hover:text-amora-primary transition duration-200 ${currentPath === 'messages.html' ? 'bottom-nav-active' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        ${chatBadgeHtml}
        <span class="text-[10px] font-bold tracking-wide">Mensajes</span>
      </a>

      <!-- Profile Tab -->
      <a href="profile.html" class="flex flex-col items-center gap-1 py-1 px-3 text-gray-400 hover:text-amora-primary transition duration-200 ${currentPath === 'profile.html' ? 'bottom-nav-active' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span class="text-[10px] font-bold tracking-wide">Perfil</span>
      </a>
    `;
  }
};

// 3. Modal Manager (Standard Modal popup for Match alert etc.)
window.showMatchModal = function(profile, onChatClick, onKeepSwiping) {
  const backdrop = document.createElement('div');
  backdrop.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 animate-fade-in transition-all duration-300';
  
  const modalContainer = document.createElement('div');
  modalContainer.className = 'app-container w-full bg-amora-grad text-white rounded-3xl p-8 text-center relative flex flex-col justify-center items-center shadow-card overflow-hidden';
  modalContainer.style.height = '620px';
  modalContainer.innerHTML = `
    <!-- Heart Particle background -->
    <div class="absolute inset-0 bg-radial-gradient opacity-20"></div>

    <div class="z-10 animate-bounce duration-1000 mt-4">
      <svg class="w-16 h-16 text-white fill-current" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
      </svg>
    </div>

    <h2 class="text-4xl font-extrabold tracking-wide uppercase mt-4 mb-2 z-10">¡Es un Match!</h2>
    <p class="text-white/80 text-sm mb-8 z-10">A ti y a ${profile.name} os gusta el uno al otro.</p>

    <!-- Side-by-side Avatars -->
    <div class="flex items-center justify-center gap-6 mb-10 z-10">
      <div class="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white transform -rotate-12 transition-transform duration-500 hover:rotate-0">
        ${window.AMORA_DATA.currentUser.avatar}
      </div>
      <div class="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white transform rotate-12 transition-transform duration-500 hover:rotate-0">
        ${profile.image}
      </div>
    </div>

    <!-- Buttons -->
    <div class="w-full space-y-4 px-4 z-10">
      <button id="modal-chat-btn" class="w-full bg-white text-amora-primary hover:bg-gray-50 active:scale-[0.98] font-bold py-4 rounded-2xl transition shadow-lg">
        Enviar Mensaje
      </button>
      <button id="modal-close-btn" class="w-full bg-transparent hover:bg-white/10 active:scale-[0.98] text-white border border-white/40 font-bold py-4 rounded-2xl transition">
        Seguir Deslizando
      </button>
    </div>
  `;
  
  backdrop.appendChild(modalContainer);
  document.body.appendChild(backdrop);

  // Bind Buttons
  backdrop.querySelector('#modal-chat-btn').addEventListener('click', () => {
    backdrop.remove();
    if (onChatClick) onChatClick();
  });

  backdrop.querySelector('#modal-close-btn').addEventListener('click', () => {
    backdrop.remove();
    if (onKeepSwiping) onKeepSwiping();
  });
};

// Initialize navigation on load
window.addEventListener('DOMContentLoaded', () => {
  // Check if AMORA_DATA exists, if not initialize it from store
  if (!window.AMORA_DATA) {
    console.warn("AMORA_DATA mock DB not loaded, make sure mockData.js is loaded first.");
  }
  window.initNavigation();
});
