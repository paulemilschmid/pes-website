import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="mx-auto max-w-prose">
      <div className="mb-4">
        <Image
          src="/images/me1.jpeg" 
          alt="Me" 
          width={700}  
          height={400} 
          className="object-cover rounded"
        />
      </div>
      
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        paul emil schmid
      </h1>
      <p className="mb-4">
        {`Environmental engineer with strong interests for remote sensing, earth observation, ML, and natural hazards. Enthusiastic about geospatial data for real-world challenges. Deep appreciation for mountains, skiing, books, and cooking.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
