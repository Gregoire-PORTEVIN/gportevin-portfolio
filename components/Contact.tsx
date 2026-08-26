'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { profile } from '@/data/profile';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div
        className="absolute -bottom-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-10 blur-[120px]"
        style={{ backgroundColor: '#FF5C39' }}
      />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            {t('05 / Contact', '05 / Contact')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
          >
            {t("Discutons de votre", "Let's talk about your")}{' '}
            <span
              style={{ fontFamily: 'var(--font-serif)' }}
              className="italic text-accent"
            >
              {t('prochain projet.', 'next project.')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-base text-soft md:text-lg"
          >
            {t(
              "Que vous ayez une offre d'alternance, une question sur mon travail, ou simplement envie d'échanger — n'hésitez pas à me contacter.",
              "Whether you have an apprenticeship offer, a question about my work, or just want to chat — feel free to reach out."
            )}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href={`mailto:${profile.contact.email}`}
            className="link-underline mt-12 inline-flex items-center gap-3 text-xl font-medium md:text-3xl"
          >
            {profile.contact.email}
            <ArrowUpRight
              size={24}
              className="text-accent transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
            />
          </motion.a>
        </div>

        {/* Info grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-20 grid max-w-3xl gap-px overflow-hidden border border-line bg-line md:grid-cols-3"
        >
          <div className="bg-surface p-6 text-left">
            <Mail size={16} className="text-accent" />
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Email
            </div>
            <a
              href={`mailto:${profile.contact.email}`}
              className="mt-1 block text-sm text-bright hover:text-accent"
            >
              {profile.contact.email}
            </a>
          </div>
          <div className="bg-surface p-6 text-left">
            <Phone size={16} className="text-accent" />
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {t('Téléphone', 'Phone')}
            </div>
            <a
              href={`tel:${profile.contact.phone.replace(/\s/g, '')}`}
              className="mt-1 block text-sm text-bright hover:text-accent"
            >
              {profile.contact.phone}
            </a>
          </div>
          <div className="bg-surface p-6 text-left">
            <MapPin size={16} className="text-accent" />
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {t('Localisation', 'Location')}
            </div>
            <div className="mt-1 text-sm text-bright">{profile.location}</div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center gap-8"
        >
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-sm uppercase tracking-wider text-soft hover:text-bright"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-sm uppercase tracking-wider text-soft hover:text-bright"
          >
            GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
