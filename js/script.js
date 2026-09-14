/* ==========================================================================
   KFC MENU PRICES - OFFICIAL JAVASCRIPT DIRECTORY ENGINE
   Instant Search, Category Filters, Mobile Navigation, FAQ Accordion
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Comprehensive KFC Menu Data Repository (Aligned with Competitor Categories & WebP Images)
  // --------------------------------------------------------------------------
  const menuItems = [
    // --- EVERYDAY VALUE ---
    {
      id: "ev1",
      name: "Krunch Burger",
      category: "Everyday Value",
      price: "$1.10",
      calories: "380 kcal",
      description: "Crunchy signature crispy chicken fillet with spicy mayo in a soft toasted sesame bun.",
      image: "assets/images/krunch-burger.webp",
      featured: true,
      popular: true
    },
    {
      id: "ev2",
      name: "Krunch Combo Meal",
      category: "Everyday Value",
      price: "$2.25",
      calories: "680 kcal",
      description: "1 Krunch Burger, golden fries and a chilled fountain drink.",
      image: "assets/images/krunch-combo.webp",
      featured: true,
      popular: true
    },
    {
      id: "ev3",
      name: "Rice & Spice Bowl",
      category: "Everyday Value",
      price: "$1.50",
      calories: "490 kcal",
      description: "Aromatic spiced rice served with crispy chicken bites and KFC signature savory gravy.",
      image: "assets/images/rice-spice-bowl.webp",
      featured: false,
      popular: true
    },
    {
      id: "ev4",
      name: "Zingeratha Wrap",
      category: "Everyday Value",
      price: "$1.60",
      calories: "520 kcal",
      description: "Crispy chicken fillet rolled in a golden flaky paratha with tangy sauce and fresh sliced onions.",
      image: "assets/images/zingeratha-wrap.webp",
      featured: false,
      popular: false
    },
    {
      id: "ev5",
      name: "Twister Crispy Wrap",
      category: "Everyday Value",
      price: "$1.85",
      calories: "490 kcal",
      description: "Tender chicken strips with diced ripe tomatoes, crisp lettuce, and pepper mayo in a warm tortilla.",
      image: "assets/images/twister-wrap.webp",
      featured: false,
      popular: false
    },

    // --- ALA CARTE & COMBOS ---
    {
      id: "ac1",
      name: "Classic Zinger Burger",
      category: "Ala Carte & Combos",
      price: "$2.35",
      calories: "550 kcal",
      description: "KFC's iconic hand-breaded crunchy spicy chicken breast fillet topped with lettuce and mayo.",
      image: "assets/images/classic-zinger.webp",
      featured: true,
      popular: true
    },
    {
      id: "ac2",
      name: "Classic Zinger Combo",
      category: "Ala Carte & Combos",
      price: "$3.40",
      calories: "890 kcal",
      description: "1 Classic Zinger burger, potato fries and a cold drink.",
      image: "assets/images/classic-zinger-combo.webp",
      featured: true,
      popular: true
    },
    {
      id: "ac3",
      name: "Mighty Zinger Burger",
      category: "Ala Carte & Combos",
      price: "$3.20",
      calories: "850 kcal",
      description: "Double crunchy spicy chicken fillets with cheese slice, fresh lettuce, and signature spicy mayo.",
      image: "assets/images/mighty-zinger.webp",
      featured: true,
      popular: true
    },
    {
      id: "ac4",
      name: "Kentucky Crispy Burger Combo",
      category: "Ala Carte & Combos",
      price: "$2.95",
      calories: "860 kcal",
      description: "Crispy chicken fillet with cheese, smoky BBQ sauce, fries, and a chilled drink.",
      image: "assets/images/kentucky-burger-combo.webp",
      featured: false,
      popular: false
    },
    {
      id: "ac5",
      name: "3 Pc. Extra Crispy Tenders (Strips) Combo",
      category: "Ala Carte & Combos",
      price: "$3.20",
      calories: "780 kcal",
      description: "3 hand-breaded crispy chicken strips (tenders), dipping sauce, fries, dinner roll, and a drink.",
      image: "assets/images/crispy-tenders.webp",
      featured: true,
      popular: true
    },

    // --- SIGNATURE BOXES ---
    {
      id: "sb1",
      name: "KFC Crispy Box Meal",
      category: "Signature Boxes",
      price: "$3.75",
      calories: "980 kcal",
      description: "1 piece of Hot & Crispy fried chicken, 1 regular fries, 1 regular drink, and 1 dinner roll with gravy.",
      image: "assets/images/crispy-box-meal.webp",
      featured: true,
      popular: true
    },
    {
      id: "sb2",
      name: "KFC Boneless Box",
      category: "Signature Boxes",
      price: "$4.15",
      calories: "920 kcal",
      description: "4 crispy tenders, 1 regular fries, 1 soft dinner roll, dipping sauce, and 1 chilled drink.",
      image: "assets/images/boneless-box.webp",
      featured: true,
      popular: true
    },
    {
      id: "sb3",
      name: "KFC WOW Box Feast",
      category: "Signature Boxes",
      price: "$4.50",
      calories: "1150 kcal",
      description: "1 signature Zinger burger, 1 piece Hot & Crispy chicken, fries and a chilled fountain drink.",
      image: "assets/images/wow-box.webp",
      featured: true,
      popular: true
    },
    {
      id: "sb4",
      name: "KFC Xtreme Duo Box",
      category: "Signature Boxes",
      price: "$5.95",
      calories: "1580 kcal",
      description: "2 Zinger burgers, 2 pieces of Hot & Crispy fried chicken, 1 large fries, and 2 chilled drinks.",
      image: "assets/images/xtreme-duo-box.webp",
      featured: true,
      popular: true
    },

    // --- SHARING & BUCKETS ---
    {
      id: "sh1",
      name: "9 Pc. Value Chicken Bucket",
      category: "Sharing & Buckets",
      price: "$8.80",
      calories: "2100 kcal",
      description: "9 mouth-watering pieces of signature Hot & Crispy or Original Recipe fried chicken.",
      image: "assets/images/value-bucket-9pc.webp",
      featured: true,
      popular: true
    },
    {
      id: "sh2",
      name: "12 Pc. Family Bucket Meal",
      category: "Sharing & Buckets",
      price: "$13.90",
      calories: "3400 kcal",
      description: "12 pieces of fried chicken, 3 large sides (fries or coleslaw), and 6 warm dinner rolls or biscuits.",
      image: "assets/images/family-bucket-12pc.webp",
      featured: true,
      popular: true
    },
    {
      id: "sh3",
      name: "Family Festival Feast 1",
      category: "Sharing & Buckets",
      price: "$10.20",
      calories: "2900 kcal",
      description: "4 Krunch burgers, 4 pieces Hot & Crispy chicken, fries and a 1.5L beverage.",
      image: "assets/images/family-festival-1.webp",
      featured: true,
      popular: true
    },
    {
      id: "sh4",
      name: "Family Festival Feast 2",
      category: "Sharing & Buckets",
      price: "$12.40",
      calories: "3300 kcal",
      description: "2 Zinger burgers, 2 Krunch burgers, 4 pieces fried chicken, double fries and a 1.5L drink.",
      image: "assets/images/family-festival-2.webp",
      featured: true,
      popular: false
    },
    {
      id: "sh5",
      name: "16 Pc. Super Family Feast",
      category: "Sharing & Buckets",
      price: "$16.99",
      calories: "4500 kcal",
      description: "16 pieces of crispy fried chicken, 4 large sides, and 8 warm dinner rolls or biscuits.",
      image: "assets/images/super-family-feast-16pc.webp",
      featured: false,
      popular: false
    },

    // --- SNACKS & BEVERAGES ---
    {
      id: "sbv1",
      name: "Secret Recipe French Fries",
      category: "Snacks & Beverages",
      price: "$1.15",
      calories: "380 kcal",
      description: "Golden crispy french fries seasoned with KFC's secret blend of herbs and spices.",
      image: "assets/images/french-fries.webp",
      featured: false,
      popular: true
    },
    {
      id: "sbv2",
      name: "Hot Wings (8 Pc.)",
      category: "Snacks & Beverages",
      price: "$2.35",
      calories: "560 kcal",
      description: "8 pieces of juicy chicken wings tossed in KFC's fiery hot and crunchy signature breading.",
      image: "assets/images/hot-wings.webp",
      featured: false,
      popular: true
    },
    {
      id: "sbv3",
      name: "12 Pc. Crispy Nuggets",
      category: "Snacks & Beverages",
      price: "$2.45",
      calories: "420 kcal",
      description: "12 pieces of 100% tender white meat chicken nuggets served with signature dipping sauce.",
      image: "assets/images/chicken-nuggets.webp",
      featured: false,
      popular: false
    },
    {
      id: "sbv4",
      name: "Mashed Potatoes & Gravy",
      category: "Snacks & Beverages",
      price: "$0.90",
      calories: "130 kcal",
      description: "Creamy whipped mashed potatoes topped with savory signature brown herb gravy.",
      image: "assets/images/mashed-potatoes.webp",
      featured: false,
      popular: true
    },
    {
      id: "sbv_biscuit",
      name: "Warm Buttermilk Biscuit",
      category: "Snacks & Beverages",
      price: "$0.65",
      calories: "180 kcal",
      description: "Freshly baked golden flaky buttermilk biscuit served warm. Affordable solo KFC biscuit price.",
      image: "assets/images/biscuits.webp",
      featured: true,
      popular: true
    },
    {
      id: "sbv5",
      name: "Fresh Coleslaw Salad",
      category: "Snacks & Beverages",
      price: "$0.80",
      calories: "150 kcal",
      description: "Crisp shredded cabbage and sweet carrots tossed in creamy seasoned dressing.",
      image: "assets/images/coleslaw.webp",
      featured: false,
      popular: false
    },
    {
      id: "sbv6",
      name: "Chilled Fountain Drinks (Medium)",
      category: "Snacks & Beverages",
      price: "$0.70",
      calories: "210 kcal",
      description: "Ice-cold refreshing fountain beverage: Pepsi, 7up, Mirinda, or Mountain Dew.",
      image: "assets/images/soft-drink.webp",
      featured: false,
      popular: false
    },

    // --- MIDNIGHT DEALS ---
    {
      id: "md1",
      name: "Midnight Deal 1",
      category: "Midnight Deals",
      price: "$2.10",
      calories: "760 kcal",
      description: "1 Classic Zinger Burger + 1 Regular Chilled Fountain Drink. Available 12 AM to 3 AM.",
      image: "assets/images/midnight-deal-1.webp",
      featured: true,
      popular: true
    },
    {
      id: "md2",
      name: "Midnight Deal 2",
      category: "Midnight Deals",
      price: "$2.85",
      calories: "980 kcal",
      description: "2 Krunch Burgers + 1 Regular Secret Recipe Fries + 2 Chilled Drinks. Late night exclusive.",
      image: "assets/images/midnight-deal-2.webp",
      featured: true,
      popular: true
    },
    {
      id: "md3",
      name: "Midnight Deal 3",
      category: "Midnight Deals",
      price: "$3.40",
      calories: "1100 kcal",
      description: "1 Mighty Zinger Burger + 1 Regular Fries + 1 Chilled Drink for the ultimate late night bite.",
      image: "assets/images/midnight-deal-3.webp",
      featured: true,
      popular: true
    }
  ];

  // --------------------------------------------------------------------------
  // 2. DOM Elements Selection & Category Mapping
  // --------------------------------------------------------------------------
  const searchInput = document.getElementById('menu-search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const searchFeedback = document.getElementById('search-feedback');
  const filterPills = document.querySelectorAll('.filter-pill');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const mobilePanel = document.getElementById('mobile-nav-panel');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const siteHeader = document.querySelector('.site-header');

  const categorySections = [
    { id: 'everyday-value-section', name: 'Everyday Value' },
    { id: 'combos-section', name: 'Ala Carte & Combos' },
    { id: 'signature-boxes-section', name: 'Signature Boxes' },
    { id: 'sharing-section', name: 'Sharing & Buckets' },
    { id: 'snacks-section', name: 'Snacks & Beverages' },
    { id: 'midnight-deals-section', name: 'Midnight Deals' }
  ];

  let currentCategory = 'All';
  let currentSearchQuery = '';

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }

  // --------------------------------------------------------------------------
  // 3. Live Menu Search & In-Place Filter Engine (Zero Card Duplication)
  // --------------------------------------------------------------------------
  function applySearchAndFilter() {
    const query = currentSearchQuery.toLowerCase().trim();
    let totalVisible = 0;

    // Toggle Clear button visibility
    if (clearBtn) {
      clearBtn.style.display = query.length > 0 ? 'flex' : 'none';
    }

    categorySections.forEach(cat => {
      const sectionEl = document.getElementById(cat.id);
      if (!sectionEl) return;

      const cards = sectionEl.querySelectorAll('.menu-card');
      let sectionMatches = 0;

      cards.forEach(card => {
        const title = card.querySelector('.menu-item-title')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.menu-item-desc')?.textContent.toLowerCase() || '';
        const price = card.querySelector('.menu-item-price')?.textContent.toLowerCase() || '';

        const matchesQuery = query === '' ||
                             title.includes(query) ||
                             desc.includes(query) ||
                             price.includes(query) ||
                             cat.name.toLowerCase().includes(query);

        const matchesCategory = currentCategory === 'All' || currentCategory === cat.name;

        if (matchesQuery && matchesCategory) {
          card.style.display = 'flex';
          sectionMatches++;
          totalVisible++;
        } else {
          card.style.display = 'none';
        }
      });

      // Show or hide entire category section based on matches
      if (sectionMatches > 0) {
        sectionEl.style.display = '';
      } else {
        sectionEl.style.display = 'none';
      }
    });

    // Feedback banner for search status
    if (!searchFeedback) return;

    if (query.length > 0 || currentCategory !== 'All') {
      searchFeedback.style.display = 'block';
      if (totalVisible === 0) {
        searchFeedback.innerHTML = `
          <div class="no-results">
            <div class="no-results-icon">🔍</div>
            <h3 class="no-results-title">No menu items found</h3>
            <p class="section-subtitle">No items match "${escapeHtml(currentSearchQuery)}". <button class="btn-reset-search" id="btn-reset-search">Clear Search</button></p>
          </div>
        `;
        document.getElementById('btn-reset-search')?.addEventListener('click', resetSearch);
      } else {
        searchFeedback.innerHTML = `
          <div class="search-count-badge">
            <span>Showing <strong>${totalVisible}</strong> menu items ${query ? `matching "<em>${escapeHtml(currentSearchQuery)}</em>"` : ''}</span>
            <button class="btn-reset-search" id="btn-reset-search">Reset Filter</button>
          </div>
        `;
        document.getElementById('btn-reset-search')?.addEventListener('click', resetSearch);
      }
    } else {
      searchFeedback.style.display = 'none';
      searchFeedback.innerHTML = '';
    }
  }

  function resetSearch() {
    currentSearchQuery = '';
    currentCategory = 'All';
    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
    filterPills.forEach(p => {
      if (p.getAttribute('data-category') === 'All') p.classList.add('active');
      else p.classList.remove('active');
    });
    applySearchAndFilter();
  }

  // --------------------------------------------------------------------------
  // 4. Interactive Search & Filter Event Listeners
  // --------------------------------------------------------------------------
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      applySearchAndFilter();
    });

    // Clear search on Escape key
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        resetSearch();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      resetSearch();
      if (searchInput) searchInput.focus();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');

      if (currentSearchQuery === '') {
        // If no active search query, scroll smoothly to the target category
        if (currentCategory === 'All') {
          const menuSection = document.getElementById('menu-section');
          if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          categorySections.forEach(cat => {
            const sectionEl = document.getElementById(cat.id);
            if (sectionEl) sectionEl.style.display = '';
            sectionEl?.querySelectorAll('.menu-card').forEach(c => c.style.display = 'flex');
          });
          if (searchFeedback) searchFeedback.style.display = 'none';
        } else {
          const targetCat = categorySections.find(c => c.name === currentCategory);
          if (targetCat) {
            const sectionEl = document.getElementById(targetCat.id);
            if (sectionEl) {
              sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      } else {
        applySearchAndFilter();
      }
    });
  });


  // --------------------------------------------------------------------------
  // 5. Mobile Navigation Drawer State Manager
  // --------------------------------------------------------------------------
  function openMobileNav() {
    if (!hamburgerBtn || !mobileOverlay || !mobilePanel) return;
    hamburgerBtn.classList.add('is-active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileOverlay.classList.add('is-active');
    mobilePanel.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!hamburgerBtn || !mobileOverlay || !mobilePanel) return;
    hamburgerBtn.classList.remove('is-active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileOverlay.classList.remove('is-active');
    mobilePanel.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = hamburgerBtn.classList.contains('is-active');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileNav);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburgerBtn && hamburgerBtn.classList.contains('is-active')) {
      closeMobileNav();
    }
  });

  // Close drawer if window is resized above mobile breakpoint (1100px)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1100 && hamburgerBtn && hamburgerBtn.classList.contains('is-active')) {
      closeMobileNav();
    }
  });

  // --------------------------------------------------------------------------
  // 6. FAQ Accordion Manager
  // --------------------------------------------------------------------------
  const faqButtons = document.querySelectorAll('.faq-question-btn');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
      if (!faqItem) return;
      const isOpen = faqItem.classList.contains('active');

      // Close all active items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const btn = item.querySelector('.faq-question-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        faqItem.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. Sticky Header & Scrollspy Manager
  // --------------------------------------------------------------------------
  const navDesktopLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 20) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    }

    // Scrollspy highlight active section link in header nav
    if (window.scrollY < 250) {
      navDesktopLinks.forEach(link => {
        if (link.getAttribute('href') === 'index.html') {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      return;
    }

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navDesktopLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // 8. Policy & Contact Modal Dialog Manager
  // --------------------------------------------------------------------------
  const modalOpenLinks = document.querySelectorAll('.modal-open-link');
  const modalOverlays = document.querySelectorAll('.modal-overlay');

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      const closeBtn = modal.querySelector('.modal-close-btn');
      if (closeBtn) closeBtn.focus();
    }
  };

  const closeModal = (modal) => {
    if (modal) {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  modalOpenLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = link.getAttribute('data-modal');
      if (modalId) openModal(modalId);
    });
  });

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
    const closeBtn = overlay.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(overlay));
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(overlay => {
        if (overlay.classList.contains('is-active')) closeModal(overlay);
      });
    }
  });

  // Initial Setup: Ensure all cards and sections are displayed
  applySearchAndFilter();
});
