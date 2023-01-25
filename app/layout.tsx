import Navbar from '@/components/Navbar';
import '@/assets/css/globals.css';
import Scrollbar from '@/components/Scrollbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head />
      <body className='font-pacio'>
        <Navbar />
        <Scrollbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
