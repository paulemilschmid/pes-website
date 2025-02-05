import Experience from 'app/components/experience'; 

export const metadata = {
  title: 'cv',
  description: 'read my cv.',
};

export default function Page() {
  return (
    <section>
      <Experience/>
    </section>
  );
}
