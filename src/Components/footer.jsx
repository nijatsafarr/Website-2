import React from 'react';
import logoImg from '../assets/img2026.png'
import { useTranslation } from 'react-i18next';

export default function SimpleFooter() {
  const {t} = useTranslation()
  const sections = [
    {
      title: t("footer.solutions"),
      links: [{ name: t("footer.marketing"), href: '#' }, { name: t("footer.analytics"), href: '#' }, { name: t("footer.commerce"), href: '#' }]
    },
    {
      title: t("footer.support"),
      links: [{ name: t("footer.pricing"), href: '#' }, { name: t("footer.docs"), href: '#' }, { name: t("footer.guide"), href: '#' }]
    },
    {
      title: t("footer.company"),
      links: [{ name: t("footer.about"), href: '#' }, { name: t("footer.blog"), href: '#' }, { name: t("footer.career"), href: '#' }]
    },
    {
      title: t("footer.legal"),
      links: [{ name: t("footer.privacy"), href: '#' }, { name: t("footer.terms"), href: '#' }]
    }
  ];

  return (
    <footer className="bg-violet-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img src={logoImg} className='h-32'/>
            <p className="text-sm leading-6 text-gray-400 max-w-xs">
              {t("footer.description")}
            </p>
          </div>
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
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
