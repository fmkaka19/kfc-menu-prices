/* ==========================================================================
   KFC MENU PRICES - OFFICIAL JAVASCRIPT DIRECTORY ENGINE
   Instant Search, Category Filters, Mobile Navigation, FAQ Accordion
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Comprehensive KFC Menu Data Repository
  // --------------------------------------------------------------------------
  const menuItems = [
    // --- COMBOS & MEALS ---
    {
      id: "c1",
      name: "3 Pc. Tenders Combo",
      category: "Combos",
      price: "$8.99",
      calories: "780-1120 cal",
      description: "3 hand-breaded Extra Crispy tenders, 1 side, 1 biscuit, and a medium drink.",
      image: "assets/images/crispy-tenders.svg",
      featured: true,
      popular: true
    },
    {
      id: "c2",
      name: "Classic Chicken Sandwich Combo",
      category: "Combos",
      price: "$8.49",
      calories: "920-1250 cal",
      description: "Crispy chicken breast filet with pickles & mayo, served with 1 side and a medium drink.",
      image: "assets/images/chicken-sandwich.svg",
      featured: true,
      popular: true
    },
    {
      id: "c3",
      name: "2 Pc. Drum & Thigh Combo",
      category: "Combos",
      price: "$7.99",
      calories: "850-1180 cal",
      description: "2 pieces of Original Recipe or Extra Crispy chicken, 1 side, 1 biscuit, and a drink.",
      image: "assets/images/combo-meal.svg",
      featured: true,
      popular: false
    },
    {
      id: "c4",
      name: "12 Pc. Nuggets Combo",
      category: "Combos",
      price: "$9.29",
      calories: "710-1040 cal",
      description: "12 100% white meat nuggets, dipping sauce, 1 side, 1 biscuit, and medium drink.",
      image: "assets/images/chicken-nuggets.svg",
      featured: true,
      popular: true
    },

    // --- CHICKEN ---
    {
      id: "ch1",
      name: "8 Pc. Original Recipe Bucket",
      category: "Chicken",
      price: "$19.99",
      calories: "1760 cal",
      description: "8 pieces of famous Original Recipe chicken (2 drums, 2 thighs, 2 breasts, 2 wings).",
      image: "assets/images/hero-chicken.svg",
      featured: true,
      popular: true
    },
    {
      id: "ch2",
      name: "4 Pc. Chicken Meal",
      category: "Chicken",
      price: "$11.49",
      calories: "1100 cal",
      description: "4 pieces of fried chicken (breast, thigh, drum, wing), 2 individual sides, 1 biscuit.",
      image: "assets/images/hero-chicken.svg",
      featured: false,
      popular: false
    },
    {
      id: "ch3",
      name: "Hot Wings (8 Pc.)",
      category: "Chicken",
      price: "$8.99",
      calories: "560 cal",
      description: "8 spicy coated crispy hot wings packed with fiery bold flavor.",
      image: "assets/images/crispy-tenders.svg",
      featured: false,
      popular: false
    },

    // --- SANDWICHES ---
    {
      id: "s1",
      name: "KFC Classic Chicken Sandwich",
      category: "Sandwiches",
      price: "$4.99",
      calories: "650 cal",
      description: "Extra Crispy chicken breast filet, premium pickles, and mayo on a toasted brioche bun.",
      image: "assets/images/chicken-sandwich.svg",
      featured: true,
      popular: true
    },
    {
      id: "s2",
      name: "Spicy Chicken Sandwich",
      category: "Sandwiches",
      price: "$4.99",
      calories: "660 cal",
      description: "Extra Crispy chicken breast filet, spicy mayo sauce, and pickles on a brioche bun.",
      image: "assets/images/chicken-sandwich.svg",
      featured: true,
      popular: true
    },
    {
      id: "s3",
      name: "Chicken Little Sandwich",
      category: "Sandwiches",
      price: "$2.99",
      calories: "300 cal",
      description: "Crispy tender, mayo, and pickle on a sesame seed bun. Perfect quick snack.",
      image: "assets/images/chicken-sandwich.svg",
      featured: false,
      popular: false
    },

    // --- TENDERS ---
    {
      id: "t1",
      name: "5 Pc. Extra Crispy Tenders",
      category: "Tenders",
      price: "$9.49",
      calories: "650 cal",
      description: "5 hand-breaded Extra Crispy tenders served with 2 dipping sauces of your choice.",
      image: "assets/images/crispy-tenders.svg",
      featured: true,
      popular: true
    },
    {
      id: "t2",
      name: "3 Pc. Tenders Individual",
      category: "Tenders",
      price: "$5.99",
      calories: "390 cal",
      description: "3 juicy, hand-breaded chicken tenders with 1 dipping sauce.",
      image: "assets/images/crispy-tenders.svg",
      featured: false,
      popular: false
    },

    // --- NUGGETS ---
    {
      id: "n1",
      name: "8 Pc. KFC Nuggets",
      category: "Nuggets",
      price: "$4.49",
      calories: "280 cal",
      description: "8 pieces of 100% white meat chicken nuggets hand-breaded in Original Recipe spices.",
      image: "assets/images/chicken-nuggets.svg",
      featured: false,
      popular: true
    },
    {
      id: "n2",
      name: "12 Pc. KFC Nuggets",
      category: "Nuggets",
      price: "$6.49",
      calories: "420 cal",
      description: "12 bite-sized white meat chicken nuggets cooked golden crispy.",
      image: "assets/images/chicken-nuggets.svg",
      featured: false,
      popular: false
    },

    // --- FAMILY MEALS ---
    {
      id: "f1",
      name: "12 Pc. Family Bucket Meal",
      category: "Family Meals",
      price: "$32.99",
      calories: "3400 cal",
      description: "12 pieces of Original Recipe or Extra Crispy chicken, 3 large sides, and 6 biscuits.",
      image: "assets/images/family-bucket.svg",
      featured: true,
      popular: true
    },
    {
      id: "f2",
      name: "16 Pc. Family Feast",
      category: "Family Meals",
      price: "$39.99",
      calories: "4500 cal",
      description: "16 pieces of chicken, 4 large sides, and 8 warm buttermilk biscuits.",
      image: "assets/images/family-bucket.svg",
      featured: true,
      popular: true
    },

    // --- SIDES ---
    {
      id: "sd1",
      name: "Secret Recipe Fries (Large)",
      category: "Sides",
      price: "$3.79",
      calories: "480 cal",
      description: "Crispy coated french fries seasoned with secret blend of herbs & spices.",
      image: "assets/images/french-fries.svg",
      featured: false,
      popular: true
    },
    {
      id: "sd2",
      name: "Mashed Potatoes & Gravy",
      category: "Sides",
      price: "$2.99",
      calories: "130 cal",
      description: "Creamy whipped mashed potatoes topped with signature savory brown gravy.",
      image: "assets/images/mashed-potatoes.svg",
      featured: false,
      popular: true
    },
    {
      id: "sd3",
      name: "Warm Buttermilk Biscuit",
      category: "Sides",
      price: "$1.49",
      calories: "180 cal",
      description: "Freshly baked golden buttermilk biscuit served warm.",
      image: "assets/images/biscuits.svg",
      featured: false,
      popular: false
    },

    // --- DRINKS ---
    {
      id: "dr1",
      name: "Pepsi Cola (Medium)",
      category: "Drinks",
      price: "$2.49",
      calories: "250 cal",
      description: "Ice-cold refreshing fountain Pepsi cola.",
      image: "assets/images/soft-drink.svg",
      featured: false,
      popular: false
    },
    {
      id: "dr2",
      name: "Sweet Tea (Medium)",
      category: "Drinks",
      price: "$2.49",
      calories: "180 cal",
      description: "Southern style freshly brewed sweet iced tea.",
      image: "assets/images/soft-drink.svg",
      featured: false,
      popular: false
    },

    // --- DEALS ---
    {
      id: "dl1",
      name: "$20 Fill Up Box",
      category: "Deals",
      price: "$20.00",
      calories: "2600 cal",
      description: "12 Pc. Nuggets, 4 Pc. Chicken, Secret Recipe Fries, 4 Biscuits & 4 Dipping Sauces.",
      image: "assets/images/family-bucket.svg",
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
          <img src="${item.image}" alt="${item.name} menu item with price and calories" width="400" height="250" loading="lazy">
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
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      renderMenuItems();
    });
  });

  // --------------------------------------------------------------------------
  // 5. Mobile Navigation Drawer State Manager
  // --------------------------------------------------------------------------
  function openMobileNav() {
    hamburgerBtn.classList.add('is-active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileOverlay.classList.add('is-active');
    mobilePanel.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
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

  // --------------------------------------------------------------------------
  // 6. FAQ Accordion Manager
  // --------------------------------------------------------------------------
  const faqButtons = document.querySelectorAll('.faq-question-btn');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
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
  // 7. Sticky Header Shadow on Scroll
  // --------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  });

  // Initial Render Call
  renderMenuItems();
});
