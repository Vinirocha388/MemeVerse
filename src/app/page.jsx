import CategoriesSection from "./components/CategoriesSection";
import Creator from "./components/Creator";
import FeaturedMemes from "./components/featuredMemes";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InteractionBar from "./components/interactionBar";
import Newsletter from "./components/Newsletter";
import Sidebar from "./components/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  // Array de dados dos memes para serem passados como props
  const memes = [
    {
      id: 1,
      title: "Programador às 3 da manhã",
      description:
        "Quando o código finalmente funciona depois de 5 horas debugando",
      image: "https://i.imgur.com/JbIMvq2.jpg",
      likes: 452,
      comments: 87,
      author: "DevMaster",
      authorAvatar: "https://i.pravatar.cc/150?img=11",
      category: "Programação",
    },
    {
      id: 2,
      title: "Vida de estudante",
      description: "Eu entrando na prova sem estudar",
      image: "https://i.imgur.com/DpEHvFs.jpg",
      likes: 231,
      comments: 56,
      author: "StudyGuru",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      category: "Escola",
    },
    {
      id: 3,
      title: "Reunião que poderia ser um e-mail",
      description: "Minha cara depois de 2 horas de reunião",
      image: "https://i.imgur.com/a1hJwXc.jpg",
      likes: 631,
      comments: 103,
      author: "CorporateJoker",
      authorAvatar: "https://i.pravatar.cc/150?img=13",
      category: "Trabalho",
    },
    {
      id: 4,
      title: "Quando a internet cai",
      description: "POV: Você no meio de uma partida importante",
      image: "https://i.imgur.com/uGdnlGj.jpg",
      likes: 842,
      comments: 152,
      author: "GamerLife",
      authorAvatar: "https://i.pravatar.cc/150?img=14",
      category: "Games",
    },
    {
      id: 5,
      title: "Segunda-feira chegando",
      description: "Ninguém está pronto para isso",
      image: "https://i.imgur.com/aNDyAyC.jpg",
      likes: 753,
      comments: 91,
      author: "WeekendWarrior",
      authorAvatar: "https://i.pravatar.cc/150?img=15",
      category: "Trabalho",
    },
    {
      id: 6,
      title: "Minha vida amorosa",
      description: "Expectativa vs Realidade",
      image: "https://i.imgur.com/gMy6q9Y.jpg",
      likes: 523,
      comments: 78,
      author: "RomanceExpert",
      authorAvatar: "https://i.pravatar.cc/150?img=16",
      category: "Relacionamentos",
    },
  ];

  // Dados para o meme do dia (hero section)
  const memeOfTheDay = {
    id: 7,
    title: "Meme do Dia: Quando seu código funciona de primeira",
    description:
      "Este momento raro que todos os desenvolvedores sonham em experimentar!",
    image: "https://i.imgur.com/vldGJnz.jpg",
    likes: 2452,
    comments: 387,
    author: "SuperCoder",
    authorAvatar: "https://i.pravatar.cc/150?img=20",
  };

  return (
    <div className={styles.container}>
     <Header/>
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <HeroSection 
            title={memeOfTheDay.title}
            description={memeOfTheDay.description}
            image={memeOfTheDay.image}
            likes={memeOfTheDay.likes}
            comments={memeOfTheDay.comments}
            author={memeOfTheDay.author}
            authorAvatar={memeOfTheDay.authorAvatar}
          />
          <CategoriesSection
            categories={[
              { id: 1, name: "Programação", icon: "💻", count: 478 },
              { id: 2, name: "Escola", icon: "📚", count: 325 },
              { id: 3, name: "Trabalho", icon: "💼", count: 642 },
              { id: 4, name: "Games", icon: "🎮", count: 513 },
              { id: 5, name: "Relacionamentos", icon: "❤️", count: 287 },
              { id: 6, name: "Esportes", icon: "⚽", count: 195 },
            ]}
          />
          {/* COMPONENTE: Feed */}
          <section className={styles.feedSection}>
            <div className={styles.feedHeader}>
              <h2 className={styles.sectionTitle}>Memes Populares</h2>
              <div className={styles.feedFilters}>
                <button className={`${styles.filterButton} ${styles.active}`}>
                  Recentes
                </button>
                <button className={styles.filterButton}>Mais curtidos</button>
                <button className={styles.filterButton}>Mais comentados</button>
              </div>
            </div>

            <div className={styles.feedGrid}>
              {/* Aqui mapeamos os memes do array para criar múltiplos cards */}
              {memes.map((meme) => (
                // COMPONENTE: MemeCard
                <div key={meme.id} className={styles.memeCard}>
                  <div className={styles.memeCardHeader}>
                    <div className={styles.memeAuthor}>
                      <img src={meme.authorAvatar} alt={meme.author} />
                      <span>{meme.author}</span>
                    </div>
                    <span className={styles.memeCategory}>{meme.category}</span>
                  </div>
                  <img
                    src={meme.image}
                    alt={meme.title}
                    className={styles.memeImage}
                  />
                  <div className={styles.memeContent}>
                    <h3 className={styles.memeTitle}>{meme.title}</h3>
                    <p className={styles.memeDescription}>{meme.description}</p>

                    {/* COMPONENTE: InteractionBar */}
                  <InteractionBar meme={meme} />
                    {/* FIM COMPONENTE: InteractionBar */}
                  </div>
                </div>
                // FIM COMPONENTE: MemeCard
              ))}
            </div>

            <button className={styles.loadMoreButton}>
              Carregar mais memes
            </button>
          </section>
          {/* FIM COMPONENTE: Feed */}
          <FeaturedMemes />
          <Creator />
          <Newsletter />
        </div>
        <Sidebar />
      </div>
      <Footer/>
    </div>
  );
}
