// Main TypeScript file for myLocal.vn clone

// News Data (simplified for demo)
interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: '19.05.2025',
    category: 'Tin tức',
    title: 'ƯU ĐÃI NGÀY VÀNG 20/05: TẶNG ĐẾN 15K VÀO TÀI KHOẢN CHÍNH KHI GIA HẠN GÓI CƯỚC',
    link: '/tin-tuc/uu-dai-ngay-vang-2005'
  },
  {
    id: 2,
    date: '13.05.2025',
    category: 'Tin tức',
    title: 'ƯU ĐÃI 15/05: NẠP DỮ LIỆU CỘNG THÊM ĐẾN 10K VÀO TÀI KHOẢN CHÍNH',
    link: '/tin-tuc/uu-dai-15-05'
  },
  {
    id: 3,
    date: '12.05.2025',
    category: 'Tin tức',
    title: 'LOCAL RA MẮT GÓI CƯỚC MỚI LÊN TỚI 120GB DATA CHỈ TỪ 3K/NGÀY',
    link: '/tin-tuc/goi-cuoc-moi-120gb'
  }
];

// Initialize website functionality
document.addEventListener('DOMContentLoaded', () => {
  // Set asset paths
  setAssetPaths();

  // Initialize mobile menu
  initMobileMenu();

  // Create news cards
  createNewsCards();
});

// Set asset paths for images
function setAssetPaths(): void {
  // Logo
  const logoImage = document.getElementById('logo-image') as HTMLImageElement;
  if (logoImage) {
    logoImage.src = 'https://ext.same-assets.com/250927756/502366010.svg';
  }

  // Footer logo
  const footerLogo = document.getElementById('footer-logo-image') as HTMLImageElement;
  if (footerLogo) {
    footerLogo.src = 'https://ext.same-assets.com/250927756/2514536057.svg';
  }

  // Mobile menu icon
  const menuIcon = document.getElementById('mobile-menu-icon') as HTMLImageElement;
  if (menuIcon) {
    menuIcon.src = 'https://ext.same-assets.com/250927756/841129618.svg';
  }

  // Cart icon
  const cartIcon = document.getElementById('cart-icon') as HTMLImageElement;
  if (cartIcon) {
    cartIcon.src = 'https://ext.same-assets.com/250927756/2892878943.svg';
  }

  // Order tracking icon
  const orderIcon = document.getElementById('order-icon') as HTMLImageElement;
  if (orderIcon) {
    orderIcon.src = 'https://ext.same-assets.com/250927756/603633046.svg';
  }

  // Separator images
  const separatorImgs = document.querySelectorAll('.separator-img') as NodeListOf<HTMLImageElement>;
  separatorImgs.forEach(img => {
    img.src = 'https://s3.hn-1.cloud.cmctelecom.vn/asim-fileservice-dev/public-data/local-cms/2024/4/Rectangle_40122_aa4ebfd691.png';
  });

  // Arrow icon
  const arrowIcons = document.querySelectorAll('.arrow-icon') as NodeListOf<HTMLImageElement>;
  arrowIcons.forEach(icon => {
    icon.src = 'https://ext.same-assets.com/250927756/2198484810.svg';
  });

  // Package icons
  const packageIcons = document.querySelectorAll('.package-icon') as NodeListOf<HTMLImageElement>;
  packageIcons.forEach((icon, index) => {
    if (index === 0) {
      icon.src = 'https://ext.same-assets.com/250927756/2746711836.svg';
    } else {
      icon.src = 'https://ext.same-assets.com/250927756/2746711836.svg';
    }
  });

  // Feature icons
  const featureIcons = document.querySelectorAll('.feature-icon') as NodeListOf<HTMLImageElement>;
  featureIcons.forEach((icon, index) => {
    if (index === 0) {
      icon.src = 'https://ext.same-assets.com/3637946010/2041544585.svg'; // Data icon
    } else if (index === 1) {
      icon.src = 'https://ext.same-assets.com/3637946010/3210335374.svg'; // Network icon
    } else if (index === 2) {
      icon.src = 'https://ext.same-assets.com/3637946010/1671182723.svg'; // Deal icon
    }
  });

  // Social icons
  const socialIcons = document.querySelectorAll('.social-icon') as NodeListOf<HTMLImageElement>;
  socialIcons.forEach((icon, index) => {
    if (index === 0) {
      icon.src = 'https://ext.same-assets.com/250927756/721480182.svg'; // Facebook
    } else if (index === 1) {
      icon.src = 'https://ext.same-assets.com/250927756/3503830404.svg'; // TikTok
    } else if (index === 2) {
      icon.src = 'https://ext.same-assets.com/250927756/721480182.svg'; // YouTube - replaced with a working icon
    } else if (index === 3) {
      icon.src = 'https://ext.same-assets.com/250927756/3503830404.svg'; // LinkedIn - replaced with a working icon
    }
  });
}

// Mobile menu toggle functionality
function initMobileMenu(): void {
  const menuToggle = document.querySelector('.mobile-menu-toggle') as HTMLElement;
  const navigation = document.querySelector('.main-navigation') as HTMLElement;
  const body = document.body;

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      navigation.classList.toggle('active');
      body.classList.toggle('mobile-menu-active');
    });
  }
}

// Create news cards based on data
function createNewsCards(): void {
  const newsContainer = document.querySelector('.news-cards') as HTMLElement;

  if (newsContainer) {
    newsData.forEach(news => {
      const newsCard = document.createElement('article');
      newsCard.className = 'news-card';

      newsCard.innerHTML = `
        <div class="news-meta">
          <span class="news-category">${news.category}</span> |
          <span class="news-date">${news.date}</span>
        </div>
        <h3 class="news-title">${news.title}</h3>
        <a href="${news.link}" class="news-link">
          <img src="https://ext.same-assets.com/250927756/2198484810.svg" alt="arrow-right" class="arrow-icon">
        </a>
      `;

      newsContainer.appendChild(newsCard);
    });
  }
}
