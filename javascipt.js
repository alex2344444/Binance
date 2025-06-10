    const hamburger = document.querySelector('.hamburger');
    const sections = document.querySelector('.sections');

    hamburger.addEventListener('click', () => {
      sections.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    const openModal = document.getElementById('open-modal');
    const closeModal = document.getElementById('close-modal');
    const modal = document.getElementById('signin-modal');

    openModal.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });

    const aboutLink = document.getElementById('about-link');
    const aboutSection = document.getElementById('about-section');

    aboutLink.addEventListener('click', (e) => {
      e.preventDefault();

      if (aboutSection.classList.contains('hidden')) {
        aboutSection.classList.remove('hidden');
        aboutSection.classList.add('showing');
        aboutSection.scrollIntoView({ behavior: 'smooth' });

        aboutSection.addEventListener('animationend', () => {
          aboutSection.classList.remove('showing');
        }, { once: true });

      } else {
        aboutSection.classList.add('hidden');
      }
    });

    const categoryBtn = document.getElementById('category-btn');
    const categoryList = document.getElementById('category-list');
    const categoryInfo = document.getElementById('category-info');
    const cardsContainer = document.getElementById('category-cards-container');

    const categoriesData = {
      junior: [
        {
          logo: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
          developer: 'Junior Dev 1',
          description: 'Beginner friendly courses on HTML & CSS.',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
        },
        {
          logo: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
          developer: 'Junior Dev 2',
          description: 'Learn JavaScript fundamentals and basics.',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
        },
        {
          logo: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
          developer: 'Junior Dev 3',
          description: 'Introduction to web development tools.',
          image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
        }
      ],
      middle: [
        {
          logo: 'https://cdn-icons-png.flaticon.com/512/2921/2921233.png',
          developer: 'Middle Dev 1',
          description: 'Intermediate JavaScript & frameworks.',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        },
        {
          logo: 'https://cdn-icons-png.flaticon.com/512/2921/2921233.png',
          developer: 'Middle Dev 2',
          description: 'Working with APIs and data fetching.',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
        },
        {
          logo: 'https://cdn-icons-png.flaticon.com/512/2921/2921233.png',
          developer: 'Middle Dev 3',
          description: 'Version control with Git and GitHub.',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
        }
      ],
      senior: [
        {
          logo: 'https://cdn-icons-png.flaticon.com/512/2921/2921217.png',
          developer: 'Senior Dev 1',
          description: 'Advanced topics in backend development.',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
        },
        {
          logo: 'https://cdn-icons-png.flaticon.com/512/2921/2921217.png',
          developer: 'Senior Dev 2',
          description: 'System design and architecture best practices.',
          image: 'https://images.unsplash.com/photo-1537432376769-00a4ac962af3?auto=format&fit=crop&w=400&q=80',
        },
        {
          logo: 'https://cdn-icons-png.flaticon.com/512/2921/2921217.png',
          developer: 'Senior Dev 3',
          description: 'Leadership and team management skills.',
          image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=400&q=80',
        }
      ],
    };

    categoryBtn.addEventListener('click', () => {
      categoryList.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!categoryBtn.contains(e.target) && !categoryList.contains(e.target)) {
        categoryList.classList.add('hidden');
      }
    });

    function renderCategoryCards(category) {
      const cards = categoriesData[category];
      if (!cards) return;

      cardsContainer.innerHTML = '';
      categoryInfo.classList.remove('show');
      aboutSection.classList.add('hidden');

      cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('category-card');

        cardDiv.innerHTML = `
          <img src="${card.logo}" alt="Logo" class="logo" />
          <div class="developer">${card.developer}</div>
          <p>${card.description}</p>
          <img src="${card.image}" alt="Description Image" class="description-image" />
        `;

        cardsContainer.appendChild(cardDiv);
      });

      cardsContainer.classList.remove('hidden');
      setTimeout(() => {
        cardsContainer.classList.add('show');
        cardsContainer.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }

    categoryList.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', (e) => {
        const selectedCategory = e.target.getAttribute('data-category');
        categoryBtn.textContent = e.target.textContent + ' ▼';
        categoryList.classList.add('hidden');

        renderCategoryCards(selectedCategory);
      });
    });

    const contactModal = document.getElementById('contact-modal');
    const openContactBtn = document.getElementById('open-contact');
    const closeContactBtn = contactModal.querySelector('.close-contact');

    openContactBtn.addEventListener('click', e => {
      e.preventDefault();
      contactModal.classList.add('show');
      contactModal.setAttribute('aria-hidden', 'false');
    });

    closeContactBtn.addEventListener('click', () => {
      contactModal.classList.remove('show');
      contactModal.setAttribute('aria-hidden', 'true');
    });

    window.addEventListener('click', e => {
      if (e.target === contactModal) {
        contactModal.classList.remove('show');
        contactModal.setAttribute('aria-hidden', 'true');
      }
    });

        const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.plan-card').forEach(card => {
      observer.observe(card);
    });

      // Animate project cards on scroll
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        projectObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.project-card').forEach(card => {
    projectObserver.observe(card);
  });

    const teacherObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        teacherObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.teacher-card').forEach(card => {
    teacherObserver.observe(card);
  });

   document.querySelectorAll('.fade-in').forEach(el => {
    const delay = el.style.animationDelay || '0s';
    el.style.animationDelay = delay;
  });

    // Animate testimonials on scroll
  const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        testimonialObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.testimonial-card').forEach(card => {
    testimonialObserver.observe(card);
  });

   document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      item.classList.toggle("open");

      // Optional: close others
      document.querySelectorAll(".faq-item").forEach(i => {
        if (i !== item) i.classList.remove("open");
      });
    });
  });

  document.querySelectorAll('.blog-card').forEach(card => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        card.classList.add('visible');
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(card);
  });