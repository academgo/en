import { VideoShort } from 'components/VideoShort';
import { RelatedPosts } from 'components/RelatedPosts';
import styles from './SidebarRenderer.module.scss';

// Функция для проверки, является ли блок видео
const isVideoBlock = (block) => {
  return block.name === 'acf/videoshort'; // Подставьте свое имя блока
};

// Функция для проверки, является ли блок блоком с похожими постами
const isRelatedPostsBlock = (block) => {
  return block.name === 'acf/relatedposts'; // Подставьте свое имя блока
};


const objToArrayPosts = (data) => {
  const arr = [];
  const postCount = data.posts;

  for (let i = 0; i < postCount; i++) {
    const postIndex = i.toString();
    const post = {
      category: data[`posts_${postIndex}_post_category`],
      label: data[`posts_${postIndex}_post_label`],
      destination: data[`posts_${postIndex}_post_destination`],
    };
    arr.push(post);
  }

  return arr;
};

// Компонент для рендеринга блока
const renderBlock = (block) => {
  // Проверяем тип блока
  switch (block.name) {
    case 'acf/videoshort': {
      // console.log("SidebarRenderer.js: VideoShort block")
      return (
        <VideoShort
          key={block.id}
          videoId={block.attributes.data.video_id}
          posterImage={block.attributes.data.poster_image}
          alt={block.attributes.data.poster_image_alt}
        />
      )
    }
    case 'acf/relatedposts': {
      const innerBlocks = objToArrayPosts(block.attributes.data, "posts");
      return (
        <RelatedPosts
          key={block.id}
          posts={innerBlocks}
        />
      )
    }
    // Добавьте обработку других типов блоков по необходимости
    default:
      return null;
  }
};

export const SidebarRenderer = ({ blocks }) => {
  return (
    <aside
      className={styles.aside}
    >
      {blocks.map((block, index) => (
        <div key={index}>
          {renderBlock(block)}
        </div>
      ))}
    </aside>
  );
};
