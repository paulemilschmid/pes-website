import Image from 'next/image'
import Experience from 'app/components/experience'; 

export const metadata = {
  title: 'cv',
  description: 'read my cv.',
};

export default function Page() {
  return (
    <section>
      <div className="mb-10 flex justify-center">
        <Image
          src="/images/me2.jpg" 
          alt="Me" 
          width={300}  
          height={100} 
          className="object-cover rounded"
        />
      </div>
      <Experience/>
    </section>
  );
}
