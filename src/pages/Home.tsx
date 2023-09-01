import { useTranslation, Trans } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const count = 3;

  return (
    <>
      <h1>My React Template</h1>
      <p>{t('title', { name: 'John' })}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <Trans i18nKey="userMessagesUnread" count={count}>
        You have {{ count }} unread message.
      </Trans>
    </>
  );
}
