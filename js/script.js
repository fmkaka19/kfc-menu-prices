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
      price: "Rs. 310 ($1.10)",
      calories: "380 cal",
      description: "Crunchy signature crispy chicken fillet with spicy mayo in a soft toasted sesame bun.",
      image: "assets/images/chicken-sandwich.webp",
      featured: true,
      popular: true
    },
    {
      id: "ev2",
      name: "Krunch Combo Meal",
      category: "Everyday Value",
      price: "Rs. 620 ($2.25)",
      calories: "680 cal",
      description: "1 Krunch Burger, 1 regular secret recipe fries, and 1 refreshing chilled drink.",
      image: "assets/images/combo-meal.webp",
      featured: true,
      popular: true
    },
    {
      id: "ev3",
      name: "Rice & Spice Bowl",
      category: "Everyday Value",
      price: "Rs. 420 ($1.50)",
      calories: "490 cal",
      description: "Aromatic spiced rice served with crispy chicken bites and KFC signature savory gravy.",
      image: "assets/images/combo-meal.webp",
      featured: false,
      popular: true
    },
    {
      id: "ev4",
      name: "Zingeratha Wrap",
      category: "Everyday Value",
      price: "Rs. 450 ($1.60)",
      calories: "520 cal",
      description: "Crispy chicken fillet rolled in a golden flaky paratha with tangy sauce and fresh sliced onions.",
      image: "assets/images/crispy-tenders.webp",
      featured: false,
      popular: false
    },
    {
      id: "ev5",
      name: "Twister Crispy Wrap",
      category: "Everyday Value",
      price: "Rs. 520 ($1.85)",
      calories: "490 cal",
      description: "Tender chicken strips with diced ripe tomatoes, crisp lettuce, and pepper mayo in a warm tortilla.",
      image: "assets/images/crispy-tenders.webp",
      featured: false,
      popular: false
    },

    // --- ALA CARTE & COMBOS ---
    {
      id: "ac1",
      name: "Classic Zinger Burger",
      category: "Ala Carte & Combos",
      price: "Rs. 650 ($2.35)",
      calories: "550 cal",
      description: "KFC's iconic hand-breaded crunchy spicy chicken breast fillet topped with lettuce and mayo.",
      image: "assets/images/chicken-sandwich.webp",
      featured: true,
      popular: true
    },
    {
      id: "ac2",
      name: "Classic Zinger Combo",
      category: "Ala Carte & Combos",
      price: "Rs. 950 ($3.40)",
      calories: "890 cal",
      description: "1 Classic Zinger burger, 1 regular golden fries, and 1 regular chilled fountain drink.",
      image: "assets/images/combo-meal.webp",
      featured: true,
      popular: true
    },
    {
      id: "ac3",
      name: "Mighty Zinger Burger",
      category: "Ala Carte & Combos",
      price: "Rs. 890 ($3.20)",
      calories: "850 cal",
      description: "Double crunchy spicy chicken fillets with cheese slice, fresh lettuce, and signature spicy mayo.",
      image: "assets/images/chicken-sandwich.webp",
      featured: true,
      popular: true
    },
    {
      id: "ac4",
      name: "Kentucky Crispy Burger Combo",
      category: "Ala Carte & Combos",
      price: "Rs. 820 ($2.95)",
      calories: "860 cal",
      description: "Crispy chicken fillet with cheese, smoky BBQ sauce, fries, and a chilled drink.",
      image: "assets/images/combo-meal.webp",
      featured: false,
      popular: false
    },
    {
      id: "ac5",
      name: "3 Pc. Extra Crispy Tenders Combo",
      category: "Ala Carte & Combos",
      price: "Rs. 890 ($3.20)",
      calories: "780 cal",
      description: "3 hand-breaded chicken tenders, dipping sauce, 1 regular fries, dinner roll, and a drink.",
      image: "assets/images/crispy-tenders.webp",
      featured: true,
      popular: true
    },

    // --- SIGNATURE BOXES ---
    {
      id: "sb1",
      name: "KFC Crispy Box Meal",
      category: "Signature Boxes",
      price: "Rs. 1,050 ($3.75)",
      calories: "980 cal",
      description: "1 piece of Hot & Crispy fried chicken, 1 regular fries, 1 regular drink, and 1 dinner roll with gravy.",
      image: "assets/images/combo-meal.webp",
      featured: true,
      popular: true
    },
    {
      id: "sb2",
      name: "KFC Boneless Box",
      category: "Signature Boxes",
      price: "Rs. 1,150 ($4.15)",
      calories: "920 cal",
      description: "4 crispy tenders, 1 regular fries, 1 soft dinner roll, dipping sauce, and 1 chilled drink.",
      image: "assets/images/crispy-tenders.webp",
      featured: true,
      popular: true
    },
    {
      id: "sb3",
      name: "KFC WOW Box Feast",
      category: "Signature Boxes",
      price: "Rs. 1,250 ($4.50)",
      calories: "1150 cal",
      description: "1 signature Zinger burger, 1 piece Hot & Crispy chicken, 1 regular fries, and 1 chilled beverage.",
      image: "assets/images/combo-meal.webp",
      featured: true,
      popular: true
    },
    {
      id: "sb4",
      name: "KFC Xtreme Duo Box",
      category: "Signature Boxes",
      price: "Rs. 1,650 ($5.95)",
      calories: "1580 cal",
      description: "2 Zinger burgers, 2 pieces of Hot & Crispy fried chicken, 1 large fries, and 2 chilled drinks.",
      image: "assets/images/family-bucket.webp",
      featured: true,
      popular: true
    },

    // --- SHARING & BUCKETS ---
    {
      id: "sh1",
      name: "9 Pc. Value Chicken Bucket",
      category: "Sharing & Buckets",
      price: "Rs. 2,450 ($8.80)",
      calories: "2100 cal",
      description: "9 mouth-watering pieces of signature Hot & Crispy or Original Recipe fried chicken.",
      image: "assets/images/hero-chicken.webp",
      featured: true,
      popular: true
    },
    {
      id: "sh2",
      name: "12 Pc. Family Bucket Meal",
      category: "Sharing & Buckets",
      price: "Rs. 3,890 ($13.90)",
      calories: "3400 cal",
      description: "12 pieces of fried chicken, 3 large sides (fries or coleslaw), and 6 warm dinner rolls or biscuits.",
      image: "assets/images/family-bucket.webp",
      featured: true,
      popular: true
    },
    {
      id: "sh3",
      name: "Family Festival Feast 1",
      category: "Sharing & Buckets",
      price: "Rs. 2,850 ($10.20)",
      calories: "2900 cal",
      description: "4 Krunch burgers, 4 pieces Hot & Crispy chicken, 2 regular fries, and 1 giant 1.5L drink.",
      image: "assets/images/family-bucket.webp",
      featured: true,
      popular: true
    },
    {
      id: "sh4",
      name: "Family Festival Feast 2",
      category: "Sharing & Buckets",
      price: "Rs. 3,450 ($12.40)",
      calories: "3300 cal",
      description: "2 Zinger burgers, 2 Krunch burgers, 4 pieces fried chicken, 2 regular fries, and 1.5L drink.",
      image: "assets/images/family-bucket.webp",
      featured: true,
      popular: false
    },
    {
      id: "sh5",
      name: "16 Pc. Super Family Feast",
      category: "Sharing & Buckets",
      price: "Rs. 4,750 ($16.99)",
      calories: "4500 cal",
      description: "16 pieces of crispy fried chicken, 4 large sides, and 8 warm dinner rolls or biscuits.",
      image: "assets/images/family-bucket.webp",
      featured: false,
      popular: false
    },

    // --- SNACKS & BEVERAGES ---
    {
      id: "sbv1",
      name: "Secret Recipe French Fries",
      category: "Snacks & Beverages",
      price: "Rs. 320 ($1.15)",
      calories: "380 cal",
      description: "Golden crispy french fries seasoned with KFC's secret blend of herbs and spices.",
      image: "assets/images/french-fries.webp",
      featured: false,
      popular: true
    },
    {
      id: "sbv2",
      name: "Hot Wings (8 Pc.)",
      category: "Snacks & Beverages",
      price: "Rs. 650 ($2.35)",
      calories: "560 cal",
      description: "8 pieces of juicy chicken wings tossed in KFC's fiery hot and crunchy signature breading.",
      image: "assets/images/crispy-tenders.webp",
      featured: false,
      popular: true
    },
    {
      id: "sbv3",
      name: "12 Pc. Crispy Nuggets",
      category: "Snacks & Beverages",
      price: "Rs. 680 ($2.45)",
      calories: "420 cal",
      description: "12 pieces of 100% tender white meat chicken nuggets served with signature dipping sauce.",
      image: "assets/images/chicken-nuggets.webp",
      featured: false,
      popular: false
    },
    {
      id: "sbv4",
      name: "Mashed Potatoes & Gravy",
      category: "Snacks & Beverages",
      price: "Rs. 250 ($0.90)",
      calories: "130 cal",
      description: "Creamy whipped mashed potatoes topped with savory signature brown herb gravy.",
      image: "assets/images/mashed-potatoes.webp",
      featured: false,
      popular: true
    },
    {
      id: "sbv5",
      name: "Fresh Coleslaw Salad",
      category: "Snacks & Beverages",
      price: "Rs. 220 ($0.80)",
      calories: "150 cal",
      description: "Crisp shredded cabbage and sweet carrots tossed in creamy seasoned dressing.",
      image: "assets/images/mashed-potatoes.webp",
      featured: false,
      popular: false
    },
    {
      id: "sbv6",
      name: "Chilled Fountain Drinks (Medium)",
      category: "Snacks & Beverages",
      price: "Rs. 190 ($0.70)",
      calories: "210 cal",
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
      price: "Rs. 590 ($2.10)",
      calories: "760 cal",
      description: "1 Classic Zinger Burger + 1 Regular Chilled Fountain Drink. Available 12 AM to 3 AM.",
      image: "assets/images/combo-meal.webp",
      featured: true,
      popular: true
    },
    {
      id: "md2",
      name: "Midnight Deal 2",
      category: "Midnight Deals",
      price: "Rs. 790 ($2.85)",
      calories: "980 cal",
      description: "2 Krunch Burgers + 1 Regular Secret Recipe Fries + 2 Chilled Drinks. Late night exclusive.",
      image: "assets/images/combo-meal.webp",
      featured: true,
      popular: true
    },
    {
      id: "md3",
      name: "Midnight Deal 3",
      category: "Midnight Deals",
      price: "Rs. 950 ($3.40)",
      calories: "1100 cal",
      description: "1 Mighty Zinger Burger + 1 Regular Fries + 1 Chilled Drink for the ultimate late night bite.",
      image: "assets/images/chicken-sandwich.webp",
      featured: true,
      popular: true
    }
  ];

  // --------------------------------------------------------------------------
  // 2. DOM Elements Selection
  // --------------------------------------------------------------------------
  const menuContainer = document.getElementById('menu-items-grid');
  const searchInput = document.getElementById('menu-search-input');
  const filterPills = document.querySelectorAll('.filter-pill');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const mobilePanel = document.getElementById('mobile-nav-panel');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const siteHeader = document.querySelector('.site-header');

  let currentCategory = 'All';
  let currentSearchQuery = '';

  // --------------------------------------------------------------------------
  // 3. Menu Grid Rendering Engine
  // --------------------------------------------------------------------------
  function renderMenuItems() {
    if (!menuContainer) return;

    // Filter Logic
    const filtered = menuItems.filter(item => {
      const matchesCategory = (currentCategory === 'All') || (item.category === currentCategory);
      const matchesSearch = item.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                            item.category.toLowerCase().includes(currentSearchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Zero Results Handler
    if (filtered.length === 0) {
      menuContainer.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3 class="no-results-title">No menu items found</h3>
          <p class="section-subtitle">Try adjusting your search terms or category filter.</p>
        </div>
      `;
      return;
    }

    // Render Cards
    menuContainer.innerHTML = filtered.map(item => `
      <article class="menu-card" data-category="${item.category}">
        <div class="menu-card-img-wrapper">
          <span class="card-category-badge">${item.category}</span>
          <img src="${item.image}" alt="${item.name} KFC menu prices and calories" width="400" height="250" loading="lazy">
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h3 class="menu-item-title">${item.name}</h3>
            <span class="menu-item-price">${item.price}</span>
          </div>
          <p class="menu-item-desc">${item.description}</p>
          <div class="menu-card-footer">
            <span class="calorie-tag">🔥 ${item.calories}</span>
            <a href="#calories-table" class="details-btn">View Details &rarr;</a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 4. Interactive Search & Filter Event Listeners
  // --------------------------------------------------------------------------
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim();
      renderMenuItems();
    });

    // Clear search on Escape key
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        currentSearchQuery = '';
        renderMenuItems();
      }
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      renderMenuItems();
    });
  });

  // Quick Category Row Click -> Sync Filter Pill & Smooth Scroll
  const quickCatCards = document.querySelectorAll('.quick-category-card');
  quickCatCards.forEach(card => {
    card.addEventListener('click', () => {
      const catName = card.getAttribute('data-category-target') || card.querySelector('.quick-category-name')?.textContent.trim();
      if (!catName) return;

      const matchingPill = Array.from(filterPills).find(
        p => p.getAttribute('data-category').toLowerCase() === catName.toLowerCase()
      );

      if (matchingPill) {
        filterPills.forEach(p => p.classList.remove('active'));
        matchingPill.classList.add('active');
        currentCategory = matchingPill.getAttribute('data-category');
        renderMenuItems();
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

  // Close drawer if window is resized above mobile breakpoint (768px)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && hamburgerBtn && hamburgerBtn.classList.contains('is-active')) {
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

      // Toggle current
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
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navDesktopLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Initial Render Call
  renderMenuItems();
});
