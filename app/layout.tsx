import Head from 'next/head';
import { useEffect } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/output.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Hotjar 코드를 이곳에 추가하세요
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 3519293, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }, []);

  return (
    <html lang="en">
     
      <body>
        <Header />
        <main className="text-white bg-black mt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
