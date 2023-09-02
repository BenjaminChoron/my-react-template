import { useTranslation, Trans } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const count = 3;

  return (
    <section>
      <h1 className="pb-3 text-3xl">My React Template</h1>
      <p className="pb-2">{t('title', { name: 'John' })}</p>
      <p className="pb-2">{t('description.part1')}</p>
      <p className="pb-2">{t('description.part2')}</p>
      <Trans i18nKey="userMessagesUnread" count={count}>
        You have {{ count }} unread message.
      </Trans>
    </section>
  );
}
