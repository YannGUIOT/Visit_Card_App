// DownloadCard.jsx
import React from 'react';
import html2canvas from 'html2canvas';

export class DownloadCard extends React.Component {
  downloadCard = () => {
    const cardElement = document.getElementById('card');

    if (cardElement) {
      html2canvas(cardElement).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'card.jpg';
        link.click();
      });
    }
  };

  render() {
    return (
      <div className="download">
        <button onClick={this.downloadCard}>DOWNLOAD</button>
      </div>
    );
  }
}