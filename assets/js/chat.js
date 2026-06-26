// AMORA Chat & Inbox Interactive Manager

class AmoraChatManager {
  constructor() {
    this.inboxListEl = document.getElementById('inbox-list');
    this.chatViewEl = document.getElementById('chat-view');
    this.inboxViewEl = document.getElementById('inbox-view');
    
    this.activeChat = null;
    this.typingTimeout = null;
    
    this.init();
  }

  init() {
    this.renderInbox();
    this.bindEvents();
    this.checkDeepLink();
  }

  renderInbox() {
    if (!this.inboxListEl) return;
    
    const chats = window.AMORA_DATA.chats;
    this.inboxListEl.innerHTML = '';
    
    if (chats.length === 0) {
      this.inboxListEl.innerHTML = `
        <div class="text-center py-12 px-6">
          <p class="text-gray-400 text-sm">No tienes conversaciones activas aún.</p>
          <a href="explore.html" class="inline-block mt-4 text-amora-primary font-bold hover:underline text-xs">Empieza a deslizar</a>
        </div>
      `;
      return;
    }

    chats.forEach(chat => {
      const item = document.createElement('div');
      item.className = `flex items-center gap-4 p-4 border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer transition duration-150 ${chat.unread ? 'bg-rose-50/30' : ''}`;
      item.innerHTML = `
        <!-- Avatar with active connection dot -->
        <div class="relative w-12 h-12 rounded-full border border-gray-100 overflow-hidden flex-shrink-0 bg-gray-50">
          ${chat.avatar}
          <span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
        </div>
        
        <!-- Info -->
        <div class="flex-grow min-w-0">
          <div class="flex justify-between items-baseline mb-1">
            <h4 class="font-bold text-gray-800 text-sm truncate">${chat.name}</h4>
            <span class="text-[10px] text-gray-400">${chat.time}</span>
          </div>
          <p class="text-xs truncate ${chat.unread ? 'font-bold text-gray-700' : 'text-gray-500'}">${chat.lastMessage}</p>
        </div>
        
        <!-- Unread badge -->
        ${chat.unread ? `
          <div class="w-2.5 h-2.5 bg-amora-primary rounded-full flex-shrink-0"></div>
        ` : ''}
      `;
      
      item.addEventListener('click', () => {
        this.openChat(chat);
      });
      
      this.inboxListEl.appendChild(item);
    });
  }

