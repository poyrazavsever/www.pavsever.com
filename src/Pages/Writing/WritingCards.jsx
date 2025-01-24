import React, { useState, useEffect } from 'react';
import WritingCard from '../../Components/WritingCard';
import { motion } from 'framer-motion';

function WritingCards() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Medium RSS Feed'den yazıları çek
  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@poyrazavsever');
        const data = await response.json();

        // img tag'lerini temizle ve içerikten sadece ilk 200 karakteri al
        const cleanedPosts = data.items.map((post) => ({
          ...post,
          content: post.content
            .replace(/<img[^>]*>/g, '') // img etiketlerini sil
            .substring(0, 200) + '...', // İçeriğin sadece ilk 200 karakterini göster
        }));

        setPosts(cleanedPosts); // Temizlenmiş ve kısaltılmış yazıları kaydet
        setLoading(false);
      } catch (error) {
        console.error('Medium yazılarını çekerken hata oluştu:', error);
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <div className='md:container mx-auto'>
      <div className='my-12 grid grid-cols-1 gap-4'>
        {posts?.length &&
          posts.map((post) => (
            <motion.div key={post.guid}>
              <WritingCard
                id={post.guid}
                title={post.title}
                content={post.content} // Kısa içerik
                date={post.pubDate}
                type='Medium'
              />
            </motion.div>
          ))}
      </div>
      {loading && <p>Yükleniyor...</p>}
      {!loading && posts.length === 0 && <p>Hiç yazı bulunamadı.</p>}

      {/* Tüm yazıları görmek için buton */}
      <div className='mt-6 my-16'>
        <a
          href="https://medium.com/@poyrazavsever"
          target="_blank"
          rel="noopener noreferrer"
          className='w-full px-6 py-3 text-neutral-100 bg-neutral-500 rounded-sm hover:bg-neutral-600 transition-colors'>
          Tüm Yazıları Gör
        </a>
      </div>
    </div>
  );
}

export default WritingCards;
