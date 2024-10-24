import React, { useState, useEffect, useRef, useCallback } from 'react';
import WritingCard from '../../Components/WritingCard';
import { motion } from 'framer-motion';

function WritingCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const lastPostRef = useRef();

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
        if (data.items.length <= recordsPerPage) {
          setHasMore(false); // Eğer tüm yazılar 1 sayfadan azsa hasMore'u false yap
        }
      } catch (error) {
        console.error('Medium yazılarını çekerken hata oluştu:', error);
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  const lastIndex = currentPage * recordsPerPage;
  const records = posts.slice(0, lastIndex); // Şu ana kadar yüklenmiş yazıları getir

  // IntersectionObserver callback fonksiyonu
  const observerCallback = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setCurrentPage((prevPage) => {
          if (prevPage * recordsPerPage >= posts.length) {
            setHasMore(false); // Eğer tüm yazılar yüklendiyse hasMore'u false yap
            return prevPage;
          } else {
            return prevPage + 1;
          }
        });
      }
    },
    [hasMore, posts.length, recordsPerPage]
  );

  // Son post'u gözlemlemek için IntersectionObserver'ı kur
  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(observerCallback);
    if (lastPostRef.current) observer.current.observe(lastPostRef.current);
  }, [loading, observerCallback]);

  return (
    <div className='md:container mx-auto'>
      <div className='my-12 grid grid-cols-1 gap-4'>
        {records?.length &&
          records.map((post, index) => {
            const animationProps = {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: index * 0.3 }
            };

            if (records.length === index + 1) {
              // Son post olduğunda ref ekle
              return (
                <motion.div ref={lastPostRef} key={post.guid} {...animationProps}>
                  <WritingCard
                    id={post.guid}
                    title={post.title}
                    content={post.content} // Kısa içerik
                    date={post.pubDate}
                    type='Medium'
                  />
                </motion.div>
              );
            } else {
              return (
                <motion.div key={post.guid} {...animationProps}>
                  <WritingCard
                    id={post.guid}
                    title={post.title}
                    content={post.content} // Kısa içerik
                    date={post.pubDate}
                    type='Medium'
                  />
                </motion.div>
              );
            }
          })
        }
      </div>
      {loading && <p>Yükleniyor...</p>}
      {!hasMore && !loading && <p>Daha fazla yazı yok.</p>}
    </div>
  );
}

export default WritingCards;
