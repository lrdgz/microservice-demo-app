import Navbar from '@/features/footer';
import Footer from '@/features/navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
