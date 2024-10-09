// styles.js
export const appBarStyles = {
  borderRadius: 2,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const headingStyles = {
  color: 'rgba(0,183,255, 1)',
};

export const imageStyles = {
  marginLeft: '15px',
};

export const mainContainerStyles = {
  display: 'flex',
  // Apply reverse column only on mobile (for screens less than 600px wide)
  '@media (max-width: 600px)': {
    flexDirection: 'column-reverse',
  },
};
