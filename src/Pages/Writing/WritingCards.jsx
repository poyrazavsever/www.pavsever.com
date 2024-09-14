import React, { useState, useEffect, useRef } from 'react';
import WritingCard from '../../Components/WritingCard';

function WritingCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

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
  useEffect(() => {
    if (loading) return;
    if (!hasMore) return; // Yüklenebilecek daha fazla yazı yoksa

    if (observer.current) observer.current.disconnect();

    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        // Son yazı görüldüğünde bir sonraki sayfayı yükle
        setCurrentPage((prevPage) => {
          if (prevPage * recordsPerPage >= posts.length) {
            setHasMore(false); // Eğer tüm yazılar yüklendiyse hasMore'u false yap
            return prevPage;
          } else {
            return prevPage + 1;
          }
        });
      }
    };

    observer.current = new IntersectionObserver(callback);
    if (lastPostRef.current) observer.current.observe(lastPostRef.current);
  }, [loading, hasMore, posts]);

  // Son öğeyi takip et
  const lastPostRef = useRef();

  return (
    <>
      <div className='md:container mx-auto'>
        <div className='my-12 grid grid-cols-1 gap-4'>
          {records?.length &&
            records.map((post, index) => {
              if (records.length === index + 1) {
                // Son post olduğunda ref ekle
                return (
                  <div ref={lastPostRef} key={post.guid}>
                    <WritingCard
                      id={post.guid}
                      title={post.title}
                      content={post.content} // Kısa içerik
                      date={post.pubDate}
                      type='Medium'
                    />
                  </div>
                );
              } else {
                return (
                  <WritingCard
                    key={post.guid}
                    id={post.guid}
                    title={post.title}
                    content={post.content} // Kısa içerik
                    date={post.pubDate}
                    type='Medium'
                  />
                );
              }
            })
          }
        </div>
        {loading && <p>Yükleniyor...</p>}
        {!hasMore && <p>Daha fazla yazı yok.</p>}
      </div>
    </>
  );
}

export default WritingCards;
