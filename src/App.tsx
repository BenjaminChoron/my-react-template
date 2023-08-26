import { useTranslation, Trans } from 'react-i18next';
import './i18n/config.ts';
import './App.css';

function App() {
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

export default App;
