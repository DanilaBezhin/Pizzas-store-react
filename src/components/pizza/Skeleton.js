import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="139" cy="141" r="130" />
    <rect x="0" y="288" rx="11" ry="11" width="280" height="30" />
    <rect x="1" y="330" rx="10" ry="10" width="280" height="80" />
    <rect x="2" y="419" rx="10" ry="10" width="118" height="45" />
    <rect x="130" y="419" rx="10" ry="10" width="150" height="45" />
  </ContentLoader>
);

export default Skeleton;
