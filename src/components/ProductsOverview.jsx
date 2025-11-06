import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsOverview.css';

const ProductsOverview = () => {
  const navigate = useNavigate();
  // Import all product images as URLs (support nested, mixed cases)
  const allImageUrls = useMemo(() => {
    const modulesLower = import.meta.glob('../assets/resources/product_images/**/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
    const modulesUpper = import.meta.glob('../assets/resources/product_images/**/*.{PNG,JPG,JPEG,WEBP}', { eager: true, as: 'url' });
    const merged = { ...modulesLower, ...modulesUpper };
    const urls = Array.from(new Set(
      Object.entries(merged)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, url]) => url)
    ));
    return urls;
  }, []);

  // Show all images; marquee is duplicated for seamless loop

  return (
    <section className="products-overview-section" id="products-overview">
      <div className="products-overview-wrapper">
        <h2 className="products-overview-title">Products Overview</h2>

        <div className="marquee">
          <div className="marquee-track">
            {allImageUrls.concat(allImageUrls).map((src, idx) => (
              <div className="marquee-item" key={idx}>
                <img loading="lazy" src={src} alt={`Product ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="products-overview-actions">
          <button className="overview-btn primary" onClick={() => navigate('/product-range')}>
            See all products
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductsOverview);

