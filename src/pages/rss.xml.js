import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const pathname = import.meta.env.BASE_URL;

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site + pathname,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${pathname}/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
