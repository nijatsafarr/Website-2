import React from 'react';
import logoImg from '../assets/img2026.png'

export default function SimpleFooter() {
  const sections = [
    {
      title: 'Həllər',
      links: [{ name: 'Marketinq', href: '#' }, { name: 'Analitika', href: '#' }, { name: 'Ticarət', href: '#' }]
    },
    {
      title: 'Dəstək',
      links: [{ name: 'Qiymətlər', href: '#' }, { name: 'Sənədlər', href: '#' }, { name: 'Bələdçi', href: '#' }]
    },
    {
      title: 'Şirkət',
      links: [{ name: 'Haqqımızda', href: '#' }, { name: 'Bloq', href: '#' }, { name: 'Karyera', href: '#' }]
    },
    {
      title: 'Hüquqi',
      links: [{ name: 'Məxfilik', href: '#' }, { name: 'Şərtlər', href: '#' }]
    }
  ];

  return (
    <footer className="bg-violet-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Sol Hissə: Loqo və Qısa Təsvir */}
          <div className="space-y-8">
            <img src={logoImg} className='h-32'/>
            <p className="text-sm leading-6 text-gray-400 max-w-xs">
              Müştərilərimiz üçün ən yaxşı rəqəmsal təcrübəni dizayn və inşa edirik.
            </p>
          </div>

          {/* Sağ Hissə: Link Sütunları */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-4">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">{section.title}</h3>
                <ul className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Alt Xətt və Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} Şirkətiniz. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
}
