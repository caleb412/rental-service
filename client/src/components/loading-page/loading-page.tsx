import { JSX } from 'react';
import './loading-page.css';

function LoadingPage(): JSX.Element {
  return (
    <div className="loading-page">
      <div className="loading-page__wrapper">
        <div className="spinner"></div>
        <p className="loading-page__text">Loading offers...</p>
      </div>
    </div>
  );
}

export { LoadingPage };