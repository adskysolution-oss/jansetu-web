
import './jansetu.css'
import LayoutWrapper from '../components/LayoutWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="inter_a594d4de-module__Mkkauq__variable antialiased font-sans flex flex-col min-h-screen">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  )
}