  bindEvents() {
    // Back button in chat header
    const backBtn = document.getElementById('chat-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        this.closeChat();
      });
    }

    // Send message form
    const sendForm = document.getElementById('chat-send-form');
    if (sendForm) {
      sendForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.sendMessage();
      });
    }
  }

  checkDeepLink() {
    // Check URL parameters for direct chat launch (e.g., messages.html?chatId=3 or ?profileId=3)
    const params = new URLSearchParams(window.location.search);
    const chatId = parseInt(params.get('chatId') || params.get('profileId'));
    
    if (chatId) {
      const chats = window.AMORA_DATA.chats;
      const targetChat = chats.find(c => c.profileId === chatId || c.id === chatId);
      
      if (targetChat) {
        this.openChat(targetChat);
      } else {
        // If they match in explore.html but chat doesn't exist in cache yet
        const profiles = window.AMORA_DATA.profiles;
        const profile = profiles.find(p => p.id === chatId);
        if (profile) {
          // Create simulated chat instantly
          const newChat = {
            id: Date.now(),
            profileId: profile.id,
            name: profile.name,
            avatar: profile.image,
            lastMessage: "¡Acaban de conectar!",
            time: "Ahora",
            unread: false,
            messages: [
              { sender: "them", text: `¡Hola! Qué bien conectar. ¿De qué parte de ${profile.city} eres? 😊`, time: "Ahora" }
            ],
            responses: [
              "¡Qué guay! A mí también me encanta ese sitio.",
              "Jajaja totalmente. ¿Y qué planes tienes para este finde?",
              "¡Eso suena genial! Oye, ¿te apetecería tomar algo esta semana? Conozco un lugar hermoso."
            ]
          };
          window.AMORA_DATA.chats.unshift(newChat);
          this.renderInbox();
          this.openChat(newChat);
        }
      }
    }
  }

  openChat(chat) {
    this.activeChat = chat;
    chat.unread = false; // Mark read
    this.renderInbox();
    window.initNavigation(); // Refresh bottom nav badge counts

    // Hide inbox, show chat pane
    this.inboxViewEl.classList.add('hidden');
    this.chatViewEl.classList.remove('hidden');

    // Populate chat header
    document.getElementById('chat-header-avatar').innerHTML = chat.avatar;
    document.getElementById('chat-header-name').innerText = chat.name;

    this.renderMessages();
  }

  closeChat() {
    this.activeChat = null;
    this.chatViewEl.classList.add('hidden');
    this.inboxViewEl.classList.remove('hidden');
    
    // Clear URL parameters to prevent re-opening on reload
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  renderMessages() {
    if (!this.activeChat) return;
    const container = document.getElementById('chat-messages-container');
    container.innerHTML = '';

    this.activeChat.messages.forEach(msg => {
      const bubble = document.createElement('div');
      bubble.className = `flex flex-col max-w-[75%] ${msg.sender === 'me' ? 'self-end items-end' : 'self-start items-start'}`;
      
      const contentClass = msg.sender === 'me' 
        ? 'bg-amora-grad text-white rounded-2xl rounded-br-none shadow-sm' 
        : 'bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none';
        
      bubble.innerHTML = `
        <div class="px-4 py-2.5 text-sm ${contentClass}">
          <p class="leading-relaxed break-words">${msg.text}</p>
        </div>
        <span class="text-[9px] text-gray-400 mt-1 px-1">${msg.time}</span>
      `;
      container.appendChild(bubble);
    });

    this.scrollToBottom();
  }

  sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text || !this.activeChat) return;

    // Clear input field
    input.value = '';

    // Append my message
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const myMsg = { sender: 'me', text: text, time: timeStr };
    this.activeChat.messages.push(myMsg);
    this.activeChat.lastMessage = text;
    this.activeChat.time = "Ahora";

    this.renderMessages();
    this.renderInbox();

    // Trigger typing response loop
    this.triggerTypingResponse();
  }

  triggerTypingResponse() {
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
    const container = document.getElementById('chat-messages-container');
    
    // 1. Show Typing Indicator after 1 second
    this.typingTimeout = setTimeout(() => {
      const typingEl = document.createElement('div');
      typingEl.id = 'chat-typing-indicator';
      typingEl.className = 'self-start flex items-center gap-1.5 bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none';
      typingEl.innerHTML = `
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
      `;
      container.appendChild(typingEl);
      this.scrollToBottom();

      // 2. Append simulated reply after 2 more seconds (3 seconds total delay)
      this.typingTimeout = setTimeout(() => {
        // Remove typing indicator
        const indicator = document.getElementById('chat-typing-indicator');
        if (indicator) indicator.remove();

        // Get response from stack
        let replyText = "¡Qué interesante! Cuéntame más... 😊";
        if (this.activeChat.responses && this.activeChat.responses.length > 0) {
          replyText = this.activeChat.responses.shift();
        } else {
          // Fallback replies
          const fallbacks = [
            "¡Me encanta hablar contigo! Oye, ¿hacemos algo esta tarde?",
            "Jajaja totalmente de acuerdo. ¿Qué tal tu día?",
            "¡Qué bien suena! Dime, ¿cuál es tu sitio favorito para tomar café?",
            "Siii! Cuéntame, ¿qué música te gusta escuchar?"
          ];
          replyText = fallbacks[Math.floor(Math.random() * fallbacks.length)];
        }

        const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const replyMsg = { sender: 'them', text: replyText, time: replyTime };
        
        this.activeChat.messages.push(replyMsg);
        this.activeChat.lastMessage = replyText;
        this.activeChat.time = "Ahora";
        
        this.renderMessages();
        this.renderInbox();
        
        // Show a little success sound effect or header flash
        window.showToast(`Nuevo mensaje de ${this.activeChat.name}`, "info");

      }, 1800);

    }, 800);
  }

  scrollToBottom() {
    const container = document.getElementById('chat-messages-container');
    container.scrollTop = container.scrollHeight;
  }
}

window.AmoraChatManager = AmoraChatManager;
