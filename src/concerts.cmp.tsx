import React from 'react';

export class ConcertsCmp extends React.Component {
  render() {
    return <div className='concerts'>{this.getConcerts()}</div>;
  }

  getConcerts(): React.ReactNode {
    return ['1', '2', '3'].map((name, i) => <li key={i}>{name}</li>);
  }
}
