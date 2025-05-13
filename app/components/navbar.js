import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">CT Digital Solutions</h1>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-white">Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a className="text-white">Servicios</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white">Nosotros</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white">Contacto</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
