import Image from "next/image"

export default function RecentPostsSection() {
  const posts = [
    { title: "Delicious Recipe", date: "November 25, 2024", image: "/unsplash_50KffXbjIOg.png" },
    { title: "How to Cook", date: "December 28, 2023", image: "/unsplash_CLMpC9UhyTo.png" },
    { title: "Best Kitchen Tips", date: "March 28, 2022", image: "/unsplash_CRoAeTh5S_I.png" },
  ];
  return (
    <div className="recent-posts w-[273px]">
      <h3 className="text-xl font-bold mb-8">Recent Post</h3>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center mb-4">
          <Image
            src={post.image}
            alt="post"
            width={64}
            height={64}
            className="w-16 h-16 rounded mr-4"
          />
          <div>
            <h4 className="font-semibold mb-1">{post.title}</h4>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
  }
  
  